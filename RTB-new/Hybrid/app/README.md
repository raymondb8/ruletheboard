# Rule the Board — web app

React + TypeScript + Vite, Tailwind for styling, deployed on Vercel.

## SEO

**To change any page's title or meta description, edit
[`src/seo/pages.json`](src/seo/pages.json) — nothing else.** That one file is
read by both consumers, which is what keeps them from drifting:

- [`src/components/Seo.tsx`](src/components/Seo.tsx) updates the document head
  on client-side navigation. Rendered once in `Layout`, so pages never include
  it themselves.
- [`scripts/prerender.mjs`](scripts/prerender.mjs) runs after `vite build` and
  writes a real `dist/<route>/index.html` per route with the tags baked in.

The prerender step is the one that matters for search and social. Crawlers and
link unfurlers (Facebook, LinkedIn, Slack, iMessage, and most AI crawlers) read
the raw HTML and never run the bundle — without it, every URL on the site would
unfurl with the homepage's title. It also emits `dist/sitemap.xml` and a
`dist/404.html` that the host serves with a genuine 404 status.

### The page body is rendered at build time too

`npm run build` runs two Vite builds. The normal client build, then
`vite build --ssr src/entry-server.tsx`, which compiles the app for Node into
`dist-ssr/`. The prerender script imports that bundle and calls its `render()`
for every route, so each `dist/<route>/index.html` contains the fully rendered
page, not an empty `<div id="root">`. In the browser, `main.tsx` hydrates that
markup instead of rendering from scratch.

Two consequences worth knowing:

- **There is no flash of unstyled or missing content on load.** The first paint
  is the real page. (Before this, the shell held a bare text summary that React
  replaced a moment later, which is what looked like plain text on load.)
- **Anything that reads `window` or `document` must live inside an effect.**
  `render()` runs in Node, where neither exists. React logs a hydration
  warning in the console if server and client markup ever differ; treat that
  as a build failure and fix the component, don't suppress it.

`dist-ssr/` is a build intermediate and is gitignored. Vercel only deploys
`dist/`.

Every page except Home is a `lazy()` chunk (see `App.tsx`), so a visitor
landing on `/` doesn't download the other six pages. The prerender step reads
`dist/.vite/manifest.json` and adds a `<link rel="modulepreload">` for the
page's own chunk, so a direct visit to `/about` still fetches everything in
one round trip. `src/entry-server.tsx` renders twice on purpose (once with
`react-dom/static` to load the chunks, once with `renderToString` for clean
output); the prerender script fails the build if any Suspense fallback or
reveal script makes it into the HTML, because that content would be hidden
until JS ran.

Each page also inlines the CSS it actually uses (`beasties`, in the prerender
step) and loads the full stylesheet without blocking, so nothing render-blocking
is left between the HTML and the first paint.

### The audit

`npm run build` ends with `node scripts/seo-audit.mjs` (also `npm run audit`),
which checks the emitted HTML the way a crawler would read it: one `<h1>` and
no skipped heading levels per page, unique titles and descriptions within
length limits, self-referential canonicals, alt/width/height/loading on every
image and `srcset` on every photo, no dead internal links or anchors, one
valid JSON-LD graph per page with every `@id` resolving, no Google Fonts
reference, and no em dashes in visible copy. A failing check fails the build
and names the page and the problem; fix the page, don't loosen the check.

Adding a route means adding it to `App.tsx` **and** `pages.json`; the build
fails with an explicit message if you only do the first. Give the new page an
`image` (run `scripts/og-image.mjs` after adding a card for it) or it falls
back to the homepage share card.

### vercel.json

Two things there are deliberate and easy to "fix" back into breakage:

- **There is no SPA catch-all rewrite.** The prerender step emits a real
  `dist/<route>/index.html` for every route, so Vercel serves each one from the
  filesystem. Anything genuinely unmatched falls through to `dist/404.html` with
  a true 404 status. Adding a `/(.*) -> /index.html` rewrite back would return
  200 for every URL, which Search Console reports as a soft 404.
- **`trailingSlash: false`** redirects `/about/` to `/about`, so a page has one
  URL instead of two that Google has to reconcile as duplicates.

Do not add `//` keys as comments to that file. Vercel validates it against a
strict schema and rejects unknown properties, so the deploy fails before the
build starts.

`public/og-image.jpg` (the social share card) and the WebP photos in
`src/assets/images/` are generated — see `scripts/og-image.mjs` and
`scripts/resize-images.mjs`. Neither runs during `npm run build`; re-run them by
hand when the source photos or the card copy change.

Each photo is emitted at several widths, and `scripts/resize-images.mjs` also
writes `src/assets/images/index.ts`, a generated manifest with one entry per
photo (`src`, `srcSet`, real `width`/`height`). Pages render photos through
`src/components/Img.tsx` with an entry from that manifest plus a `sizes`
attribute, so a phone downloads the 640px file rather than the 1600px one and
the box is reserved before the bytes arrive. Don't import individual `.webp`
files from pages; add the photo to the script's job list and re-run it.

The fonts in `src/assets/fonts/` are self-hosted copies of the two Google Fonts
families (latin and latin-ext subsets, variable weight 200-800), declared in
`src/index.css` and preloaded from `index.html`. UI icons are inline SVGs from
`react-icons` via `src/components/icons.tsx`, keyed by Material Symbols name;
there is no icon font.

## Vite template notes

This project started from the Vite React template, whose notes follow.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
