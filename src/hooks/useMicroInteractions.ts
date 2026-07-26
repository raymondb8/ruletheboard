import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Re-implements the per-page <script> micro-interactions from the original
 * static mockups (button press scale + scroll-reveal) as one shared,
 * route-aware effect instead of duplicating the same script on every page.
 */
export default function useMicroInteractions() {
  const { pathname } = useLocation();

  useEffect(() => {
    const press = (el: Element) => el.classList.add('scale-95');
    const release = (el: Element) => el.classList.remove('scale-95');

    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach((button) => {
      button.addEventListener('mousedown', () => press(button));
      button.addEventListener('mouseup', () => release(button));
      button.addEventListener('mouseleave', () => release(button));
    });

    const revealTargets = Array.from(document.querySelectorAll('main section'));
    revealTargets.forEach((el) => el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 },
    );
    revealTargets.forEach((el) => observer.observe(el));

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('mousedown', () => press(button));
        button.removeEventListener('mouseup', () => release(button));
        button.removeEventListener('mouseleave', () => release(button));
      });
      observer.disconnect();
    };
  }, [pathname]);
}
