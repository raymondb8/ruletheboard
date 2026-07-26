export default function GetInvolved() {
  return (
    <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-12">
      {/* Hero Header */}
      <header className="text-center mb-16">
        <h1 className="font-headline-xl text-headline-xl mb-4 text-primary max-w-3xl mx-auto">
          Make Your Move: Shape the Future of Chess
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Join our community of grandmasters, beginners, and dreamers. Whether you share your time or your
          resources, you're building a smarter world.
        </p>
      </header>

      {/* Bento Grid Sections */}
      <div className="bento-grid">
        {/* 1. Volunteer Section (Large Card) */}
        <section className="col-span-12 md:col-span-8 bg-surface-container-lowest rounded-xl p-8 card-shadow border border-outline-variant relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  volunteer_activism
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary">Volunteer</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
              Share your love for chess with the next generation of strategic thinkers. We need coaches, mentors,
              and event helpers.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-on-surface-variant">FULL NAME</label>
                <input
                  className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                  placeholder="Jane Doe"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-on-surface-variant">EXPERIENCE LEVEL</label>
                <select className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md appearance-none">
                  <option>Enthusiast</option>
                  <option>Club Player</option>
                  <option>Expert/Master</option>
                </select>
              </div>
              <button
                className="md:col-span-2 tactile-button bg-secondary text-on-secondary py-4 rounded-xl font-label-bold uppercase mt-2"
                type="submit"
              >
                SIGN UP TO VOLUNTEER
              </button>
            </form>
          </div>
          <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-surface-variant text-[240px] opacity-20 pointer-events-none">
            chess
          </span>
        </section>

        {/* 2. Donate Section (Medium Card) */}
        <section className="col-span-12 md:col-span-4 bg-primary-container text-on-primary rounded-xl p-8 flex flex-col justify-between border border-transparent">
          <div>
            <div className="w-12 h-12 rounded-full bg-on-primary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">payments</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-white mb-4">Donate</h2>
            <p className="text-on-primary-container font-body-md mb-6">
              Your contributions provide high-quality boards, clocks, and professional coaching to underserved
              schools.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container mt-1">check_circle</span>
                <span className="text-white">Provide boards for a new club</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container mt-1">check_circle</span>
                <span className="text-white">Fund a tournament scholarship</span>
              </li>
            </ul>
          </div>
          <button className="tactile-button bg-secondary-container text-on-secondary-container py-4 rounded-xl font-label-bold uppercase w-full">
            GIVE NOW
          </button>
        </section>

        {/* 3. Community (Small Card) */}
        <section className="col-span-12 md:col-span-4 bg-surface-container-high rounded-xl p-8 border border-outline-variant flex flex-col items-center text-center">
          <h3 className="font-headline-md text-headline-md text-primary mb-6">Community</h3>
          <p className="text-on-surface-variant mb-8">
            Stay updated and connect with other chess lovers in our digital square.
          </p>
          <div className="flex gap-4 mb-4">
            <a
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined text-primary">groups</span>
            </a>
            <a
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined text-primary">share</span>
            </a>
            <a
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined text-primary">camera_alt</span>
            </a>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <span className="text-label-bold text-on-surface-variant">@RuleTheBoardChess</span>
            <p className="text-label-sm text-outline">Instagram / Twitter / Facebook</p>
          </div>
        </section>

        {/* 4. Contact Form (Medium-Large Card) */}
        <section className="col-span-12 md:col-span-8 bg-surface-container rounded-xl p-8 border border-outline-variant">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Contact</h2>
              <p className="text-on-surface-variant font-body-md">
                Have questions about our programs or partnership opportunities? Reach out!
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                  <span className="font-label-bold">hello@ruletheboard.org</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 bg-white p-6 rounded-xl border border-outline-variant">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <textarea
                  className="w-full bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                  placeholder="Your Message"
                  rows={4}
                />
                <button
                  className="tactile-button bg-primary text-white py-3 px-8 rounded-xl font-label-bold uppercase w-full md:w-auto"
                  type="submit"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Progress/Impact Section */}
      <section className="mt-20 p-12 bg-white rounded-xl border border-outline-variant card-shadow text-center">
        <h3 className="font-headline-md text-headline-md mb-8">Current Fundraising Goal</h3>
        <div className="max-w-2xl mx-auto">
          <div className="w-full h-8 bg-surface-container rounded-full overflow-hidden mb-4 relative">
            <div className="h-full bg-secondary rounded-full" style={{ width: '0%' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-label-bold text-white drop-shadow-sm">[Progress — confirm with team]</span>
            </div>
          </div>
          <p className="text-on-surface-variant italic">Help us reach our next goal to launch upcoming programs!</p>
        </div>
      </section>
    </div>
  );
}
