import { Link } from 'react-router-dom';
import { IoSchoolOutline, IoRibbonOutline, IoPeopleOutline, IoHeartOutline } from 'react-icons/io5';
import { Pawn, Rook, Knight, CheckerStrip, MarginMotif } from '../components/ChessMotifs';
import { WaveDivider, DotField, DashedRule } from '../components/Decor';
import Placeholder from '../components/Placeholder';
import useCountUp from '../hooks/useCountUp';
import useInView from '../hooks/useInView';

/*
 * Each stat is split into prefix / value / suffix so the number itself can be
 * counted up while "$" / "k+" / "%" stay put around it. The old "[120]" square
 * brackets are gone — brackets read as a dev leftover, not a placeholder cue —
 * replaced by the dashed underline from <Placeholder>, the same convention
 * used for every other unconfirmed value on the site. The underlying figures
 * (120, $50k+, 15, 100%) are untouched, only the punctuation around them is.
 *
 * One accent color per stat, cycling through the full tertiary set — this is
 * the one place those colors are assigned to plain UI rather than a chess
 * motif, done deliberately per stat rather than reused as a single tint.
 */
const stats = [
  { prefix: '', value: 120, suffix: '', label: 'Partner Schools', icon: IoSchoolOutline, color: 'text-accent-teal' },
  { prefix: '$', value: 50, suffix: 'k+', label: 'Scholarships Awarded', icon: IoRibbonOutline, color: 'text-accent-orange' },
  { prefix: '', value: 15, suffix: '', label: 'Grandmaster Tutors', icon: IoPeopleOutline, color: 'text-accent-blue' },
  { prefix: '', value: 100, suffix: '%', label: 'Student Passion', icon: IoHeartOutline, color: 'text-accent-green' },
];

