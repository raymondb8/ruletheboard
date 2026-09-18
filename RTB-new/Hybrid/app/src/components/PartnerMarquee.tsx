import { partners, type Partner } from '../data/partners';

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
      className="h-10 md:h-12 w-auto max-w-[180px] object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

function PartnerItem({ partner, decorative }: { partner: Partner; decorative?: boolean }) {
  const mark = <PartnerMark partner={partner} decorative={decorative} />;
  return (
    <li className="shrink-0 flex items-center px-8 md:px-12">
      {/* The second, seam-hiding copy of the list is plain images rather than
          links, so screen readers and the tab order see each partner once. */}
      {decorative ? (
        mark
      ) : (
        <a
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center opacity-80 hover:opacity-100 transition-opacity"
        >
          {mark}
        </a>
      )}
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
    <section aria-labelledby="partners-heading" className="py-10 bg-surface-muted border-t border-outline-variant">
      <h2
        id="partners-heading"
        className="text-center text-label-sm font-label-bold uppercase tracking-wider text-on-surface-variant mb-6"
      >
        Our partners and sponsors
      </h2>
      <div className="marquee overflow-hidden" style={{ maskImage: fade, WebkitMaskImage: fade }}>
        <div className="marquee-track flex w-max">
          <ul className="flex items-center">
            {partners.map((p) => (
              <PartnerItem key={p.name} partner={p} />
            ))}
          </ul>
          <ul className="flex items-center" aria-hidden="true">
            {partners.map((p) => (
              <PartnerItem key={`${p.name}-dup`} partner={p} decorative />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
