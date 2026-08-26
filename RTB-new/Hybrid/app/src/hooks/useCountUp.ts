import { useEffect, useRef, useState } from 'react';

/**
 * Animates 0 -> target once, starting when `start` flips true (driven by an
 * IntersectionObserver at the call site, so it fires on scroll-into-view
 * rather than on mount). Runs once and holds at `target` — it does not reset
 * if the section scrolls out and back in, which would read as a glitch on a
 * second pass rather than a deliberate reveal.
 *
 * Respects prefers-reduced-motion by skipping straight to the final value.
 */
export default function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!start || done.current) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      done.current = true;
      return;
    }

    let raf: number;
    const t0 = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - (1 - progress) ** 3; // ease-out-cubic
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        done.current = true;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}
