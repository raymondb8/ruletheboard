/**
 * The people who run Rule the Board, in the order they appear on the About
 * page. Shared with src/seo/schema.ts, which turns this into Person entries on
 * the Organization's structured data, so a change here updates both.
 *
 * `founder` marks the three who started it (the same three in the founders
 * photo on the About page).
 */
export interface TeamMember {
  name: string;
  role: string;
  founder?: boolean;
}

export const team: TeamMember[] = [
  { name: 'Leonardo Castro-Balbi', founder: true, role: 'Executive Director' },
  { name: 'Nathan Ye', founder: true, role: 'Operations Director' },
  { name: 'Arjun Garg', founder: true, role: 'Education Director & Head Coach' },
  { name: 'Raymond Boamah', role: 'Technology Director' },
  { name: 'Abbie Yuan', role: 'Communications Director' },
  { name: 'Evelyn Wood', role: 'Creative Director' },
  { name: 'Armaan Dhawan', role: 'Director of Development' },
  { name: 'Sammy Drucker', role: 'Lead Coach' },
  { name: 'David Katz', role: 'Lead Coach' },
];

/** How the About page groups the grid: founders, then directors, then coaches. */
export const teamRows: TeamMember[][] = [team.slice(0, 3), team.slice(3, 7), team.slice(7)];

export const founders = team.filter((m) => m.founder);
