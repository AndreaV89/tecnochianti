// Converte le foto originali dei progetti in WebP ottimizzati per il sito.
//
// Uso:
//   node scripts/optimize-photos.mjs "<cartella Materiali>"
//
// Legge le sottocartelle di <cartella Materiali> (sola lettura, non modifica nulla)
// e scrive in public/progetti/<slug>/01.webp, 02.webp, ...
//
// Nota: a ogni esecuzione la cartella di destinazione del progetto viene svuotata
// e rigenerata. Le foto sono numerate in ordine di nome file, quindi se arrivano
// nuove foto la numerazione può cambiare: ricontrollare copertine e hero in
// src/data/projects.ts dopo averlo rilanciato.

import { readdir, stat, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Cartella sorgente → slug del progetto
const FOLDER_TO_SLUG = {
  Beretuzzo: "beretuzzo",
  "Palazzo al Bosco": "palazzo-al-bosco",
  "Complesso immobiliare Gaiole": "complesso-gaiole",
  "Le Prata": "cantina-le-prata",
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp", ".heic"]);
const MAX_SIZE = 2400;
const QUALITY = 80;
const OUTPUT_ROOT = path.resolve("public", "progetti");

const sourceRoot = process.argv[2];
if (!sourceRoot) {
  console.error('Uso: node scripts/optimize-photos.mjs "<cartella Materiali>"');
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
    .sort(naturalSort);

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  let sizeBefore = 0;
  let sizeAfter = 0;

  for (const [index, name] of files.entries()) {
    const inputPath = path.join(sourceDir, name);
    const outputName = `${String(index + 1).padStart(2, "0")}.webp`;
    const outputPath = path.join(outputDir, outputName);

    // rotate() senza argomenti applica l'orientamento EXIF.
    // sharp non copia i metadati (EXIF, GPS, ICC...) se non si chiama withMetadata().
    const info = await sharp(inputPath)
      .rotate()
      .resize({ width: MAX_SIZE, height: MAX_SIZE, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    sizeBefore += (await stat(inputPath)).size;
    sizeAfter += info.size;
    console.log(`  ${outputName}  ←  ${name}  (${info.width}×${info.height})`);
  }

  return { slug, count: files.length, sizeBefore, sizeAfter };
}

const folders = (await readdir(sourceRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

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

console.log("\nRiepilogo");
console.table(
  results.map((r) => ({
    progetto: r.slug,
    foto: r.count,
    prima: formatMB(r.sizeBefore),
    dopo: formatMB(r.sizeAfter),
  })),
);
