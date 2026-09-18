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
 * and browsers still boot the same SPA.
 *
 * The page body is the app itself, not a summary of it. `vite build --ssr`
 * compiles src/entry-server.tsx to dist-ssr/, and this script calls its
 * render() for every route and writes the result into #root. main.tsx then
 * hydrates that markup instead of repainting from an empty div — which is what
 * removed the flash of unstyled text on load — and a crawler that never runs
 * JS reads the whole page.
 *
 * Head copy comes from src/seo/pages.json — the same file <Seo /> reads, so the
 * static and client-side versions can't drift apart.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import Beasties from 'beasties';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

// Everything SEO-related comes from the SSR bundle, which re-exports the same
// modules <Seo /> uses in the browser (src/seo/meta.ts, src/seo/schema.ts).
const { render, site, pages, home, fullTitle, absoluteUrl, pageGraph } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const escape = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// JSON inside a <script> must not contain "</script>"; escaping "<" covers it.
const jsonLd = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

/*
 * Guard against pages.json falling behind App.tsx. A route that exists in the
 * router but not here would ship with the 404 page's metadata and get left out
 * of the sitemap — silently, months before anyone notices in Search Console.
 */
async function assertRoutesMatch() {
  const appSource = await fs.readFile(path.join(root, 'src/App.tsx'), 'utf8');
  const routed = [...appSource.matchAll(/<Route\s+path="([^"*]+)"/g)].map(([, p]) => `/${p}`);
  if (/<Route\s+index\b/.test(appSource)) routed.push('/');
  const declared = new Set(pages.map((p) => p.path));
  const missing = routed.filter((p) => !declared.has(p));

  if (missing.length > 0) {
    throw new Error(
      `Routes in App.tsx with no entry in src/seo/pages.json: ${missing.join(', ')}\n` +
        `Add each one to pages.json (title + description + breadcrumb) so it gets prerendered and indexed.`,
    );
  }
}

/*
 * The SSR bundle and the client bundle are separate Vite builds, and the
 * rendered markup references hashed asset URLs from the former. Vite hashes by
 * content so they match — but if that ever stops being true (a config drift,
 * a plugin that only runs on one side) every image on the site would 404
 * without the build noticing. Check each referenced asset really exists.
 */
async function assertAssetsExist(html, route) {
  const prefix = '/assets/';
  const referenced = new Set([...html.matchAll(/\/assets\/[\w.-]+/g)].map(([m]) => m.slice(prefix.length)));
  const present = new Set(await fs.readdir(path.join(distDir, 'assets')));
  const missing = [...referenced].filter((f) => !present.has(f));
  if (missing.length > 0) {
    throw new Error(
      `Prerendered ${route} references assets that the client build did not emit: ${missing.join(', ')}\n` +
        `The SSR and client builds have drifted apart — check vite.config.ts applies the same plugins to both.`,
    );
  }
}

