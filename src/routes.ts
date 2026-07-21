// Central sitemap: single source of truth for paths, so Nav and Footer
// never drift out of sync with each other or with the router config.
// Each nav section is one page; sub-items are anchor sections within it.
export const paths = {
  home: '/',
  about: '/about',
  aboutTeam: '/about#team',
  whatWeDo: '/about#what-we-do',
  impactReports: '/about#impact-reports',
  getInvolved: '/get-involved',
  volunteer: '/get-involved#volunteer',
  community: '/get-involved#community',
  contact: '/get-involved#contact',
  donate: '/donate',
  programs: '/programs',
  ruleTheBoard: '/programs#rule-the-board',
  checkmateSummer: '/programs#checkmate-your-summer',
  events: '/events',
  tournament: '/events#tournament',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navConfig: NavItem[] = [
  { label: 'About Us', href: paths.about },
  { label: 'Get Involved', href: paths.getInvolved },
  { label: 'Programs', href: paths.programs },
  { label: 'Events', href: paths.events },
];
