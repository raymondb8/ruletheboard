import { useEffect, useRef } from 'react';

/**
 * Counts an element's text from 0 up to `target` once, starting when `start`
 * flips true (driven by an IntersectionObserver at the call site, so it fires
 * on scroll-into-view rather than on mount). Runs once and holds at `target` —
 * it does not reset if the section scrolls out and back in, which would read
 * as a glitch on a second pass rather than a deliberate reveal.
 *
 * The element renders with its final number already in the markup and this
 * hook drives `textContent` directly instead of keeping the number in state.
 * That is what lets the prerendered HTML carry the real figure — a crawler, or
 * a visitor whose JS never arrives, reads "212" rather than "0" — and it keeps
 * server and client markup identical for hydration. Format with an explicit
 * locale so Node and the browser agree on the thousands separator.
 *
 * Respects prefers-reduced-motion by leaving the final value in place.
 */
export const formatCount = (n: number) => n.toLocaleString('en-US');

export default function useCountUp<T extends HTMLElement>(target: number, start: boolean, duration = 1200) {
  const ref = useRef<T>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!start || done.current || !el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      done.current = true;
      return;
    }

    let raf: number;
    const t0 = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - (1 - progress) ** 3; // ease-out-cubic
      el.textContent = formatCount(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        done.current = true;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.textContent = formatCount(target);
    };
  }, [start, target, duration]);

  return ref;
}
