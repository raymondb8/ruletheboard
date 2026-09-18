import glennInstitute from '../assets/partners/glenn-institute.png';
import kidChess from '../assets/partners/kid-chess.png';
import usChess from '../assets/partners/us-chess.svg';
import chessCom from '../assets/partners/chess-com.svg';
import odysseyAtlanta from '../assets/partners/odyssey-atlanta.png';

/**
 * Partners and sponsors shown in the scrolling bar on the homepage, in the
 * order they appear. `logo` is optional: an entry without one renders as its
 * name in type, so a new partner can go up before we have their artwork.
 *
 * Logo sources (originals for the raster ones live in raw-media/):
 * - Glenn Institute: the Glenn Cats badge the team supplied.
 * - Kid Chess: their site header logo.
 * - US Chess: the SVG from uschess.org.
 * - Chess.com: the flat outline wordmark from Wikimedia Commons.
 * - Odyssey: their white header logo, filled navy so it reads on white.
 *
 * width/height are the file's intrinsic pixels (or SVG viewBox) so the <img>
 * reserves its box before loading, same as the photos elsewhere on the site.
 */
export interface PartnerLogo {
  src: string;
  width: number;
  height: number;
}

export interface Partner {
  name: string;
  href: string;
  logo?: PartnerLogo;
}

export const partners: Partner[] = [
  {
    name: 'The Glenn Institute at Westminster',
    href: 'https://www.westminster.net/catalysts/the-glenn-institute',
    logo: { src: glennInstitute, width: 336, height: 336 },
  },
  { name: 'Kid Chess', href: 'https://www.kidchess.com', logo: { src: kidChess, width: 204, height: 126 } },
  { name: 'US Chess Federation', href: 'https://new.uschess.org', logo: { src: usChess, width: 256, height: 182 } },
  { name: 'Chess.com', href: 'https://www.chess.com', logo: { src: chessCom, width: 1266, height: 400 } },
  {
    name: 'Odyssey Atlanta',
    href: 'https://www.odysseyatlanta.com',
    logo: { src: odysseyAtlanta, width: 640, height: 287 },
  },
];
