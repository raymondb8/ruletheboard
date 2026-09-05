// Resizes/compresses real org photos from raw-media/ into src/assets/images/.
// Source originals come from the org's Google Drive export (raw-media/ is gitignored).
//
// Output is WebP: at matched visual quality it runs roughly 30-40% smaller than
// the JPEGs this used to emit, and image weight is the main lever on Largest
// Contentful Paint, which Google uses as a ranking signal. Every browser has
// supported WebP since 2020 (Safari 14), so there's no JPEG fallback to carry.
//
// Alongside each image it writes src/assets/images/dimensions.json, so the JSX
// can set explicit width/height on every <img> without hardcoding numbers that
// silently go stale when a photo is swapped. Those attributes let the browser
// reserve the right box before the bytes arrive, which is what keeps Cumulative
// Layout Shift at zero — the other Core Web Vital that affects ranking.
import sharp from "sharp";
import fs from "node:fs/promises";
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
  { src: "CYS 2026/OMS Branded Students Chess Candid1 2026.jpg", out: "home-hero.webp" },
  { src: "CYS 2026/OMS Students Chess Candid1 2026.jpg", out: "home-scholarship-preview.webp" },
  { src: "CYS 2026/OMS Students Chess Candid10 2026.jpg", out: "home-cys-preview.webp" },
  { src: "CYS 2026/OMS Branded Students Chess Candid3 2026.jpg", out: "about-community.webp" },
  { src: "IMG_5340.JPG", out: "about-founders.webp" },
  { src: "IMG_2341.JPG", out: "programs-emory-grand-prix.webp" },
  { src: "IMG_2350.JPG", out: "programs-tournament-2.webp" },
  { src: "IMG_9592.JPG", out: "programs-tournament-3.webp" },
  { src: "IMG_2358.JPG", out: "programs-tournament-4.webp" },
  { src: "CYS 2026/OMS Students Chess Candid9 2026.jpg", out: "programs-academy-interior.webp" },
  { src: "impact-report-cover.png", out: "impact-report-cover.webp" },
  ...Array.from({ length: 7 }, (_, i) => ({
    src: `impact-report-page-${i + 1}.png`,
    out: `impact-report-page-${i + 1}.webp`,
    quality: 88, // text-heavy scans show compression artifacts sooner than photos
  })),
];

const results = await Promise.all(
  jobs.map(async ({ src, out, quality = 80 }) => {
    const input = path.join(rawDir, src);
    const output = path.join(outDir, out);
    const { width, height, size } = await sharp(input)
      .rotate() // respect EXIF orientation
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .webp({ quality })
      .toFile(output);
    console.log(`${src} -> ${path.relative(root, output)} (${width}x${height}, ${Math.round(size / 1024)}kB)`);
    return [out, { width, height }];
  })
);

await fs.writeFile(
  path.join(outDir, "dimensions.json"),
  JSON.stringify(Object.fromEntries(results.sort(([a], [b]) => a.localeCompare(b))), null, 2) + "\n"
);
console.log(`\nwrote dimensions.json for ${results.length} images`);