function Stat({ stat }: { stat: (typeof stats)[number] }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const count = useCountUp(stat.value, inView);
  const Icon = stat.icon;

  return (
    <div ref={ref} className="text-center px-4">
      <Icon className={`w-6 h-6 mx-auto mb-3 ${stat.color}`} aria-hidden="true" />
      {/* No dashed underline here (unlike other Placeholder usage): sitting this
          close above the label, it collided with it and read as a stray broken
          line rather than a placeholder cue. The count-up itself, plus the
          icon, already signal "this figure is illustrative." */}
      <div className="font-headline-lg text-headline-lg md:text-[40px] md:leading-[1] text-primary tabular-nums">
        {stat.prefix}
        {count.toLocaleString()}
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
            <div className="inline-flex items-center gap-2 bg-secondary-soft text-secondary px-4 py-2 rounded-full mb-6">
              <span className="material-symbols-outlined text-sm">stars</span>
              <span className="font-label-bold text-label-bold uppercase">Empowering Strategy</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl mb-6 text-primary leading-tight">
              Empowering young minds through the strategy <span className="text-secondary">of chess.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto lg:mx-0">
              We provide high-quality coaching, professional equipment, and lifelong mentorship to students from all
              backgrounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/scholars"
                className="lift-button coral-lift focus-ring-invert bg-secondary-strong text-on-secondary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase text-center"
              >
                Join the Program
              </Link>
              <Link
                to="/get-involved"
                className="lift-button navy-lift bg-primary text-on-primary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
          <div className="relative lg:h-[500px]">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-soft rounded-full blur-3xl opacity-70" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-soft rounded-full blur-3xl opacity-70" />
            <div className="relative rounded-3xl overflow-hidden border-4 border-white soft-card h-full transform hover:rotate-1 transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                alt="A group of diverse grade school students laughing and intensely focusing on a large wooden chess board in a bright, modern light-filled community center."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALFMFbWtMdMyL0kOMs08jwEobvlhoeTd92vAPj8dzCt1z7Qiu6_pvbhqNavwxtVqyQpyLaYii8qat96UjG0L5KvArGH_XnXEJu_BKAg42GK_LIppqVYKy4Bvfk0sfWOOmk6zKZumM_FgEFJMx7mSC6_sgduFyr9xIbEqbTJ7hP3wT8pT0Cf9Da7SZyFyEcBgZzo4oWl-q3koIk-UWVxAkfvaul2MeBBPdkeHk_4E2l7sV0N4y3HoNpkRDmgcc1LuWAdVEzqJbYciXa"
              />
              <div className="absolute bottom-6 right-6 glass-card p-6 rounded-2xl border border-white/60 max-w-xs shadow-lg">
                <p className="font-headline-md text-headline-md text-secondary mb-1">
                  <Placeholder tone="stat">5,000+</Placeholder>
                </p>
                <p className="font-label-bold text-label-bold text-primary">Matches played this year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar. The checker strip caps the band so the row reads as a
          deliberate unit instead of four numbers floating in a gap. */}
      <WaveDivider className="text-surface-muted" />
      <section className="bg-surface-muted py-10 px-margin-mobile relative overflow-hidden">
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

      <WaveDivider className="text-surface-muted" flip />

      {/* What We Do */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-background relative overflow-hidden">
        <MarginMotif side="left" className="top-16" piece={<Pawn className="w-24 h-24 text-accent-teal/30" />} />
        <MarginMotif side="right" className="top-16" piece={<Knight className="w-28 h-28 text-accent-orange/30" />} />
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">What We Do</h2>
            <DashedRule className="mx-auto mb-4 text-accent-teal" />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Beyond the pieces on the board, we build character, discipline, and critical thinking skills for the
              next generation of leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                title: 'Pro Coaching',
                icon: 'school',
                well: 'bg-primary-soft',
                body: 'Access to certified instructors who translate complex strategy into fun, bite-sized lessons for grades 3-8.',
              },
              {
                title: 'Equipment',
                icon: 'inventory_2',
                well: 'bg-primary-soft',
                body: 'We provide tournament-grade boards, clocks, and study materials to students who need them most.',
              },
              {
                title: 'Mentorship',
                icon: 'groups',
                well: 'bg-primary-soft',
                body: 'Pairing students with local mentors to foster emotional intelligence and social-emotional learning through play.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white p-8 rounded-[32px] border border-outline-variant card-shadow hover:shadow-md transition-shadow group"
              >
                <div
                  className={`w-16 h-16 ${card.well} flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span className="material-symbols-outlined text-primary text-3xl">{card.icon}</span>
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
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-muted">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Level Up Your Game</h2>
              <DashedRule className="mb-4 text-accent-orange" />
              <p className="font-body-md text-body-md text-on-surface-variant">
                Choose the path that fits your journey. Whether you're a beginner or a budding Grandmaster, we have a
                place for you.
              </p>
            </div>
            <Link to="/programs" className="text-secondary font-label-bold text-label-bold flex items-center gap-2 group">
              VIEW ALL PROGRAMS
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden card-shadow border border-outline-variant hover:shadow-lg transition-all">
              <div className="w-full md:w-2/5 h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover"
                  alt="A focused young girl thinking deeply about her next move during a chess tournament."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrPZdXw3XMJCSh2ODM8lqUEaelmfX9L4gc36eXbGvHUL2REuLdZ-qldT8Eyf-N45SvuBvGwa4Kwk2cHqHrEY3c_qjIPrVLR2Zf7lHe3xxEOGySDYBFkrTohfzL4_VpDdJlMdUMdxhaS1HQwYJXET4SHQo0HsT-WT0dQrmAY6mrqq0QoRJ_hIIkRbHdntArU9AOu5M7yA5stACxzbvHLtFYGVhRgsjiq4ByIq1viCIMUCZR0EP-ax5gxymEzUhMjt79DOkvZw80vejT"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="text-primary font-label-bold text-label-sm uppercase tracking-widest mb-2">
                  Annual Program
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Rule the Board Scholarship</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  A full-year merit-based sponsorship covering coaching, travel, and tournament entries.
                </p>
                <Link to="/scholars" className="text-secondary font-label-bold text-label-bold flex items-center gap-2 group">
                  Learn More
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden card-shadow border border-outline-variant hover:shadow-lg transition-all">
              <div className="w-full md:w-2/5 h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover"
                  alt="An outdoor summer camp scene where children are playing chess on large lawn-sized chess boards."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8_1qySo9NAw-XjnyYZdUY0x7lOTbv0Sh_bCwfqYjd5NZLmgZoupCxDZuVhrc2o3w7zXJaThKNZkCnxpN58UZ4UDUngBrGodFaJHCjJOlgN6QbTvIiBFEDu0hC7tb1UM4fHMH_iZUyxhDcUmHFe-cK4YY9Soh6uqNt6WFabDNqo92VXeEK9UxZg0Qq8pV8qbN1VovBHfNEEN_Zo5AjatKgFezAdqv3u46laU-xlx30VgLQuQss4sJKy5csvV9Xmq4U9Y2ZMgXL1vL1"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="text-on-surface-variant font-label-bold text-label-sm uppercase tracking-widest mb-2">
                  Seasonal Workshop
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Checkmate Your Summer</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Intensive 4-week summer masterclasses designed to leapfrog your rating in a fun camp environment.
                </p>
                <Link to="/programs" className="text-secondary font-label-bold text-label-bold flex items-center gap-2 group">
                  Explore Classes
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider className="text-surface-muted" flip />

      {/* CTA Section */}
      <section className="py-20 px-margin-mobile">
        <div className="max-w-container-max mx-auto bg-primary rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden">
          <DotField className="opacity-[0.10]" />
          {/* Pieces framing the CTA, tinted white because this band is navy. */}
          <Pawn className="pointer-events-none hidden lg:block absolute left-10 bottom-0 w-28 h-28 text-white/[0.07]" />
          <Knight className="pointer-events-none hidden lg:block absolute right-10 bottom-0 w-32 h-32 text-white/[0.07]" />
          <div className="relative z-10">
            {/* Same checker strip that caps the stats band, repeated here so the
                two most important moments on the page are marked the same way. */}
            <CheckerStrip className="w-[47px] h-[23px] mx-auto mb-6" />
            <h2 className="font-headline-xl text-headline-xl text-white mb-6">Your next move changes everything.</h2>
            <p className="font-body-lg text-body-lg text-white/75 max-w-2xl mx-auto mb-10">
              Help us bring the royal game to every classroom. Whether you want to volunteer or donate, you're
              building a smarter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/get-involved"
                className="lift-button coral-lift focus-ring-invert bg-secondary-strong text-on-secondary px-10 py-5 rounded-2xl font-label-bold text-label-bold tracking-widest uppercase text-center"
              >
                Become a Sponsor
              </Link>
              <Link
                to="/scholars"
                className="lift-button white-lift bg-white text-primary px-10 py-5 rounded-2xl font-label-bold text-label-bold tracking-widest uppercase text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
