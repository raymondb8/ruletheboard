import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import useMicroInteractions from '../hooks/useMicroInteractions';

export default function Layout() {
  useMicroInteractions();

  return (
    <div className="relative bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <ScrollToTop />
      <a
        href="#main"
        className="skip-link bg-primary text-on-primary font-label-bold text-label-bold px-5 py-3 rounded-br-xl"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
