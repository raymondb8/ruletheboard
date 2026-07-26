const tournaments = [
  {
    name: 'Spring Open Championship',
    date: '[Date — TBD]',
    location: '[Location — confirm with team]',
    tags: ['U800', 'U1200', 'Open'],
    entry: '[Entry fee — TBD]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABk0kwJP4lHkLzoGCNjtg_EXsc7717XW-RPuYfg5q6uF1eeHx1sn0k-778XE2ov96PVUe6TuY0HlFUPr5FzlaEExkyEGEikIEIt_7xCGaGGEk69gB6ejeXt-aL-8PjOHshOxtB5R9USWZNVqgpJDxTvPmxQHeB7EVzaIjoSC1qEuMUI3cyuL4pou3QH1cJtDvc6jtDyngA5lvq9G6uu_doW-sdZBr5P0eOPMQppfF7el8blw0qjgRLdj4WH2SYLaWW4VTlOiGsZ0Y0',
  },
  {
    name: 'Grandmaster Dreams Qualifier',
    date: '[Date — TBD]',
    location: '[Location — confirm with team]',
    tags: ['Beginner', 'Advanced'],
    entry: '[Entry fee — TBD]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCclj8okEXC9W5mrsLqP0o2L-fmYhySG27mo-U7l4i8V0DedOpZjtEV2zfR2vrYjFiOXMvnrAoRl5zZawankfvkKvSmN5UfOo9Qs4Ouwxkh5gacvqcPMDFbtaedYShO25sSnTXyBFZbfFekdQTBajBmR52nuJ9c1l0Ob-oJmmZofmFOMlTwxdgSodLJ3qFncR4vny3Ao4YoWCy-xBKW0a7dkf29h0zWhWCu6qbVA7oEO-lxC4_9plbbQGqXxOnTJUjmNW4Dsg3SfJpR',
  },
  {
    name: 'City-Wide Scholastic Blitz',
    date: '[Date — TBD]',
    location: '[Location — confirm with team]',
    tags: ['Blitz Only', 'K-8'],
    entry: '[Entry fee — TBD]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCM7gqwL9FnJH-nlrgNvEPQLtvbFP56VgpUSQfxkywFUUupcGA-WKoko3_xo7bSl08JFocMnfHJUCjo6K6UUKJWre8FhQa-WUvthIHYpBGJfvTy_Xy50AtRS3PXFhm3OXDlwCz4Ex642mplwht4Hlxqioce_7-ZPHXpexRpUdEpkWQOe2pMztTI4bq7dcWu0F6z1ykcN24GFwO6eDQYDLlZ0_YsZCDeGviQYSp5KiB0kHXX16CiBCZ_bZsx5UAy87DgTf5macHvwgnz',
  },
  {
    name: 'Summer Masters Invitational',
    date: '[Date — TBD]',
    location: '[Location — confirm with team]',
    tags: ['FIDE Rated', 'USCF Required'],
    entry: '[Entry fee — TBD]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMRP_cYjoQcADbmSRgpHlOu-N-PZA4FM6ZHGVbEHu3ciK0CYb6jZzzmwiH0uHH5PMa1SPNBdYePtCPx6Qa59oP-29Qb4GRzPkBB_A4KuUIdGqbR5PsLcpzBxGGGzWk310B0hylE1dA8Lq0EBlffZOSOew7Ja7a_NLNeK4Mj-BxpzYTEwe64RMue9ufTMlxpWS9jB6uBnjyRoihq5qeMfjTYj9HUsvEtsW33bnCpA4aNt9LRiPEbKFnQMgzUfafRWsrMurkZYKgVfEI',
  },
];

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

