import { Link } from 'react-router-dom';
import { paths } from '../routes';
import btn from '../components/buttons.module.css';
import styles from './Events.module.css';

const brackets = [
  {
    level: 'Level 1',
    levelBg: '#dcfce7',
    levelFg: '#166534',
    icon: 'child_care',
    title: 'Beginner Bracket',
    body: 'Perfect for new strategy masters. Learn as you play and have a blast doing it!',
    meta: [
      { icon: 'calendar_today', label: '[Date — confirm with team]' },
      { icon: 'group', label: '[Age range — confirm with team]' },
    ],
    cta: 'Register Now!',
    ctaClass: btn.coralContainer,
    featured: false,
  },
  {
    level: 'Level 2',
    levelBg: 'var(--color-gold-fixed)',
    levelFg: 'var(--color-gold)',
    icon: 'swords',
    title: 'Open Bracket',
    body: 'Ready to rumble? Fast-paced games for confident players. Top finishers earn medals!',
    meta: [
      { icon: 'bolt', label: 'Fast Moves' },
      { icon: 'military_tech', label: 'Medal Prizes' },
    ],
    cta: 'Join the Fight!',
    ctaClass: btn.gold,
    featured: true,
  },
  {
    level: 'Level 3',
    levelBg: '#fee2e2',
    levelFg: '#991b1b',
    icon: 'military_tech',
    title: 'Advanced Bracket',
    body: 'The ultimate test. Play against the best for the Rule the Board Trophy.',
    meta: [
      { icon: 'location_on', label: '[Location — confirm with team]' },
      { icon: 'star', label: 'Trophy Event' },
    ],
    cta: 'Claim My Seat!',
    ctaClass: btn.coral,
    featured: false,
  },
];

const faqs = [
  {
    q: '"Do I need to be a pro to play?"',
    a: "Nope! We have brackets for every skill level. If you know how the pieces move, you're ready for your first tournament!",
  },
  {
    q: '"What do I bring with me?"',
    a: 'Just your brain and a positive attitude! We provide the boards and timers.',
  },
  {
    q: '"Can my parents watch?"',
    a: 'Absolutely! We have a cheer zone for parents and family to watch every move.',
  },
  {
    q: '"Are there prizes?"',
    a: 'Every player receives [a participation prize — confirm with team], and top finishers earn [trophies/certificates — confirm with team]!',
  },
];

export default function Events() {
  return (
    <>
      <section className={styles.hero}>
        <span className={styles.badge}>[Tournament season — confirm with team]</span>
        <h1 className={styles.heroTitle}>
          Big Games &amp; <span className={styles.coral}>Epic Battles!</span>
        </h1>
        <p className={styles.heroBody}>
          Ready to show off your chess powers? Pick your level, grab your crown, and let the
          games begin! Every move counts toward the grand trophy.
        </p>
      </section>

      <section id="tournaments" className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className="material-symbols-outlined">sports_esports</span>
          Upcoming Tournaments
        </h2>
        <div className={styles.bracketGrid}>
          {brackets.map((b, i) => (
            <div
              key={b.title}
              className={`${btn.card} ${styles.bracketCard} ${b.featured ? styles.bracketFeatured : i % 2 === 0 ? btn.rotateLeft : btn.rotateRight}`}
            >
              <span className={styles.levelTag} style={{ background: b.levelBg, color: b.levelFg }}>
                {b.level}
              </span>
              <div className={styles.bracketIcon}>
                <span className="material-symbols-outlined">{b.icon}</span>
              </div>
              <h3>{b.title}</h3>
              <p className={styles.bracketBody}>{b.body}</p>
              <ul className={styles.bracketMeta}>
                {b.meta.map((m) => (
                  <li key={m.label}>
                    <span className="material-symbols-outlined">{m.icon}</span>
                    {m.label}
                  </li>
                ))}
              </ul>
              <Link to={paths.getInvolved} className={`${btn.slam} ${b.ctaClass} ${styles.bracketCta}`}>
                {b.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className={styles.faqSection}>
        <div className={styles.coachPanel}>
          <div className={styles.coachAvatar}>
            <span className="material-symbols-outlined">smart_toy</span>
          </div>
          <h3>
            Meet <br />
            Coach Bot 3000
          </h3>
          <p>
            "Beep-boop! First time entering a tournament? Don't sweat it, human friend! I've
            got all your answers right here."
          </p>
        </div>
        <div className={styles.faqList}>
          <h3 className={styles.faqTitle}>
            <span className="material-symbols-outlined">quiz</span>
            Frequently Asked Missions
          </h3>
          {faqs.map((f) => (
            <details key={f.q} className={`${btn.card} ${styles.faqItem}`}>
              <summary>
                {f.q}
                <span className="material-symbols-outlined">expand_more</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Still Undecided?</h2>
        <p>Join our practice sessions for a casual game. No points, no pressure, just pure fun!</p>
        <div className={styles.ctaButtons}>
          <Link to={paths.programs} className={`${btn.slam} ${btn.slamLg} ${btn.white}`}>
            View Practice Schedule
          </Link>
          <Link to={paths.coach} className={`${btn.slam} ${btn.slamLg} ${btn.navy}`}>
            Talk to a Coach
          </Link>
        </div>
      </section>
    </>
  );
}
