import { Knight, Rook, MarginMotif } from '../components/ChessMotifs';
import Placeholder from '../components/Placeholder';
import { WaveDivider, DotField, DashedRule } from '../components/Decor';
import { Icon } from '../components/icons';

/*
 * The trainer application, built to mirror Scholars.tsx section for section
 * (hero / how-it-works / eligibility / form) so the two application pages read
 * as one system rather than two different designs. Section ids match the
 * anchors listed in Nav.tsx.
 *
 * Eligibility bullets are intentionally Placeholder text: the team has not
 * settled the real requirements yet, and inventing them on a page people will
 * apply against would be worse than saying so.
 */
export default function Trainers() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-12 md:pt-24 text-center relative">
        <MarginMotif side="left" className="top-16" piece={<Knight className="w-28 h-28 text-accent-orange/30" />} />
        <MarginMotif side="right" className="top-16" piece={<Rook className="w-24 h-24 text-accent-blue/30" />} />
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
          <Icon name="school" className="text-[18px]" filled />
          <span className="text-label-sm font-label-bold uppercase">Trainers</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl mb-6 text-primary max-w-3xl mx-auto">
          Apply to be a chess trainer
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Our coaches run the weekly lessons and the office hours. You don’t need a title or a
          master rating. You need to know the game well enough to explain it to a fourth grader,
          and you need to show up every week.
        </p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" aria-labelledby="how-it-works-heading" className="scroll-mt-28 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <h2 id="how-it-works-heading" className="sr-only">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              step: '01',
              icon: 'edit_document',
              title: 'Apply',
              well: 'bg-primary-soft',
              description: 'Fill out the form below. Tell us what you play and when you’re free.',
            },
            {
              step: '02',
              icon: 'forum',
              title: 'Talk it through',
              well: 'bg-primary-soft',
              description:
                'We read every application and set up a call. We’ll ask how you would teach a position, not quiz you on theory.',
            },
            {
              step: '03',
              icon: 'chess',
              title: 'Start coaching',
              well: 'bg-primary-soft',
              description:
                'You get matched with a scholar, and we hand you the lesson plan we’re already using with them.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-[32px] p-8 soft-card border border-outline-variant flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-headline-lg text-headline-lg text-secondary">{item.step}</span>
                <div className={`w-12 h-12 rounded-full ${item.well} flex items-center justify-center shrink-0`}>
                  <Icon name={item.icon} className="text-primary" />
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">{item.title}</h3>
              <p className="text-on-surface-variant text-body-md">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <WaveDivider className="text-surface-muted" />
      <section id="eligibility" aria-labelledby="eligibility-heading" className="scroll-mt-28 bg-surface-muted py-20 relative overflow-hidden">
        <DotField className="opacity-[0.11]" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mb-10">
            <h2 id="eligibility-heading" className="font-headline-lg text-headline-lg text-primary mb-3">Who Can Apply</h2>
            <DashedRule className="mb-4 text-accent-orange" />
            <p className="text-on-surface-variant">
              We’re still settling the exact requirements. Apply anyway and we’ll tell you where you stand.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {[
              'Trainer eligibility: confirm with team',
              'Minimum age or rating, if any: confirm with team',
              'Background check requirements: confirm with team',
              'Weekly time commitment: confirm with team',
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-outline-variant">
                <Icon name="check_circle" className="text-primary" />
                <span className="font-body-md text-on-surface">
                  <Placeholder>{item}</Placeholder>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <WaveDivider className="text-surface-muted" flip />
      <section id="apply" aria-labelledby="apply-heading" className="scroll-mt-28 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="bg-white rounded-[40px] p-8 md:p-16 soft-card border border-outline-variant max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 id="apply-heading" className="font-headline-lg text-headline-lg text-primary mb-4">Trainer Application</h2>
            <p className="text-on-surface-variant">
              <Placeholder>
                Applications are in beta. We read every submission by hand, and confirmation emails are not
                automated yet.
              </Placeholder>
            </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant" htmlFor="trainer-name">
                FULL NAME
              </label>
              <input
                id="trainer-name"
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="Jane Doe"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant" htmlFor="trainer-email">
                EMAIL
              </label>
              <input
                id="trainer-email"
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant" htmlFor="trainer-phone">
                PHONE
              </label>
              <input
                id="trainer-phone"
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="(555) 555-5555"
                type="tel"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant" htmlFor="trainer-experience">
                EXPERIENCE LEVEL
              </label>
              <select
                id="trainer-experience"
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md appearance-none"
              >
                <option>Enthusiast</option>
                <option>Club Player</option>
                <option>Expert/Master</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant" htmlFor="trainer-rating">
                RATING OR CREDENTIALS (OPTIONAL)
              </label>
              <input
                id="trainer-rating"
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="USCF 1450, or teaching experience"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant" htmlFor="trainer-availability">
                WEEKLY AVAILABILITY
              </label>
              <input
                id="trainer-availability"
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="Weekday evenings, Saturday mornings"
                type="text"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant" htmlFor="trainer-why">
                WHY DO YOU WANT TO COACH WITH RULE THE BOARD?
              </label>
              <textarea
                id="trainer-why"
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="Tell us about your chess and any teaching you have done, formal or not."
                rows={4}
              />
            </div>
            <button
              className="md:col-span-2 tactile-button focus-ring-invert bg-secondary-strong text-on-secondary py-5 rounded-2xl font-label-bold text-lg uppercase mt-2"
              type="submit"
            >
              Submit Application
            </button>
            <p className="md:col-span-2 text-center font-label-sm text-on-surface-variant">
              <Placeholder>Application deadline: confirm with team</Placeholder>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
