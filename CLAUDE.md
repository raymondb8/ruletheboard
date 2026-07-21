# Rule the Board

Website for Rule the Board, a nonprofit chess scholarship program providing coaching,
tournaments, and equipment to underserved students.

## Stack

React + Vite + TypeScript, `react-router-dom` for routing, CSS Modules for styling.

## Brand System

All brand values live as CSS custom properties in [src/styles/tokens.css](src/styles/tokens.css),
imported once globally via `src/index.css`. Components must reference these variables —
never hardcode brand colors, fonts, or spacing inline. This is what lets every new page
automatically match the brand without re-specifying it.

### Colors

| Token | Value | Usage |
|---|---|---|
| `--color-navy` | `#0F172A` | Primary text, buttons, footer background |
| `--color-gold` | `#D5A021` | Accent — eyebrows, links, CTA highlights |
| `--color-cream` | `#FBF7EE` | Page background |
| `--color-body` | `#334155` | Body copy |
| `--color-border` | `rgba(15,23,42,0.15)` | Card/section borders |
| `--color-border-soft` | `rgba(15,23,42,0.12)` | Nav bottom border |
| `--color-footer-border` | `rgba(251,247,238,0.15)` | Footer dividers on navy bg |
| `--color-footer-border-strong` | `rgba(251,247,238,0.3)` | Footer seal badge borders |

### Typography

- **Headings**: Acumin Pro (brand font, not currently web-embedded — falls back to Archivo).
  Use `var(--font-heading)`.
- **Body/UI**: Archivo (Google Fonts, weights 400–900). Use `var(--font-body)`.

### Spacing & Shape

- Section side padding: `var(--space-section-x)` (56px desktop, drops to
  `var(--space-section-x-mobile)` at narrow widths).
- Grid/card gaps: `var(--grid-gap)` (24px).
- Flat design system: 1px solid borders everywhere (`var(--border-width)`), no
  border-radius, no box-shadows.

### Logo Usage

All lockups are vector, extracted from the client-supplied brand sheet
(`src/assets/brand/brandboard.svg`) and verified by rendering each in isolation before
use — the sheet has several logo/color variants side by side, so any future extraction
from it should get the same visual check rather than guessing crop bounds.

- `src/assets/brand/logo-lockup-navy-text.svg` — navy knight + navy/gold wordmark.
  Use on light (cream) backgrounds — nav bar.
- `src/assets/brand/logo-lockup-on-navy.svg` — white knight + white/gold wordmark.
  Use on navy backgrounds — footer.
- `src/assets/brand/logo-icon-rounded.svg` — icon-only mark, navy rounded square with
  white knight. Used as the site favicon (`public/favicon.svg`); spare for other
  icon-only contexts.
- `src/assets/brand/brandboard.svg` — the full sheet, kept for reference/future
  extractions (it also has an alternate serif "RULE THE BOARD / CHESS SCHOLARSHIPS"
  lockup, currently unused).

### Photos

The photos in `src/assets/images/` are real event photos, resized/compressed for web
(max ~1600px, JPEG ~82% quality) from the originals in `raw-media/` (gitignored —
full-resolution phone photos and video, not meant to be committed). Source originals:
- Hero (Home) → `raw-media/C. Teacher Media/2026 Grand Prix Tournament/IMG_2351.JPG`
- Checkmate Your Summer (Home) → `raw-media/C. Teacher Media/CYS 2026/IMG_2435.JPG`
- Tournament hall (Home) → `raw-media/C. Teacher Media/2026 Grand Prix Tournament/IMG_2342.JPG`
- About team (About → Our Board) → `raw-media/C. Teacher Media/Trio Pictures/IMG_5340.JPG`
- Checkmate classroom (Programs → Checkmate Your Summer) →
  `raw-media/C. Teacher Media/CYS 2026/IMG_2436.JPG`
- Tournament wide (Events) →
  `raw-media/C. Teacher Media/2026 Grand Prix Tournament/IMG_2341.JPG`
- Community youth (Get Involved → Join Our Community) →
  `raw-media/C. Teacher Media/2026 Grand Prix Tournament/IMG_2354.JPG`

`raw-media/C. Teacher Media/` has many more photos organized by event/program if any of
these need swapping later. Run `node scripts/resize-images.mjs` to regenerate the current
set, or edit its job list to pull different source photos through the same resize/compress
pipeline. The hero photo keeps a duotone treatment (`grayscale(0.6) sepia(0.12)
contrast(1.02)` filter, defined in `Home.module.css`) so it sits behind the copy without
competing for attention.

## Site Structure

Each top-level nav item (About Us, Get Involved, Programs, Events) is **one page**;
its sub-items (e.g. "The Team", "What We Do") are anchor sections stacked on that page,
not separate routes — sub-pages weren't substantial enough to warrant their own URL. The
one exception is **Donate**: every gold "Donate" button on the site (Nav, Footer, Home's
hero) links to its own standalone `/donate` page rather than an anchor, since it's the
site's primary conversion action. Get Involved's own "Donate" subsection still exists as
a short teaser that links out to `/donate`. The Nav itself has no dropdowns — it's flat
top-level links plus a mobile hamburger menu below 900px.

- `src/routes.ts` — single source of truth for every page path *and* sub-section anchor
  (e.g. `paths.whatWeDo = '/about#what-we-do'`), plus `navConfig` (the flat list of
  top-level nav links). Add new pages/sections here first; `Nav`, `Footer`, and
  `App.tsx`'s routes all read from it, so they can't drift out of sync with each other.
- `src/layout/Layout.tsx` — wraps every page in the shared `Nav` + `Footer`, and handles
  scroll-to-anchor on navigation (React Router doesn't do this natively): scrolls to the
  element matching `location.hash` if present, otherwise scrolls to top.
- `src/components/PageIntro.tsx` — rendered once at the top of each page (eyebrow + big
  title + intro), establishing the page's single identity.
- `src/components/Section.tsx` — one per sub-section (heading + intro + content, `id`
  matching its anchor), rendered in a flowing sequence after `PageIntro` so a page with
  several sub-sections still reads as one continuous page rather than stacked mini-pages.
- `src/components/content.module.css` — shared grid/card/list/CTA primitives used inside
  `Section`s; `src/components/PillarGrid.tsx` — the numbered `01/02/03` card pattern,
  shared between `Home.tsx` and `About.tsx`. New sections should reuse these instead of
  re-implementing the markup.

## Content Status

Every page beyond the homepage is scaffolded with placeholder copy (e.g. "Bio pending.",
"Dates pending.") pending real content from the client — board bios, impact report
files, event details, donation tiers, etc. Homepage copy is final per the design
handoff.
