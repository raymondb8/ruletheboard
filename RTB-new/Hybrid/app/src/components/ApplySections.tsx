import { Link } from 'react-router-dom';

/*
 * The two "apply" sections on Get Involved. They're self-contained (own
 * heading, intro, eligibility link, and button, with no props) so they can
 * move to a standalone /apply page later by rendering them there and deleting
 * them from GetInvolved.tsx. Nothing else depends on where they sit.
 */

function ApplySection({
  id,
  title,
  intro,
  eligibilityTo,
  applyTo,
  applyLabel,
}: {
  id: string;
  title: string;
  intro: string;
  /** Omitted while there are no published guidelines to link to. */
  eligibilityTo?: string;
  applyTo: string;
  applyLabel: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 bg-white rounded-xl border border-outline-variant card-shadow p-8 flex flex-col"
    >
      <h2 id={`${id}-heading`} className="font-headline-lg text-headline-lg text-primary mb-3">
        {title}
      </h2>
      <p className="font-body-md text-on-surface-variant mb-8">{intro}</p>
      <div className="mt-auto flex flex-col gap-4">
        <Link
          to={applyTo}
          className="tactile-button focus-ring-invert bg-secondary-strong text-on-secondary py-4 rounded-xl font-label-bold uppercase w-full text-center"
        >
          {applyLabel}
        </Link>
        {eligibilityTo && (
          <Link
            to={eligibilityTo}
            className="font-label-bold text-label-bold text-primary hover:text-secondary hover:underline transition-colors text-center"
          >
            Read the eligibility guidelines
          </Link>
        )}
      </div>
    </section>
  );
}

export function ApplyScholarSection() {
  return (
    <ApplySection
      id="apply-scholar"
      title="Apply to be a scholar"
      intro="Grades K-12. One year of coaching, paid entries to rated tournaments, and a chess set you keep."
      eligibilityTo="/scholars#eligibility"
      applyTo="/scholars#apply"
      applyLabel="Apply as a scholar"
    />
  );
}

// TODO(RTB): pass eligibilityTo="/trainers#eligibility" once the trainer
// guidelines exist (see the note in src/pages/Trainers.tsx).
export function ApplyTrainerSection() {
  return (
    <ApplySection
      id="apply-trainer"
      title="Apply to be a trainer"
      intro="Coach a scholar through a season. You don’t need a master title, just the game and a free hour each week."
      applyTo="/trainers"
      applyLabel="Apply as a trainer"
    />
  );
}
