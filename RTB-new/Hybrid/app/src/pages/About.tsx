import { useState } from 'react';
import { Pawn, Rook, Knight, Queen, MarginMotif } from '../components/ChessMotifs';
import { WaveDivider, DotField, DashedRule } from '../components/Decor';
import PdfPreviewModal from '../components/PdfPreviewModal';
import communityPhoto from '../assets/images/about-community.jpg';
import foundersPhoto from '../assets/images/about-founders.jpg';
import impactReportCover from '../assets/images/impact-report-cover.jpg';
import impactReportPage1 from '../assets/images/impact-report-page-1.jpg';
import impactReportPage2 from '../assets/images/impact-report-page-2.jpg';
import impactReportPage3 from '../assets/images/impact-report-page-3.jpg';
import impactReportPage4 from '../assets/images/impact-report-page-4.jpg';
import impactReportPage5 from '../assets/images/impact-report-page-5.jpg';
import impactReportPage6 from '../assets/images/impact-report-page-6.jpg';
import impactReportPage7 from '../assets/images/impact-report-page-7.jpg';

const IMPACT_REPORT_PDF = '/rule-the-board-25-26-impact-report.pdf';
const IMPACT_REPORT_PAGES = [
  impactReportPage1,
  impactReportPage2,
  impactReportPage3,
  impactReportPage4,
  impactReportPage5,
  impactReportPage6,
  impactReportPage7,
];

const team = [
  { name: 'Leonardo Castro-Balbi', role: 'Executive Director' },
  { name: 'Nathan Ye', role: 'Operations Director' },
  { name: 'Arjun Garg', role: 'Education Director & Head Coach' },
  { name: 'Abbie Yuan', role: 'Communications Director' },
  { name: 'Raymond Boamah', role: 'Technology Director' },
  { name: 'Evelyn Wood', role: 'Creative Director' },
  { name: 'Owen Daum', role: 'Development Director' },
  { name: 'David Katz', role: 'Lead Coach' },
  { name: 'Sammy Drucker', role: 'Lead Coach' },
];

