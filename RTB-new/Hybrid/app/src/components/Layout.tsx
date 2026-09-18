import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Seo from './Seo';
import useMicroInteractions from '../hooks/useMicroInteractions';

export default function Layout() {
  useMicroInteractions();

  return (
    <div className="relative bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <Seo />
      <ScrollToTop />
      <a
        href="#main"
        className="skip-link bg-primary text-on-primary font-label-bold text-label-bold px-5 py-3 rounded-br-xl"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} className="flex-grow">
        {/* Pages other than Home are lazy chunks (see App.tsx). The fallback is
            null on purpose: React Router wraps navigation in a transition, so
            the current page stays on screen until the next chunk is ready, and
            on first load the server-rendered HTML is already in place. */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
