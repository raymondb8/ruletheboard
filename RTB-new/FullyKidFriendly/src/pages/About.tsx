import { Link } from 'react-router-dom';
import { paths } from '../routes';
import btn from '../components/buttons.module.css';
import styles from './About.module.css';

const timeline = [
  {
    era: '[Founding year — confirm with team]: The Spark',
    title: 'A Bored Knight',
    body: '[Founding story — confirm with team].',
    icon: 'lightbulb',
  },
  {
    era: '[Year — confirm with team]: First Move',
    title: 'Small Beginnings',
    body: '[Early program details — confirm with team].',
    icon: 'home',
  },
  {
    era: 'Today: Boss Mode',
    title: 'Ruling the World',
    body: 'Now we\'re [scale — confirm with team] strong, hitting tournaments and showing the world that kids are the true board rulers!',
    icon: 'star',
  },
];

const boardMembers = [
  { role: 'Board Chair', badge: 'var(--color-coral-container)' },
  { role: 'Program Director', badge: 'var(--color-gold-container)' },
  { role: 'Treasurer', badge: 'var(--color-navy-container)', fg: '#fff' },
  { role: 'Secretary', badge: 'var(--color-coral-container)' },
];

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <span className={styles.badge}>Level Up Your Brain!</span>
        <h1 className={styles.heroTitle}>Our Epic Story!</h1>
        <p className={styles.heroBody}>
          Forget boring textbooks. We're on a mission to turn every kid into a grandmaster of
          strategy, fun, and total board-room domination!
        </p>
        <div className={styles.heroIcons} aria-hidden="true">
          <span className="material-symbols-outlined">military_tech</span>
          <span className="material-symbols-outlined">rocket_launch</span>
          <span className="material-symbols-outlined">emoji_events</span>
        </div>
      </section>

      <section id="story" className={styles.section}>
        <h2 className={styles.sectionTitle}>How It All Started</h2>
        <div className={styles.timeline}>
          {timeline.map((step, i) => (
            <div
              key={step.title}
              className={`${styles.timelineRow} ${i % 2 === 1 ? styles.timelineRowReverse : ''}`}
            >
              <div
                className={`${btn.card} ${i % 2 === 0 ? btn.rotateLeft : btn.rotateRight} ${styles.timelineCard}`}
              >
                <span className={styles.timelineEra}>{step.era}</span>
                <h3 className={styles.timelineTitle}>{step.title}</h3>
                <p className={styles.timelineBody}>{step.body}</p>
              </div>
              <div className={styles.timelineDot}>
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="team" className={styles.section}>
        <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
          Meet the Team
        </h2>
        <p className={styles.sectionIntro}>
          Rule the Board is guided by a volunteer board of directors bringing experience in
          education, chess, and nonprofit leadership.
        </p>
        <div className={styles.teamGrid}>
          {boardMembers.map((member, i) => (
            <div
              key={member.role}
              className={`${btn.card} ${i % 2 === 0 ? btn.rotateLeft : btn.rotateRight} ${styles.teamCard}`}
            >
              <div className={styles.teamAvatar}>
                <span className="material-symbols-outlined">person</span>
              </div>
              <div className={styles.teamBadge} style={{ background: member.badge, color: member.fg ?? 'var(--color-navy)' }}>
                {member.role}
              </div>
              <h4 className={styles.teamName}>Board Member Name</h4>
              <p className={styles.teamBio}>Bio pending.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="impact" className={styles.impactSection}>
        <h2 className={styles.impactTitle}>Big Wins! (The High Scores)</h2>
        <div className={styles.impactGrid}>
          <div className={`${styles.impactCard} ${styles.impactRotateLeft}`}>
            <div className={styles.impactNumber}>[Games played — TBD]</div>
            <div className={styles.impactLabel}>Games Played</div>
          </div>
          <div className={`${styles.impactCard} ${styles.impactFeatured}`}>
            <div className={styles.impactNumber}>[Students coached — TBD]</div>
            <div className={styles.impactLabel}>Future GMs</div>
          </div>
          <div className={`${styles.impactCard} ${styles.impactRotateRight}`}>
            <div className={styles.impactNumber}>Infinite</div>
            <div className={styles.impactLabel}>Pizza Slices</div>
          </div>
        </div>
        <div className={styles.impactTestimonial}>
          <p>"[Student testimonial — confirm with team]"</p>
          <span>— [Name], age [X], [achievement — confirm with team]</span>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Ready to Join the Fun?</h2>
          <p className={styles.ctaBody}>
            We've got a chair and a crown waiting just for you. No boring stuff allowed!
          </p>
          <div className={styles.ctaButtons}>
            <Link to={paths.getInvolved} className={`${btn.slam} ${btn.navy}`}>
              Join the Crew!
            </Link>
            <Link to={paths.programs} className={`${btn.slam} ${btn.white}`}>
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
