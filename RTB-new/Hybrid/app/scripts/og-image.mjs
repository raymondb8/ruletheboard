/*
 * Builds the 1200x630 share cards in public/ — what Facebook, LinkedIn, Slack,
 * iMessage, WhatsApp and X render when someone shares a URL on the site. A bare
 * photo crop unfurls as an anonymous stock-looking image; pairing the logo and
 * a one-line description with the photo means the link reads as Rule the Board
 * at a glance, which is most of what drives a click.
 *
 * One card per page, each with its own photo and lead line, so a shared link
 * to the tournament guide doesn't unfurl with the homepage's pitch. The
 * homepage card keeps the name og-image.jpg (it is the site-wide default in
 * src/seo/pages.json and may already be cached by unfurlers); the others are
 * og-<slug>.jpg and are referenced from each page's `image` field.
 *
 * Output stays JPEG on purpose. The site's own images are WebP, but several
 * link unfurlers still won't decode a WebP og:image, and this file's only job
 * is to render everywhere.
 *
 * Run with: node scripts/og-image.mjs
 */
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const images = path.join(root, "src/assets/images");

const W = 1200;
const H = 630;
const PHOTO_W = 460;
const PANEL_W = W - PHOTO_W;

const NAVY = "#0E387D";
const CORAL = "#F05354";
const TINT = "#E8EEF8";

// Brand faces (Bricolage Grotesque / Plus Jakarta Sans) are webfonts and are
// not installed system-wide, so the SVG text below falls back to whatever
// grotesque the build machine has. That only affects these static cards.
const FONT = "'Plus Jakarta Sans', 'Segoe UI', Helvetica, Arial, sans-serif";

// Two lines of at most ~38 characters each: that is what fits the panel at
// the 34px size below. Keep them in the founders' voice, same as the pages.
const cards = [
  { file: "og-image.jpg", photo: "home-hero-1600.webp", lines: ["Chess coaching, tournaments, and", "equipment for students in grades 3-8."] },
  { file: "og-about.jpg", photo: "about-founders-1600.webp", lines: ["Meet the students who started a", "chess scholarship in Atlanta."] },
  { file: "og-programs.jpg", photo: "programs-academy-interior-1600.webp", lines: ["Two chess programs for grades 3-8:", "a summer class and a full scholarship."] },
  { file: "og-scholars.jpg", photo: "home-scholarship-preview-1600.webp", lines: ["Apply for a year of chess coaching,", "tournaments, and a set of your own."] },
  { file: "og-trainers.jpg", photo: "home-cys-preview-1600.webp", lines: ["Coach a scholar through a season.", "No title needed, just an hour a week."] },
  { file: "og-get-involved.jpg", photo: "about-community-1600.webp", lines: ["Donate or sponsor a season of chess", "for students in Atlanta."] },
  { file: "og-tournament-guide.jpg", photo: "programs-emory-grand-prix-1600.webp", lines: ["Your first chess tournament:", "pairings, clocks, etiquette, notation."] },
];

const logo = await sharp(path.join(root, "src/assets/rtb-full.webp"))
  .resize({ width: 420, fit: "inside" })
  .toBuffer();
const { height: logoH } = await sharp(logo).metadata();

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

for (const card of cards) {
  const photo = await sharp(path.join(images, card.photo))
    .resize({ width: PHOTO_W, height: H, fit: "cover", position: "attention" })
    .toBuffer();

  const text = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .lead { font-family: ${FONT}; font-size: 34px; font-weight: 600; fill: ${NAVY}; }
    .url  { font-family: ${FONT}; font-size: 24px; font-weight: 700; fill: ${CORAL}; letter-spacing: 1px; }
  </style>
  <text class="lead" x="80" y="370">${escape(card.lines[0])}</text>
  <text class="lead" x="80" y="416">${escape(card.lines[1])}</text>
  <text class="url"  x="80" y="524">RULETHEBOARD.ORG</text>
</svg>`);

  const out = path.join(root, "public", card.file);
  const { size } = await sharp({ create: { width: W, height: H, channels: 3, background: "#FFFFFF" } })
    .composite([
      // Soft brand tint behind the copy panel so the card isn't a flat white box.
      { input: { create: { width: PANEL_W, height: H, channels: 3, background: TINT } }, top: 0, left: 0 },
      { input: { create: { width: PANEL_W, height: 470, channels: 3, background: "#FFFFFF" } }, top: 0, left: 0 },
      { input: photo, top: 0, left: PANEL_W },
      // Coral seam between panel and photo — the same accent the site uses for CTAs.
      { input: { create: { width: 10, height: H, channels: 3, background: CORAL } }, top: 0, left: PANEL_W - 10 },
      { input: logo, top: Math.round(200 - logoH / 2), left: 80 },
      { input: text, top: 0, left: 0 },
    ])
    .jpeg({ quality: 88, chromaSubsampling: "4:4:4" }) // 4:4:4 keeps the coral edges crisp
    .toFile(out);
  console.log(`public/${card.file} written (${W}x${H}, ${Math.round(size / 1024)}kB)`);
}

// Remove cards for pages that no longer exist in the list above.
const keep = new Set(cards.map((c) => c.file));
for (const f of await fs.readdir(path.join(root, "public"))) {
  if (/^og-.*\.jpg$/.test(f) && !keep.has(f)) await fs.unlink(path.join(root, "public", f));
}
