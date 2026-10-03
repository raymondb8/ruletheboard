import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSchoolOutline, IoRibbonOutline, IoPeopleOutline, IoHeartOutline } from 'react-icons/io5';
import { Pawn, Rook, Knight, CheckerStrip, MarginMotif } from '../components/ChessMotifs';
import PartnerMarquee from '../components/PartnerMarquee';
import { WaveDivider, DotField, DashedRule } from '../components/Decor';
import useCountUp, { formatCount } from '../hooks/useCountUp';
import useInView from '../hooks/useInView';
import { Icon } from '../components/icons';
import Img from '../components/Img';
import { images } from '../assets/images';
import { currentStats, scholarsServed } from '../data/stats';
import { ODYSSEY_URL } from '../data/org';

/*
 * The stat row. Three of the four figures accrue weekly on their own (see
 * src/data/stats.ts); scholars served is hand-set. Computed once at module
 * scope so the prerendered HTML and the first client render agree on the
 * number, and each stat is split into prefix / value / suffix so the number
 * itself can be counted up while "+" stays put around it.
 *
 * One accent color per stat, cycling through the full tertiary set — this is
 * the one place those colors are assigned to plain UI rather than a chess
 * motif, done deliberately per stat rather than reused as a single tint.
 */
const live = currentStats();

const stats = [
  { prefix: '', value: live.lessonHours, suffix: '', label: 'Lesson Hours', icon: IoSchoolOutline, color: 'text-accent-teal' },
  { prefix: '', value: live.puzzles, suffix: '', label: 'Puzzles Completed', icon: IoRibbonOutline, color: 'text-accent-orange' },
  { prefix: '', value: scholarsServed, suffix: '+', label: 'Scholars Served', icon: IoPeopleOutline, color: 'text-accent-blue' },
  { prefix: '', value: live.games, suffix: '', label: 'Games Played', icon: IoHeartOutline, color: 'text-accent-green' },
];

/* The five values, rotated through the hero headline. Same five that sit on
   the ring on the About page. */
const ROTATING_VALUES = ['excellence', 'resilience', 'integrity', 'passion', 'service'];
const ROTATION_MS = 2200;

const FADE_MS = 260;
const LONGEST_VALUE = ROTATING_VALUES.reduce((a, b) => (b.length > a.length ? b : a));

/**
 * Swaps one word in the headline every couple of seconds. The first word is in
 * the markup from the start, so the prerendered HTML and a visitor without JS
 * both read a complete sentence. Under a reduced-motion preference the word
 * never changes.
 *
 * One word is on screen at a time: it fades out, then the next one fades in.
 * Crossfading two stacked words instead left them legible on top of each other
 * for a quarter second, which read as a smudge rather than a transition.
 *
 * The box is sized to the longest word so the headline doesn't reflow on each
 * swap, and aria-live is deliberately off: a screen reader should read the
 * sentence once, not announce a new value every two seconds.
 */
