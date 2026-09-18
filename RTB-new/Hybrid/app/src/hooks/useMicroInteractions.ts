import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HIDDEN = ['transition-all', 'duration-1000', 'opacity-0', 'translate-y-10'];

/**
 * Re-implements the per-page <script> micro-interactions from the original
 * static mockups (button press scale + scroll-reveal) as one shared,
 * route-aware effect instead of duplicating the same script on every page.
 *
 * The page arrives from the server fully visible (scripts/prerender.mjs) and
 * this runs after hydration, so anything already on screen has to be left
 * alone: hiding it here would make the hero blink out and fade back in a beat
 * after it first painted, and it would put the LCP element at opacity 0.
 * Only sections that start below the fold get the hidden state, and none do
 * when the visitor has asked for reduced motion.
 */
export default function useMicroInteractions() {
  const { pathname } = useLocation();

  useEffect(() => {
    // One signal tears down every listener, so a route change can't leave the
    // previous page's handlers attached.
    const controller = new AbortController();
    const { signal } = controller;

    document.querySelectorAll('button').forEach((button) => {
      button.addEventListener('mousedown', () => button.classList.add('scale-95'), { signal });
      button.addEventListener('mouseup', () => button.classList.remove('scale-95'), { signal });
      button.addEventListener('mouseleave', () => button.classList.remove('scale-95'), { signal });
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => controller.abort();
    }

    const fold = window.innerHeight;
    const revealTargets = Array.from(document.querySelectorAll('main section')).filter(
      (el) => el.getBoundingClientRect().top >= fold,
    );
    revealTargets.forEach((el) => el.classList.add(...HIDDEN));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    revealTargets.forEach((el) => observer.observe(el));

    return () => {
      controller.abort();
      observer.disconnect();
    };
  }, [pathname]);
}
