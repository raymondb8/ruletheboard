import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site, home, metaForPath, absoluteUrl, fullTitle } from '../seo/meta';
import { pageGraph } from '../seo/schema';

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
    const imageAlt = `${site.name} share card: ${meta.title}`;

    document.title = title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow');
    upsertCanonical(canonical);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');
    upsertMeta('property', 'og:image:alt', imageAlt);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', site.name);
    upsertMeta('property', 'og:locale', site.locale);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', image);
    upsertMeta('name', 'twitter:image:alt', imageAlt);

    // One JSON-LD graph per page (Organization, WebSite, WebPage, breadcrumbs,
    // and anything page-specific), built by the same function the prerender
    // step uses, so the two can't disagree.
    let graph = document.head.querySelector('script[data-seo="graph"]');
    if (!graph) {
      graph = document.createElement('script');
      graph.setAttribute('type', 'application/ld+json');
      graph.setAttribute('data-seo', 'graph');
      document.head.appendChild(graph);
    }
    graph.textContent = JSON.stringify(pageGraph(meta, home));
  }, [pathname]);

  return null;
}
