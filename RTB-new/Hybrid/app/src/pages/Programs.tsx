import { Link } from 'react-router-dom';
import { Pawn, Knight, Bishop, CheckerStrip, MarginMotif } from '../components/ChessMotifs';
import Placeholder from '../components/Placeholder';
import { WaveDivider, DotField, DashedRule } from '../components/Decor';
import emoryGrandPrix from '../assets/images/programs-emory-grand-prix.webp';
import academyInterior from '../assets/images/programs-academy-interior.webp';
import scholarshipPhoto from '../assets/images/home-scholarship-preview.webp';
import cysPhoto from '../assets/images/home-cys-preview.webp';

// The only tournament we have real, confirmed details for. Everything else is
// genuinely TBD — rendered as skeleton cards below rather than invented events.
const pastTournament = {
  name: 'Emory Castle Chess Grand Prix',
  date: '2026 Season',
  location: 'Emory University, Atlanta',
  entry: 'Covered by scholarship',
  image: emoryGrandPrix,
  recap:
    'Our scholars played a serious field here. One beat a 1000-rated USCF player, and another got an unofficial game against the highest-rated player in the state.',
};

const UPCOMING_SKELETON_COUNT = 3;

const faqs = [
  {
    q: 'What should my child bring?',
    a: 'Students should bring a tournament-regulation chess set and clock if they own one, though many events provide them. A healthy snack, water bottle, and a pencil for notation (if required for their section) are also highly recommended.',
  },
  {
    q: 'How long do tournaments last?',
    a: 'Scholastic tournaments typically run about half a day, depending on the number of rounds and time control. We provide a detailed schedule on each event’s registration page.',
  },
  {
    q: 'Do I need a US Chess membership?',
    a: 'For "Rated" sections, a USCF membership is generally required. For "Beginner" or "Unrated" sections, no membership is needed. Membership requirements are noted on each event’s details page.',
  },
  {
    q: 'Can parents stay in the playing room?',
    a: 'To maintain focus and integrity, parents and coaches are usually asked to wait in a designated area once rounds begin. You’re always welcome to help your child set up their board before the round starts.',
  },
];

