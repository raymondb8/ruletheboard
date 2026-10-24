import { useRef } from 'react';
import { Rook, Pawn, MarginMotif } from '../components/ChessMotifs';
import { InstagramIcon, LinkedInIcon, Icon } from '../components/icons';
import { ApplyScholarSection, ApplyTrainerSection } from '../components/ApplySections';
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, LINKEDIN_URL } from '../data/org';

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
const GIVEBUTTER_ACCOUNT_ID: string | null = 'AlaEdn26Mo4i7pPd';
const GIVEBUTTER_WIDGET_ID: string | null = 'j2Oel2';

// The widgets library itself is loaded once from index.html.
function GivebutterWidget({ widgetId }: { widgetId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      // The widget library reads this tag from the DOM and hydrates it —
      // it isn't a known JSX element, so it's injected directly.
      dangerouslySetInnerHTML={{ __html: `<givebutter-widget id="${widgetId}"></givebutter-widget>` }}
    />
  );
}

/*
 * What a sponsor gets back. Tier names and amounts are still open, so the
 * recognition is listed concretely and the pricing stays a placeholder rather
 * than getting invented here.
 */
const sponsorBenefits = [
  'Your logo on this site and on the banner at our tournaments',
  'Your name in our annual impact report',
  'A write-up of what your money paid for, with the actual numbers',
];

const sponsorSteps = [
  {
    step: '01',
    icon: 'mail',
    title: 'Email us',
    description: `Send a note to ${CONTACT_EMAIL} with roughly what you have in mind. You don’t need a figure yet.`,
  },
  {
    step: '02',
    icon: 'forum',
    title: 'We talk it through',
    description:
      'We’ll show you what a given amount covers, whether that is a season of entry fees, a set of boards and clocks, or a coach for the year.',
  },
  {
    step: '03',
    icon: 'handshake',
    title: 'Signed, then live',
    description: 'We put it in writing, and your name goes up on the site and at the next tournament we run.',
  },
];

