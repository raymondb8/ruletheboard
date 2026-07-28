import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/programs', label: 'Programs' },
  { to: '/scholars', label: 'Scholars' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-outline-variant">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
        <NavLink to="/" className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-secondary text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            chess
          </span>
          <span className="text-headline-md font-headline-md text-primary">Rule the Board</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-secondary font-bold border-b-2 border-secondary pb-1 font-label-bold text-label-bold transition-all duration-200'
                  : 'text-on-surface-variant font-medium font-label-bold text-label-bold hover:text-secondary transition-colors duration-200'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/get-involved"
          className="tactile-button bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-label-bold text-label-bold tracking-wider active:scale-95 transition-transform duration-100"
        >
          DONATE
        </Link>
      </div>
    </header>
  );
}
