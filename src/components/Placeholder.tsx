import type { ReactNode } from 'react';

/**
 * Replaces the raw "[Date — TBD]" bracket convention used throughout the
 * placeholder copy. The square brackets read as dev leftovers; this renders
 * the same words with a dashed underline instead, which is a familiar "draft
 * value" affordance without looking unfinished.
 *
 * Wording is untouched — "Date — TBD", "confirm with team", "pending
 * publication" all still say exactly what's missing. Only the punctuation
 * around it changes.
 *
 * `tone`:
 *   - 'text' (default) — italic, muted, dashed underline. For placeholder
 *     copy inside prose, labels, and captions (dates, locations, fees, names,
 *     deadlines) — text that has room below it before the next element.
 *   - 'stat' — no italic, full opacity, NO underline. For large standalone
 *     display numbers (About's impact tiles, Programs' outcome figures, the
 *     homepage stat row) that sit directly above a caption one line below:
 *     the dashed rule collided with that caption and read as a stray broken
 *     line rather than a placeholder cue, so large numerals skip it entirely
 *     and rely on their surrounding context (an icon, a label, a chip) to
 *     signal "placeholder" instead.
 */
export default function Placeholder({
  children,
  tone = 'text',
  className = '',
}: {
  children: ReactNode;
  tone?: 'text' | 'stat';
  className?: string;
}) {
  return (
    <span
      className={`${tone === 'text' ? 'italic opacity-70 border-b-2 border-dashed border-current/35' : ''} ${className}`}
    >
      {children}
    </span>
  );
}
