import type { ImageName } from '../assets/images';

/**
 * The people who run Rule the Board, in the order they appear on the About
 * page. Shared with src/seo/schema.ts, which turns this into Person entries on
 * the Organization's structured data, so a change here updates both.
 *
 * `founder` marks the three who started it (the same three in the founders
 * photo on the About page).
 *
 * `photo` is the key of a headshot in src/assets/images. Only some of the team
 * have supplied one; everyone else falls back to the piece glyph on the About
 * page, so this stays optional rather than becoming a required field with a
 * placeholder file behind it.
 */
export interface TeamMember {
  name: string;
  role: string;
  founder?: boolean;
  photo?: ImageName;
}

export const team: TeamMember[] = [
  {
    name: 'Leonardo Castro-Balbi',
    founder: true,
    role: 'Executive Director',
    photo: 'team-leonardo-castro-balbi',
  },
  { name: 'Nathan Ye', founder: true, role: 'Operations Director' },
  { name: 'Arjun Garg', founder: true, role: 'Education Director & Head Coach', photo: 'team-arjun-garg' },
  { name: 'Raymond Boamah', role: 'Technology Director' },
  { name: 'Abbie Yuan', role: 'Communications Director' },
  { name: 'Evelyn Wood', role: 'Creative Director' },
  { name: 'Armaan Dhawan', role: 'Director of Development' },
  { name: 'Sammy Drucker', role: 'Programs Director & Lead Coach' },
  { name: 'David Katz', role: 'Lead Coach' },
];

/** How the About page groups the grid: founders, then directors, then coaches. */
export const teamRows: TeamMember[][] = [team.slice(0, 3), team.slice(3, 7), team.slice(7)];

export const founders = team.filter((m) => m.founder);