export default function GetInvolved() {
  return (
    <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-12 relative">
      <MarginMotif side="left" className="top-2" piece={<Rook className="w-24 h-24 text-accent-blue/30" />} />
      <MarginMotif side="right" className="top-2" piece={<Pawn className="w-24 h-24 text-accent-teal/30" />} />
      {/* Hero Header */}
      <section className="text-center mb-12">
        <h1 className="font-headline-xl text-headline-xl mb-4 text-primary max-w-3xl mx-auto">
          Donate or sponsor a season of chess
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Donations pay for our coaching, our boards, and the entry fees that get scholars into rated
          tournaments. You can give below, put your company behind a season, or apply to join us.
        </p>
      </section>

      {/* 1. Donate: first on the page and full width, since giving is what most
          people come here to do and the Givebutter form needs the room. The
          fundraising goal box that used to follow it now lives, unused, in
          components/FundraisingGoal.tsx for future campaigns. */}
      <section
        id="donate" aria-labelledby="donate-heading"
        className="scroll-mt-28 bg-primary text-on-primary rounded-xl p-8 md:p-10 border border-transparent"
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="donate-heading" className="font-headline-lg text-headline-lg text-white mb-4">Donate</h2>
            <p className="text-white/75 font-body-md mb-6">
              Giving runs through Givebutter, so your card details never touch our site. The money comes
              straight to us.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="check_circle" className="text-secondary mt-1" />
                <span className="text-white">Fund a scholar&rsquo;s USCF membership and gear</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="check_circle" className="text-secondary mt-1" />
                <span className="text-white">Cover a tournament entry fee</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            {GIVEBUTTER_ACCOUNT_ID && GIVEBUTTER_WIDGET_ID ? (
              <div className="bg-white rounded-xl p-1 sm:p-4">
                <GivebutterWidget widgetId={GIVEBUTTER_WIDGET_ID} />
              </div>
            ) : (
              <>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Donating%20to%20Rule%20the%20Board`}
                  className="tactile-button focus-ring-invert bg-secondary-strong text-on-secondary py-4 rounded-xl font-label-bold uppercase w-full text-center"
                >
                  Ask About Giving
                </a>
                <p className="text-white/60 font-label-sm text-center mt-3">
                  Online giving through Givebutter is coming soon. For now, email us and we will sort it out.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 2. Become a Sponsor */}
      <section
        id="sponsor" aria-labelledby="sponsor-heading"
        className="scroll-mt-28 mt-base bg-surface-muted rounded-xl border border-outline-variant p-8 md:p-10"
      >
        <div className="max-w-2xl mb-10">
          <h2 id="sponsor-heading" className="font-headline-lg text-headline-lg text-primary mb-4">Become a Sponsor</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Sponsorship is for companies, and for anyone giving enough that we should be saying your name out
            loud. It’s usually a set amount each year rather than a one-time gift, and we recognize it
            publicly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-gutter mb-10">
          <div className="bg-white rounded-2xl border border-outline-variant p-8">
            <h3 className="font-headline-md text-headline-md text-primary mb-5">What sponsors get</h3>
            <ul className="space-y-4">
              {sponsorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Icon name="check_circle" className="text-secondary mt-0.5" />
                  <span className="font-body-md text-on-surface">{benefit}</span>
                </li>
              ))}
            </ul>
            {/* TODO(RTB): sponsorship tiers and amounts, once the team sets them. */}
          </div>

          <div className="bg-white rounded-2xl border border-outline-variant p-8 flex flex-col">
            <h3 className="font-headline-md text-headline-md text-primary mb-5">Talk to us</h3>
            <p className="font-body-md text-on-surface-variant mb-6">
              There’s no sponsor form yet. Email is the whole process right now, and one of us reads it.
            </p>
            <div className="flex items-center gap-3 min-w-0 mb-8">
              <Icon name="mail" className="text-secondary" />
              <span className="font-label-sm text-label-sm break-all">{CONTACT_EMAIL}</span>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Sponsoring%20Rule%20the%20Board`}
              className="tactile-button navy-lift bg-primary text-white py-4 rounded-xl font-label-bold uppercase w-full text-center mt-auto"
            >
              Email us about sponsoring
            </a>
          </div>
        </div>

        {/* Same numbered step cards as the two application pages. */}
        <h3 className="font-headline-md text-headline-md text-primary mb-5">How it works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {sponsorSteps.map((item) => (
            <div key={item.step} className="bg-white rounded-2xl p-8 border border-outline-variant flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-headline-lg text-headline-lg text-secondary">{item.step}</span>
                <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                  <Icon name={item.icon} className="text-primary" />
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-3">{item.title}</h4>
              <p className="text-on-surface-variant text-body-md break-words">{item.description}</p>
            </div>
          ))}
        </div>

        {/* TODO(RTB): sponsor sign-up form. Questions and fields are still to
            be decided by the team. It goes here, under "How it works". */}
      </section>

      {/* 3 and 4. Apply to be a scholar, apply to be a trainer. Kept as two
          standalone components (components/ApplySections.tsx) so they can move
          to their own Apply page later. The wrapper keeps the #apply anchor the
          nav links to. */}
      <div id="apply" className="scroll-mt-28 mt-16 grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <ApplyScholarSection />
        <ApplyTrainerSection />
      </div>

      {/* 5. Community + Contact */}
      <div className="bento-grid mt-16">
        <section
          id="community" aria-labelledby="community-heading"
          className="scroll-mt-28 col-span-12 md:col-span-4 bg-white rounded-xl p-8 border border-outline-variant card-shadow flex flex-col items-center text-center"
        >
          <h2 id="community-heading" className="font-headline-md text-headline-md text-primary mb-4">Community</h2>
          <p className="text-on-surface-variant mb-8">
            We post tournament results and scholar news on Instagram, and the organizational side of things on
            LinkedIn. Follow whichever one you'd rather hear from.
          </p>
          <ul className="w-full flex flex-col gap-4">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
              >
                <span className="w-12 h-12 rounded-full bg-primary-soft text-primary flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </span>
                <span className="text-label-bold text-primary group-hover:text-secondary transition-colors">
                  {INSTAGRAM_HANDLE}
                </span>
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
              >
                <span className="w-12 h-12 rounded-full bg-primary-soft text-primary flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <LinkedInIcon className="w-5 h-5" />
                </span>
                <span className="text-label-bold text-primary group-hover:text-secondary transition-colors">
                  Rule the Board
                </span>
              </a>
            </li>
          </ul>
        </section>

        <section
          id="contact" aria-labelledby="contact-heading"
          className="scroll-mt-28 col-span-12 md:col-span-8 bg-surface-muted rounded-xl p-8 border border-outline-variant"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 id="contact-heading" className="font-headline-lg text-headline-lg text-primary mb-4">Contact</h2>
              <p className="text-on-surface-variant font-body-md">
                Questions about the programs, or want to partner with us? Send us a note and we’ll get back to
                you.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 min-w-0">
                  <Icon name="mail" className="text-secondary" />
                  <span className="font-label-sm text-label-sm break-all">{CONTACT_EMAIL}</span>
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
                    aria-label="Name"
                  />
                  <input
                    className="bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                    placeholder="Email Address"
                    type="email"
                    aria-label="Email address"
                  />
                </div>
                <textarea
                  className="w-full bg-white border-2 border-outline-variant rounded-xl p-3 input-focus font-body-md"
                  placeholder="Your Message"
                  rows={4}
                  aria-label="Your message"
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
    </div>
  );
}
