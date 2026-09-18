import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { teamRows } from '../data/team';
import { Queen, MarginMotif } from '../components/ChessMotifs';
import { WaveDivider, DashedRule } from '../components/Decor';
import PdfPreviewModal from '../components/PdfPreviewModal';
import { Icon } from '../components/icons';
import Img from '../components/Img';
import { images, type ImageName } from '../assets/images';

const IMPACT_REPORT_PDF = '/rule-the-board-25-26-impact-report.pdf';
const IMPACT_REPORT_PAGES = Array.from({ length: 7 }, (_, i) => images[`impact-report-page-${i + 1}` as ImageName]);


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
      <section id="our-story" aria-labelledby="our-story-heading" className="scroll-mt-28 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1">
          <h1 id="our-story-heading" className="font-headline-xl text-headline-xl mb-6 text-primary leading-tight">
            About Rule the Board, an Atlanta chess scholarship
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 max-w-xl">
            We spent a summer teaching chess to Odyssey scholars and were blown away by how fast they picked it
            up. Our only regret was that the class ended. Rule the Board is what we built so the students who
            wanted to keep playing could actually keep playing, with real coaching and real tournaments behind
            them.
          </p>
          <p className="mb-8">
            <Link to="/programs" className="text-secondary-strong font-medium underline underline-offset-4">
              Read about the scholarship and Checkmate Your Summer
            </Link>
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-white rounded-2xl soft-card">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <Icon name="school" className="text-primary" />
              </div>
              <div>
                <h2 className="font-label-bold text-label-bold text-primary mb-1">Grades 3-8 Eligible</h2>
                <p className="text-on-surface-variant text-body-md">
                  Open to students currently enrolled in 3rd through 8th grade, with a pathway for returning
                  high schoolers.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-2xl soft-card">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <Icon name="volunteer_activism" className="text-primary" />
              </div>
              <div>
                <h2 className="font-label-bold text-label-bold text-primary mb-1">Need-Based Eligibility</h2>
                <p className="text-on-surface-variant text-body-md">
                  For students from underserved communities. Title I schools, free or reduced lunch, and families
                  receiving public assistance all qualify.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="aspect-square rounded-[40px] overflow-hidden bg-surface-muted soft-card relative">
            <Img
              image={images['about-community']}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-full object-cover"
              alt="Checkmate Your Summer students playing chess together in the Odyssey classroom."
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl soft-card flex flex-col items-center">
            <span className="text-headline-lg font-headline-lg text-secondary">2025-26</span>
            <span className="text-label-sm font-label-bold text-on-surface-variant uppercase">Our First Year</span>
          </div>
        </div>
      </section>

      {/* The Team — Our Board */}
      <section id="our-team" aria-labelledby="our-team-heading" className="scroll-mt-28 py-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <div className="max-w-xl mx-auto">
            <h2 id="our-team-heading" className="font-headline-lg text-headline-lg text-primary mb-4">Our Team</h2>
            <p className="text-on-surface-variant">
              Our nine-person team of directors and coaches runs every part of Rule the Board, from curriculum to
              tournaments to outreach.
            </p>
          </div>
        </div>
        {/* Wide banner on desktop so the photo doesn't swallow a full screen:
            the source is 4:3 with a lot of ceiling and floor, so object-position
            pulls the crop up to keep every head in frame and trims at the knees.
            Phones get the uncropped 4:3 so nobody is cut off at 390px wide. */}
        <div className="aspect-[4/3] md:aspect-[21/9] rounded-[40px] overflow-hidden bg-surface-muted soft-card mb-12">
          <Img
            image={images['about-team']}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="w-full h-full object-cover md:object-[center_25%]"
            alt="Seven members of the Rule the Board team standing together on a black and white checkered floor."
          />
        </div>
        {/* No individual headshots yet — each avatar holds a piece rather than a
            generic person glyph — navy only, because nine accent-colored pieces in
            one row is exactly the rainbow we're avoiding. The team photo above
            gives the section a real face in the meantime. */}
        {/* Rows are grouped on purpose (founders / directors / coaches) rather
            than a uniform grid, so each row centers under the heading. */}
        <div className="flex flex-col gap-y-10 mb-12">
          {teamRows.map((row, i) => (
            <ul key={i} className="flex flex-wrap justify-center gap-gutter">
              {row.map((member) => (
                <li className="group text-center w-[calc(50%-12px)] sm:w-44 md:w-52" key={member.name}>
                  <div className="aspect-square rounded-full overflow-hidden mb-6 soft-card border-4 border-white bg-surface-muted flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                    <Icon name="person" className="text-outline text-5xl" />
                  </div>
                  <h3 className="font-label-bold text-label-bold text-primary uppercase">{member.name}</h3>
                  <p className="text-label-sm font-label-sm text-secondary">{member.role}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-3xl soft-card border border-outline-variant p-6">
          <Img
            image={images['about-founders']}
            sizes="(min-width: 640px) 224px, 100vw"
            className="w-full sm:w-56 h-40 object-cover rounded-2xl shrink-0"
            alt="Rule the Board's three founders, Nathan Ye, Leonardo Castro-Balbi, and Arjun Garg, sitting together outdoors."
          />
          <p className="text-on-surface-variant text-body-md text-center sm:text-left">
            Rule the Board was founded by <strong className="text-primary">Nathan Ye</strong>,{' '}
            <strong className="text-primary">Leonardo Castro-Balbi</strong>, and{' '}
            <strong className="text-primary">Arjun Garg</strong>, who built the Rule the Board Scholarship and
            Checkmate Your Summer programs from the ground up.
          </p>
        </div>
      </section>

      {/* Our Values: the King in the middle, the five values on a ring around
          it, joined by lines so it reads as one web rather than six cards. */}
      <WaveDivider className="text-surface-muted" />
      <section id="our-values" aria-labelledby="our-values-heading" className="scroll-mt-28 py-20 bg-surface-muted relative overflow-hidden">
        <MarginMotif side="right" className="top-14" piece={<Queen className="w-32 h-32 text-primary/25" />} />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 id="our-values-heading" className="font-headline-lg text-headline-lg text-primary mb-3">Our Values</h2>
            <DashedRule className="mx-auto mb-4 text-accent-orange" />
            <p className="text-on-surface-variant">
              The King is Rule the Board itself. The five pieces around it are what we hold ourselves to:
              excellence, resilience, integrity, passion, and service.
            </p>
          </div>
          <ValuesWeb />
        </div>
      </section>
      <WaveDivider className="text-surface-muted" flip />

      {/* Impact Report(s) */}
      <section id="impact-report" aria-labelledby="impact-report-heading" className="scroll-mt-28 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 mb-20">
        <div className="bg-white rounded-[40px] p-8 md:p-16 soft-card relative flex flex-col md:flex-row items-center gap-12 overflow-hidden">
          <button
            type="button"
            onClick={() => setShowReport(true)}
            className="group relative w-48 shrink-0"
            aria-label="View the 2025-26 Impact Report"
          >
            <Img
              image={images['impact-report-cover']}
              sizes="192px"
              className="w-48 h-64 object-cover rounded-xl shadow-lg border-2 border-outline-variant transition-transform group-hover:-translate-y-1"
              alt="Cover of the Rule the Board 2025-26 Impact Report"
            />
            {/* Picture-in-picture: a floating "view" badge overlapping the
                cover's corner, rather than a plain static icon box. */}
            <span className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full bg-secondary-strong text-on-secondary flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
              <Icon name="visibility" />
            </span>
          </button>
          <div className="flex-1 text-center md:text-left">
            <h2 id="impact-report-heading" className="font-headline-lg text-headline-lg text-primary mb-4">Where the money went</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-8">
              Our 2025-26 Impact Report has the real numbers on what donations paid for. Lesson hours, tournament
              entries, equipment, and how our scholars did.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                type="button"
                onClick={() => setShowReport(true)}
                className="tactile-button focus-ring-invert bg-secondary-strong text-on-secondary px-8 py-4 rounded-2xl font-label-bold text-label-bold uppercase flex items-center justify-center gap-2"
              >
                <Icon name="picture_as_pdf" />
                View Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const KING = {
  piece: 'King',
  glyph: '♔',
  value: 'Rule the Board',
  description: 'The name and the mission. Everything else on this board builds on it.',
};

const VALUES = [
  {
    piece: 'Queen',
    glyph: '♕',
    value: 'Excellence',
    description: 'The standard we hold ourselves to in every classroom, tournament, and decision.',
  },
  {
    piece: 'Knight',
    glyph: '♘',
    value: 'Resilience',
    description: 'Losing a game, setting the pieces back up, and sitting down for the next one.',
  },
  {
    piece: 'Rook',
    glyph: '♖',
    value: 'Integrity',
    description: 'Our scholars learn to compete honestly, on the board and off it.',
  },
  {
    piece: 'Bishop',
    glyph: '♗',
    value: 'Passion',
    description: 'Scholars chasing their next rating, and coaches who keep showing up for them.',
  },
  {
    piece: 'Pawn',
    glyph: '♙',
    value: 'Service',
    description: 'Coaches, board members, and volunteers who give their time so a scholar never has to sit out.',
  },
];

// Ring geometry for the desktop layout, in px inside a square stage.
const STAGE = 680;
const CENTER = STAGE / 2;
const RADIUS = 236;
const RING = VALUES.map((_, i) => {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / VALUES.length; // start at 12 o'clock
  return { x: CENTER + RADIUS * Math.cos(angle), y: CENTER + RADIUS * Math.sin(angle) };
});

function ValueCircle({
  item,
  king = false,
  className = '',
  style,
}: {
  item: { piece: string; glyph: string; value: string; description: string };
  king?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <li style={style} className={className}>
      <div
        className={`rounded-full bg-white soft-card border border-outline-variant flex flex-col items-center justify-center text-center ${
          king ? 'w-60 h-60 p-7 border-2 border-primary' : 'w-48 h-48 p-5'
        }`}
      >
      <span className={`${king ? 'text-5xl' : 'text-4xl'} text-primary leading-none mb-1`} aria-hidden="true">
        {item.glyph}
      </span>
      <span className="text-label-sm font-label-bold uppercase text-secondary">{item.piece}</span>
      <h3 className={`${king ? 'font-headline-md text-headline-md' : 'font-label-bold text-label-bold'} text-primary mb-1`}>
        {item.value}
      </h3>
      <p className="text-on-surface-variant text-[12px] leading-snug">{item.description}</p>
      </div>
    </li>
  );
}

/**
 * Desktop: an absolutely positioned ring on a fixed square stage, with an SVG
 * underneath drawing spokes from the King and a pentagon between neighbours.
 * Below lg the ring cannot fit, so it falls back to the King on top and the
 * five values wrapping beneath it. Both branches share one list for
 * assistive tech: the DOM order is King first, then the five values.
 */
function ValuesWeb() {
  return (
    <>
      {/* Phone / tablet */}
      <ul className="lg:hidden flex flex-wrap justify-center gap-6">
        <ValueCircle item={KING} king className="basis-full flex justify-center" />
        {VALUES.map((v) => (
          <ValueCircle key={v.piece} item={v} />
        ))}
      </ul>

      {/* Desktop web */}
      <div className="hidden lg:block relative mx-auto" style={{ width: STAGE, height: STAGE }}>
        <svg
          className="absolute inset-0 w-full h-full text-primary/25"
          viewBox={`0 0 ${STAGE} ${STAGE}`}
          aria-hidden="true"
        >
          {RING.map((p, i) => (
            <line key={`spoke-${i}`} x1={CENTER} y1={CENTER} x2={p.x} y2={p.y} stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          ))}
          <polygon points={RING.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <ul className="absolute inset-0">
          <ValueCircle
            item={KING}
            king
            className="absolute"
            // Centered by offsetting half the circle's own size (w-60 = 240px).
            style={{ left: CENTER - 120, top: CENTER - 120 }}
          />
          {VALUES.map((v, i) => (
            <ValueCircle
              key={v.piece}
              item={v}
              className="absolute"
              style={{ left: RING[i].x - 96, top: RING[i].y - 96 }}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
