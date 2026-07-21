import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import Section from '../components/Section';
import PillarGrid from '../components/PillarGrid';
import { paths } from '../routes';
import communityPhoto from '../assets/images/photo-community-youth.jpg';
import shared from '../components/content.module.css';
import styles from './GetInvolved.module.css';

const roles = [
  {
    mark: '01',
    title: 'Assistant Coach',
    body: 'Support lead instructors during weekly sessions. No chess expertise required beyond basic rules.',
  },
  {
    mark: '02',
    title: 'Tournament Volunteer',
    body: 'Help run scholastic tournaments — check-in, pairings, and floor support on event days.',
  },
  {
    mark: '03',
    title: 'Mentor',
    body: 'Build a longer-term relationship with a student, meeting regularly outside of regular coaching hours.',
  },
];

const socials = [
  { name: 'Instagram', handle: '@ruletheboard' },
  { name: 'LinkedIn', handle: 'Rule the Board' },
  { name: 'Newsletter', handle: 'Monthly email updates' },
];

export default function GetInvolved() {
  return (
    <>
      <PageIntro
        eyebrow="Get Involved"
        title="Get Involved"
        intro="There are a few ways to support Rule the Board's mission — as a volunteer, a donor, or simply by staying connected."
      />

      <Section id="volunteer" title="Volunteer">
        <PillarGrid pillars={roles} />
        <div className={shared.ctaRow}>
          <Link to={paths.contact} className={shared.ctaPrimary}>
            Apply to Volunteer
          </Link>
        </div>
      </Section>

      <Section id="donate" title="Donate">
        <div className={shared.ctaRow}>
          <Link to={paths.donate} className={shared.ctaPrimary}>
            Donate Now →
          </Link>
        </div>
      </Section>

      <Section id="community" title="Join Our Community">
        <div className={styles.communityPanel}>
          <div className={styles.communityPhoto}>
            <img src={communityPhoto} alt="Rule the Board community" />
          </div>
          <div className={shared.list}>
            {socials.map((s) => (
              <a href="#" className={shared.listItem} key={s.name}>
                {s.name}
                <span>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        intro="Questions about coaching, volunteering, or partnerships? Reach out."
      >
        <div className={shared.grid2}>
          <div className={shared.card}>
            <div className={shared.cardTitle}>General Inquiries</div>
            <div className={shared.cardBody}>
              <a href="mailto:hello@ruletheboard.org">hello@ruletheboard.org</a>
            </div>
          </div>
          <div className={shared.card}>
            <div className={shared.cardTitle}>Mailing Address</div>
            <div className={shared.cardBody}>Address pending.</div>
          </div>
        </div>
      </Section>
    </>
  );
}
