// One-off/repeatable helper: pull full-resolution event photos from the gitignored
// raw-media/ folder and produce web-sized copies in src/assets/images/, matching the
// convention documented in CLAUDE.md (max ~1600px wide, JPEG ~82% quality).
//
// Usage: node scripts/resize-images.mjs
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url)) + '/..';

const jobs = [
  ['raw-media/C. Teacher Media/Trio Pictures/IMG_5340.JPG', 'src/assets/images/photo-about-team.jpg'],
  ['raw-media/C. Teacher Media/CYS 2026/IMG_2436.JPG', 'src/assets/images/photo-checkmate-classroom.jpg'],
  ['raw-media/C. Teacher Media/2026 Grand Prix Tournament/IMG_2341.JPG', 'src/assets/images/photo-tournament-wide.jpg'],
  ['raw-media/C. Teacher Media/2026 Grand Prix Tournament/IMG_2354.JPG', 'src/assets/images/photo-community-youth.jpg'],
];

for (const [src, dest] of jobs) {
  const srcPath = path.join(rootDir, src);
  const destPath = path.join(rootDir, dest);
  await sharp(srcPath)
    .rotate() // apply EXIF orientation before resizing
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 82 })
    .toFile(destPath);
  console.log(`${src} -> ${dest}`);
}
