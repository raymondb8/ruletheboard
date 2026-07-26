import { Link } from 'react-router-dom';
import { navConfig, paths } from '../routes';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <div className={styles.logo}>Rule the Board</div>
          <p className={styles.tagline}>Go Play!</p>
          <Link to={paths.donate} className={styles.donateButton}>
            Support Us
          </Link>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Explore</div>
          {navConfig
            .filter((item) => item.href !== paths.home)
            .map((item) => (
              <Link key={item.label} to={item.href}>
                {item.label}
              </Link>
            ))}
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Find the Squad</div>
          <span className={styles.placeholderLink}>[Instagram — confirm with team]</span>
          <span className={styles.placeholderLink}>[YouTube — confirm with team]</span>
          <span className={styles.placeholderLink}>[Newsletter — confirm with team]</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>&copy; Rule the Board — Go Play!</p>
        <div className={styles.legal}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <span className={styles.placeholderLink}>[Contact email — confirm with team]</span>
        </div>
      </div>
    </footer>
  );
}
