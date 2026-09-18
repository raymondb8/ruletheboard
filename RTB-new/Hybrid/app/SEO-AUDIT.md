# SEO audit log

Running record of the audit loop: what each round found, what changed, and the
numbers before and after. `npm run audit` is the mechanical half of this; the
rest is Lighthouse, schema validation, and a fresh read of the built HTML.

Lighthouse figures are mobile, simulated slow 4G with 4x CPU slowdown (the
PageSpeed Insights default), run against a local static server that mimics
Vercel's routing. Desktop is noted where measured. Run-to-run variance on the
performance score is about plus or minus 3 points.

## Before (commit 7518a7f, 2026-09-11)

| Route | Perf | SEO | A11y | BP | LCP | Bytes |
|---|---|---|---|---|---|---|
| / | 74 | 100 | 95 | 100 | 10.6 s | 1944 kB |
| /programs | 79 | 100 | 93 | 100 | 5.3 s | 2165 kB |
| /tournament-guide | 93 | 100 | 100 | 100 | 2.9 s | 1454 kB |

Visible symptom: a flash of unstyled text on every load. The prerender step
wrote a bare heading and link list into `#root` for crawlers, which painted
before React replaced it. Crawlers that don't run JS got that summary rather
than the page.

## After (2026-09-11, end of round 4)

| Route | Perf | SEO | A11y | BP | FCP | LCP | CLS | Bytes |
|---|---|---|---|---|---|---|---|---|
| / | 89 | 100 | 100 | 100 | 1.6 s | 3.6 s | 0 | 509 kB |
| /about | 91 | 100 | 100 | 100 | 1.5 s | 3.5 s | 0 | 487 kB |
| /programs | 89 | 100 | 100 | 100 | 1.7 s | 3.7 s | 0 | 596 kB |
| /scholars | 95 | 100 | 100 | 100 | 1.7 s | 2.9 s | 0 | 334 kB |
| /trainers | 94 | 100 | 100 | 100 | 1.7 s | 2.9 s | 0 | 334 kB |
| /get-involved | 96 | 100 | 100 | 100 | 1.7 s | 2.6 s | 0 | 289 kB |
| /tournament-guide | 93 | 100 | 100 | 100 | 1.7 s | 2.9 s | 0 | 288 kB |
| / (desktop) | 100 | 100 | 100 | 100 | 0.3 s | 0.7 s | 0 | |

Observed (unthrottled) LCP on the homepage is about 0.4 s and equals first
paint: the hero paints in the first frame. The 3.6 s figure is the simulated
model's estimate of a React-hydrated page on a slow phone; see "what didn't
move it" below.

## Round 1: the planned work

- **Real prerendering with hydration.** `src/entry-server.tsx` renders every
  route at build time; `main.tsx` hydrates instead of re-rendering. No flash,
  and every page is complete HTML with JS off (1.5k to 4.7k characters of copy
  per page; verified by loading each route with JavaScript disabled).
- Impact stats (`212`, `7,492`, `100+`, `936`) now render their real value in
  the HTML and animate `textContent`; before, crawlers would have read `0`.
- Scroll-reveal no longer hides sections already on screen (it would have
  blanked the hero after hydration).
- Inner-page H1s carry the keywords their title tags target ("Chess programs
  for grades 3-8", "Apply for a chess scholarship", and so on). Homepage copy
  untouched by decision.
- Heading levels no longer skip on any page; 27 sections got `aria-labelledby`;
  the tournament guide got section ids and a table of contents.
- One JSON-LD graph per page from `src/seo/schema.ts`: Organization (with
  founders and the ten-person team as Person nodes), WebSite, WebPage with
  breadcrumbs, FAQPage and two EducationalOccupationalProgram nodes on
  /programs, Article on /tournament-guide. Team and FAQ data moved to
  `src/data/` so page and schema read the same arrays.
- Material Symbols icon font replaced by inline SVGs (`react-icons`, 50
  usages); both text faces self-hosted as woff2 with preloads. Zero
  third-party requests remain.
- Photos emitted at 4 widths with `srcset`/`sizes` via `<Img>`; logos to WebP;
  the nav loads one logo instead of two.
- One share card per page (`public/og-*.jpg`), with `og:image` dimensions and
  alt text.
- Critical CSS inlined per page (`beasties`); the stylesheet no longer blocks
  render.
- Routes other than Home are lazy chunks with a per-page `modulepreload`
  (main bundle 379 kB to 307 kB). Two-pass server render so no Suspense
  fallback or reveal script reaches the HTML; the build fails if one does.
- Impact report PDF: 6.9 MB to 1.5 MB.
- `scripts/seo-audit.mjs` added and wired as the last step of `npm run build`.

## Round 2: what the first sweep missed

- `/about` a11y 95: the coral links I added were 3.45:1 on white. Now
  `secondary-strong` (4.75:1) on white, navy on the tinted panel.
- `/scholars` a11y 96: form labels had no `htmlFor`. All seven fields now
  have id/label pairs.
- `/programs` a11y: `Placeholder` text at 70% opacity failed contrast. Opacity
  removed; the italic and dashed underline still mark it as a draft value.
- `/` SEO 92: "Learn More" is non-descriptive link text. Visible label kept;
  screen-reader-only context added inside the link.
- Homepage first paint was being held by `decoding="sync"` on the hero (my
  change); measured and reverted.

## Round 3 and 4: experiments on the remaining LCP, none kept

Each was tested on a copy of the built homepage so the effect is isolated:

| Change | Simulated LCP | Kept? |
|---|---|---|
| Current build | 3.5 to 3.7 s | |
| JS bundle removed entirely | 2.9 s | n/a (floor) |
| No web fonts at all | 2.9 s (no-JS page) | no, no effect |
| Hero served only at 640w | no change | no |
| `fetchpriority=low` on the module script | no change | no |
| Hydration deferred one frame | no change | reverted |
| Tailwind `@property` rules stripped | no change | no |
| Blur decorations removed | no change | no |
| `content-visibility: auto` on below-fold sections | 2.6 s with no JS, no measurable change with JS; page heights became unstable | reverted |

Conclusion: the remaining lab LCP is the model's cost for parsing, styling and
hydrating a React page at 4x CPU, not bytes on the wire. Real-user LCP will be
far lower (observed 0.4 s locally). Further Lighthouse tuning on this stack has
no lever left short of removing client-side React.

## Open items (need a decision, not a fix)

- Every "Donate" button ends in a `mailto:` because the Givebutter ids in
  `GetInvolved.tsx` are `null`. Add `DonateAction` schema when giving is live.
- The scholarship, trainer, and contact forms are `preventDefault()` no-ops.
- "confirm with team" placeholders sit next to primary calls to action.
- `/privacy` is a placeholder (correctly `noindex`).
- Organization schema omits `nonprofitStatus`/`taxID` and a postal address
  because neither is confirmed or published; add them when they are.
- Titles in `pages.json` are Title Case (existing house style for title tags);
  new headings on the pages are sentence case per the copy rules.

## How to re-run the loop

1. `npm run build` (ends with the audit; must print `seo-audit: 9 pages clean`).
2. `npx serve dist -l 4173` and Lighthouse each route in `src/seo/pages.json`.
3. Load each route with JavaScript disabled and confirm the full page renders.
4. Paste `dist/<route>/index.html` into the Rich Results Test for any page
   whose schema changed.
5. Add a dated section above with what was found and what moved.
