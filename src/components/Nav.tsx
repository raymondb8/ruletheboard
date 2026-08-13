import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoFull from '../assets/rtb-full.png';
import logoIcon from '../assets/rtb-icon.png';
import { Pawn, CheckerStrip } from './ChessMotifs';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/programs', label: 'Programs' },
  { to: '/scholars', label: 'Scholars' },
];

/**
 * The desktop bar switches in at `lg` (1024px) rather than `md`. At 768px the
 * five links technically fitted, but with only ~24px of clearance before the
 * Donate button — tablets get the roomier panel instead.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on navigation, so following a link never leaves the panel hanging.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock background scroll while the panel covers the screen.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape closes; Tab is trapped inside the panel while it is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button');
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      // The toggle sits outside the panel but stays part of the loop, so
      // shift-tabbing off the first link lands back on the button.
      if (event.shiftKey && (active === first || active === toggleRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Move focus into the panel on open so a keyboard user lands where they expect.
  useEffect(() => {
    if (!open) return;
    const first = panelRef.current?.querySelector<HTMLElement>('a[href], button');
    first?.focus();
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-outline-variant">
      {/* relative z-50 keeps the bar above the panel: the panel is a later
          sibling inside this same stacking context, so without it the panel
          would paint over the logo and the close button. */}
      <div className="relative z-50 bg-background flex justify-between items-center gap-4 px-margin-mobile md:px-margin-desktop py-3 w-full max-w-container-max mx-auto">
        {/* Icon-only mark on the narrowest screens, where the full lockup would
            be squeezed against the Donate button; full lockup from 400px up. */}
        <NavLink to="/" aria-label="Rule the Board — home" className="flex items-center shrink-0">
          <img src={logoIcon} alt="" className="h-11 w-auto min-[400px]:hidden" />
          <img src={logoFull} alt="" className="hidden min-[400px]:block h-10 md:h-12 w-auto" />
        </NavLink>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-bold border-b-2 border-secondary pb-1 font-label-bold text-label-bold transition-all duration-200'
                  : 'text-on-surface-variant font-medium font-label-bold text-label-bold hover:text-primary transition-colors duration-200'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/get-involved"
            className="focus-ring-invert tactile-button bg-secondary-strong text-on-secondary px-5 sm:px-6 py-2.5 rounded-xl font-label-bold text-label-bold tracking-wider"
          >
            DONATE
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden w-11 h-11 -mr-1 flex items-center justify-center rounded-xl text-primary hover:bg-primary-soft transition-colors"
          >
            {/* Three bars morphing into an X. */}
            <span className="relative block w-6 h-4" aria-hidden="true">
              <span
                className={`absolute left-0 block h-[3px] w-6 rounded-full bg-current transition-transform duration-200 ${
                  open ? 'top-[7px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[3px] w-6 rounded-full bg-current transition-opacity duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-[3px] w-6 rounded-full bg-current transition-transform duration-200 ${
                  open ? 'top-[7px] -rotate-45' : 'top-[14px]'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Full-screen panel. Kept mounted so it animates both ways; `inert` keeps
          it fully out of the tab order and the a11y tree while closed. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        data-open={open}
        inert={!open}
        className="menu-panel lg:hidden fixed inset-0 z-40 bg-background overflow-y-auto"
      >
        {/* pt clears the sticky header, which paints above this at z-50. */}
        <nav aria-label="Mobile" className="flex flex-col px-margin-mobile md:px-margin-desktop pt-28 pb-10">
          {links.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={{ transitionDelay: open ? `${60 + index * 40}ms` : '0ms' }}
              className={({ isActive }) =>
                `menu-item font-headline-lg text-headline-lg py-4 border-b border-outline-variant ${
                  isActive ? 'text-primary' : 'text-on-surface-variant'
                }`
              }
            >
              {({ isActive }) => (
                <span className="flex items-center gap-4">
                  <span
                    className={`h-7 w-1.5 rounded-full shrink-0 ${
                      isActive ? 'bg-secondary' : 'bg-transparent'
                    }`}
                  />
                  {link.label}
                </span>
              )}
            </NavLink>
          ))}

          <div
            className="menu-item mt-10"
            style={{ transitionDelay: open ? `${60 + links.length * 40}ms` : '0ms' }}
          >
            <CheckerStrip className="w-[47px] h-[23px] mb-6" />
            <Link
              to="/get-involved"
              className="focus-ring-invert tactile-button bg-secondary-strong text-on-secondary block w-full text-center py-4 rounded-2xl font-label-bold text-label-bold tracking-widest uppercase"
            >
              Donate
            </Link>
          </div>
        </nav>

        {/* Reuses the same two decorative elements as the rest of the site
            rather than introducing a menu-only flourish. */}
        <Pawn className="pointer-events-none absolute bottom-6 right-6 w-24 h-24 text-accent-teal/30" />
      </div>
    </header>
  );
}
