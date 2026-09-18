import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Rook, Pawn, MarginMotif } from '../components/ChessMotifs';
import { InstagramIcon, Icon } from '../components/icons';
import Placeholder from '../components/Placeholder';

const CONTACT_EMAIL = 'RuleTheBoardInc@gmail.com';

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

/*
 * Applications live on their own pages (/scholars, /trainers) rather than as
 * forms here: this page is for giving and partnership, and each application
 * flow needs room for its own eligibility rules. These cards are the hand-off,
 * and each links to its page's #eligibility anchor directly so someone
 * checking whether they qualify doesn't have to hunt for it.
 */
const applyTracks = [
  {
    icon: 'school',
    label: 'Students',
    title: 'Apply as a student',
    body: 'Grades 3 through 8. One year of coaching, paid entries to rated tournaments, and a chess set you keep.',
    to: '/scholars',
    eligibility: '/scholars#eligibility',
  },
  {
    icon: 'sports',
    label: 'Trainers',
    title: 'Apply as a trainer',
    body: 'Coach a scholar through a season. You don’t need a master title, just the game and a free hour each week.',
    to: '/trainers',
    eligibility: '/trainers#eligibility',
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

      {/* 1. Donate — first on the page and full width, since giving is what most
          people come here to do and the Givebutter form needs the room. */}
      <section
        id="donate" aria-labelledby="donate-heading"
        className="scroll-mt-28 bg-primary text-on-primary rounded-xl p-8 md:p-10 border border-transparent"
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-6">
              <Icon name="payments" className="text-white" />
            </div>
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
                <GivebutterWidget accountId={GIVEBUTTER_ACCOUNT_ID} widgetId={GIVEBUTTER_WIDGET_ID} />
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

      {/* Fundraising meter — sits directly under the ask, where the number means
          something, instead of stranded at the bottom of the page. */}
      <section className="mt-base bg-white rounded-xl border border-outline-variant card-shadow overflow-hidden">
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

      {/* 2. Become a Sponsor */}
      <section
        id="sponsor" aria-labelledby="sponsor-heading"
        className="scroll-mt-28 mt-16 bg-surface-muted rounded-xl border border-outline-variant p-8 md:p-10"
      >
        <div className="max-w-2xl mb-10">
          <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
            <Icon name="handshake" className="text-primary" />
          </div>
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
            <ul className="space-y-4 mb-6">
              {sponsorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Icon name="check_circle" className="text-secondary mt-0.5" />
                  <span className="font-body-md text-on-surface">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              <Placeholder>Sponsorship tiers and amounts: confirm with team</Placeholder>
            </p>
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
      </section>

      {/* 3. Apply — hand-off cards to the two application pages. */}
      <section id="apply" aria-labelledby="apply-heading" className="scroll-mt-28 mt-16">
        <div className="max-w-2xl mb-8">
          <h2 id="apply-heading" className="font-headline-lg text-headline-lg text-primary mb-4">Apply</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Two ways to join us. Students apply for the scholarship, and coaches apply to teach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {applyTracks.map((track) => (
            <div
              key={track.to}
              className="bg-white rounded-xl border border-outline-variant card-shadow p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                  <Icon name={track.icon} className="text-primary" />
                </div>
                <span className="font-label-bold text-label-sm uppercase tracking-widest text-on-surface-variant">
                  {track.label}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">{track.title}</h3>
              <p className="font-body-md text-on-surface-variant mb-8">{track.body}</p>
              <div className="mt-auto flex flex-col gap-4">
                <Link
                  to={track.to}
                  className="tactile-button focus-ring-invert bg-secondary-strong text-on-secondary py-4 rounded-xl font-label-bold uppercase w-full text-center"
                >
                  {track.title}
                </Link>
                <Link
                  to={track.eligibility}
                  className="font-label-bold text-label-bold text-primary hover:text-secondary hover:underline transition-colors text-center"
                >
                  Read the eligibility guidelines
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Community + Contact */}
      <div className="bento-grid mt-16">
        <section
          id="community" aria-labelledby="community-heading"
          className="scroll-mt-28 col-span-12 md:col-span-4 bg-white rounded-xl p-8 border border-outline-variant card-shadow flex flex-col items-center text-center"
        >
          <h2 id="community-heading" className="font-headline-md text-headline-md text-primary mb-4">Community</h2>
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
