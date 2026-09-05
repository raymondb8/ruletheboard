import { useEffect, useRef } from 'react';
import { Rook, Pawn, MarginMotif } from '../components/ChessMotifs';
import { InstagramIcon } from '../components/icons';
import Placeholder from '../components/Placeholder';

/*
 * Rule the Board plans to process donations through Givebutter, but the
 * account isn't set up yet. Once you have a campaign live, set BOTH values
 * below and the donation form renders embedded, in-page — visitors never
 * leave the site:
 *
 *   - GIVEBUTTER_ACCOUNT_ID: Givebutter Dashboard → Settings → Developers →
 *     Widgets. It's the "acct=" value in the script snippet shown there.
 *   - GIVEBUTTER_WIDGET_ID: your campaign's Sharing tab → Widgets → Embed
 *     on the widget you want (pick the "Form" widget for a full embedded
 *     donation form, not just a button). The id is in the snippet shown:
 *     <givebutter-widget id="THIS_PART">.
 *
 * Until both are set, the card below falls back to a mailto so it's never
 * a dead button.
 */
const GIVEBUTTER_ACCOUNT_ID: string | null = null;
const GIVEBUTTER_WIDGET_ID: string | null = null;

function GivebutterWidget({ accountId, widgetId }: { accountId: string; widgetId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptSrc = `https://widgets.givebutter.com/latest.umd.cjs?acct=${accountId}`;
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptSrc;
      document.head.appendChild(script);
    }
  }, [accountId]);

  return (
    <div
      ref={containerRef}
      // The widget library reads this tag from the DOM and hydrates it —
      // it isn't a known JSX element, so it's injected directly.
      dangerouslySetInnerHTML={{ __html: `<givebutter-widget id="${widgetId}"></givebutter-widget>` }}
    />
  );
}

