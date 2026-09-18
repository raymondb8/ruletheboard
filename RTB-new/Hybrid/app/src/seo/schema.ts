import { site, absoluteUrl, fullTitle, type PageMeta } from './meta';
import { team, founders } from '../data/team';
import { faqs } from '../data/faqs';

/**
 * Structured data (schema.org JSON-LD) for every page, built as one connected
 * graph rather than a pile of separate <script> tags. Every node has an @id and
 * refers to the others by it, so a crawler reads "this WebPage is part of this
 * WebSite, published by this Organization, whose founders are these people"
 * as one entity instead of four unrelated blobs.
 *
 * Two consumers, same output: scripts/prerender.mjs bakes it into the static
 * HTML at build time (the copy crawlers actually read), and <Seo /> swaps it on
 * client-side navigation. Anything page-specific keys off `page.path`, and the
 * facts come from the same modules the pages render from (src/data/*), so the
 * schema cannot describe something the page doesn't say.
 *
 * Deliberately absent: nonprofitStatus/taxID (unconfirmed; a wrong claim is
 * worse than none), postal address (not published anywhere on the site), and
 * DonateAction (online giving isn't live yet). Add each when it becomes true.
 */

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const personId = (name: string) => `${site.url}/about#${slug(name)}`;

const organization = {
  '@type': ['NGO', 'EducationalOrganization'],
  '@id': ORG_ID,
  name: site.name,
  alternateName: 'Rule the Board Inc',
  url: site.url,
  logo: {
    '@type': 'ImageObject',
    url: `${site.url}/favicon-512.png`,
    width: 512,
    height: 512,
  },
  image: absoluteUrl(site.defaultImage),
  description:
    'Rule the Board is a nonprofit chess scholarship in Atlanta. We give students in grades 3-8 from underserved communities coaching, a chess set of their own, and paid entries to rated tournaments.',
  slogan: 'Building grandmasters of life through the timeless game of chess.',
  email: 'RuleTheBoardInc@gmail.com',
  foundingDate: '2025',
  areaServed: {
    '@type': 'City',
    name: 'Atlanta',
    containedInPlace: { '@type': 'State', name: 'Georgia' },
  },
  knowsAbout: ['Chess', 'Chess education', 'Scholastic chess tournaments', 'Youth mentorship', 'Scholarships'],
  sameAs: ['https://www.instagram.com/ruletheboardinc'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'RuleTheBoardInc@gmail.com',
    contactType: 'general inquiries',
    availableLanguage: 'English',
  },
  founder: founders.map((m) => ({ '@id': personId(m.name) })),
  member: team.map((m) => ({ '@id': personId(m.name) })),
};

const people = team.map((m) => ({
  '@type': 'Person',
  '@id': personId(m.name),
  name: m.name,
  jobTitle: m.role,
  affiliation: { '@id': ORG_ID },
  url: `${site.url}/about#our-team`,
}));

const website = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: site.url,
  name: site.name,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-US',
};

export function breadcrumbSchema(page: PageMeta, home: PageMeta) {
  const trail = page.path === '/' ? [home] : [home, page];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(page.path)}#breadcrumb`,
    itemListElement: trail.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.breadcrumb,
      item: absoluteUrl(entry.path),
    })),
  };
}

/** The two programs, described in the same words as the Programs page cards. */
function programSchemas() {
  const programsUrl = absoluteUrl('/programs');
  return [
    {
      '@type': 'EducationalOccupationalProgram',
      '@id': `${programsUrl}#scholarship`,
      name: 'Rule the Board Scholarship',
      description:
        'A one-year chess scholarship for Odyssey scholars in grades 3-8 who want to keep going with chess: biweekly or weekly lessons with optional office hours, up to three paid tournament entries, a one-year USCF membership, and a professional chess set of their own.',
      url: absoluteUrl('/scholars'),
      provider: { '@id': ORG_ID },
      programType: 'Chess scholarship',
      timeToComplete: 'P1Y',
      programPrerequisites:
        'Currently enrolled in grades 3-8 with demonstrated financial need. No prior chess experience or rating required.',
      offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
    },
    {
      '@type': 'EducationalOccupationalProgram',
      '@id': `${programsUrl}#checkmate-your-summer`,
      name: 'Checkmate Your Summer',
      description:
        'Our summer chess class at Odyssey Atlanta, where most scholars play their first real game of chess: group lessons on openings, tactics, and checkmates, guided puzzle solving, and over-the-board games against peers.',
      url: `${programsUrl}#programs`,
      provider: { '@id': ORG_ID },
      programType: 'Summer chess class',
      programPrerequisites: 'No prior experience required.',
      offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
    },
  ];
}

function faqSchema() {
  return faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  }));
}

/**
 * The full JSON-LD graph for one page. `home` is passed in rather than looked
 * up so this module stays free of any dependency on the pages list order.
 */
export function pageGraph(page: PageMeta, home: PageMeta) {
  const url = absoluteUrl(page.path);
  const image = absoluteUrl(page.image ?? site.defaultImage);
  const breadcrumb = breadcrumbSchema(page, home);

  const webPage: Record<string, unknown> = {
    '@type': page.path === '/about' ? 'AboutPage' : page.path === '/programs' ? 'FAQPage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: fullTitle(page),
    description: page.description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: image, width: 1200, height: 630 },
    breadcrumb: { '@id': breadcrumb['@id'] },
    inLanguage: 'en-US',
  };
  if (page.datePublished) webPage.datePublished = page.datePublished;
  if (page.dateModified) webPage.dateModified = page.dateModified;

  const extras: Record<string, unknown>[] = [];

  if (page.path === '/programs') {
    webPage.mainEntity = faqSchema();
    extras.push(...programSchemas());
  }

  if (page.path === '/tournament-guide') {
    extras.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: page.title,
      description: page.description,
      image,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      datePublished: page.datePublished,
      dateModified: page.dateModified,
      mainEntityOfPage: { '@id': webPage['@id'] },
      about: { '@type': 'Thing', name: 'Chess' },
      audience: { '@type': 'Audience', audienceType: 'Parents and students new to chess tournaments' },
      inLanguage: 'en-US',
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, ...people, website, webPage, breadcrumb, ...extras],
  };
}
