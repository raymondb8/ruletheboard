import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site, metaForPath, absoluteUrl, fullTitle, breadcrumbSchema } from '../seo/meta';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Keeps the document head in sync with the current route.
 *
 * Copy lives in `src/seo/pages.json`, not here — `scripts/prerender.mjs` reads
 * the same file at build time and bakes these tags into a static HTML file per
 * route. That's the version crawlers and link unfurlers actually read, since
 * most of them never run JS. This component only matters for client-side
 * navigation after the first paint, so the two must never drift; sharing one
 * JSON file is what guarantees that.
 *
 * Rendered once in Layout, so no page has to remember to include it.
 */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaForPath(pathname);
    const title = fullTitle(meta);
    const canonical = absoluteUrl(meta.path === '/404' ? pathname : meta.path);
    const image = absoluteUrl(meta.image ?? site.defaultImage);

    document.title = title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow');
    upsertCanonical(canonical);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', site.name);
    upsertMeta('property', 'og:locale', site.locale);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', image);

    let crumbs = document.head.querySelector('script[data-seo="breadcrumb"]');
    if (!crumbs) {
      crumbs = document.createElement('script');
      crumbs.setAttribute('type', 'application/ld+json');
      crumbs.setAttribute('data-seo', 'breadcrumb');
      document.head.appendChild(crumbs);
    }
    crumbs.textContent = JSON.stringify(breadcrumbSchema(meta));
  }, [pathname]);

  return null;
}
