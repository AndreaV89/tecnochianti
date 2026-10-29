// Converte un video originale in MP4 (H.264) leggero per il sito, più un'immagine
// "poster" WebP mostrata mentre il video carica.
//
// Uso:
//   node scripts/optimize-video.mjs "<file video originale>" <nome> [inizio] [durata]
//
// Esempio:
//   node scripts/optimize-video.mjs ".../Materiali/DJI_0552.mov" studio
//   → public/video/studio.mp4 e public/video/studio-poster.webp
//
// Inizio e durata (in secondi) sono facoltativi e servono per tagliare il video.
// Il file originale non viene mai modificato. L'audio viene rimosso.

import { execFile } from "node:child_process";
import { mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import ffmpegPath from "ffmpeg-static";
import sharp from "sharp";

const run = promisify(execFile);

const MAX_WIDTH = 1920;
// Qualità H.264: più alto = file più leggero e qualità più bassa (23 è il default di ffmpeg)
const CRF = 26;
const OUTPUT_DIR = path.resolve("public", "video");

const [source, name, start, duration] = process.argv.slice(2);
if (!source || !name) {
  console.error('Uso: node scripts/optimize-video.mjs "<file video>" <nome> [inizio] [durata]');
  process.exit(1);
}

function formatMB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

await mkdir(OUTPUT_DIR, { recursive: true });

const videoPath = path.join(OUTPUT_DIR, `${name}.mp4`);
const posterPath = path.join(OUTPUT_DIR, `${name}-poster.webp`);
const framePath = path.join(OUTPUT_DIR, `${name}-frame.png`);

// -ss e -t prima di -i: il taglio avviene in lettura
const trimArgs = [...(start ? ["-ss", start] : []), ...(duration ? ["-t", duration] : [])];

console.log("Conversione video...");
await run(ffmpegPath, [
  "-y",
  ...trimArgs,
  "-i", source,
  "-an",
  // -2: altezza proporzionale e pari (richiesto da H.264); yuv420p per compatibilità con tutti i browser
  "-vf", `scale='min(${MAX_WIDTH},iw)':-2,format=yuv420p`,
  "-c:v", "libx264",
  "-preset", "slow",
  "-crf", String(CRF),
  "-profile:v", "high",
  // Metadati all'inizio del file: il video parte prima di essere scaricato tutto
  "-movflags", "+faststart",
  "-map_metadata", "-1",
  videoPath,
]);

// Poster: primo fotogramma del video già convertito
await run(ffmpegPath, ["-y", "-i", videoPath, "-frames:v", "1", framePath]);
await sharp(framePath).webp({ quality: 80 }).toFile(posterPath);
await rm(framePath);

const before = (await stat(source)).size;
const after = (await stat(videoPath)).size;
console.log(`Video:  ${path.relative(process.cwd(), videoPath)}  ${formatMB(before)} → ${formatMB(after)}`);
console.log(`Poster: ${path.relative(process.cwd(), posterPath)}`);
