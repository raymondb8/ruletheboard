// Resizes/compresses real org photos from raw-media/ into src/assets/images/.
// Source originals come from the org's Google Drive export (raw-media/ is gitignored).
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const rawDir = path.join(root, "raw-media");
const outDir = path.join(root, "src", "assets", "images");

// The large feature/hero photos all pull from "CYS 2026/" — the only
// professionally shot set in the Drive export. Tournament- and people-specific
// shots (Emory Grand Prix, founders) keep their original phone photos.
const jobs = [
  { src: "CYS 2026/OMS Branded Students Chess Candid1 2026.jpg", out: "home-hero.jpg" },
  { src: "CYS 2026/OMS Students Chess Candid1 2026.jpg", out: "home-scholarship-preview.jpg" },
  { src: "CYS 2026/OMS Students Chess Candid10 2026.jpg", out: "home-cys-preview.jpg" },
  { src: "CYS 2026/OMS Branded Students Chess Candid3 2026.jpg", out: "about-community.jpg" },
  { src: "IMG_5340.JPG", out: "about-founders.jpg" },
  { src: "IMG_2341.JPG", out: "programs-emory-grand-prix.jpg" },
  { src: "IMG_2350.JPG", out: "programs-tournament-2.jpg" },
  { src: "IMG_9592.JPG", out: "programs-tournament-3.jpg" },
  { src: "IMG_2358.JPG", out: "programs-tournament-4.jpg" },
  { src: "CYS 2026/OMS Students Chess Candid9 2026.jpg", out: "programs-academy-interior.jpg" },
  { src: "impact-report-cover.png", out: "impact-report-cover.jpg" },
  ...Array.from({ length: 7 }, (_, i) => ({
    src: `impact-report-page-${i + 1}.png`,
    out: `impact-report-page-${i + 1}.jpg`,
    quality: 90, // text-heavy scans need less JPEG artifacting than photos
  })),
];

await Promise.all(
  jobs.map(async ({ src, out, quality = 82 }) => {
    const input = path.join(rawDir, src);
    const output = path.join(outDir, out);
    await sharp(input)
      .rotate() // respect EXIF orientation
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality })
      .toFile(output);
    console.log(`${src} -> ${path.relative(root, output)}`);
  })
);
