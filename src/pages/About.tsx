import PageIntro from '../components/PageIntro';
import Section from '../components/Section';
import PillarGrid from '../components/PillarGrid';
import teamPhoto from '../assets/images/photo-about-team.jpg';
import shared from '../components/content.module.css';
import styles from './About.module.css';

const boardMembers = [
  { name: 'Board Member Name', role: 'Board Chair' },
  { name: 'Board Member Name', role: 'Treasurer' },
  { name: 'Board Member Name', role: 'Secretary' },
  { name: 'Board Member Name', role: 'Program Director' },
  { name: 'Board Member Name', role: 'Board Member' },
  { name: 'Board Member Name', role: 'Board Member' },
];

const pillars = [
  {
    mark: '01',
    title: 'Coaching',
    body: 'Certified instructors deliver year-round, structured lessons tailored to every skill level, from first-time players to tournament competitors.',
  },
  {
    mark: '02',
    title: 'Tournaments',
    body: 'We cover entry fees, transportation, and lodging so cost is never a barrier to competing at the local, regional, or national level.',
  },
  {
    mark: '03',
    title: 'Equipment',
    body: 'Boards, clocks, and study materials go home with every student in the program, so practice continues outside of class.',
  },
];

const reports = ['2025 Impact Report', '2024 Impact Report', '2023 Impact Report'];

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="About Rule the Board"
        intro="Rule the Board is guided by a volunteer board of directors bringing experience in education, chess, and nonprofit leadership."
      />

      <Section id="team" title="Our Board">
        <div className={styles.photoPanel}>
          <img src={teamPhoto} alt="Rule the Board team" />
          <div className={styles.photoScrim}>
            <div className={styles.photoCaption}>Meet the Board</div>
          </div>
        </div>
        <div className={shared.grid}>
          {boardMembers.map((member, i) => (
            <div className={shared.card} key={i}>
              <div className={shared.cardMeta}>{member.role}</div>
              <div className={shared.cardTitle}>{member.name}</div>
              <div className={shared.cardBody}>Bio pending.</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="what-we-do"
        title="What We Do"
        intro="We remove the barriers that keep talented kids off the board — pairing them with certified coaches, covering tournament entry fees and travel, and putting real equipment in their hands."
      >
        <PillarGrid pillars={pillars} />
      </Section>

      <Section
        id="impact-reports"
        title="Impact Report(s)"
        intro="See how donor and volunteer support translates into coaching hours, tournament entries, and equipment delivered each year."
      >
        <div className={shared.list}>
          {reports.map((report) => (
            <a href="#" className={shared.listItem} key={report}>
              {report}
              <span>Download →</span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
