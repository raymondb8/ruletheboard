/*
 * Builds public/og-image.jpg — the 1200x630 card that Facebook, LinkedIn,
 * Slack, iMessage, WhatsApp and X render when someone shares any URL on the
 * site. A bare photo crop unfurls as an anonymous stock-looking image; pairing
 * the logo and a one-line description with the photo means the link reads as
 * Rule the Board at a glance, which is most of what drives a click.
 *
 * Output stays JPEG on purpose. The site's own images are WebP, but several
 * link unfurlers still won't decode a WebP og:image, and this file's only job
 * is to render everywhere.
 *
 * Run with: node scripts/og-image.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const W = 1200;
const H = 630;
const PHOTO_W = 460;
const PANEL_W = W - PHOTO_W;

const NAVY = "#0E387D";
const CORAL = "#F05354";
const TINT = "#E8EEF8";

// Brand faces (Bricolage Grotesque / Plus Jakarta Sans) are webfonts and are
// not installed system-wide, so the SVG text below falls back to whatever
// grotesque the build machine has. That only affects this one static card.
const FONT = "'Plus Jakarta Sans', 'Segoe UI', Helvetica, Arial, sans-serif";

const photo = await sharp(path.join(root, "src/assets/images/home-hero.webp"))
  .resize({ width: PHOTO_W, height: H, fit: "cover", position: "attention" })
  .toBuffer();

const logo = await sharp(path.join(root, "src/assets/rtb-full.png"))
  .resize({ width: 420, fit: "inside" })
  .toBuffer();
const { height: logoH } = await sharp(logo).metadata();

const text = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .lead { font-family: ${FONT}; font-size: 34px; font-weight: 600; fill: ${NAVY}; }
    .url  { font-family: ${FONT}; font-size: 24px; font-weight: 700; fill: ${CORAL}; letter-spacing: 1px; }
  </style>
  <text class="lead" x="80" y="370">Chess coaching, tournaments, and</text>
  <text class="lead" x="80" y="416">equipment for students in grades 3-8.</text>
  <text class="url"  x="80" y="524">RULETHEBOARD.ORG</text>
</svg>`);

await sharp({ create: { width: W, height: H, channels: 3, background: "#FFFFFF" } })
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
  .toFile(path.join(root, "public/og-image.jpg"));

console.log(`public/og-image.jpg written (${W}x${H})`);
