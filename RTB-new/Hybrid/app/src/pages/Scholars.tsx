import { Pawn, Queen, MarginMotif } from '../components/ChessMotifs';
import Placeholder from '../components/Placeholder';
import { WaveDivider, DotField, DashedRule } from '../components/Decor';

export default function Scholars() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-12 md:pt-24 text-center relative">
        <MarginMotif side="left" className="top-16" piece={<Pawn className="w-24 h-24 text-accent-teal/30" />} />
        <MarginMotif side="right" className="top-16" piece={<Queen className="w-28 h-28 text-primary/25" />} />
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            workspace_premium
          </span>
          <span className="text-label-sm font-label-bold uppercase">Scholars</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl mb-6 text-primary max-w-3xl mx-auto">
          Your Move. Your Scholarship.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          The Rule the Board Scholarship covers coaching, tournament entries, and equipment for students in grades
          3-8 who are ready to take their game — and their future — seriously.
        </p>
      </section>

      {/* How It Works */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              step: '01',
              icon: 'edit_document',
              title: 'Apply',
              well: 'bg-primary-soft',
              description: 'Fill out the application below — a parent or guardian can help.',
            },
            {
              step: '02',
              icon: 'forum',
              title: 'Review & Assessment',
              well: 'bg-primary-soft',
              description: 'Our team reviews every application. Admitted applicants take a short assessment of their chess skill level.',
            },
            {
              step: '03',
              icon: 'chess',
              title: 'Take Your Seat',
              well: 'bg-primary-soft',
              description: 'Accepted scholars get their lesson plan and gear, and start biweekly or weekly lessons.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-[32px] p-8 soft-card border border-outline-variant flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-headline-lg text-headline-lg text-secondary">{item.step}</span>
                <div className={`w-12 h-12 rounded-full ${item.well} flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
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
      <section className="bg-surface-muted py-20 relative overflow-hidden">
        <DotField className="opacity-[0.11]" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mb-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Who Can Apply</h2>
            <DashedRule className="mb-4 text-accent-green" />
            <p className="text-on-surface-variant">
              We keep the bar for entry simple — no rating, club, or prior tournament experience required.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {[
              'Currently enrolled in grades 3-8',
              'Demonstrated financial need',
              'Willingness to commit to biweekly or weekly lessons',
              'No prior chess experience required',
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-outline-variant">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'wght' 700" }}>
                  check_circle
                </span>
                <span className="font-body-md text-on-surface">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <WaveDivider className="text-surface-muted" flip />
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="bg-white rounded-[40px] p-8 md:p-16 soft-card border border-outline-variant max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Scholarship Application</h2>
            <p className="text-on-surface-variant">
              <Placeholder>
                Applications are currently in beta — submissions are reviewed manually. A confirmation email is
                not yet automated.
              </Placeholder>
            </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant">STUDENT FULL NAME</label>
              <input
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="Jane Doe"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant">GRADE LEVEL</label>
              <select className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md appearance-none">
                <option>3rd Grade</option>
                <option>4th Grade</option>
                <option>5th Grade</option>
                <option>6th Grade</option>
                <option>7th Grade</option>
                <option>8th Grade</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant">SCHOOL NAME</label>
              <input
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="Lincoln Elementary"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant">PARENT / GUARDIAN NAME</label>
              <input
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant">PARENT / GUARDIAN EMAIL</label>
              <input
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant">PARENT / GUARDIAN PHONE</label>
              <input
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="(555) 555-5555"
                type="tel"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant">
                WHY DOES YOUR STUDENT WANT TO JOIN RULE THE BOARD?
              </label>
              <textarea
                className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                placeholder="Tell us a little about your student and why chess interests them."
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
              <Placeholder>Application deadline — confirm with team</Placeholder>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