export default function Programs() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-10 px-margin-mobile md:px-margin-desktop text-center max-w-4xl mx-auto relative">
        <MarginMotif side="left" className="top-4 -translate-x-full -ml-10" piece={<Pawn className="w-24 h-24 text-accent-teal/30" />} />
        <MarginMotif side="right" className="top-4 translate-x-full -mr-10" piece={<Knight className="w-28 h-28 text-accent-orange/30" />} />
        <h1 className="font-headline-xl text-headline-xl mb-6 text-primary">Programs</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          We run two programs for grades 3-8. One is a summer class for students who have never touched a chess
          piece. The other is a year-long scholarship for students who are ready to compete.
        </p>
      </section>

      {/* Programs Grid */}
      <section id="programs" className="scroll-mt-28 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Full Scholarship Program Card */}
          <div className="bg-white border border-outline-variant rounded-[32px] soft-card flex flex-col overflow-hidden">
            <div className="relative h-48 md:h-56">
              <img
                className="w-full h-full object-cover"
                alt="A Rule the Board scholar studying the board mid-game."
                src={scholarshipPhoto}
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
              />
              {/* Same caption-chip treatment as the "Past Event" tag on the
                  Emory tournament photo further down this page. */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur text-secondary rounded-full text-label-bold">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  stars
                </span>
                FULL SCHOLARSHIP
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col flex-grow">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Rule the Board</h2>
              <p className="font-body-md text-on-surface-variant mb-8">
                A one-year scholarship for Odyssey scholars who want to keep going with chess. Coaching,
                tournaments, and a set of their own.
              </p>
              <div className="space-y-4 mb-10 flex-grow">
                {[
                  'Biweekly/Weekly Lessons + Optional Office Hours',
                  'Up to 3 Paid Tournament Entries',
                  '1-Year USCF Membership',
                  'Professional Chess Set & Chess.com Diamond',
                ].map((item) => (
                  <div className="flex items-start gap-4" key={item}>
                    <div className="w-6 h-6 rounded-full bg-secondary-soft flex items-center justify-center flex-shrink-0 mt-1">
                      <span
                        className="material-symbols-outlined text-secondary text-sm"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        check
                      </span>
                    </div>
                    <span className="font-body-md text-on-surface">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  to="/scholars"
                  className="tactile-button focus-ring-invert bg-secondary-strong text-on-secondary px-10 py-4 rounded-2xl font-label-bold text-body-md uppercase text-center whitespace-nowrap shrink-0"
                >
                  Apply for Scholarship
                </Link>
                <p className="font-label-sm text-on-surface-variant">
                  <Placeholder>Application deadline: confirm with team</Placeholder>
                </p>
              </div>
            </div>
          </div>

          {/* Intro Class Card */}
          <div className="bg-white border border-outline-variant rounded-[32px] soft-card flex flex-col overflow-hidden">
            <div className="relative h-48 md:h-56">
              <img
                className="w-full h-full object-cover"
                alt="A Checkmate Your Summer coach walking a group of students through a position."
                src={cysPhoto}
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur text-on-surface-variant rounded-full text-label-bold">
                <span className="material-symbols-outlined text-sm">schedule</span>
                SUMMER WORKSHOP
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col flex-grow">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Checkmate Your Summer</h2>
              <p className="font-body-md text-on-surface-variant mb-8">
                Our summer class at Odyssey Atlanta, where most scholars play their first real game of chess.
              </p>
              <div className="space-y-4 mb-10 flex-grow">
                {[
                  'Group Lessons: Openings, Tactics & Checkmates',
                  'Guided Puzzle Solving',
                  'Over-the-Board Play Against Peers',
                  'Small-Group Stations & Teamwork',
                ].map((item) => (
                  <div className="flex items-start gap-4" key={item}>
                    <div className="w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0 mt-1">
                      <span
                        className="material-symbols-outlined text-primary text-sm"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        check
                      </span>
                    </div>
                    <span className="font-body-md text-on-surface">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="mailto:RuleTheBoardInc@gmail.com?subject=Checkmate%20Your%20Summer"
                  className="tactile-button navy-lift bg-primary text-on-primary px-10 py-4 rounded-2xl font-label-bold text-body-md uppercase text-center whitespace-nowrap shrink-0"
                >
                  Ask About This Summer
                </a>
                <p className="font-label-sm text-on-surface-variant">No prior experience required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Illustration / Mood Section */}
      <WaveDivider className="text-surface-muted" />
      <section id="strategy" className="scroll-mt-28 bg-surface-muted py-20 overflow-hidden relative">
        <DotField className="opacity-[0.11]" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="font-headline-lg text-headline-lg text-primary mb-3">What the game teaches</h3>
              <DashedRule className="mb-5 text-accent-teal" />
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Chess makes you sit with a hard position and actually think instead of guessing. Our coaches spend
                as much time on how a scholar approaches a problem as on the moves themselves.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {/* The checker patch (green, the progress motif) marks the measured
                    improvement figure. The number itself is navy — accent color
                    lives on the motif, never on arbitrary text. */}
                <div className="p-6 bg-white rounded-2xl border border-outline-variant">
                  <div className="text-primary font-headline-md mb-2">212</div>
                  <p className="text-label-sm text-on-surface-variant">
                    Lesson hours delivered to scholars this year.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-outline-variant">
                  <div className="text-secondary font-headline-md mb-2">1,961</div>
                  <p className="text-label-sm text-on-surface-variant">
                    Highest USCF rating reached by a Rule the Board scholar.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-full h-80 rounded-[40px] overflow-hidden soft-card">
                <img
                  className="w-full h-full object-cover"
                  alt="Students playing over-the-board games during a Checkmate Your Summer session."
                  src={academyInterior}
                  width={1600}
                  height={1066}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-3xl shadow-xl animate-bounce">
                <Knight className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Tournaments */}
      <WaveDivider className="text-surface-muted" flip />
      <section id="events" className="scroll-mt-28 bg-background py-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        <div className="max-w-container-max mx-auto relative">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft text-primary font-label-bold text-label-sm mb-6">
              <span className="material-symbols-outlined text-[18px]">event</span>
              UPCOMING TOURNAMENT SEASON
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Events & Tournaments</h2>
            <DashedRule className="mx-auto mb-4 text-accent-orange" />
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Our scholars compete in rated tournaments through the year. Here is where we have been, and what is
              coming up.
            </p>
          </div>

          {/* Past event — the one tournament we have real, confirmed details for. */}
          <div className="mb-12">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">Past Event</h3>
            <div className="soft-card bg-white rounded-[24px] overflow-hidden flex flex-col md:flex-row border border-outline-variant">
              <div className="md:w-2/5 relative h-56 md:h-auto">
                <img
                  className="w-full h-full object-cover"
                  alt="Scholars competing at the Emory Castle Chess Grand Prix, a tournament hall filled with chess boards."
                  src={pastTournament.image}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 bg-secondary-strong text-on-secondary px-3 py-1 rounded font-label-bold text-label-sm">
                  Past Event
                </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <h4 className="font-headline-md text-headline-md text-primary mb-3">{pastTournament.name}</h4>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-on-surface-variant mb-4">
                  <span className="flex items-center gap-1.5 text-label-bold">
                    <span className="material-symbols-outlined text-[18px]">event</span>
                    {pastTournament.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-label-bold">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    {pastTournament.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-label-bold">
                    <span className="material-symbols-outlined text-[18px]">payments</span>
                    {pastTournament.entry}
                  </span>
                </div>
                <p className="text-on-surface-variant text-body-md">{pastTournament.recap}</p>
              </div>
            </div>
          </div>

          {/* Upcoming — no confirmed dates yet, so these are honest skeleton
              cards rather than invented events. */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline-md text-headline-md text-primary">Upcoming Tournaments</h3>
              <span className="text-label-sm font-label-bold text-on-surface-variant uppercase tracking-wide">
                Details coming soon
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
              {Array.from({ length: UPCOMING_SKELETON_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-[24px] border-2 border-dashed border-outline-variant bg-surface-muted/60 p-6 flex flex-col gap-4"
                  aria-hidden="true"
                >
                  <div className="h-32 rounded-2xl bg-outline-variant/40 animate-pulse" />
                  <div className="h-4 w-3/4 rounded-full bg-outline-variant/40 animate-pulse" />
                  <div className="h-3 w-1/2 rounded-full bg-outline-variant/40 animate-pulse" />
                  <div className="h-3 w-2/3 rounded-full bg-outline-variant/40 animate-pulse" />
                </div>
              ))}
            </div>
            <p className="text-center text-on-surface-variant text-body-md mt-6">
              We're still finalizing next season's schedule.{' '}
              <a href="mailto:RuleTheBoardInc@gmail.com" className="text-secondary underline underline-offset-4">
                Ask us for an update
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Events CTA */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-primary relative overflow-hidden">
        <DotField className="opacity-[0.10]" />
        <Pawn className="pointer-events-none hidden lg:block absolute left-16 bottom-0 w-28 h-28 text-white/[0.07]" />
        <Knight className="pointer-events-none hidden lg:block absolute right-16 bottom-0 w-32 h-32 text-white/[0.07]" />
        <div className="max-w-container-max mx-auto flex flex-col items-center text-center relative z-10">
          {/* Same checker strip that marks the CTA band on the homepage. */}
          <CheckerStrip className="w-[47px] h-[23px] mb-6" />
          <h2 className="font-headline-xl text-headline-xl text-white mb-6">Ready to compete?</h2>
          <p className="font-body-lg text-body-lg text-white/75 max-w-2xl mb-12">
            The scholarship covers your tournament entries, your coaching, and your equipment. Applications are
            open for the next class of scholars.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/scholars"
              className="tactile-button focus-ring-invert bg-secondary-strong text-on-secondary px-10 py-4 rounded-xl font-label-bold text-body-md uppercase"
            >
              Apply for the Scholarship
            </Link>
            <Link
              to="/tournament-guide"
              className="px-10 py-4 rounded-xl border-2 border-white/70 text-white font-label-bold text-body-md uppercase hover:bg-white hover:text-primary transition-all"
            >
              Read the Tournament Guide
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 chess-pattern pointer-events-none" />
      </section>

      {/* Tournament FAQ */}
      <section id="faq" className="scroll-mt-28 py-20 px-margin-mobile md:px-margin-desktop bg-background relative overflow-hidden">
        <MarginMotif side="left" className="top-20" piece={<Bishop className="w-24 h-24 text-accent-green/35" />} />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">First Tournament?</h2>
            <DashedRule className="mx-auto mb-4 text-accent-green" />
            <p className="text-on-surface-variant">The questions parents ask us most before a first tournament.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={faq.q} className="soft-card bg-white rounded-xl group" open={i === 0}>
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h4 className="font-headline-md text-[18px] text-primary">{faq.q}</h4>
                  <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-10 p-8 bg-primary-soft rounded-2xl flex items-center gap-6">
            <div className="bg-primary p-3 rounded-full shrink-0">
              <span className="material-symbols-outlined text-white">help_center</span>
            </div>
            <div>
              <p className="font-label-bold text-primary">Still have questions?</p>
              <Link className="text-secondary font-medium underline underline-offset-4" to="/tournament-guide">
                Read our full guide to getting ready for tournaments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
