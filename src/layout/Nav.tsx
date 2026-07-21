import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navConfig, paths } from '../routes';
import logo from '../assets/brand/logo-lockup-navy-text.svg';
import styles from './Nav.module.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <nav className={styles.nav}>
      <Link to={paths.home} className={styles.logo}>
        <img src={logo} alt="Rule the Board" />
      </Link>

      <div className={styles.items}>
        {navConfig.map((item) => (
          <Link key={item.label} to={item.href} className={styles.itemLabel}>
            {item.label}
          </Link>
        ))}
      </div>

      <div className={styles.actions}>
        <Link to={paths.donate} className={styles.donateButton}>
          Donate
        </Link>
        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </div>

      {menuOpen && <div className={styles.scrim} onClick={() => setMenuOpen(false)} />}

      <div
        id="mobile-menu"
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileLinks}>
          {navConfig.map((item) => (
            <Link key={item.label} to={item.href} className={styles.mobileLink}>
              {item.label}
            </Link>
          ))}
          <Link to={paths.donate} className={styles.mobileDonate}>
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}
