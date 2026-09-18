import { partners, type Partner } from '../data/partners';

function PartnerItem({ partner, decorative }: { partner: Partner; decorative?: boolean }) {
  const inner = partner.logo ? (
    <img
      src={partner.logo}
      alt={decorative ? '' : partner.name}
      className="h-10 md:h-12 w-auto max-w-[180px] object-contain"
      loading="lazy"
      decoding="async"
    />
  ) : (
    <span className="font-headline-lg text-[22px] md:text-[26px] text-primary whitespace-nowrap">
      {partner.name}
    </span>
  );

  return (
    <li className="shrink-0 flex items-center px-8 md:px-12">
      {partner.href === '#' ? (
        inner
      ) : (
        <a
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center opacity-80 hover:opacity-100 transition-opacity"
          tabIndex={decorative ? -1 : undefined}
          aria-hidden={decorative || undefined}
        >
          {inner}
        </a>
      )}
    </li>
  );
}

/**
 * A slow, continuous strip of the organizations that back Rule the Board.
 * The list is rendered twice back to back so the loop has no visible seam;
 * the second copy is hidden from assistive tech and keyboard focus. Under a
 * reduced-motion preference the strip stops and just sits as a static row
 * (see .marquee-track in index.css).
 */
export default function PartnerMarquee() {
  return (
    <section aria-labelledby="partners-heading" className="py-10 bg-background border-y border-outline-variant">
      <h2
        id="partners-heading"
        className="text-center text-label-sm font-label-bold uppercase tracking-wider text-on-surface-variant mb-6"
      >
        Our partners and sponsors
      </h2>
      <div className="marquee overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
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
