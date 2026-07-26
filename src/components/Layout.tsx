import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import useMicroInteractions from '../hooks/useMicroInteractions';

export default function Layout() {
  useMicroInteractions();

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <ScrollToTop />
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
