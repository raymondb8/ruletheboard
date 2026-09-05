/*
 * Post-build step: turns the single-page bundle into one real HTML file per
 * route, plus a sitemap.
 *
 * Why this exists: <Seo /> sets the title and Open Graph tags from JavaScript,
 * which only helps visitors whose browser runs the bundle. Facebook, LinkedIn,
 * Slack, iMessage, WhatsApp and most AI/search crawlers fetch the raw HTML and
 * never execute JS — so without this step every URL on the site unfurls with
 * the homepage's title and description, and Bing indexes six identical pages.
 *
 * Writing dist/about/index.html (etc.) fixes that: the host serves the real
 * file for /about before any SPA rewrite applies, so crawlers get correct tags
 * and a text summary of the page, while browsers still boot the same SPA.
 *
 * Copy comes from src/seo/pages.json — the same file <Seo /> reads, so the
 * static and client-side versions can't drift apart.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

const { site, pages } = JSON.parse(await fs.readFile(path.join(root, 'src/seo/pages.json'), 'utf8'));

const escape = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const absolute = (p) => (p.startsWith('http') ? p : `${site.url}${p}`);
const titleFor = (page) => (page.path === '/' ? `${site.name} | ${page.title}` : `${page.title} | ${site.name}`);

/*
 * Guard against pages.json falling behind App.tsx. A route that exists in the
 * router but not here would ship with the 404 page's metadata and get left out
 * of the sitemap — silently, months before anyone notices in Search Console.
 */
async function assertRoutesMatch() {
  const appSource = await fs.readFile(path.join(root, 'src/App.tsx'), 'utf8');
  const routed = [...appSource.matchAll(/<Route\s+path="([^"*]+)"/g)].map(([, p]) => `/${p}`);
  const declared = new Set(pages.map((p) => p.path));
  const missing = routed.filter((p) => !declared.has(p));

  if (missing.length > 0) {
    throw new Error(
      `Routes in App.tsx with no entry in src/seo/pages.json: ${missing.join(', ')}\n` +
        `Add each one to pages.json (title + description + breadcrumb) so it gets prerendered and indexed.`,
    );
  }
}

function seoBlock(page, extra = '') {
  const title = titleFor(page);
  const url = absolute(page.path);
  const image = absolute(page.image ?? site.defaultImage);
  const home = pages.find((p) => p.path === '/');
  const trail = page.path === '/' ? [home] : [home, page];

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.breadcrumb,
      item: absolute(entry.path),
    })),
  };

  // Re-emitting the markers keeps the step idempotent: running it twice against
  // the same dist (or after a partial build) replaces the block again instead of
  // failing because the first run consumed them.
  return `<!-- SEO:START -->
    <title>${escape(title)}</title>
    <meta name="description" content="${escape(page.description)}" />
    <meta name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow'}" />
    <link rel="canonical" href="${escape(url)}" />
    <meta property="og:site_name" content="${escape(site.name)}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${escape(site.locale)}" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${escape(url)}" />
    <meta property="og:image" content="${escape(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(title)}" />
    <meta name="twitter:description" content="${escape(page.description)}" />
    <meta name="twitter:image" content="${escape(image)}" />
    <script type="application/ld+json" data-seo="breadcrumb">${JSON.stringify(breadcrumbs)}</script>${extra}
    <!-- SEO:END -->`;
}

/*
 * A plain-HTML summary of the page, placed inside #root. createRoot().render()
 * discards whatever is already in the container (this is not hydration), so
 * the moment the bundle boots React replaces all of it — but a crawler that
 * never runs JS still comes away with a heading, a description, and a crawlable
 * path to every other page instead of an empty <div>.
 */
function fallbackMarkup(page) {
  const links = pages
    .filter((p) => !p.noindex && p.path !== page.path)
    .map((p) => `<li><a href="${p.path}">${escape(p.breadcrumb)}</a></li>`)
    .join('');

  return `<!--prerender--><div>
      <h1>${escape(page.title)}</h1>
      <p>${escape(page.description)}</p>
      <nav aria-label="Site"><ul>${links}</ul></nav>
      <p>Loading the full ${escape(site.name)} experience&hellip;</p>
    </div><!--/prerender-->`;
}

const SEO_REGION = /<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/;
const ROOT_EMPTY = '<div id="root"></div>';
const ROOT_FILLED = /<div id="root"><!--prerender-->[\s\S]*?<!--\/prerender--><\/div>/;

const raw = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

if (!SEO_REGION.test(raw)) {
  throw new Error('dist/index.html has no <!-- SEO:START --> / <!-- SEO:END --> markers — check index.html.');
}

await assertRoutesMatch();

/*
 * Rewind dist/index.html to an un-prerendered shell before using it as the
 * template. A normal `vite build` always emits a clean one, but running this
 * script twice without rebuilding would otherwise stamp the homepage's
 * fallback content onto every other route.
 */
const shell = raw.replace(ROOT_FILLED, ROOT_EMPTY);

/*
 * The hero image is the homepage's Largest Contentful Paint element, and it's
 * only discoverable after the JS bundle parses and mounts. Preloading it moves
 * that request into the initial HTML, which is worth roughly a second of LCP on
 * a cold mobile connection — and LCP is a ranking signal.
 */
const assets = await fs.readdir(path.join(distDir, 'assets'));
const heroAsset = assets.find((f) => /^home-hero-.*\.(webp|jpg)$/.test(f));
const heroPreload = heroAsset
  ? `\n    <link rel="preload" as="image" href="/assets/${heroAsset}" fetchpriority="high" />`
  : '';

const written = [];

for (const page of pages) {
  const html = shell
    .replace(SEO_REGION, seoBlock(page, page.path === '/' ? heroPreload : ''))
    .replace('<div id="root"></div>', `<div id="root">${fallbackMarkup(page)}</div>`);

  // The 404 entry becomes dist/404.html rather than a route directory: with no
  // catch-all rewrite in front of it, the host serves that file with a real 404
  // status for any unmatched URL. Rewriting unknown URLs to index.html instead
  // would return 200 for them, which Search Console reports as a "soft 404".
  const outFile =
    page.path === '/404'
      ? path.join(distDir, '404.html')
      : path.join(distDir, page.path.slice(1), 'index.html');

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, html);
  written.push(path.relative(distDir, outFile).replace(/\\/g, '/'));
}

// Generated rather than hand-written so a new route can never be added to
// pages.json and forgotten here. changefreq/priority are omitted deliberately:
// Google has stated it ignores both.
const lastmod = new Date().toISOString().split('T')[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter((p) => !p.noindex)
  .map((p) => `  <url>\n    <loc>${absolute(p.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join('\n')}
</urlset>
`;
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap);

console.log(`prerendered ${written.length} pages: ${written.join(', ')}`);
console.log(`sitemap.xml: ${pages.filter((p) => !p.noindex).length} indexable URLs`);
