import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';
import Programs from './pages/Programs';
import Scholars from './pages/Scholars';
import NotFound from './pages/NotFound';
import LegalPending from './pages/LegalPending';
import TournamentGuide from './pages/TournamentGuide';

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
          <Route path="tournament-guide" element={<TournamentGuide />} />
          <Route path="privacy" element={<LegalPending title="Privacy Policy" />} />
          <Route path="terms" element={<LegalPending title="Terms of Service" />} />
          {/* Every unmatched path. Vercel rewrites all URLs to index.html, so
              a genuine bad URL arrives here rather than at a server 404. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
