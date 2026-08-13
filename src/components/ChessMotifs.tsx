import type { ReactNode } from 'react';
import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen } from 'react-icons/fa6';

/*
 * Chess motif kit.
 *
 * The pieces are Font Awesome 6 icons (react-icons/fa6), wrapped here so that
 * every page imports them from one place and the color binding below is the
 * only place a piece gets a color. They paint with `currentColor`, so callers
 * tint them with the normal `text-accent-*` tokens — never a hardcoded hex, and
 * never a gradient.
 *
 * Fixed color binding. The repetition is what makes the decoration read as one
 * system rather than as scattered ornament, so do not reassign these:
 *
 *   Pawn   → teal   #00A9AA
 *   Rook   → blue   #3175BB
 *   Knight → orange #F28321
 *   Bishop → green  #6EAA43
 *   Queen  → navy (brand primary) — the one piece that is not an accent, used
 *            where a motif needs to feel like the brand rather than decoration.
 *            The King is deliberately absent: that is the logo's own piece, and
 *            reproducing it in the page would compete with the lockup.
 *
 * PLACEMENT RULE: these decorate WHITESPACE, not content. They go in the empty
 * gutters beside narrow content columns via MarginMotif (bottom of this file),
 * or as low-opacity background elements inside otherwise empty bands. They never
 * go inside cards, icon wells, chips, or next to a line of type — content keeps
 * its own iconography.
 *
 * Sizes should be square (w-24 h-24), since forcing a non-square box distorts
 * the Font Awesome viewBoxes.
 */

type MotifProps = {
  className?: string;
};

const hidden = { 'aria-hidden': true, focusable: false } as const;

export function Pawn({ className }: MotifProps) {
  return <FaChessPawn className={className} {...hidden} />;
}

export function Rook({ className }: MotifProps) {
  return <FaChessRook className={className} {...hidden} />;
}

export function Knight({ className }: MotifProps) {
  return <FaChessKnight className={className} {...hidden} />;
}

export function Bishop({ className }: MotifProps) {
  return <FaChessBishop className={className} {...hidden} />;
}

export function Queen({ className }: MotifProps) {
  return <FaChessQueen className={className} {...hidden} />;
}

/*
 * Checkerboard fragment and the logo's spark detail. These stay hand-drawn:
 * neither exists in the Font Awesome chess set, and the sparks in particular are
 * lifted straight off the brand lockup rather than borrowed from an icon pack.
 */

/** Two-row fragment of a board edge — always green + teal. */
export function CheckerStrip({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 47 23" className={className} {...hidden}>
      <rect x="0" y="0" width="11" height="11" rx="2.5" className="fill-accent-green" />
      <rect x="24" y="0" width="11" height="11" rx="2.5" className="fill-accent-green" />
      <rect x="12" y="12" width="11" height="11" rx="2.5" className="fill-accent-teal" />
      <rect x="36" y="12" width="11" height="11" rx="2.5" className="fill-accent-teal" />
    </svg>
  );
}

/**
 * The logo's sparkle detail: three tapered rays radiating from an implied
 * center. Never used alone and never beside text or buttons — it appears only
 * as part of a MarginMotif, which is how the logo itself uses it: sparks
 * radiating off a piece, out in open space.
 */
export function SparkTrio({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...hidden}>
      <path
        className="fill-accent-teal"
        d="M4.4 24.2a1.7 1.7 0 0 1-.5-2.4l4.2-6.4a2.4 2.4 0 1 1 4 2.6l-5.3 5.7a1.7 1.7 0 0 1-2.4.5z"
      />
      <path
        className="fill-accent-blue"
        d="M13.6 6.2a1.7 1.7 0 0 1 2.3-.7l6.6 3.8a2.4 2.4 0 1 1-2.4 4.2l-6-4.9a1.7 1.7 0 0 1-.5-2.4z"
      />
      <path
        className="fill-accent-orange"
        d="M28.2 25.6a2.4 2.4 0 1 1 3.2-3.6l4.4 3.9a1.7 1.7 0 0 1-1.7 2.9l-5.9-3.2z"
      />
    </svg>
  );
}

/*
 * MarginMotif — the ONLY way a decorative piece gets onto a page.
 *
 * It parks a piece plus its spark cluster in the empty gutter beside a narrow
 * content column. Rules baked in so decoration can never creep into content:
 *
 *   - absolutely positioned and pointer-events-none, so it never affects layout
 *   - hidden below xl, where there is no spare gutter to fill and it would
 *     collide with the text instead of framing it
 *   - aria-hidden, because it carries no information
 *
 * The parent section must be `relative`.
 */
export function MarginMotif({
  side,
  piece,
  className = '',
}: {
  side: 'left' | 'right';
  piece: ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none hidden xl:block absolute ${
        side === 'left' ? 'left-0' : 'right-0'
      } ${className}`}
    >
      <div className="relative">
        {piece}
        <SparkTrio
          className={`absolute w-10 h-10 ${side === 'left' ? '-right-7 -top-5' : '-left-7 -top-5'}`}
        />
      </div>
    </div>
  );
}
