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
            <button className="tactile-button bg-secondary text-on-secondary w-full py-5 rounded-2xl font-label-bold text-lg uppercase">
              Apply for Scholarship
            </button>
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
    </>
  );
}
