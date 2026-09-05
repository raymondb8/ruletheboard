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

Adding a route means adding it to `App.tsx` **and** `pages.json`; the build
fails with an explicit message if you only do the first.

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