function RotatingValue() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let swap: ReturnType<typeof setTimeout>;
    const tick = setInterval(() => {
      setVisible(false);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATING_VALUES.length);
        setVisible(true);
      }, FADE_MS);
    }, ROTATION_MS);

    return () => {
      clearInterval(tick);
      clearTimeout(swap);
    };
  }, []);

  return (
    <span className="relative inline-grid align-bottom text-secondary" aria-hidden="true">
      <span
        className={`col-start-1 row-start-1 text-left transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDuration: `${FADE_MS}ms` }}
      >
        {ROTATING_VALUES[index]}
      </span>
      {/* An invisible copy of the longest word holds the width open. */}
      <span className="col-start-1 row-start-1 invisible" aria-hidden="true">
        {LONGEST_VALUE}
      </span>
    </span>
  );
}

function Stat({ stat }: { stat: (typeof stats)[number] }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const countRef = useCountUp<HTMLSpanElement>(stat.value, inView);
  const Icon = stat.icon;

  return (
    <div ref={ref} className="text-center px-4">
      <Icon className={`w-6 h-6 mx-auto mb-3 ${stat.color}`} aria-hidden="true" />
      {/* The real figure is in the markup from the start; useCountUp animates
          the span's text up to it once the card scrolls into view.
          suppressHydrationWarning because the figure accrues weekly: HTML
          prerendered at build time can be a week behind the browser's clock,
          and the client's number is the correct one. */}
      <div className="font-headline-lg text-headline-lg md:text-[40px] md:leading-[1] text-primary tabular-nums">
        {stat.prefix}
        <span ref={countRef} suppressHydrationWarning>{formatCount(stat.value)}</span>
        {stat.suffix}
      </div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-2">
        {stat.label}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center lg:text-left">
            <h1 className="font-headline-xl text-headline-xl mb-6 text-primary leading-tight">
              Discover yourself through a chess education inspiring <RotatingValue />
              {/* The visible word rotates and is hidden from assistive tech, so
                  the heading still has one stable accessible name. */}
              <span className="sr-only">excellence, resilience, integrity, passion, and service</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto lg:mx-0">
              Coaching, a set of their own, and paid entries to rated tournaments. We started Rule the Board after
              a summer of teaching chess at Odyssey, and we couldn't walk away from it.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/programs"
                className="lift-button coral-lift focus-ring-invert bg-secondary-strong text-on-secondary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase text-center"
              >
                Our Program
              </Link>
              <Link
                to="/scholars"
                className="lift-button navy-lift bg-primary text-on-primary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase text-center"
              >
                Apply
              </Link>
              <Link
                to="/about"
                className="lift-button white-lift bg-white text-primary border border-outline-variant px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative lg:h-[500px]">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-soft rounded-full blur-3xl opacity-70" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-soft rounded-full blur-3xl opacity-70" />
            <div className="relative rounded-3xl overflow-hidden border-4 border-white soft-card h-full transform hover:rotate-1 transition-transform duration-500">
              {/* The hero is the page's Largest Contentful Paint element, so it
                  loads eagerly at high priority while every image below the fold
                  is deferred. scripts/prerender.mjs also emits a <link rel=
                  "preload"> for it, so the request starts before the bundle
                  parses. */}
              <Img
                image={images['home-hero']}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover"
                alt="A Checkmate Your Summer student in an Odyssey shirt studying the board mid-game."
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
              <div className="absolute bottom-6 right-6 glass-card p-6 rounded-2xl border border-white/60 max-w-xs shadow-lg">
                <p className="font-headline-md text-headline-md text-secondary mb-1" suppressHydrationWarning>
                  {formatCount(live.puzzles)}
                </p>
                <p className="font-label-bold text-label-bold text-primary">Puzzles solved this year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar. The checker strip caps the band so the row reads as a
          deliberate unit instead of four numbers floating in a gap. */}
      <WaveDivider className="text-surface-muted" />
      <section id="impact" className="scroll-mt-28 bg-surface-muted py-10 px-margin-mobile relative overflow-hidden">
        <DotField className="opacity-[0.11]" />
        <Rook className="pointer-events-none hidden xl:block absolute left-8 -bottom-6 w-24 h-24 text-accent-blue/20" />
        <Rook className="pointer-events-none hidden xl:block absolute right-8 -bottom-6 w-24 h-24 text-accent-blue/20 -scale-x-100" />
        <div className="max-w-container-max mx-auto">
          <CheckerStrip className="w-[47px] h-[23px] mx-auto mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-outline-variant">
            {stats.map((stat) => (
              <Stat key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* The partner bar shares the stats band so the two read as one tinted
          section with a single wave in and out. */}
      <PartnerMarquee />
      <WaveDivider className="text-surface-muted" flip />

      {/* Mission, vision, purpose */}
      <section id="what-we-do" aria-labelledby="what-we-do-heading" className="scroll-mt-28 py-20 px-margin-mobile md:px-margin-desktop bg-background relative overflow-hidden">
        <MarginMotif side="left" className="top-16" piece={<Pawn className="w-24 h-24 text-accent-teal/30" />} />
        <MarginMotif side="right" className="top-16" piece={<Knight className="w-28 h-28 text-accent-orange/30" />} />
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <h2 id="what-we-do-heading" className="font-headline-lg text-headline-lg text-primary mb-3">What We Do</h2>
            <DashedRule className="mx-auto mb-4 text-accent-teal" />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Why we started this, and where we're taking it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                title: 'Mission',
                icon: 'school',
                well: 'bg-primary-soft',
                body: 'Put serious chess coaching in reach of students whose families would never have paid for it. Lessons, a set of their own, and the entry fee covered.',
              },
              {
                title: 'Vision',
                icon: 'groups',
                well: 'bg-primary-soft',
                body: 'A scholar from an Atlanta Title I school sitting across the board from anyone, at any rated tournament, and belonging there.',
              },
              {
                title: 'Purpose',
                icon: 'inventory_2',
                well: 'bg-primary-soft',
                body: "We taught a summer class at Odyssey and watched kids get good fast. Then the class ended. Rule the Board exists so it doesn't have to.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white p-8 rounded-[32px] border border-outline-variant card-shadow hover:shadow-md transition-shadow group"
              >
                <div
                  className={`w-16 h-16 ${card.well} flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon name={card.icon} className="text-primary text-3xl" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">{card.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Previews */}
      <WaveDivider className="text-surface-muted" />
      <section id="programs" aria-labelledby="programs-heading" className="scroll-mt-28 py-20 px-margin-mobile md:px-margin-desktop bg-surface-muted">
        <div className="max-w-container-max mx-auto">
          <div className="mb-10">
            <div className="max-w-2xl">
              <h2 id="programs-heading" className="font-headline-lg text-headline-lg text-primary mb-3">Our Programs</h2>
              <DashedRule className="mb-4 text-accent-orange" />
              <p className="font-body-md text-body-md text-on-surface-variant">
                Rule the Board runs two programs. The year-long Rule the Board scholarship goes to committed,
                aspiring chess scholars. Checkmate Your Summer is for students who want to get their feet wet
                with workshops and group lessons, and it's hosted at Odyssey Atlanta.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden card-shadow border border-outline-variant hover:shadow-lg transition-all">
              <div className="w-full md:w-2/5 h-64 md:h-auto">
                <Img
                  image={images['home-scholarship-preview']}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="w-full h-full object-cover"
                  alt="Two Rule the Board scholars at their boards at the Emory Castle Chess Grand Prix, clocks and scoresheets set up."
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="text-primary font-label-bold text-label-sm uppercase tracking-widest mb-2">
                  Annual Program
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Rule the Board Scholarship</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Resources provided throughout the year, such as private lessons, tournament entries, and more.
                </p>
                <Link to="/scholars" className="text-secondary font-label-bold text-label-bold flex items-center gap-2 group">
                  Learn More
                  <span className="sr-only"> about the Rule the Board Scholarship</span>
                  <Icon name="chevron_right" className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden card-shadow border border-outline-variant hover:shadow-lg transition-all">
              <div className="w-full md:w-2/5 h-64 md:h-auto">
                <Img
                  image={images['home-cys-preview']}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="w-full h-full object-cover"
                  alt="A Checkmate Your Summer coach walking a group of students through a position."
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="text-on-surface-variant font-label-bold text-label-sm uppercase tracking-widest mb-2">
                  Summer Program
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Checkmate Your Summer</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Hosted at Odyssey Atlanta, scholars learn and practice in a group environment accompanied by
                  coaches and volunteers.
                </p>
                {/* Odyssey runs the class, so "learn more" goes to them rather
                    than to a page of ours. */}
                <a
                  href={ODYSSEY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-label-bold text-label-bold flex items-center gap-2 group"
                >
                  Learn more
                  <span className="sr-only"> about Checkmate Your Summer at Odyssey Atlanta</span>
                  <Icon name="chevron_right" className="text-sm group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider className="text-surface-muted" flip />

      {/* CTA Section */}
      <section id="get-involved" aria-labelledby="get-involved-heading" className="scroll-mt-28 py-20 px-margin-mobile">
        <div className="max-w-container-max mx-auto bg-primary rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden">
          <DotField className="opacity-[0.10]" />
          {/* Pieces framing the CTA, tinted white because this band is navy. */}
          <Pawn className="pointer-events-none hidden lg:block absolute left-10 bottom-0 w-28 h-28 text-white/[0.07]" />
          <Knight className="pointer-events-none hidden lg:block absolute right-10 bottom-0 w-32 h-32 text-white/[0.07]" />
          <div className="relative z-10">
            {/* Same checker strip that caps the stats band, repeated here so the
                two most important moments on the page are marked the same way. */}
            <CheckerStrip className="w-[47px] h-[23px] mx-auto mb-6" />
            <h2 id="get-involved-heading" className="font-headline-xl text-headline-xl text-white mb-6">Make a difference</h2>
            <p className="font-body-lg text-body-lg text-white/75 max-w-2xl mx-auto mb-10">
              We operate through volunteers and your support. All funds and resources are directed to our
              scholars.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/get-involved#sponsor"
                className="lift-button coral-lift focus-ring-invert bg-secondary-strong text-on-secondary px-10 py-5 rounded-2xl font-label-bold text-label-bold tracking-widest uppercase text-center"
              >
                Become a Sponsor
              </Link>
              <Link
                to="/get-involved#donate"
                className="lift-button white-lift bg-white text-primary px-10 py-5 rounded-2xl font-label-bold text-label-bold tracking-widest uppercase text-center"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
