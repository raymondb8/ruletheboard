/**
 * Partners and sponsors shown in the scrolling bar on the homepage, in the
 * order they appear. `logo` is optional: an entry without one renders as its
 * name in type, so a new partner can go up before we have their artwork.
 */
export interface Partner {
  name: string;
  href: string;
  /** Imported image URL (see src/assets/partners/). Omit to render the name as text. */
  logo?: string;
}

export const partners: Partner[] = [
  { name: 'Glenn', href: '#' },
  { name: 'Kid Chess', href: 'https://www.kidchess.com' },
  { name: 'US Chess', href: 'https://new.uschess.org' },
  { name: 'Chess.com', href: 'https://www.chess.com' },
  { name: 'Odyssey Atlanta', href: 'https://www.odysseyatlanta.com' },
];
