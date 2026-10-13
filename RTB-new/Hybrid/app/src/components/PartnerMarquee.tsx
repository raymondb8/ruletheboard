import type { CSSProperties } from 'react';
import { partners, type Partner, type PartnerLogo } from '../data/partners';
import { DotField } from './Decor';

/*
 * Logos are sized to roughly the same visual area rather than the same height.
 * At one shared height the long wordmarks (Glenn, Chess.com) read several
 * times heavier than the near-square badges (US Chess, Kid Chess). Height is
 * sqrt(area / aspect), capped so the square marks don't tower over the row.
 * Desktop values; phones get 72% of each.
 */
const LOGO_AREA = 13000;
const LOGO_MAX_H = 80;
function logoHeight(logo: PartnerLogo) {
  const aspect = logo.width / logo.height;
  return Math.round(Math.min(LOGO_MAX_H, Math.sqrt(LOGO_AREA / aspect)));
}

function PartnerMark({ partner, decorative }: { partner: Partner; decorative?: boolean }) {
  if (!partner.logo) {
    return (
      <span className="font-headline-lg text-[22px] md:text-[26px] text-primary whitespace-nowrap">
        {partner.name}
      </span>
    );
  }
  return (
    <img
      src={partner.logo.src}
      width={partner.logo.width}
      height={partner.logo.height}
      alt={decorative ? '' : partner.name}
      style={{ '--logo-h': `${logoHeight(partner.logo)}px` } as CSSProperties}
      className="h-[calc(var(--logo-h)*0.72)] md:h-[var(--logo-h)] w-auto object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

function PartnerItem({ partner, decorative }: { partner: Partner; decorative?: boolean }) {
  return (
    <li className="shrink-0 flex items-center px-8 md:px-12 opacity-80">
      {/* Not links, by request: the logos just scroll. The second, seam-hiding
          copy of the list has empty alt text and is aria-hidden, so screen
          readers hear each partner once. */}
      <PartnerMark partner={partner} decorative={decorative} />
    </li>
  );
}

/**
 * A slow, continuous strip of the organizations that back Rule the Board.
 * The list is rendered twice back to back so the loop has no visible seam;
 * the second copy is hidden from assistive tech. Under a reduced-motion
 * preference the strip stops and just sits as a static row (see
 * .marquee-track in index.css).
 */
export default function PartnerMarquee() {
  const fade = 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)';
  return (
    <section
      aria-labelledby="partners-heading"
      className="relative overflow-hidden pb-10 bg-surface-muted"
    >
      {/* Same dot field as the stats band directly above, so the two halves of
          this tinted section are textured the same way instead of one dotted
          and one plain. */}
      <DotField className="opacity-[0.11]" />
      <h2
        id="partners-heading"
        className="relative text-center text-label-sm font-label-bold uppercase tracking-wider text-on-surface-variant mb-6"
      >
        Our partners and sponsors
      </h2>
      <div className="marquee relative overflow-hidden" style={{ maskImage: fade, WebkitMaskImage: fade }}>
        {/* Each copy is forced to at least the viewport width. Without that,
            five logos can be narrower than a wide screen, and at the halfway
            point of the animation the track runs out of content and the strip
            goes visibly blank before it loops. */}
        <div className="marquee-track flex w-max">
          <ul className="flex items-center justify-around shrink-0 min-w-[100vw]">
            {partners.map((p) => (
              <PartnerItem key={p.name} partner={p} />
            ))}
          </ul>
          <ul className="flex items-center justify-around shrink-0 min-w-[100vw]" aria-hidden="true">
            {partners.map((p) => (
              <PartnerItem key={`${p.name}-dup`} partner={p} decorative />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
