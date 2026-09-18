/*
 * Static SEO audit of the built site. Runs against dist/ after prerendering
 * and fails the build on anything a crawler or a Lighthouse run would flag,
 * so a regression can't ship quietly: a page that loses its <h1>, a photo that
 * ships without alt text, a link to an anchor that no longer exists, a JSON-LD
 * block with a dangling reference, a stray Google Fonts request.
 *
 * Everything here is checked on the emitted HTML, not the source, because
 * that is what search engines read. It parses with regular expressions on
 * purpose: the input is our own prerendered output, not arbitrary HTML, and
 * keeping this dependency-free means it runs anywhere `node` does.
 *
 * Run alone with `npm run audit`. Warnings print but don't fail the build.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

const { site, pages } = JSON.parse(await fs.readFile(path.join(root, 'src/seo/pages.json'), 'utf8'));
const indexable = pages.filter((p) => !p.noindex);
const routeOf = (page) => (page.path === '/404' ? null : page.path);
const fileOf = (page) =>
  page.path === '/404' ? '404.html' : page.path === '/' ? 'index.html' : `${page.path.slice(1)}/index.html`;

const LIMITS = {
  title: { min: 20, max: 65, warnBelow: 40 },
  description: { min: 70, max: 160, warnBelow: 110 },
  imageKb: 350, // any single image file in dist/assets
  jsKb: 400, // main bundle, uncompressed
  htmlKb: 120, // a prerendered page
};

const SCHEMA_TYPES = new Set([
  'NGO', 'EducationalOrganization', 'Organization', 'Person', 'WebSite', 'WebPage', 'AboutPage', 'FAQPage',
  'ContactPage', 'BreadcrumbList', 'ListItem', 'ImageObject', 'Question', 'Answer', 'Article', 'Thing',
  'Audience', 'City', 'State', 'ContactPoint', 'EducationalOccupationalProgram', 'Offer', 'DonateAction',
]);

// ---------------------------------------------------------------------------
// tiny HTML helpers (our markup is well-formed and attribute values are quoted)
const attrsOf = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)(?:="([^"]*)")?/g)].slice(1).map(([, k, v]) => [k.toLowerCase(), v ?? '']));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map((m) => ({ tag: m[0], index: m.index, attrs: attrsOf(m[0]) }));
const decode = (s) => s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&hellip;/g, '…');
const textOf = (html) => decode(html.replace(/<!--[\s\S]*?-->/g, '').replace(/<(script|style)[\s\S]*?<\/\1>/gi, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const meta = (head, key) => tags(head, 'meta').find((m) => m.attrs.name === key || m.attrs.property === key)?.attrs.content;

const results = [];
const failures = [];
const warnings = [];
const fail = (file, msg) => failures.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

// ---------------------------------------------------------------------------
// gather every page
const docs = new Map();
for (const page of pages) {
  const file = fileOf(page);
  let html;
  try {
    html = await fs.readFile(path.join(distDir, file), 'utf8');
  } catch {
    fail(file, `not emitted — is the route in App.tsx and did prerender run?`);
    continue;
  }
  docs.set(file, { page, html, route: routeOf(page) });
}
const knownRoutes = new Set(pages.map(routeOf).filter(Boolean));
const idsByRoute = new Map();
for (const { html, route } of docs.values()) {
  if (route) idsByRoute.set(route, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

const assetFiles = await fs.readdir(path.join(distDir, 'assets'));
const publicFile = async (url) => {
  const rel = url.replace(site.url, '').replace(/^\//, '');
  try {
    await fs.access(path.join(distDir, rel));
    return true;
  } catch {
    return false;
  }
};

const seenTitles = new Map();
const seenDescriptions = new Map();
const altToSources = new Map();

for (const [file, { page, html, route }] of docs) {
  const head = html.slice(0, html.indexOf('</head>'));
  const body = html.slice(html.indexOf('<body'));
  // Vite hoists the module <script> into <head>, so #root runs to </body>.
  const rootMatch = body.match(/<div id="root">([\s\S]*)<\/div>\s*<\/body>/);
  // Tag scans below must not see JS text (React can emit an inline script).
  const rootHtml = (rootMatch ? rootMatch[1] : '').replace(/<script[\s\S]*?<\/script>/gi, '');

  // --- document basics
  if (!/<html[^>]*\slang="en"/.test(html)) fail(file, 'missing <html lang="en">');
  if (!meta(head, 'viewport')) fail(file, 'missing viewport meta');
  if (rootHtml.trim().length < 2000) fail(file, `#root holds ${rootHtml.trim().length} chars — page was not prerendered`);
  if (/<!--prerender-->/.test(html)) fail(file, 'old text-only fallback marker present');
  if (/fonts\.googleapis|fonts\.gstatic/.test(html)) fail(file, 'references Google Fonts (fonts are self-hosted)');

  // --- title / description
  const title = decode(head.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  if (!title) fail(file, 'no <title>');
  else {
    if (title.length > LIMITS.title.max) fail(file, `title is ${title.length} chars (max ${LIMITS.title.max}): "${title}"`);
    if (title.length < LIMITS.title.min) fail(file, `title is only ${title.length} chars: "${title}"`);
    else if (title.length < LIMITS.title.warnBelow && !page.noindex) warn(file, `short title (${title.length} chars): "${title}"`);
    if (seenTitles.has(title)) fail(file, `title duplicates ${seenTitles.get(title)}: "${title}"`);
    seenTitles.set(title, file);
  }
  const description = decode(meta(head, 'description') ?? '');
  if (!description) fail(file, 'no meta description');
  else {
    if (description.length > LIMITS.description.max) fail(file, `description is ${description.length} chars (max ${LIMITS.description.max})`);
    if (description.length < LIMITS.description.min && !page.noindex) fail(file, `description is only ${description.length} chars`);
    else if (description.length < LIMITS.description.warnBelow && !page.noindex) warn(file, `short description (${description.length} chars)`);
    if (seenDescriptions.has(description)) fail(file, `description duplicates ${seenDescriptions.get(description)}`);
    seenDescriptions.set(description, file);
  }

  // --- robots / canonical / social
  const robots = meta(head, 'robots') ?? '';
  if (page.noindex ? !/noindex/.test(robots) : !/index, follow/.test(robots)) fail(file, `robots meta is "${robots}"`);
  const canonical = tags(head, 'link').find((l) => l.attrs.rel === 'canonical')?.attrs.href;
  const expectedCanonical = `${site.url}${page.path === '/404' ? '/404' : page.path}`;
  if (!canonical) fail(file, 'no canonical');
  else if (canonical !== expectedCanonical) fail(file, `canonical is ${canonical}, expected ${expectedCanonical}`);
  for (const key of ['og:title', 'og:description', 'og:url', 'og:image', 'og:type', 'twitter:card', 'twitter:title', 'twitter:image']) {
    if (!meta(head, key)) fail(file, `missing ${key}`);
  }
  for (const key of ['og:image', 'twitter:image']) {
    const url = meta(head, key);
    if (url && !url.startsWith('https://')) fail(file, `${key} is not absolute: ${url}`);
    if (url && !(await publicFile(url))) fail(file, `${key} file does not exist in dist: ${url}`);
  }
  if (meta(head, 'og:url') !== canonical) fail(file, 'og:url differs from canonical');

  // --- headings
  const headings = [...rootHtml.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({ level: +m[1], text: textOf(m[2]) }));
  const h1s = headings.filter((h) => h.level === 1);
  if (h1s.length !== 1) fail(file, `${h1s.length} <h1> elements`);
  if (headings[0] && headings[0].level !== 1) fail(file, `first heading is <h${headings[0].level}>, not <h1>`);
  let prev = 0;
  for (const h of headings) {
    if (h.level > prev + 1) fail(file, `heading skips from h${prev} to h${h.level} at "${h.text.slice(0, 40)}"`);
    if (!h.text) fail(file, `empty <h${h.level}>`);
    prev = h.level;
  }

  // --- images
  for (const { tag, attrs } of tags(rootHtml, 'img')) {
    const src = attrs.src ?? '';
    const label = src.split('/').pop()?.replace(/-[\w-]{8}\.(\w+)$/, '.$1') ?? tag.slice(0, 60);
    if (!('alt' in attrs)) fail(file, `<img> without alt attribute: ${label}`);
    if (!attrs.width || !attrs.height) fail(file, `<img> without width/height: ${label}`);
    if (!attrs.loading) fail(file, `<img> without loading attribute: ${label}`);
    if (/\.(jpe?g|png)$/i.test(src) && !/favicon|apple-touch/.test(src)) warn(file, `<img> is not WebP: ${label}`);
    const isPhoto = /\/assets\/.*\.webp$/.test(src) && !/rtb-/.test(src);
    if (isPhoto && !attrs.srcset) fail(file, `photo without srcset (use <Img>): ${label}`);
    if (attrs.srcset && !attrs.sizes) fail(file, `srcset without sizes: ${label}`);
    if (attrs.alt) {
      const key = decode(attrs.alt);
      const set = altToSources.get(key) ?? new Set();
      set.add(label);
      altToSources.set(key, set);
      if (attrs.alt.length < 15 && !/rtb-/.test(src)) warn(file, `alt text is very short: "${attrs.alt}"`);
    }
  }
  const altsHere = tags(rootHtml, 'img').map((i) => i.attrs.alt).filter(Boolean);
  for (const alt of new Set(altsHere)) {
    if (altsHere.filter((a) => a === alt).length > 1 && !/^Rule the Board$/.test(alt)) fail(file, `duplicate alt on one page: "${decode(alt)}"`);
  }
  for (const m of rootHtml.matchAll(/\/assets\/[\w.-]+/g)) {
    if (!assetFiles.includes(m[0].slice('/assets/'.length))) fail(file, `references missing asset ${m[0]}`);
  }

  // --- links
  for (const { tag, attrs, index } of tags(rootHtml, 'a')) {
    const href = attrs.href ?? '';
    const inner = rootHtml.slice(index + tag.length, rootHtml.indexOf('</a>', index));
    const accessibleName = textOf(inner) || attrs['aria-label'] || tags(inner, 'img').some((i) => i.attrs.alt);
    if (!href) fail(file, `<a> without href near "${textOf(inner).slice(0, 40)}"`);
    if (href === '#') fail(file, `placeholder href="#" near "${textOf(inner).slice(0, 40)}"`);
    if (!accessibleName) fail(file, `link with no accessible name: ${href}`);
    if (/^https?:\/\//.test(href) && !href.startsWith(site.url)) {
      if (attrs.target === '_blank' && !/noopener/.test(attrs.rel ?? '')) fail(file, `external _blank link without rel=noopener: ${href}`);
      continue;
    }
    if (/^(mailto|tel):/.test(href)) continue;
    const [pathPart, hash] = (href.startsWith(site.url) ? href.slice(site.url.length) : href).split('#');
    const target = pathPart === '' ? route : pathPart.replace(/\/+$/, '') || '/';
    if (pathPart && !knownRoutes.has(target) && !/\.(pdf|jpg|png|xml|txt)$/.test(pathPart)) fail(file, `internal link to unknown route: ${href}`);
    if (hash && knownRoutes.has(target) && !idsByRoute.get(target)?.has(hash)) fail(file, `anchor #${hash} not found on ${target} (link: ${href})`);
    if (pathPart && /\.(pdf|jpg|png)$/.test(pathPart) && !(await publicFile(pathPart))) fail(file, `link to missing file: ${href}`);
  }

  // --- JSON-LD
  const blocks = [...head.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  if (blocks.length !== 1) fail(file, `${blocks.length} JSON-LD blocks (expected 1 graph)`);
  for (const block of blocks) {
    let graph = [];
    try {
      const json = JSON.parse(block);
      graph = json['@graph'] ?? [json];
      if (json['@context'] !== 'https://schema.org') fail(file, 'JSON-LD missing @context');
    } catch (e) {
      fail(file, `JSON-LD does not parse: ${e.message}`);
      continue;
    }
    const ids = new Set(graph.map((n) => n['@id']).filter(Boolean));
    const walk = (v, where) => {
      if (Array.isArray(v)) return v.forEach((x) => walk(x, where));
      if (v && typeof v === 'object') {
        const keys = Object.keys(v);
        if (keys.length === 1 && keys[0] === '@id' && !ids.has(v['@id'])) fail(file, `JSON-LD @id ${v['@id']} referenced in ${where} but not defined`);
        for (const t of [].concat(v['@type'] ?? [])) if (!SCHEMA_TYPES.has(t)) fail(file, `JSON-LD uses unrecognized @type "${t}" in ${where}`);
        for (const k of keys) walk(v[k], `${where}.${k}`);
      }
    };
    graph.forEach((n) => walk(n, String(n['@type'])));
    for (const n of graph) {
      const t = String(n['@type']);
      const need = (k) => { if (n[k] == null || n[k] === '') fail(file, `JSON-LD ${t} missing ${k}`); };
      if (t === 'Article') ['headline', 'image', 'author', 'publisher', 'datePublished', 'dateModified'].forEach(need);
      if (t === 'FAQPage' && !(Array.isArray(n.mainEntity) && n.mainEntity.length)) fail(file, 'FAQPage without questions');
      if (/WebPage|AboutPage|FAQPage/.test(t)) ['url', 'name', 'description', 'isPartOf'].forEach(need);
      if (t === 'BreadcrumbList') n.itemListElement.forEach((li, i) => { if (li.position !== i + 1) fail(file, 'breadcrumb positions out of order'); });
    }
    // The FAQ schema must say what the page says.
    const faqPage = graph.find((n) => n['@type'] === 'FAQPage');
    if (faqPage) for (const q of faqPage.mainEntity) if (!textOf(rootHtml).includes(decode(q.name))) fail(file, `FAQ question not visible on page: "${q.name}"`);
  }

  // --- voice: no em dashes in anything a visitor reads
  const visible = textOf(rootHtml);
  const dashes = (visible.match(/—/g) ?? []).length;
  if (dashes) fail(file, `${dashes} em dash(es) in visible copy`);

  // --- weight
  const kb = Math.round(Buffer.byteLength(html) / 1024);
  if (kb > LIMITS.htmlKb) warn(file, `HTML is ${kb} kB`);

  results.push({ file, title, kb, headings: headings.length, images: tags(rootHtml, 'img').length });
}

// --- cross-page: an alt string should describe one photo, not several
for (const [alt, sources] of altToSources) {
  if (sources.size > 1 && alt !== 'Rule the Board') fail('site', `alt "${alt}" is used for ${sources.size} different images: ${[...sources].join(', ')}`);
}

// --- sitemap & robots
const sitemap = await fs.readFile(path.join(distDir, 'sitemap.xml'), 'utf8').catch(() => '');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const expectedLocs = indexable.map((p) => `${site.url}${p.path}`);
if (!sitemap) fail('sitemap.xml', 'missing');
else {
  for (const l of expectedLocs) if (!locs.includes(l)) fail('sitemap.xml', `missing ${l}`);
  for (const l of locs) if (!expectedLocs.includes(l)) fail('sitemap.xml', `lists ${l}, which is not an indexable page`);
  for (const m of sitemap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)) if (!(await publicFile(m[1]))) fail('sitemap.xml', `image does not exist: ${m[1]}`);
  for (const m of sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) if (!/^\d{4}-\d{2}-\d{2}$/.test(m[1])) fail('sitemap.xml', `bad lastmod ${m[1]}`);
}
const robots = await fs.readFile(path.join(distDir, 'robots.txt'), 'utf8').catch(() => '');
if (!robots.includes(`Sitemap: ${site.url}/sitemap.xml`)) fail('robots.txt', 'does not point at the sitemap');
if (/Disallow:\s*\/\s*$/m.test(robots)) fail('robots.txt', 'blocks the whole site');

// --- asset budget
const budget = [];
for (const f of assetFiles) {
  const size = (await fs.stat(path.join(distDir, 'assets', f))).size;
  const kb = Math.round(size / 1024);
  if (/\.(webp|jpe?g|png)$/.test(f) && kb > LIMITS.imageKb) fail('assets', `${f} is ${kb} kB (image budget ${LIMITS.imageKb} kB)`);
  if (/^index-.*\.js$/.test(f)) {
    budget.push(`js ${kb} kB (gzip ${Math.round(gzipSync(await fs.readFile(path.join(distDir, 'assets', f))).length / 1024)} kB)`);
    if (kb > LIMITS.jsKb) fail('assets', `${f} is ${kb} kB (JS budget ${LIMITS.jsKb} kB)`);
  }
  if (/^index-.*\.css$/.test(f)) budget.push(`css ${kb} kB`);
}
const pdf = await fs.stat(path.join(distDir, 'rule-the-board-25-26-impact-report.pdf')).catch(() => null);
if (pdf && pdf.size > 3 * 1024 * 1024) warn('public', `impact report PDF is ${Math.round(pdf.size / 1024 / 1024)} MB`);

// ---------------------------------------------------------------------------
for (const r of results) console.log(`  ${r.file.padEnd(30)} ${String(r.kb).padStart(3)} kB  ${String(r.headings).padStart(2)} headings  ${String(r.images).padStart(2)} images  "${r.title}"`);
console.log(`  bundle: ${budget.join(', ')}; ${assetFiles.filter((f) => f.endsWith('.webp')).length} webp files; sitemap ${locs.length} URLs`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log(`  warn  ${w}`));
}
if (failures.length) {
  console.log(`\n${failures.length} failure(s):`);
  failures.forEach((f) => console.log(`  FAIL  ${f}`));
  process.exit(1);
}
console.log(`\nseo-audit: ${results.length} pages clean`);
