import { Link } from 'react-router-dom';
import { paths } from '../routes';
import btn from '../components/buttons.module.css';
import styles from './Programs.module.css';

const missions = [
  {
    id: 'rule-the-board',
    badge: 'Scholarship Program',
    title: 'Rule the Board',
    tagline: '"Go from Newbie to Pro!"',
    icon: 'military_tech',
    iconBg: 'var(--color-navy-container)',
    checks: [
      'Weekly masterclasses with certified chess coaches',
      'Tournament entry, travel, and lodging — all covered',
      '1-on-1 mentorship beyond the board',
    ],
    checkBg: 'var(--color-coral-container)',
    cta: 'Apply Now',
    ctaIcon: 'rocket_launch',
    ctaClass: btn.coral,
    meta: [{ label: 'Eligibility', body: 'Eligibility details pending.' }],
  },
  {
    id: 'checkmate-your-summer',
    badge: 'Summer Camp',
    title: 'Checkmate Your Summer',
    tagline: '"Best. Summer. Ever."',
    icon: 'sunny',
    iconBg: 'var(--color-gold-container)',
    checks: [
      'Daily chess instruction plus academic enrichment',
      'Games, challenges, and hands-on practice all day',
      'Make new friends in friendly team matches',
    ],
    checkBg: 'var(--color-gold-fixed)',
    cta: 'Join the Camp',
    ctaIcon: 'emoji_events',
    ctaClass: btn.gold,
    meta: [{ label: 'Program Dates', body: 'Dates pending.' }],
  },
];

export default function Programs() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Choose Your <span className={styles.coral}>Mission!</span>
        </h1>
        <p className={styles.heroBody}>
          Ready to level up your brain? Pick a program and start your legendary chess
          adventure today!
        </p>
      </section>

      <section className={styles.missionsGrid}>
        {missions.map((m, i) => (
          <div
            key={m.id}
            id={m.id}
            className={`${btn.card} ${i % 2 === 0 ? btn.rotateLeft : btn.rotateRight} ${styles.missionCard}`}
          >
            <div className={styles.missionHead}>
              <div>
                <span className={styles.missionBadge}>{m.badge}</span>
                <h2 className={styles.missionTitle}>{m.title}</h2>
                <p className={styles.missionTagline}>{m.tagline}</p>
              </div>
              <div className={styles.missionIcon} style={{ background: m.iconBg }}>
                <span className="material-symbols-outlined">{m.icon}</span>
              </div>
            </div>

            <div className={styles.checkList}>
              {m.checks.map((c) => (
                <div key={c} className={styles.checkRow}>
                  <div className={styles.checkMark} style={{ background: m.checkBg }}>
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <p>{c}</p>
                </div>
              ))}
            </div>

            <div className={styles.missionMeta}>
              {m.meta.map((row) => (
                <div key={row.label} className={styles.metaCard}>
                  <div className={styles.metaLabel}>{row.label}</div>
                  <div className={styles.metaBody}>{row.body}</div>
                </div>
              ))}
            </div>

            <Link to={paths.getInvolved} className={`${btn.slam} ${btn.slamLg} ${m.ctaClass} ${styles.missionCta}`}>
              {m.cta}
              <span className="material-symbols-outlined">{m.ctaIcon}</span>
            </Link>
          </div>
        ))}
      </section>

      <section className={styles.whySection}>
        <h3 className={styles.whyTitle}>Why We're the Coolest!</h3>
        <div className={styles.whyGrid}>
          <div className={`${styles.whyCard} ${styles.whyNavy}`}>
            <span className="material-symbols-outlined">workspace_premium</span>
            <h4>[Students graduated — TBD]</h4>
            <p>Future Grandmasters Graduated</p>
          </div>
          <div className={`${styles.whyCard} ${styles.whyCoral}`}>
            <span className="material-symbols-outlined">volunteer_activism</span>
            <h4>100% Free</h4>
            <p>Cost Never Decides Who Gets to Play</p>
          </div>
          <div className={`${styles.whyCard} ${styles.whyGold}`}>
            <span className="material-symbols-outlined">psychology</span>
            <h4>100%</h4>
            <p>Brain-Boosting Fun Guaranteed</p>
          </div>
        </div>
      </section>

      <section className={styles.highlightSection}>
        <div className={styles.highlightPanel}>
          <div className={styles.highlightCopy}>
            <h2>
              Ready to start your <span className={styles.coral}>Mission?</span>
            </h2>
            <p>
              Whether you want to win tournaments or just have the best summer ever, we've
              got a seat at the board waiting for you.
            </p>
            <div className={styles.highlightTags}>
              <span className={styles.tagNavy}>
                <span className="material-symbols-outlined">school</span>
                Scholarships
              </span>
              <span className={styles.tagCoral}>
                <span className="material-symbols-outlined">diversity_3</span>
                Friends
              </span>
            </div>
          </div>
          <div className={styles.highlightPhoto}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCagmrC8oxQhR_272A-X6VqUzhPqGmXtK_6U4-vPZMyyk6FZxFVC544zz-PDe7FBIGzEDRqaGpxQmwIZs3_mr4NIc6AqEeiTyfF1lq2fjU3FXvjG9qVQduxgmi3YfN8iF8ik6DeveTe0hEboVd4Xhv8qdauupxEWW0X7dcMf5Y_7mTglOQ87HUvDf1J3gYX-DmDU3yrgVTJf2Rh7a7sDm7bLgsZ6_4VKpaa4MwLlJ6VNfF8c3rQlRjGOjMhJUREUMmFFyMHNsVfA_BO"
              alt="A group of kids playing a giant floor chess game in a sunlit community center."
            />
            <div className={styles.highlightStar}>
              <span className="material-symbols-outlined">star</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