export default function Events() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-bold text-label-sm mb-6">
            <span className="material-symbols-outlined text-[18px]">event</span>
            UPCOMING TOURNAMENT SEASON
          </span>
          <h1 className="font-headline-xl text-headline-xl text-primary mb-6 max-w-3xl">
            Strategic Moves, <span className="text-secondary">Scholarship Goals.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            Join the premier youth chess tournament circuit. Compete with your peers, earn rating points, and
            unlock scholarship opportunities for your future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="soft-card bg-surface-container-lowest p-6 rounded-xl text-left border-l-4 border-secondary">
              <div className="text-secondary font-headline-md text-headline-md mb-2">[TBD]</div>
              <div className="text-on-surface-variant font-label-bold text-label-sm uppercase tracking-wider">
                State Qualifiers
              </div>
            </div>
            <div className="soft-card bg-surface-container-lowest p-6 rounded-xl text-left border-l-4 border-primary">
              <div className="text-primary font-headline-md text-headline-md mb-2">[TBD]</div>
              <div className="text-on-surface-variant font-label-bold text-label-sm uppercase tracking-wider">
                Scholarships Awarded
              </div>
            </div>
            <div className="soft-card bg-surface-container-lowest p-6 rounded-xl text-left border-l-4 border-secondary">
              <div className="text-secondary font-headline-md text-headline-md mb-2">[TBD]</div>
              <div className="text-on-surface-variant font-label-bold text-label-sm uppercase tracking-wider">
                Active Students
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-fixed opacity-20 rounded-full blur-3xl -z-10" />
      </section>

      {/* Upcoming Tournaments */}
      <section className="bg-surface-container-low py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Upcoming Tournaments</h2>
              <p className="text-on-surface-variant font-body-md">Find a local event and start your competitive journey.</p>
            </div>
            <div className="hidden md:flex gap-3">
              <button className="p-2 rounded-full border border-outline text-outline hover:bg-surface-variant transition-colors">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
              <button className="p-2 rounded-full border border-outline text-outline hover:bg-surface-variant transition-colors">
                <span className="material-symbols-outlined">map</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {tournaments.map((t) => (
              <div
                key={t.name}
                className="soft-card bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col md:flex-row group hover:border-secondary transition-colors duration-300"
              >
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${t.image}')` }}
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded font-label-bold text-label-sm">
                    {t.date}
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-2">{t.name}</h3>
                    <div className="flex items-center gap-2 text-on-surface-variant mb-4">
                      <span className="material-symbols-outlined text-[18px]">location_on</span>
                      <span className="text-label-bold">{t.location}</span>
                    </div>
                    <div className="flex gap-2 mb-6 flex-wrap">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface-container-high px-2 py-1 rounded text-label-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-secondary font-label-bold">
                      {t.entry} <span className="text-on-surface-variant font-medium text-label-sm">Entry</span>
                    </div>
                    <button className="text-secondary font-label-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      REGISTER <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary-container relative overflow-hidden">
        <div className="max-w-container-max mx-auto flex flex-col items-center text-center relative z-10">
          <h2 className="font-headline-xl text-headline-xl text-on-primary-container mb-6">Ready to compete?</h2>
          <p className="font-body-lg text-body-lg text-on-primary-container/80 max-w-2xl mb-12">
            Create your student profile today to track your progress, manage registrations, and see where you
            stand on the state leaderboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="tactile-button bg-secondary text-on-secondary px-10 py-4 rounded-xl font-label-bold text-body-md uppercase">
              Create Free Profile
            </button>
            <button className="px-10 py-4 rounded-xl border-2 border-on-primary-container text-on-primary-container font-label-bold text-body-md uppercase hover:bg-on-primary-container hover:text-primary-container transition-all">
              View Season Rules
            </button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 chess-pattern pointer-events-none" />
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">First Tournament?</h2>
            <p className="text-on-surface-variant">Everything parents and kids need to know before the clock starts ticking.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={faq.q} className="soft-card bg-surface-container-lowest rounded-xl group" open={i === 0}>
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h4 className="font-headline-md text-[18px] text-primary">{faq.q}</h4>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-12 p-8 bg-tertiary-fixed rounded-2xl flex items-center gap-6">
            <div className="bg-on-tertiary-fixed-variant p-3 rounded-full">
              <span className="material-symbols-outlined text-white">help_center</span>
            </div>
            <div>
              <p className="font-label-bold text-on-tertiary-fixed">Still have questions?</p>
              <a className="text-on-tertiary-fixed-variant font-medium underline underline-offset-4" href="#">
                Read our comprehensive Parents' Guide to Youth Chess
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
