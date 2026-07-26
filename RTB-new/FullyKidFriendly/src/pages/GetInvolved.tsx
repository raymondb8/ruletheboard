import { Link } from 'react-router-dom';
import { paths } from '../routes';
import btn from '../components/buttons.module.css';
import styles from './GetInvolved.module.css';

const perks = [
  'Teach cool moves to future champions!',
  'Build real mentorship skills that matter!',
  'Make new best friends!',
];

const tiers = [
  {
    icon: 'lan',
    iconBg: 'var(--color-gold-fixed)',
    title: 'Pawn Power!',
    amount: '[Amount — confirm with team]',
    body: 'Buys a brand new chess board for a future champion!',
    cta: 'Boost This!',
    ctaClass: btn.gold,
  },
  {
    icon: 'flight',
    iconBg: 'var(--color-coral-container)',
    title: 'Knight Jump!',
    amount: '[Amount — confirm with team]',
    body: 'Feeds a whole team at our next big tournament!',
    cta: 'Launch It!',
    ctaClass: btn.coral,
    featured: true,
  },
  {
    icon: 'workspace_premium',
    iconBg: 'var(--color-surface-high)',
    title: "King's Crown!",
    amount: '[Amount — confirm with team]',
    body: 'Sponsors an entire classroom for a month of lessons!',
    cta: 'Rule the Board!',
    ctaClass: btn.navy,
  },
];

const socials = ['Insta-Fun', 'Tube-Time', 'The Lab', 'Chess Chat'];

export default function GetInvolved() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBlobA} />
        <div className={styles.heroBlobB} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Be a Hero! Join the Team! 🏆</h1>
          <p className={styles.heroBody}>
            Ever wanted to be a Chess Wizard? Now's your chance! We're building the biggest,
            funniest, and most EPIC chess squad ever and we need YOU!
          </p>
          <div className={styles.heroCtas}>
            <a href="#coach" className={`${btn.slam} ${btn.slamLg} ${btn.coralContainer}`}>
              <span className="material-symbols-outlined">groups</span>
              Coach Us!
            </a>
            <a href="#donate" className={`${btn.slam} ${btn.slamLg} ${btn.gold}`}>
              <span className="material-symbols-outlined">volunteer_activism</span>
              Fuel Fun!
            </a>
          </div>
        </div>
      </section>

      <section id="coach" className={styles.coachSection}>
        <div className={`${btn.card} ${btn.rotateLeft} ${styles.coachCard}`}>
          <h2>Be a Coach! 🧠</h2>
          <p>
            You don't need to be a Grandmaster to help! If you love games, high-fives, and
            helping kids level up their brain power, you're the perfect fit! 👑
          </p>
          <ul className={styles.perkList}>
            {perks.map((perk) => (
              <li key={perk}>
                <span className="material-symbols-outlined">check_circle</span>
                {perk}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${btn.card} ${btn.rotateRight} ${styles.signupCard}`}>
          <h3>Ready to Help? 🚀</h3>
          <p>Tell us a bit about yourself and we'll be in touch about coaching openings.</p>
          <a href="#" className={`${btn.slam} ${btn.slamLg} ${btn.navy}`}>
            Get in Touch
          </a>
        </div>
      </section>

      <section id="donate" className={styles.donateSection}>
        <h2>Fuel the Fun! ⛽</h2>
        <p className={styles.donateIntro}>
          Every coin helps us buy new boards, host massive tournaments, and bring snacks for
          the hungry players! Choose your power-up:
        </p>
        <div className={styles.tiersGrid}>
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`${btn.card} ${styles.tierCard} ${tier.featured ? styles.tierFeatured : ''}`}
            >
              {tier.featured && <span className={styles.mostPopular}>Most Popular!</span>}
              <div className={styles.tierIcon} style={{ background: tier.iconBg }}>
                <span className="material-symbols-outlined">{tier.icon}</span>
              </div>
              <h4>{tier.title}</h4>
              <span className={styles.tierAmount}>{tier.amount}</span>
              <p>{tier.body}</p>
              <a href="#" className={`${btn.slam} ${tier.ctaClass} ${styles.tierCta}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="squad" className={styles.squadSection}>
        <h2>Find the Squad! 📱</h2>
        <div className={styles.squadGrid}>
          {socials.map((s) => (
            <a href="#" key={s} className={styles.squadItem}>
              <span className="material-symbols-outlined">forum</span>
              {s}
            </a>
          ))}
        </div>
      </section>

      <div className={styles.finalCta}>
        <Link to={paths.programs} className={`${btn.slam} ${btn.slamLg} ${btn.coral}`}>
          See Our Programs
        </Link>
      </div>
    </>
  );
}