function seoBlock(page, extra = '') {
  const title = fullTitle(page);
  const url = absoluteUrl(page.path);
  const image = absoluteUrl(page.image ?? site.defaultImage);
  const imageAlt = `${site.name} share card: ${page.title}`;

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
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escape(imageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(title)}" />
    <meta name="twitter:description" content="${escape(page.description)}" />
    <meta name="twitter:image" content="${escape(image)}" />
    <meta name="twitter:image:alt" content="${escape(imageAlt)}" />
    <script type="application/ld+json" data-seo="graph">${jsonLd(pageGraph(page, home))}</script>${extra}
    <!-- SEO:END -->`;
}

const SEO_REGION = /<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/;
const ROOT_EMPTY = '<div id="root"></div>';

const shell = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

if (!SEO_REGION.test(shell)) {
  throw new Error('dist/index.html has no <!-- SEO:START --> / <!-- SEO:END --> markers — check index.html.');
}
if (!shell.includes(ROOT_EMPTY)) {
  // A fresh `vite build` always emits the empty shell. Seeing anything else
  // means this ran twice without rebuilding, and the template is already a
  // rendered page — rebuild rather than stamp one route's body onto the others.
  throw new Error('dist/index.html already has content in #root — run `vite build` again before prerendering.');
}

await assertRoutesMatch();

/*
 * React's server renderer emits a <link rel="preload" as="image"> for every
 * eagerly loaded <img> it renders, and with renderToString there is no <head>
 * in the tree, so they land inline at the top of #root. Two things to do with
 * them: move the one for the fetchpriority="high" image (the hero, the
 * homepage's Largest Contentful Paint element) into <head>, where the preload
 * scanner finds it before a byte of the body has parsed — worth roughly a
 * second of LCP on a cold mobile connection, and LCP is a ranking signal — and
 * drop the rest, since preloading non-LCP images only competes with the hero
 * for bandwidth. Deriving the hint from the rendered <img> rather than writing
 * it by hand means it picks up srcset/sizes automatically if the tag changes.
 */
const PRELOAD_LINK = /<link rel="preload" as="image"[^>]*\/>/g;

function splitPreloads(rendered) {
  const hoisted = [];
  const body = rendered.replace(PRELOAD_LINK, (tag) => {
    if (/fetchpriority="high"/i.test(tag)) hoisted.push(tag);
    return '';
  });
  return { body, headExtra: hoisted.map((tag) => `\n    ${tag}`).join('') };
}

/*
 * The stylesheet is the one render-blocking request left on the page. Since
 * every page is now real HTML at build time, we know exactly which rules it
 * uses: Beasties inlines those into <head> and flips the <link> to load the
 * full sheet without blocking, so the first paint no longer waits on a
 * round trip for CSS. The external file is left whole (pruneSource: false)
 * so it stays one cacheable asset across pages, and font handling is left to
 * index.html's own preloads.
 */
const beasties = new Beasties({
  path: distDir,
  publicPath: '/',
  preload: 'media',
  pruneSource: false,
  inlineFonts: false,
  preloadFonts: false,
  logLevel: 'warn',
});

/*
 * Every page except Home is a lazy chunk (App.tsx). A direct visit to /about
 * would otherwise download the main bundle, run it, discover the About chunk,
 * and only then fetch it — a full network round trip before the page is
 * interactive. Reading the Vite manifest lets each prerendered page preload
 * its own chunk from the first HTML byte. The route→module map is parsed from
 * App.tsx so a new lazy route is picked up automatically.
 */
const manifest = JSON.parse(await fs.readFile(path.join(distDir, '.vite/manifest.json'), 'utf8'));
const appSource = await fs.readFile(path.join(root, 'src/App.tsx'), 'utf8');
const lazyModules = new Map(
  [...appSource.matchAll(/const (\w+) = lazy\(\(\) => import\('\.\/pages\/(\w+)'\)\)/g)].map(([, name, file]) => [name, `src/pages/${file}.tsx`]),
);
const routeModule = new Map(
  [...appSource.matchAll(/<Route\s+(?:index|path="([^"]+)")\s+element=\{<(\w+)/g)].map(([, routePath, component]) => [
    routePath === undefined ? '/' : routePath === '*' ? '/404' : `/${routePath}`,
    lazyModules.get(component),
  ]),
);

function chunkPreloads(routePath) {
  const module = routeModule.get(routePath);
  const entry = module && manifest[module];
  if (!entry) return '';
  const files = [entry.file, ...(entry.imports ?? []).map((k) => manifest[k]?.file).filter((f) => f && !manifest['index.html']?.file?.endsWith(f))];
  return files.map((f) => `\n    <link rel="modulepreload" crossorigin href="/${f}" />`).join('');
}

const written = [];

for (const page of pages) {
  // The 404 entry has no route of its own; rendering its path hits the router's
  // `*` branch, which is exactly the page a genuine bad URL should get.
  const rendered = await render(page.path);
  await assertAssetsExist(rendered, page.path);
  if (/<template id="B:|\$RC\(|hidden id="S:|<!--\$[?!]-->/.test(rendered)) {
    throw new Error(
      `Prerendered ${page.path} contains a pending Suspense boundary or its reveal script, so part of the page ` +
        `would be hidden until JS runs. Something in the tree suspended on the second render pass — see src/entry-server.tsx.`,
    );
  }
  const { body, headExtra } = splitPreloads(rendered);

  const html = await beasties.process(
    shell
      .replace(SEO_REGION, seoBlock(page, headExtra + chunkPreloads(page.path)))
      .replace(ROOT_EMPTY, `<div id="root">${body}</div>`),
  );

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
// Google has stated it ignores both. lastmod is the page's own dateModified
// where pages.json has one, otherwise the build date. Each URL also lists its
// share image so it can be picked up for image search.
const buildDate = new Date().toISOString().split('T')[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .filter((p) => !p.noindex)
  .map(
    (p) =>
      `  <url>\n    <loc>${absoluteUrl(p.path)}</loc>\n    <lastmod>${p.dateModified ?? buildDate}</lastmod>\n` +
      `    <image:image>\n      <image:loc>${absoluteUrl(p.image ?? site.defaultImage)}</image:loc>\n    </image:image>\n  </url>`,
  )
  .join('\n')}
</urlset>
`;
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap);

console.log(`prerendered ${written.length} pages: ${written.join(', ')}`);
console.log(`sitemap.xml: ${pages.filter((p) => !p.noindex).length} indexable URLs`);
