import { Link } from 'react-router-dom';
import logoWords from '../assets/rtb-words.webp';
import { InstagramIcon, LinkedInIcon, Icon } from './icons';
import { CONTACT_EMAIL, EIN, INSTAGRAM_HANDLE, INSTAGRAM_URL, LINKEDIN_URL } from '../data/org';

const legalLinks = [{ label: 'Privacy Policy', to: '/privacy' }];

export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-base bg-surface-sunken border-t border-outline-variant">
      <div className="max-w-container-max w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-10">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <img src={logoWords} alt="Rule the Board" className="h-12 w-auto" width={720} height={328} loading="lazy" decoding="async" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            Building grandmasters of life through the timeless game of chess.
          </p>
        </div>

        {/* Contact column: the two social marks and the email, each in the same
            36px bordered badge, stacked above the legal links. */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rule the Board on Instagram"
            >
              <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center border border-outline-variant text-primary group-hover:border-primary transition-colors">
                <InstagramIcon className="w-[18px] h-[18px]" />
              </span>
              <span className="font-label-sm text-label-sm">{INSTAGRAM_HANDLE}</span>
            </a>
            <a
              className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rule the Board on LinkedIn"
            >
              <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center border border-outline-variant text-primary group-hover:border-primary transition-colors">
                <LinkedInIcon className="w-[18px] h-[18px]" />
              </span>
              <span className="font-label-sm text-label-sm">Rule the Board</span>
            </a>
            <a
              className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email Rule the Board"
            >
              <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center border border-outline-variant text-primary group-hover:border-primary transition-colors">
                <Icon name="mail" className="text-[18px]" />
              </span>
              <span className="font-label-sm text-label-sm break-all">{CONTACT_EMAIL}</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary hover:underline transition-colors"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-container-max border-t border-outline-variant pt-8 flex flex-col items-center gap-2">
        <p className="font-label-sm text-label-sm text-on-surface-variant text-center" suppressHydrationWarning>
          © {new Date().getFullYear()} Rule the Board Scholarship Program. All rights reserved.
        </p>
        <p className="font-label-sm text-label-sm text-on-surface-variant text-center">
          Rule the Board Inc. is a registered 501(c)(3) nonprofit. EIN: {EIN}
        </p>
      </div>
    </footer>
  );
}
