// Central sitemap: single source of truth for paths, so Nav and Footer
// never drift out of sync with each other or with the router config.
// Each nav section is one page; sub-items are anchor sections within it.
export const paths = {
  home: '/',
  about: '/about',
  ourStory: '/about#story',
  team: '/about#team',
  impact: '/about#impact',
  getInvolved: '/get-involved',
  coach: '/get-involved#coach',
  donate: '/get-involved#donate',
  squad: '/get-involved#squad',
  programs: '/programs',
  ruleTheBoard: '/programs#rule-the-board',
  checkmateSummer: '/programs#checkmate-your-summer',
  events: '/events',
  tournaments: '/events#tournaments',
  faq: '/events#faq',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navConfig: NavItem[] = [
  { label: 'Home', href: paths.home },
  { label: 'Our Story', href: paths.about },
  { label: 'Join the Fun!', href: paths.getInvolved },
  { label: 'Cool Programs', href: paths.programs },
  { label: 'Big Events', href: paths.events },
];