export default function GetInvolved() {
  return (
    <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-12 relative">
      <MarginMotif side="left" className="top-2" piece={<Rook className="w-24 h-24 text-accent-blue/30" />} />
      <MarginMotif side="right" className="top-2" piece={<Pawn className="w-24 h-24 text-accent-teal/30" />} />
      {/* Hero Header */}
      <header className="text-center mb-12">
        <h1 className="font-headline-xl text-headline-xl mb-4 text-primary max-w-3xl mx-auto">
          Get Involved
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We run entirely on volunteers and donations. An hour of your time or a set of pieces covered goes
          straight to a scholar.
        </p>
      </header>

      {/* Bento Grid Sections */}
      <div className="bento-grid">
        {/* 1. Volunteer Section (Large Card) */}
        <section id="volunteer" className="scroll-mt-28 col-span-12 md:col-span-8 bg-white rounded-xl p-8 card-shadow border border-outline-variant relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  volunteer_activism
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary">Volunteer</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
              You do not need a rating to help. We need coaches, mentors, and helpers at events.
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
                className="md:col-span-2 tactile-button focus-ring-invert bg-secondary-strong text-on-secondary py-4 rounded-xl font-label-bold uppercase mt-2"
                type="submit"
              >
                SIGN UP TO VOLUNTEER
              </button>
            </form>
          </div>
        </section>

        {/* 2. Donate Section — full-width once the Givebutter form widget is
            embedded (it needs the room), a compact teaser card until then. */}
        <section
          id="donate"
          className={`scroll-mt-28 col-span-12 ${GIVEBUTTER_ACCOUNT_ID && GIVEBUTTER_WIDGET_ID ? '' : 'md:col-span-4'} bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between border border-transparent`}
        >
          <div className={GIVEBUTTER_ACCOUNT_ID && GIVEBUTTER_WIDGET_ID ? 'mb-8' : ''}>
            <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">payments</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-white mb-4">Donate</h2>
            <p className="text-white/75 font-body-md mb-6">
              Donations pay for boards, clocks, coaching, and the entry fees that get our scholars into rated
              tournaments.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <span className="text-white">Fund a scholar's USCF membership and gear</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <span className="text-white">Cover a tournament entry fee</span>
              </li>
            </ul>
          </div>
          {GIVEBUTTER_ACCOUNT_ID && GIVEBUTTER_WIDGET_ID ? (
            <div className="bg-white rounded-xl p-1 sm:p-4">
              <GivebutterWidget accountId={GIVEBUTTER_ACCOUNT_ID} widgetId={GIVEBUTTER_WIDGET_ID} />
            </div>
          ) : (
            <>
              <a
                href="mailto:RuleTheBoardInc@gmail.com?subject=Donating%20to%20Rule%20the%20Board"
                className="tactile-button focus-ring-invert bg-secondary-strong text-on-secondary py-4 rounded-xl font-label-bold uppercase w-full text-center"
              >
                Ask About Giving
              </a>
              <p className="text-white/60 font-label-sm text-center mt-3">
                Online giving through Givebutter is coming soon. For now, email us and we will sort it out.
              </p>
            </>
          )}
        </section>

        {/* 3. Community (Small Card) */}
        <section id="community" className="scroll-mt-28 col-span-12 md:col-span-4 bg-white rounded-xl p-8 border border-outline-variant card-shadow flex flex-col items-center text-center">
          <h3 className="font-headline-md text-headline-md text-primary mb-4">Community</h3>
          <p className="text-on-surface-variant mb-8">
            We post tournament results and scholar news on Instagram.
          </p>
          <a
            href="https://www.instagram.com/ruletheboardinc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-primary-soft text-primary flex items-center justify-center hover:scale-110 transition-transform mb-4"
            aria-label="Rule the Board on Instagram"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="https://www.instagram.com/ruletheboardinc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-label-bold text-primary hover:text-secondary hover:underline transition-colors"
            >
              @ruletheboardinc
            </a>
            <p className="text-label-sm text-outline">Instagram</p>
          </div>
        </section>

        {/* 4. Contact Form (Medium-Large Card) */}
        <section id="contact" className="scroll-mt-28 col-span-12 md:col-span-8 bg-surface-muted rounded-xl p-8 border border-outline-variant">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Contact</h2>
              <p className="text-on-surface-variant font-body-md">
                Questions about the programs, or want to partner with us? Send us a note and we will get back to
                you.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                  <span className="font-label-sm text-label-sm break-all">RuleTheBoardInc@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 bg-white p-6 rounded-xl border border-outline-variant">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <textarea
                  className="w-full bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                  placeholder="Your Message"
                  rows={4}
                />
                <button
                  className="tactile-button navy-lift bg-primary text-white py-3 px-8 rounded-xl font-label-bold uppercase w-full md:w-auto"
                  type="submit"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Progress/Impact Section. This was a headline stranded in a wide empty box;
          it is now a two-column bento — statement on the left, meter on the right —
          so the space is filled with structure before any decoration is added. */}
      <section className="mt-16 bg-white rounded-xl border border-outline-variant card-shadow overflow-hidden">
        <div className="grid md:grid-cols-5 gap-8 p-8 md:p-10 items-center">
          <div className="md:col-span-2">
            <h3 className="font-headline-md text-headline-md text-primary mb-3">Current Fundraising Goal</h3>
            <p className="text-on-surface-variant font-body-md">
              What we raise goes toward the next class of scholars.
            </p>
          </div>
          <div className="md:col-span-3 bg-surface-muted border border-outline-variant rounded-xl p-6">
            <span className="font-label-bold text-label-bold text-primary block mb-3">Raised so far</span>
            <div className="w-full h-8 bg-white border border-outline-variant rounded-full overflow-hidden mb-3 relative">
              <div className="h-full bg-secondary rounded-full" style={{ width: '0%' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-label-bold text-on-surface-variant"><Placeholder>Progress: confirm with team</Placeholder></span>
              </div>
            </div>
            <p className="text-label-sm text-on-surface-variant"><Placeholder>Goal amount: confirm with team</Placeholder></p>
          </div>
        </div>
      </section>
    </div>
  );
}