export default function About() {
  const [showReport, setShowReport] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {showReport && (
        <PdfPreviewModal
          pages={IMPACT_REPORT_PAGES}
          downloadHref={IMPACT_REPORT_PDF}
          title="2025-26 Impact Report"
          onClose={() => setShowReport(false)}
        />
      )}
      {/* Hero Decorative Asset */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 chess-pattern" />

      {/* Our Story Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
            <span className="material-symbols-outlined text-[18px]">history_edu</span>
            <span className="text-label-sm font-label-bold uppercase">Our Journey</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl mb-6 text-primary leading-tight">
            Empowering Young Minds, One Move at a Time.
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 max-w-xl">
            Founded with the belief that strategic thinking is a life skill, Rule the Board serves students in
            grades 3-8 through the timeless game of chess. We bridge the gap between classroom learning and
            competitive play, providing scholarships that open doors for students who might not otherwise have
            access to chess resources and training.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-white rounded-2xl soft-card">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">school</span>
              </div>
              <div>
                <h3 className="font-label-bold text-label-bold text-primary mb-1">Grades 3-8 Eligible</h3>
                <p className="text-on-surface-variant text-body-md">
                  Open to students currently enrolled in 3rd through 8th grade, with a pathway for returning
                  high schoolers.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-2xl soft-card">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">volunteer_activism</span>
              </div>
              <div>
                <h3 className="font-label-bold text-label-bold text-primary mb-1">Need-Based Eligibility</h3>
                <p className="text-on-surface-variant text-body-md">
                  For students from underserved communities — Title I schools, free/reduced lunch, and families
                  receiving public assistance all qualify.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="aspect-square rounded-[40px] overflow-hidden bg-surface-muted soft-card relative">
            <img
              className="w-full h-full object-cover"
              alt="Students competing at the 2026 Grand Prix Tournament, a large hall filled with chess boards."
              src={communityPhoto}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl soft-card flex flex-col items-center">
            <span className="text-headline-lg font-headline-lg text-secondary">2025-26</span>
            <span className="text-label-sm font-label-bold text-on-surface-variant uppercase">Our First Year</span>
          </div>
        </div>
      </section>

      {/* The Team — Our Board */}
      <section className="py-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
              <span className="material-symbols-outlined text-[18px]">groups</span>
              <span className="text-label-sm font-label-bold uppercase">The Team — Our Board</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Strategic Minds Behind RTB</h2>
            <p className="text-on-surface-variant">
              Our nine-person team of directors and coaches runs every part of Rule the Board, from curriculum to
              tournaments to outreach.
            </p>
          </div>
        </div>
        {/* No individual headshots yet — each avatar holds a piece rather than a
            generic person glyph — navy only, because nine accent-colored pieces in
            one row is exactly the rainbow we're avoiding. The founders photo below
            gives the section a real face in the meantime. */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-12">
          {team.map((member) => (
            <div className="group text-center" key={member.name}>
              <div className="aspect-square rounded-full overflow-hidden mb-6 soft-card border-4 border-white bg-surface-muted flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                <span className="material-symbols-outlined text-outline text-5xl">person</span>
              </div>
              <h4 className="font-label-bold text-label-bold text-primary uppercase">{member.name}</h4>
              <p className="text-label-sm font-label-sm text-secondary">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-3xl soft-card border border-outline-variant p-6">
          <img
            className="w-full sm:w-56 h-40 object-cover rounded-2xl shrink-0"
            alt="Rule the Board's three founders, Nathan Ye, Leonardo Castro-Balbi, and Arjun Garg, sitting together outdoors."
            src={foundersPhoto}
          />
          <p className="text-on-surface-variant text-body-md text-center sm:text-left">
            Rule the Board was founded by <strong className="text-primary">Nathan Ye</strong>,{' '}
            <strong className="text-primary">Leonardo Castro-Balbi</strong>, and{' '}
            <strong className="text-primary">Arjun Garg</strong>, who built the Rule the Board Scholarship and
            Checkmate Your Summer programs from the ground up.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <WaveDivider className="text-surface-muted" />
      <section className="py-20 bg-surface-muted relative overflow-hidden">
        <MarginMotif side="right" className="top-14" piece={<Queen className="w-32 h-32 text-primary/25" />} />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              <span className="text-label-sm font-label-bold uppercase">What We Do</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Six Pieces, One Mission</h2>
            <DashedRule className="mb-4 text-accent-orange" />
            <p className="text-on-surface-variant">
              We deliver coaching, tournaments, and equipment to underserved students. The Queen is Rule the Board
              itself — and every other piece on the board stands for a value that carries out that mission.
            </p>
          </div>
          {/* Six cards in one view is exactly where the accent kit would turn into
              a rainbow, so this block is deliberately navy-only with coral labels. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[
              {
                piece: 'King',
                glyph: '♔',
                value: 'Rule the Board',
                icon: 'flag',
                description:
                  'The name and the mission itself — the foundation every other piece on this board builds on.',
              },
              {
                piece: 'Queen',
                glyph: '♕',
                value: 'Excellence',
                icon: 'workspace_premium',
                description: 'The standard we hold ourselves to in every classroom, tournament, and decision.',
              },
              {
                piece: 'Knight',
                glyph: '♘',
                value: 'Resilience',
                icon: 'shield',
                description: 'The strength to reset the board and try again — in chess, in school, and in life.',
              },
              {
                piece: 'Rook',
                glyph: '♖',
                value: 'Integrity',
                icon: 'verified',
                description: 'Our scholars learn to compete honestly, on the board and off it.',
              },
              {
                piece: 'Bishop',
                glyph: '♗',
                value: 'Passion',
                icon: 'favorite',
                description:
                  'The drive that shows up in scholars chasing their next rating, and in a team that shows up for them.',
              },
              {
                piece: 'Pawn',
                glyph: '♙',
                value: 'Service',
                icon: 'volunteer_activism',
                description:
                  'Coaches, board members, and volunteers who give their time so a scholar never has to sit out.',
              },
            ].map((item) => (
              <div
                key={item.piece}
                className="bg-white rounded-[32px] p-8 soft-card border border-outline-variant flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl text-primary leading-none" aria-hidden="true">
                    {item.glyph}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  </div>
                </div>
                <span className="text-label-sm font-label-bold uppercase text-secondary mb-1">{item.piece}</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">{item.value}</h3>
                <p className="text-on-surface-variant text-body-md">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats (Bento Grid Style) */}
      <WaveDivider className="text-surface-muted" flip />
      <section className="bg-background py-20 relative overflow-hidden">
        <MarginMotif side="left" className="top-12" piece={<Pawn className="w-24 h-24 text-accent-teal/30" />} />
        <MarginMotif side="right" className="top-12" piece={<Rook className="w-28 h-28 text-accent-blue/30" />} />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Our Growing Reach</h2>
            <DashedRule className="mx-auto mb-4 text-accent-teal" />
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Metrics from our 2025-26 Impact Report, reflecting our first year serving students in Atlanta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="md:col-span-2 bg-primary text-on-primary p-10 rounded-[32px] flex flex-col justify-between relative overflow-hidden">
              <DotField className="opacity-[0.10]" />
              <Knight className="pointer-events-none absolute -right-4 -bottom-4 w-32 h-32 text-white/[0.08]" />
              <div className="mb-8">
                <span className="material-symbols-outlined text-[48px]">groups</span>
              </div>
              <div>
                <div className="text-headline-xl font-headline-xl mb-2">4</div>
                <p className="text-body-lg font-body-lg text-white/75">
                  Inaugural scholars in our first year — growing to 8 scholars for 2026-27.
                </p>
              </div>
            </div>
            <div className="focus-ring-invert bg-secondary-strong text-on-secondary p-10 rounded-[32px] flex flex-col justify-between">
              <div className="mb-8">
                <span className="material-symbols-outlined text-[40px]">workspace_premium</span>
              </div>
              <div>
                <div className="text-headline-lg font-headline-lg mb-2">1,961</div>
                <p className="text-label-bold font-label-bold opacity-80 uppercase tracking-tight">
                  Highest Scholar Rating
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-outline-variant flex flex-col justify-between">
              {/* Checker patch / green — the progress motif, marking the one tile
                  in this row that reports an outcome. */}
              <div className="mb-8">
                <span className="material-symbols-outlined text-primary text-[40px]">volunteer_activism</span>
              </div>
              <div>
                <div className="text-headline-lg font-headline-lg text-primary mb-2">261</div>
                <p className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-tight">
                  Volunteer Hours (CYS)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Report(s) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 mb-20">
        <div className="bg-white rounded-[40px] p-8 md:p-16 soft-card relative flex flex-col md:flex-row items-center gap-12 overflow-hidden">
          <button
            type="button"
            onClick={() => setShowReport(true)}
            className="group relative w-48 shrink-0"
            aria-label="View the 2025-26 Impact Report"
          >
            <img
              src={impactReportCover}
              alt="Cover of the Rule the Board 2025-26 Impact Report"
              className="w-48 h-64 object-cover rounded-xl shadow-lg border-2 border-outline-variant transition-transform group-hover:-translate-y-1"
            />
            {/* Picture-in-picture: a floating "view" badge overlapping the
                cover's corner, rather than a plain static icon box. */}
            <span className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full bg-secondary-strong text-on-secondary flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">visibility</span>
            </span>
          </button>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
              <span className="material-symbols-outlined text-[18px]">summarize</span>
              <span className="text-label-sm font-label-bold uppercase">Impact Report(s)</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Transparency Matters</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-8">
              Our 2025-26 Impact Report shows how your donations and support are transforming the lives of students
              across our community through the power of chess education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                type="button"
                onClick={() => setShowReport(true)}
                className="tactile-button focus-ring-invert bg-secondary-strong text-on-secondary px-8 py-4 rounded-2xl font-label-bold text-label-bold uppercase flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">picture_as_pdf</span>
                View Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
