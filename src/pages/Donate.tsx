import PageIntro from '../components/PageIntro';
import Section from '../components/Section';
import styles from './Donate.module.css';

const tiers = [
  { amount: '$50', body: 'Covers one month of study materials for a student.' },
  { amount: '$150', body: 'Covers tournament entry and transportation for one student.' },
  { amount: '$500', body: 'Sponsors a full season of coaching for one student.' },
];

export default function Donate() {
  return (
    <>
      <PageIntro
        eyebrow="Get Involved"
        title="Donate"
        intro="Every dollar goes toward coaching, tournament access, and equipment for students who couldn't otherwise afford them."
      />

      <Section id="tiers" title="Ways to Give">
        <div className={styles.panel}>
          <div className={styles.tierList}>
            {tiers.map((tier) => (
              <div className={styles.tierRow} key={tier.amount}>
                <div className={styles.tierAmount}>{tier.amount}</div>
                <div className={styles.tierBody}>{tier.body}</div>
              </div>
            ))}
          </div>
          <a href="#" className={styles.donateCta}>
            Donate Now
          </a>
        </div>
      </Section>
    </>
  );
}
