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
  { name: 'Abbie Yuan', role: 'Communications Director' },
  { name: 'Raymond Boamah', role: 'Technology Director' },
  { name: 'Evelyn Wood', role: 'Creative Director' },
  { name: 'David Katz', role: 'Lead Coach' },
  { name: 'Sammy Drucker', role: 'Lead Coach' },
  { name: 'Armaan Dhawan', role: 'Director of Development' },
];

export const founders = team.filter((m) => m.founder);
