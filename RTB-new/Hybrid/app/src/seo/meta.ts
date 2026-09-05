import config from './pages.json';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  breadcrumb: string;
  noindex?: boolean;
  image?: string;
}

export const site = config.site;
export const pages = config.pages as PageMeta[];

/** Every indexable route, in sitemap order. */
export const indexablePages = pages.filter((p) => !p.noindex);

const NOT_FOUND = pages.find((p) => p.path === '/404') as PageMeta;

/**
 * Resolves a pathname to its metadata. Unknown paths fall through to the 404
 * entry, which mirrors what the router itself does with an unmatched route —
 * so a mistyped URL never inherits the previous page's title.
 */
export function metaForPath(pathname: string): PageMeta {
  // Trailing slashes are equivalent everywhere except the root itself.
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return pages.find((p) => p.path === normalized) ?? NOT_FOUND;
}

export function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith('http')) return pathOrUrl;
  return `${site.url}${pathOrUrl}`;
}

export function fullTitle(meta: PageMeta): string {
  return meta.path === '/' ? `${site.name} | ${meta.title}` : `${meta.title} | ${site.name}`;
}

/**
 * Breadcrumb trail for a page: Home > Page. Google uses this to render the
 * site-section path in place of a raw URL in search results.
 */
export function breadcrumbSchema(meta: PageMeta) {
  const home = pages.find((p) => p.path === '/') as PageMeta;
  const trail = meta.path === '/' ? [home] : [home, meta];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.breadcrumb,
      item: absoluteUrl(entry.path),
    })),
  };
}
