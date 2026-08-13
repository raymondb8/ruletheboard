/** @type {import('tailwindcss').Config} */

/*
 * Rule the Board — brand color system.
 *
 * The palette is deliberately tiered. It is NOT a flat list of six equal brand
 * colors, and should not be flattened into one:
 *
 *   1. PRIMARY (navy)  — the dominant color. Headings, nav, body text, primary
 *                        buttons, dark CTA bands. If in doubt, use navy.
 *   2. SECONDARY (coral) — the second-most-present color. Key CTAs (Donate /
 *                        Apply / Give), emphasis numbers, active states.
 *   3. ACCENT KIT (teal / blue / orange / green) — a small supporting set used
 *                        sparingly, the way the logo uses its sparkle details.
 *                        Small icon glyphs, category tags, thin rules, meters.
 *                        Never a page background, never a large block fill, and
 *                        never all four inside the same component.
 *
 * Each accent carries a fixed meaning site-wide so its appearance is systematic
 * rather than decorative:
 *   teal   → learning & coaching
 *   blue   → community & people
 *   orange → events & tournaments
 *   green  → progress & measured impact
 *
 * Surfaces stay white / off-white: the logo lockups are built to sit on white,
 * and navy + coral do the heavy lifting on top of that light base.
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ── 1. PRIMARY — Navy ───────────────────────────────── dominant ── */
        primary: '#0E387D',
        'primary-deep': '#082A5E', // pressed/lift shadows, footer rules
        'primary-muted': '#3A5C97', // hover on navy fills
        'primary-soft': '#E8EEF8', // navy tint — icon wells, chips
        'on-primary': '#FFFFFF',

        /* ── 2. SECONDARY — Coral ─────────────────────── key CTAs only ── */
        secondary: '#F05354', // brand coral — fills, icons, borders, tints
        // Text-bearing coral. White on #F05354 is only 3.46:1, which fails WCAG
        // AA for the 14px bold used on buttons. This darker step is 4.73:1, so
        // every coral surface with white text on it must use THIS, not the raw
        // brand coral. Visually they read as the same colour side by side.
        'secondary-strong': '#D63637',
        'secondary-deep': '#B93536', // lift shadow under coral buttons
        'secondary-soft': '#FDEDED', // coral tint — emphasis chips
        'on-secondary': '#FFFFFF',

        /* ── 3. ACCENT KIT ───────────── small doses, one meaning each ── */
        'accent-teal': '#00A9AA', //   learning & coaching
        'accent-teal-soft': '#E3F6F6',
        'accent-blue': '#3175BB', //   community & people
        'accent-blue-soft': '#E9F1FA',
        'accent-orange': '#F28321', // events & tournaments
        'accent-orange-soft': '#FEF2E4',
        'accent-green': '#6EAA43', //  progress & impact
        'accent-green-soft': '#EFF6E8',

        /* ── Surfaces — white-dominant ─────────────────────────────────── */
        background: '#FFFFFF',
        surface: '#FFFFFF',
        'surface-muted': '#F7F9FC', // alternating section bands
        'surface-sunken': '#EFF3F9', // footer, inset wells

        /* ── Text — navy family ────────────────────────────────────────── */
        'on-background': '#0E387D',
        'on-surface': '#0E387D',
        'on-surface-variant': '#4A5A78', // body copy, navy-tinted slate

        /* ── Lines ─────────────────────────────────────────────────────── */
        outline: '#B9C7DC',
        'outline-variant': '#DEE6F1',

        error: '#BA1A1A',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        gutter: '24px',
        'margin-desktop': '40px',
        'container-max': '1200px',
        'margin-mobile': '16px',
        base: '8px',
      },
      fontFamily: {
        'headline-lg': ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        'body-md': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        'body-lg': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        'headline-lg-mobile': ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        'headline-md': ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        'label-sm': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        'headline-xl': ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        'label-bold': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '800' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '500' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '800' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '600' }],
        'headline-xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'label-bold': ['14px', { lineHeight: '20px', fontWeight: '700' }],
      },
    },
  },
}
