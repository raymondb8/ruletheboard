import config from './pages.json';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  breadcrumb: string;
  noindex?: boolean;
  image?: string;
  /** ISO dates (YYYY-MM-DD). Feed Article/WebPage schema and the sitemap's lastmod. */
  datePublished?: string;
  dateModified?: string;
}

export const site = config.site;
export const pages = config.pages as PageMeta[];

/** Every indexable route, in sitemap order. */
export const indexablePages = pages.filter((p) => !p.noindex);

const NOT_FOUND = pages.find((p) => p.path === '/404') as PageMeta;
export const home = pages.find((p) => p.path === '/') as PageMeta;

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
