import { Link } from 'react-router-dom';

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

export default function Programs() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop text-center max-w-4xl mx-auto">
        <h1 className="font-headline-xl text-headline-xl mb-6 text-primary">Find Your Winning Move</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Whether you're just learning the names of the pieces or you're ready to master the Sicilian Defense, we
          have a chair waiting for you. Our programs are designed for grades 3-8 to inspire confidence and
          strategic thinking.
        </p>
      </section>

      {/* Programs Grid */}
      <section className="pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Full Scholarship Program Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-[32px] p-8 md:p-12 soft-card flex flex-col relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-tertiary-fixed-dim/20 rounded-full blur-3xl group-hover:bg-tertiary-fixed-dim/40 transition-colors duration-500" />
            <div className="mb-8">
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary text-4xl">workspace_premium</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Rule the Board</h2>
              <p className="font-body-md text-on-surface-variant mb-6">
                The definitive scholarship program for committed young players looking to reach master level.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-label-bold mb-8">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  stars
                </span>
                FULL SCHOLARSHIP
              </div>
            </div>
            <div className="space-y-4 mb-10 flex-grow">
              {[
                'Weekly 1-on-1 Grandmaster Coaching',
                'Paid Entry to National Tournaments',
                'Academic Mentorship & College Prep',
                'Elite Chess Books & Equipment Pack',
              ].map((item) => (
                <div className="flex items-start gap-4" key={item}>
                  <div className="w-6 h-6 rounded-full bg-secondary-container/20 flex items-center justify-center flex-shrink-0 mt-1">
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
            <Link
              to="/scholars"
              className="tactile-button bg-secondary text-on-secondary w-full py-5 rounded-2xl font-label-bold text-lg uppercase text-center"
            >
              Apply for Scholarship
            </Link>
            <div className="mt-6 text-center">
              <p className="font-label-sm text-on-surface-variant">[Application deadline — confirm with team]</p>
            </div>
          </div>

          {/* Intro Class Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-[32px] p-8 md:p-12 soft-card flex flex-col relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-fixed/20 rounded-full blur-3xl group-hover:bg-secondary-fixed/40 transition-colors duration-500" />
            <div className="mb-8">
              <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-4xl">rocket_launch</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Checkmate Your Summer</h2>
              <p className="font-body-md text-on-surface-variant mb-6">
                A beginner-friendly intensive workshop designed to take students from novice to confident player.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-full text-label-bold mb-8">
                <span className="material-symbols-outlined text-sm">schedule</span>
                SUMMER WORKSHOP
              </div>
            </div>
            <div className="space-y-4 mb-10 flex-grow">
              {[
                'Fundamental Rules & Piece Movements',
                'Basic Endgames & Mating Patterns',
                'Interactive Play Sessions',
                'End-of-Summer Student Tournament',
              ].map((item) => (
                <div className="flex items-start gap-4" key={item}>
                  <div className="w-6 h-6 rounded-full bg-primary-container/10 flex items-center justify-center flex-shrink-0 mt-1">
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
            <button
              className="tactile-button bg-primary text-on-primary w-full py-5 rounded-2xl font-label-bold text-lg uppercase"
              style={{ boxShadow: '0 4px 0 0 rgba(19, 27, 46, 1)' }}
            >
              Reserve a Spot
            </button>
            <div className="mt-6 text-center">
              <p className="font-label-sm text-on-surface-variant">No prior experience required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Illustration / Mood Section */}
      <section className="bg-surface-container py-20 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="font-headline-lg text-headline-lg text-primary mb-6">Strategy Beyond the Board</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Chess isn't just about moving wood—it's about learning patience, critical thinking, and the courage
                to make a plan. Our coaches focus on building the person, not just the player.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-surface-bright rounded-2xl border border-outline-variant">
                  <div className="text-secondary font-headline-md mb-2">[95%]</div>
                  <p className="text-label-sm text-on-surface-variant">
                    Improvement in academic focus reported by parents.
                  </p>
                </div>
                <div className="p-6 bg-surface-bright rounded-2xl border border-outline-variant">
                  <div className="text-secondary font-headline-md mb-2">[500+]</div>
                  <p className="text-label-sm text-on-surface-variant">
                    Scholarships awarded to aspiring young chess stars.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-full h-80 rounded-[40px] overflow-hidden soft-card">
                <img
                  className="w-full h-full object-cover"
                  alt="A warm and inviting interior of a modern chess academy. Sunlight streams through large windows illuminating thick wooden chess boards."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_jwAzUpDLaK0MgHGQNrCy-qAjt7mElw5c9NmPbGKYtwvU4W9Co5subGE74WE6bFuXgoDSnMIwZVujWZbYyE-kbitlB1fpwTxqeCjvC14ENNptwYGlAR1Z5Tw_dlcfJjtgQsPwgDNnrLBJaYINrstPDPBR4UImBzh85CyNtkBGWu7-rKOCJPq3KOMHPoYPAtenFydWlFj-w--WgHoAxReu0XYiaEu-kC_cWJ2ItY5bdlB6BWbDcbS0drrakUp6wtrb9-qLMKwH9S97"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 rounded-3xl shadow-xl animate-bounce">
                <span className="material-symbols-outlined text-white text-5xl">chess</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Tournaments */}
      <section className="bg-surface-container-low py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-bold text-label-sm mb-6">
              <span className="material-symbols-outlined text-[18px]">event</span>
              UPCOMING TOURNAMENT SEASON
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Events & Tournaments</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Compete with your peers, earn rating points, and unlock scholarship opportunities on the tournament
              circuit.
            </p>
          </div>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Upcoming Tournaments</h3>
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
                    <h4 className="font-headline-md text-headline-md text-primary mb-2">{t.name}</h4>
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

      {/* Events CTA */}
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

      {/* Tournament FAQ */}
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
