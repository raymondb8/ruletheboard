import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';

// Only the homepage ships in the main bundle. Every other page is its own
// chunk, fetched when first navigated to — a visitor landing on / doesn't pay
// to download the tournament guide. Each prerendered page adds a
// <link rel="modulepreload"> for its own chunk (scripts/prerender.mjs reads the
// Vite manifest), so a direct visit to /about doesn't waterfall either. At
// build time src/entry-server.tsx renders with react-dom/static, which waits
// for these to load rather than emitting a Suspense fallback into the HTML.
const About = lazy(() => import('./pages/About'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const Programs = lazy(() => import('./pages/Programs'));
const Scholars = lazy(() => import('./pages/Scholars'));
const Trainers = lazy(() => import('./pages/Trainers'));
const NotFound = lazy(() => import('./pages/NotFound'));
const LegalPending = lazy(() => import('./pages/LegalPending'));
const TournamentGuide = lazy(() => import('./pages/TournamentGuide'));

function App() {
  return (
    // Wraps the router, so a throw inside any page or inside Layout itself
    // still lands on the branded error screen rather than a blank page.
    <ErrorBoundary>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="programs" element={<Programs />} />
          <Route path="scholars" element={<Scholars />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="tournament-guide" element={<TournamentGuide />} />
          <Route path="privacy" element={<LegalPending title="Privacy Policy" />} />
          {/* Every unmatched path. In production this branch is prerendered to
              dist/404.html, which Vercel serves with a real 404 status for any
              URL that has no file of its own (there is deliberately no SPA
              catch-all rewrite — see vercel.json and the README). It also
              catches bad links followed client-side. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
