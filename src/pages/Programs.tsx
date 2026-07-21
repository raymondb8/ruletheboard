import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import Section from '../components/Section';
import { paths } from '../routes';
import checkmatePhoto from '../assets/images/photo-checkmate-classroom.jpg';
import shared from '../components/content.module.css';
import styles from './Programs.module.css';

const features = [
  {
    title: 'Weekly Coaching',
    body: 'Structured lessons led by certified instructors, grouped by skill level.',
  },
  {
    title: 'Mentorship',
    body: 'Each student is paired with a mentor for ongoing support beyond the board.',
  },
  {
    title: 'Tournament Access',
    body: 'Entry fees, transportation, and lodging covered for all competitive play.',
  },
];

export default function Programs() {
  return (
    <>
      <PageIntro
        eyebrow="Programs"
        title="Our Programs"
        intro="Rule the Board runs two core programs, both built to make chess accessible year-round."
      />

      <Section
        id="rule-the-board"
        title="Rule the Board"
        intro="Our flagship program: year-round coaching, mentorship, and tournament access for students in underserved communities."
      >
        <div className={styles.flagshipPanel}>
          <div className={styles.eyebrow}>Flagship Program</div>
          <div className={styles.featureList}>
            {features.map((f) => (
              <div className={styles.featureRow} key={f.title}>
                <div className={styles.featureTitle}>{f.title}</div>
                <div className={styles.featureBody}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={shared.ctaRow}>
          <Link to={paths.volunteer} className={shared.ctaOutline}>
            Volunteer With Us
          </Link>
        </div>
      </Section>

      <Section
        id="checkmate-your-summer"
        title="Checkmate Your Summer"
        intro="An intensive summer program combining daily chess instruction with academic enrichment, keeping students engaged and learning through the break."
      >
        <div className={styles.summerPanel}>
          <div className={styles.summerPhoto}>
            <img src={checkmatePhoto} alt="Checkmate Your Summer classroom" />
          </div>
          <div className={styles.summerInfo}>
            <div className={shared.card}>
              <div className={shared.cardTitle}>Program Dates</div>
              <div className={shared.cardBody}>Dates pending.</div>
            </div>
            <div className={shared.card}>
              <div className={shared.cardTitle}>Eligibility</div>
              <div className={shared.cardBody}>Eligibility details pending.</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
