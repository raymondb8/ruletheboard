import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App';

// The prerender script is plain Node and can't import TypeScript, so the SEO
// helpers it needs ride along in this bundle. One implementation, two callers.
export { site, pages, home, fullTitle, absoluteUrl } from './seo/meta';
export { pageGraph } from './seo/schema';

/**
 * Build-time entry point. `vite build --ssr` compiles this to
 * dist-ssr/entry-server.js, and scripts/prerender.mjs calls render() once per
 * route in src/seo/pages.json, writing the result into #root of each
 * dist/<route>/index.html. The browser then hydrates that markup (main.tsx)
 * instead of rendering from an empty div, so the first paint is the real page
 * and crawlers that never run JS still read every word of it.
 *
 * Anything that touches window/document must stay inside an effect — this
 * runs in Node, where neither exists.
 */
export async function render(url: string): Promise<string> {
  const tree = (
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );

  // Two passes, on purpose. Pages are lazy() chunks (App.tsx). The first pass
  // uses react-dom/static's prerender, which waits for every chunk to load —
  // but it emits any boundary that settled after the shell as a hidden
  // segment plus an inline script that reveals it, so without JS that content
  // would stay hidden. Once the chunks are resolved, lazy() renders
  // synchronously, and the second pass with renderToString produces plain
  // markup with no runtime scripts. scripts/prerender.mjs fails the build if a
  // fallback or reveal script ever shows up in the output anyway.
  await new Response((await prerender(tree)).prelude).text();
  return renderToString(tree);
}
