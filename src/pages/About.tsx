export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Decorative Asset */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 chess-pattern" />

      {/* Our Story Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full mb-6">
            <span className="material-symbols-outlined text-[18px]">history_edu</span>
            <span className="text-label-sm font-label-bold uppercase">Our Journey</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl mb-6 text-primary leading-tight">
            Empowering Young Minds, One Move at a Time.
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 max-w-xl">
            Founded with the belief that strategic thinking is a life skill, Rule the Board serves students in
            grades 3-8 through the timeless game of chess. We bridge the gap between classroom learning and
            competitive play, providing scholarships that open doors for the grandmasters of tomorrow.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-white rounded-2xl soft-card">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary">school</span>
              </div>
              <div>
                <h3 className="font-label-bold text-label-bold text-primary mb-1">Grades 3-5: The Foundation</h3>
                <p className="text-on-surface-variant text-body-md">
                  Building focus, patience, and basic tactics through interactive workshops.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-2xl soft-card">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-tertiary-fixed-variant">psychology</span>
              </div>
              <div>
                <h3 className="font-label-bold text-label-bold text-primary mb-1">Grades 6-8: Advanced Strategy</h3>
                <p className="text-on-surface-variant text-body-md">
                  Preparing students for high-level competition and critical decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="aspect-square rounded-[40px] overflow-hidden bg-surface-container shadow-2xl relative">
            <img
              className="w-full h-full object-cover"
              alt="A warm, bright light-mode photo of a diverse group of middle school students in grades 3 to 8 playing chess together in a sunlit classroom."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Ln3RznUie-VGx49WcLLy_ZDqYkVG-dHjGo8nI0uO5fk-7OMupApTox0RyuwqaTsJwc4KGQ5b1zBuVoM1JsS7ShGO8GbB2hqFVxXG1eMAyhAE-G3vAwZ_RzRikWfGFU-Let65zOyzslaYnsTRi-Dub1ayqJLMzBLFBHQDqpsuv0OzuuKYWxPogAMisoVZBgZcHxl6RrVtRk5-EhhvinZj9X2hO4gQIAKibORYNOYLMVH9RFITZ9RyMq5rTxX7tlZORPUUy1XTvx87"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl soft-card flex flex-col items-center">
            <span className="text-headline-lg font-headline-lg text-secondary">10+</span>
            <span className="text-label-sm font-label-bold text-on-surface-variant uppercase">Years of Impact</span>
          </div>
        </div>
      </section>

      {/* Impact Stats (Bento Grid Style) */}
      <section className="bg-surface-container-low py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Growing Reach</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Metrics that reflect our commitment to student success across the country.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="md:col-span-2 bg-primary text-on-primary p-10 rounded-[32px] flex flex-col justify-between">
              <div className="mb-8">
                <span className="material-symbols-outlined text-[48px]">groups</span>
              </div>
              <div>
                <div className="text-headline-xl font-headline-xl mb-2">[1,200+]</div>
                <p className="text-body-lg font-body-lg opacity-80">
                  Students currently enrolled in our scholarship programs across [15] states.
                </p>
              </div>
            </div>
            <div className="bg-secondary-container text-on-secondary-container p-10 rounded-[32px] flex flex-col justify-between">
              <div className="mb-8">
                <span className="material-symbols-outlined text-[40px]">workspace_premium</span>
              </div>
              <div>
                <div className="text-headline-lg font-headline-lg mb-2">[$450k]</div>
                <p className="text-label-bold font-label-bold opacity-80 uppercase tracking-tight">
                  Scholarships Awarded
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-outline-variant flex flex-col justify-between">
              <div className="mb-8">
                <span className="material-symbols-outlined text-secondary text-[40px]">emoji_events</span>
              </div>
              <div>
                <div className="text-headline-lg font-headline-lg text-primary mb-2">[85+]</div>
                <p className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-tight">
                  Tournament Wins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Board */}
      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Strategic Minds Behind RTB</h2>
            <p className="text-on-surface-variant">
              Our board members and staff bring decades of experience in education, competitive chess, and nonprofit
              management.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {[
            { name: '[Name — confirm with team]', role: 'Executive Director' },
            { name: '[Name — confirm with team]', role: 'Board President' },
            { name: '[Name — confirm with team]', role: 'Lead Chess Coach' },
            { name: '[Name — confirm with team]', role: 'Director of Outreach' },
          ].map((member) => (
            <div className="group text-center" key={member.role}>
              <div className="aspect-square rounded-full overflow-hidden mb-6 soft-card border-4 border-white bg-surface-container-high flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                <span className="material-symbols-outlined text-outline text-5xl">person</span>
              </div>
              <h4 className="font-label-bold text-label-bold text-primary uppercase">{member.name}</h4>
              <p className="text-label-sm font-label-sm text-secondary">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Report Download */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 mb-24">
        <div className="bg-white rounded-[40px] p-8 md:p-16 soft-card relative flex flex-col md:flex-row items-center gap-12 overflow-hidden">
          <div className="w-48 h-64 bg-surface-container-highest rounded-xl shadow-lg shrink-0 flex flex-col items-center justify-center border-2 border-outline-variant gap-2 text-center px-4">
            <span className="material-symbols-outlined text-outline text-5xl">description</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Report pending publication</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Transparency Matters</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-8">
              Our Annual Impact Report will show how your donations and support are transforming the lives of
              students across the community through the power of chess education. [Report — pending publication]
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="tactile-button bg-secondary text-on-secondary px-8 py-4 rounded-2xl font-label-bold text-label-bold uppercase flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">picture_as_pdf</span>
                Download Report (PDF)
              </button>
              <button className="px-8 py-4 rounded-2xl font-label-bold text-label-bold text-primary border-2 border-primary hover:bg-surface-container transition-colors uppercase">
                View Financials
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
