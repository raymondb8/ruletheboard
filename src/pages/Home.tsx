import { Link } from 'react-router-dom';
import { paths } from '../routes';
import btn from '../components/buttons.module.css';
import styles from './Home.module.css';

const whatWeDo = [
  {
    icon: 'psychology',
    title: 'Brain Power',
    body: "Chess isn't just a game — it's a super-workout for your brain! Level up your memory and focus while having a blast.",
    bg: 'var(--color-gold-container)',
  },
  {
    icon: 'inventory_2',
    title: 'Your Own Gear',
    body: 'A board, a clock, and a notebook to take home — so the fun (and the practice) doesn\'t stop when class ends.',
    bg: 'var(--color-coral-container)',
  },
  {
    icon: 'sports_esports',
    title: 'Pro Coaches',
    body: 'Learn from the best! Our coaches are funny, friendly, and know every secret move to make you unstoppable.',
    bg: 'var(--color-navy-container)',
    fg: '#fff',
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.badge}>#1 Kids Chess Club! 🚀</span>
          <h1 className={styles.heroTitle}>
            Master the Game! <br />
            <span className={styles.coral}>Rule the Board!</span>
          </h1>
          <p className={styles.heroBody}>
            Join the coolest chess club ever! We turn curious kids into strategic wizards.
            Ready to make your first move? It's going to be EPIC!
          </p>
          <div className={styles.heroCtas}>
            <Link to={paths.getInvolved} className={`${btn.slam} ${btn.slamLg} ${btn.coralContainer}`}>
              Join the Fun!
            </Link>
            <Link to={paths.about} className={`${btn.slam} ${btn.slamLg} ${btn.white}`}>
              Our Story
            </Link>
          </div>
        </div>

        <div className={styles.heroImageWrap}>
          <div className={styles.heroImageBlob} />
          <div className={styles.heroImagePanel}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6OblJV9SU8d0yCUbU0XFxbvnE89lKRipa3LT7l9R36CauO4KiRE3CE7HXY8RavijXlJAUmJJEubKuJPDp5H6bnn12z97JwSzjwS5KpD6kIyQgFrT97_wP4HIfWOXEMUmNaGJhdlOFjkdGG3gcyMfAVbgPb7-YcfWZYCy_ZtIlbUfByGxv2IfRyi6Rj_grhk-vCJFoIvHUk2-zcAeUndgky5prKk8DpiJF1ycyPqtSLJHFk1IEpxIARyMWMmeZJFtXHUK2dZRqv-zD"
              alt="A group of diverse, happy kids sitting around colorful chess boards, laughing and engaged in high-energy games."
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroQuote}>
            <p>"[Student quote — confirm with team]"</p>
            <span>— [Name], age [X]</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <div className={styles.sectionRule} />
        </div>
        <div className={styles.cardsGrid}>
          {whatWeDo.map((item, i) => (
            <div
              key={item.title}
              className={`${btn.card} ${i % 2 === 0 ? btn.rotateLeft : btn.rotateRight} ${styles.doCard}`}
            >
              <div
                className={styles.doIcon}
                style={{ background: item.bg, color: item.fg ?? 'var(--color-navy)' }}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className={styles.doTitle}>{item.title}</h3>
              <p className={styles.doBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsDecoration} aria-hidden="true">
          <span>♔</span>
          <span>♘</span>
          <span>♗</span>
        </div>
        <div className={styles.statsPanel}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>[Students coached — TBD]</div>
              <p className={styles.statLabel}>Future Grandmasters!</p>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>[Matches played — TBD]</div>
              <p className={styles.statLabel}>Games Played!</p>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>[Trophies won — TBD]</div>
              <p className={styles.statLabel}>Epic Trophies Won!</p>
            </div>
          </div>
          <div className={styles.statsTestimonial}>
            <p>"[Student testimonial — confirm with team]"</p>
            <Link to={paths.getInvolved} className={`${btn.slam} ${btn.slamLg} ${btn.white}`}>
              Join the Fun!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
