/*
 * Brand texture.
 *
 * Deliberately just THREE recurring elements, reused site-wide, so the page has
 * rhythm without turning into a scrapbook. Anything new should reuse one of
 * these rather than invent a fourth:
 *
 *   1. WaveDivider — the transition between two stacked section bands, in place
 *      of a flat 1px border. Always paints the colour of the band BELOW it.
 *   2. DotField — a tiled dot texture in the four accent colours, at very low
 *      opacity, used only as a background wash in bands that are otherwise
 *      empty. Never over a photo or a card.
 *   3. DashedRule — a short dashed underline that sits beneath a section
 *      headline. One per section heading at most.
 *
 * All flat: no gradients, no shadows, no 3D.
 */

type DecorProps = {
  className?: string;
};

const hidden = { 'aria-hidden': true, focusable: false } as const;

/**
 * Soft wave marking a section boundary. Renders as a block element between two
 * sections; `className` sets the fill via a text colour, which must match the
 * background of the section BELOW the wave.
 *
 * Pass `flip` to mirror it vertically when moving from a tinted band back to
 * white, so consecutive waves do not all curve the same way.
 */
export function WaveDivider({ className = '', flip = false }: DecorProps & { flip?: boolean }) {
  return (
    <div className={`w-full leading-[0] ${className}`} {...hidden}>
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className={`w-full h-[28px] md:h-[40px] fill-current ${flip ? 'rotate-180' : ''}`}
      >
        <path d="M0 18c180 26 360 26 540 8s360-26 540-6 240 26 360 20v20H0z" />
      </svg>
    </div>
  );
}

/**
 * Tiled dot texture in the four accent colours. Absolutely positioned, so the
 * parent needs `relative`; keep it behind content with a negative z-index or by
 * declaring it before the content.
 */
export function DotField({ className = '' }: DecorProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} {...hidden}>
      <svg className="w-full h-full" aria-hidden>
        <defs>
          <pattern id="rtb-dots" width="72" height="72" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="3.5" className="fill-accent-teal" />
            <circle cx="46" cy="26" r="3.5" className="fill-accent-orange" />
            <circle cx="22" cy="52" r="3.5" className="fill-accent-blue" />
            <circle cx="60" cy="62" r="3.5" className="fill-accent-green" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rtb-dots)" />
      </svg>
    </div>
  );
}

/** Short dashed underline for a section headline. Inherits colour from text-*. */
export function DashedRule({ className = '' }: DecorProps) {
  return (
    <svg viewBox="0 0 96 4" className={`h-[4px] w-24 ${className}`} {...hidden}>
      <line
        x1="2"
        y1="2"
        x2="94"
        y2="2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="1 12"
      />
    </svg>
  );
}
