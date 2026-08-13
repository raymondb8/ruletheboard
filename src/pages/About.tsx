import { Pawn, Rook, Knight, Queen, MarginMotif } from '../components/ChessMotifs';
import { WaveDivider, DotField, DashedRule } from '../components/Decor';
import Placeholder from '../components/Placeholder';

export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Decorative Asset */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 chess-pattern" />

      {/* Our Story Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
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
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">school</span>
              </div>
              <div>
                <h3 className="font-label-bold text-label-bold text-primary mb-1">Grades 3-5: The Foundation</h3>
                <p className="text-on-surface-variant text-body-md">
                  Building focus, patience, and basic tactics through interactive workshops.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-2xl soft-card">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">psychology</span>
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
          <div className="aspect-square rounded-[40px] overflow-hidden bg-surface-muted soft-card relative">
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

      {/* The Team — Our Board */}
      <section className="py-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
              <span className="material-symbols-outlined text-[18px]">groups</span>
              <span className="text-label-sm font-label-bold uppercase">The Team — Our Board</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Strategic Minds Behind RTB</h2>
            <p className="text-on-surface-variant">
              Our board members and staff bring decades of experience in education, competitive chess, and nonprofit
              management.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-outline text-primary flex items-center justify-center hover:bg-primary-soft transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline text-primary flex items-center justify-center hover:bg-primary-soft transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        {/* Until real headshots land, each empty avatar holds a piece rather than a
            generic person glyph — navy only, because four accent-colored pieces in
            one row is exactly the rainbow we're avoiding. */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {[
            { name: 'Name — confirm with team', role: 'Executive Director' },
            { name: 'Name — confirm with team', role: 'Board President' },
            { name: 'Name — confirm with team', role: 'Lead Chess Coach' },
            { name: 'Name — confirm with team', role: 'Director of Outreach' },
          ].map((member) => (
            <div className="group text-center" key={member.role}>
              <div className="aspect-square rounded-full overflow-hidden mb-6 soft-card border-4 border-white bg-surface-muted flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                <span className="material-symbols-outlined text-outline text-5xl">person</span>
              </div>
              <h4 className="font-label-bold text-label-bold text-primary uppercase">
                <Placeholder>{member.name}</Placeholder>
              </h4>
              <p className="text-label-sm font-label-sm text-secondary">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <WaveDivider className="text-surface-muted" />
      <section className="py-20 bg-surface-muted relative overflow-hidden">
        <MarginMotif side="right" className="top-14" piece={<Queen className="w-32 h-32 text-primary/25" />} />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              <span className="text-label-sm font-label-bold uppercase">What We Do</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Six Pieces, One Mission</h2>
            <DashedRule className="mb-4 text-accent-orange" />
            <p className="text-on-surface-variant">
              We deliver coaching, tournaments, and equipment to underserved students. The Queen is Rule the Board
              itself — and every other piece on the board stands for a value that carries out that mission.
            </p>
          </div>
          {/* Six cards in one view is exactly where the accent kit would turn into
              a rainbow, so this block is deliberately navy-only with coral labels. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[
              {
                piece: 'King',
                glyph: '♔',
                value: 'Rule the Board',
                icon: 'flag',
                description:
                  'The name and the mission itself — the foundation every other piece on this board builds on.',
              },
              {
                piece: 'Queen',
                glyph: '♕',
                value: 'Excellence',
                icon: 'workspace_premium',
                description: 'The standard we hold ourselves to in every classroom, tournament, and decision.',
              },
              {
                piece: 'Knight',
                glyph: '♘',
                value: 'Resilience',
                icon: 'shield',
                description: 'The strength to reset the board and try again — in chess, in school, and in life.',
              },
              {
                piece: 'Rook',
                glyph: '♖',
                value: 'Integrity',
                icon: 'verified',
                description: 'Our scholars learn to compete honestly, on the board and off it.',
              },
              {
                piece: 'Bishop',
                glyph: '♗',
                value: 'Passion',
                icon: 'favorite',
                description:
                  'The drive that shows up in scholars chasing their next rating, and in a team that shows up for them.',
              },
              {
                piece: 'Pawn',
                glyph: '♙',
                value: 'Service',
                icon: 'volunteer_activism',
                description:
                  'Coaches, board members, and volunteers who give their time so a scholar never has to sit out.',
              },
            ].map((item) => (
              <div
                key={item.piece}
                className="bg-white rounded-[32px] p-8 soft-card border border-outline-variant flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl text-primary leading-none" aria-hidden="true">
                    {item.glyph}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  </div>
                </div>
                <span className="text-label-sm font-label-bold uppercase text-secondary mb-1">{item.piece}</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">{item.value}</h3>
                <p className="text-on-surface-variant text-body-md">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats (Bento Grid Style) */}
      <WaveDivider className="text-surface-muted" flip />
      <section className="bg-background py-20 relative overflow-hidden">
        <MarginMotif side="left" className="top-12" piece={<Pawn className="w-24 h-24 text-accent-teal/30" />} />
        <MarginMotif side="right" className="top-12" piece={<Rook className="w-28 h-28 text-accent-blue/30" />} />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Our Growing Reach</h2>
            <DashedRule className="mx-auto mb-4 text-accent-teal" />
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Metrics that reflect our commitment to student success across the country.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="md:col-span-2 bg-primary text-on-primary p-10 rounded-[32px] flex flex-col justify-between relative overflow-hidden">
              <DotField className="opacity-[0.10]" />
              <Knight className="pointer-events-none absolute -right-4 -bottom-4 w-32 h-32 text-white/[0.08]" />
              <div className="mb-8">
                <span className="material-symbols-outlined text-[48px]">groups</span>
              </div>
              <div>
                <div className="text-headline-xl font-headline-xl mb-2">
                  <Placeholder tone="stat">1,200+</Placeholder>
                </div>
                <p className="text-body-lg font-body-lg text-white/75">
                  Students currently enrolled in our scholarship programs across <Placeholder tone="stat">15</Placeholder> states.
                </p>
              </div>
            </div>
            <div className="focus-ring-invert bg-secondary-strong text-on-secondary p-10 rounded-[32px] flex flex-col justify-between">
              <div className="mb-8">
                <span className="material-symbols-outlined text-[40px]">workspace_premium</span>
              </div>
              <div>
                <div className="text-headline-lg font-headline-lg mb-2">
                  <Placeholder tone="stat">$450k</Placeholder>
                </div>
                <p className="text-label-bold font-label-bold opacity-80 uppercase tracking-tight">
                  Scholarships Awarded
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-outline-variant flex flex-col justify-between">
              {/* Checker patch / green — the progress motif, marking the one tile
                  in this row that reports an outcome. */}
              <div className="mb-8">
                <span className="material-symbols-outlined text-primary text-[40px]">emoji_events</span>
              </div>
              <div>
                <div className="text-headline-lg font-headline-lg text-primary mb-2">
                  <Placeholder tone="stat">85+</Placeholder>
                </div>
                <p className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-tight">
                  Tournament Wins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Report(s) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 mb-20">
        <div className="bg-white rounded-[40px] p-8 md:p-16 soft-card relative flex flex-col md:flex-row items-center gap-12 overflow-hidden">
          <div className="w-48 h-64 bg-surface-muted rounded-xl shadow-lg shrink-0 flex flex-col items-center justify-center border-2 border-outline-variant gap-2 text-center px-4">
            <span className="material-symbols-outlined text-outline text-5xl">description</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Report pending publication</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
              <span className="material-symbols-outlined text-[18px]">summarize</span>
              <span className="text-label-sm font-label-bold uppercase">Impact Report(s)</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Transparency Matters</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-8">
              Our Annual Impact Report will show how your donations and support are transforming the lives of
              students across the community through the power of chess education.{' '}
              <Placeholder>Report — pending publication</Placeholder>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="tactile-button focus-ring-invert bg-secondary-strong text-on-secondary px-8 py-4 rounded-2xl font-label-bold text-label-bold uppercase flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">picture_as_pdf</span>
                Download Report (PDF)
              </button>
              <button className="px-8 py-4 rounded-2xl font-label-bold text-label-bold text-primary border-2 border-primary hover:bg-primary-soft transition-colors uppercase">
                View Financials
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
