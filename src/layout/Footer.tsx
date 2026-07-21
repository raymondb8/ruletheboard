import { Link } from 'react-router-dom';
import { paths } from '../routes';
import logo from '../assets/brand/logo-lockup-on-navy.svg';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <img src={logo} alt="Rule the Board" />
          <Link to={paths.donate} className={styles.donateButton}>
            Donate
          </Link>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>About Us</div>
          <Link to={paths.aboutTeam}>The Team</Link>
          <Link to={paths.whatWeDo}>What We Do</Link>
          <Link to={paths.impactReports}>Impact Reports</Link>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Get Involved</div>
          <Link to={paths.volunteer}>Volunteer</Link>
          <Link to={paths.donate}>Donate</Link>
          <Link to={paths.community}>Join Our Community</Link>
          <Link to={paths.contact}>Contact</Link>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Programs & Events</div>
          <Link to={paths.ruleTheBoard}>Rule the Board</Link>
          <Link to={paths.checkmateSummer}>Checkmate Your Summer</Link>
          <Link to={paths.tournament}>Tournament</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.seals}>
          <div className={styles.seal}>CHARITY NAVIGATOR — 4 STAR</div>
          <div className={styles.seal}>GUIDESTAR — GOLD SEAL</div>
        </div>
        <a href="mailto:hello@ruletheboard.org" className={styles.contact}>
          hello@ruletheboard.org
        </a>
      </div>
    </footer>
  );
}
