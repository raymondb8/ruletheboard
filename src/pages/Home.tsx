import { Link } from 'react-router-dom';
import { paths } from '../routes';
import PillarGrid from '../components/PillarGrid';
import heroPhoto from '../assets/images/photo-hero-group.jpg';
import checkmatePhoto from '../assets/images/photo-checkmate-summer.jpg';
import tournamentPhoto from '../assets/images/photo-tournament-hall.jpg';
import styles from './Home.module.css';

const pillars = [
  {
    mark: '01',
    title: 'Coaching',
    body: 'Certified instructors deliver year-round, structured lessons tailored to every skill level.',
  },
  {
    mark: '02',
    title: 'Tournaments',
    body: 'We cover entry fees, transportation, and lodging so cost is never a barrier to competing.',
  },
  {
    mark: '03',
    title: 'Equipment',
    body: 'Boards, clocks, and study materials go home with every student in the program.',
  },
];

export default function Home() {
  return (
    <>
      <section id="home" className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Chess Scholarship Program
          </div>
          <h1 className={styles.heroTitle}>
            Every kid deserves
            <br />
            a seat at <span className={styles.gold}>the board.</span>
          </h1>
          <p className={styles.heroBody}>
            Rule the Board gives underserved students access to expert coaching, tournament play,
            and equipment — building strategic thinkers who carry the game far beyond 64 squares.
          </p>
          <div className={styles.heroCtas}>
            <Link to={paths.donate} className={styles.btnPrimary}>
              Donate Now
            </Link>
            <Link to={paths.volunteer} className={styles.btnOutline}>
              Get Involved
            </Link>
          </div>
        </div>

        <div className={styles.heroImageWrap}>
          <img src={heroPhoto} alt="Rule the Board students" className={styles.heroImage} />
          <div className={styles.heroImageOverlay} />
          <div className={styles.heroStats}>
            <div className={styles.statNavy}>
              <div className={styles.statNumber}>1,200+</div>
              <div className={styles.statLabel}>students coached</div>
            </div>
            <div className={styles.statGold}>
              <div className={styles.statNumber}>40+</div>
              <div className={styles.statLabel}>partner schools</div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>What we do</h2>
          <Link to={paths.impactReports} className={styles.sectionLink}>
            Read the full impact report →
          </Link>
        </div>
        <p className={styles.sectionIntro}>
          We remove the barriers that keep talented kids off the board — pairing them with
          certified coaches, covering tournament entry fees and travel, and putting real
          equipment in their hands. Chess becomes the vehicle; confidence, focus, and opportunity
          are the destination.
        </p>
        <PillarGrid pillars={pillars} />
      </section>

      <section id="programs" className={styles.section} style={{ paddingTop: 0 }}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: 28 }}>
          Programs
        </h2>
        <div className={styles.bento}>
          <div className={styles.bentoNavy}>
            <div>
              <div className={styles.bentoEyebrow}>Flagship Program</div>
              <div className={styles.bentoTitle}>Rule the Board</div>
              <p className={styles.bentoBody}>
                Year-round coaching, mentorship, and tournament access for students in
                underserved communities.
              </p>
            </div>
            <Link to={paths.ruleTheBoard} className={styles.bentoLink}>
              Learn more →
            </Link>
          </div>
          <div className={styles.bentoPhoto}>
            <img src={checkmatePhoto} alt="Checkmate Your Summer" />
            <div className={styles.bentoPhotoScrim}>
              <div className={styles.bentoEyebrow}>Summer Program</div>
              <div className={styles.bentoPhotoTitle}>Checkmate Your Summer</div>
              <Link
                to={paths.checkmateSummer}
                className={styles.bentoLink}
                style={{ marginTop: 10 }}
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.eventsPanel}>
          <div className={styles.eventsCopy}>
            <div className={styles.bentoEyebrow}>Upcoming Event</div>
            <div className={styles.bentoTitle} style={{ marginTop: 0 }}>
              Fall Scholastic Tournament
            </div>
            <p className={styles.eventsBody}>
              Hundreds of students compete for scholarship funding and tournament recognition at
              our flagship annual event.
            </p>
            <Link to={paths.tournament} className={styles.sectionLink}>
              Event details →
            </Link>
          </div>
          <div className={styles.eventsPhoto}>
            <img src={tournamentPhoto} alt="Tournament hall" />
          </div>
        </div>
      </section>
    </>
  );
}
