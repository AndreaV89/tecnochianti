// Converte le foto originali dei progetti in WebP ottimizzati per il sito.
//
// Uso:
//   node scripts/optimize-photos.mjs "<cartella Materiali>" [cartella ...]
//
// Se si indicano una o più cartelle (es. "Beretuzzo"), elabora solo quelle;
// altrimenti tutte quelle presenti in FOLDER_TO_SLUG.
//
// Legge le sottocartelle di <cartella Materiali> (sola lettura, non modifica nulla)
// e scrive in public/progetti/<slug>/01.webp, 02.webp, ...
// Aggiorna anche src/data/photo-sizes.json (larghezza e altezza di ogni foto),
// usato dalla galleria della scheda progetto per l'impaginazione.
//
// Nota: a ogni esecuzione la cartella di destinazione del progetto viene svuotata
// e rigenerata. Le foto sono numerate in ordine di nome file, quindi se arrivano
// nuove foto la numerazione può cambiare: ricontrollare copertine e hero in
// src/data/projects.ts dopo averlo rilanciato.

import { readdir, stat, mkdir, rm, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Cartella sorgente → slug del progetto
const FOLDER_TO_SLUG = {
  Beretuzzo: "beretuzzo",
  "Palazzo al Bosco": "palazzo-al-bosco",
  "Complesso immobiliare Gaiole": "complesso-gaiole",
  "Cantina Le Prata": "cantina-le-prata",
  "Appartamento Radda in Chianti": "appartamento-radda",
  "Complesso immobiliare Radda": "complesso-radda",
  // Immagini usate solo nella hero della Home
  Home: "home",
};

// Foto da non pubblicare, per nome del file originale
const EXCLUDE = {
  // Interno del bagno, tolto su richiesta del cliente
  beretuzzo: new Set(["IMG_20240712_120055.jpg"]),
};

// Ritagli manuali, per nome del file originale.
// I valori sono la frazione da togliere da ciascun lato (0.1 = 10%).
const CROPS = {
  "complesso-gaiole": {
    // Operaio sul bordo destro
    "IMG_20260423_100721.jpg": { right: 0.075 },
  },
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp", ".heic"]);
const MAX_SIZE = 2400;
const QUALITY = 80;
const OUTPUT_ROOT = path.resolve("public", "progetti");
const SIZES_FILE = path.resolve("src", "data", "photo-sizes.json");

const sourceRoot = process.argv[2];
const onlyFolders = process.argv.slice(3);
if (!sourceRoot) {
  console.error('Uso: node scripts/optimize-photos.mjs "<cartella Materiali>" [cartella ...]');
  process.exit(1);
}

function formatMB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

// Ordine "naturale": "(3).jpg" prima di "(11).jpg"
const naturalSort = (a, b) => a.localeCompare(b, "it", { numeric: true, sensitivity: "base" });

async function processProject(folder, slug) {
  const sourceDir = path.join(sourceRoot, folder);
  const outputDir = path.join(OUTPUT_ROOT, slug);

  const files = (await readdir(sourceDir))
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .filter((name) => !EXCLUDE[slug]?.has(name))
    .sort(naturalSort);

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  let sizeBefore = 0;
  let sizeAfter = 0;
  const dimensions = {};

  for (const [index, name] of files.entries()) {
    const inputPath = path.join(sourceDir, name);
    const outputName = `${String(index + 1).padStart(2, "0")}.webp`;
    const outputPath = path.join(outputDir, outputName);

    // rotate() senza argomenti applica l'orientamento EXIF.
    // sharp non copia i metadati (EXIF, GPS, ICC...) se non si chiama withMetadata().
    let image = sharp(inputPath).rotate();

    const crop = CROPS[slug]?.[name];
    if (crop) {
      // extract() dopo rotate() lavora sull'immagine già raddrizzata
      const { width, height } = (await sharp(inputPath).metadata()).autoOrient;
      const left = Math.round(width * (crop.left ?? 0));
      const top = Math.round(height * (crop.top ?? 0));
      image = image.extract({
        left,
        top,
        width: Math.round(width * (1 - (crop.right ?? 0))) - left,
        height: Math.round(height * (1 - (crop.bottom ?? 0))) - top,
      });
    }

    const info = await image
      .resize({ width: MAX_SIZE, height: MAX_SIZE, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    sizeBefore += (await stat(inputPath)).size;
    sizeAfter += info.size;
    dimensions[outputName] = [info.width, info.height];
    console.log(`  ${outputName}  ←  ${name}  (${info.width}×${info.height})`);
  }

  return { slug, count: files.length, sizeBefore, sizeAfter, dimensions };
}

const folders = (await readdir(sourceRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => onlyFolders.length === 0 || onlyFolders.includes(name));

const results = [];
for (const folder of folders) {
  const slug = FOLDER_TO_SLUG[folder];
  if (!slug) {
    console.warn(`⚠ Cartella "${folder}" non abbinata a nessuno slug: saltata`);
    continue;
  }
  console.log(`\n${folder} → ${slug}`);
  results.push(await processProject(folder, slug));
}

// Unisce alle dimensioni già salvate, così i progetti non rielaborati restano
let photoSizes = {};
try {
  photoSizes = JSON.parse(await readFile(SIZES_FILE, "utf8"));
} catch {
  // File non ancora creato
}
for (const r of results) photoSizes[r.slug] = r.dimensions;
await writeFile(SIZES_FILE, JSON.stringify(photoSizes, null, 2) + "\n");

console.log("\nRiepilogo");
console.table(
  results.map((r) => ({
    progetto: r.slug,
    foto: r.count,
    prima: formatMB(r.sizeBefore),
    dopo: formatMB(r.sizeAfter),
  })),
);
