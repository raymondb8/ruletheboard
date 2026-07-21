import PageIntro from '../components/PageIntro';
import Section from '../components/Section';
import tournamentPhoto from '../assets/images/photo-tournament-wide.jpg';
import shared from '../components/content.module.css';
import styles from './Events.module.css';

export default function Events() {
  return (
    <>
      <PageIntro
        eyebrow="Events"
        title="Fall Scholastic Tournament"
        intro="Hundreds of students compete for scholarship funding and tournament recognition at our flagship annual event."
      />

      <Section id="tournament" title="Event Details">
        <div className={styles.panel}>
          <div className={styles.photo}>
            <img src={tournamentPhoto} alt="Tournament hall" />
          </div>
          <div className={styles.info}>
            <div className={shared.card}>
              <div className={shared.cardTitle}>Date & Location</div>
              <div className={shared.cardBody}>Details pending.</div>
            </div>
            <div className={shared.card}>
              <div className={shared.cardTitle}>Registration</div>
              <div className={shared.cardBody}>Registration opens soon.</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
