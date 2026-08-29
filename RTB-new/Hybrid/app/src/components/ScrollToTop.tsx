import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // A hash means the visitor followed a nav sub-tab to a section anchor.
    // Wait a frame so the target section is mounted after a route change,
    // then let its `scroll-mt` clear the sticky header.
    if (hash) {
      const id = hash.slice(1);
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo(0, 0);
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
