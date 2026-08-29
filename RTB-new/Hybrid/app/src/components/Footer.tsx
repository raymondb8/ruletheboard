import { Link } from 'react-router-dom';
import logoWords from '../assets/rtb-words.png';
import { InstagramIcon } from './icons';

const legalLinks = [{ label: 'Privacy Policy', to: '/privacy' }];

export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-base bg-surface-sunken border-t border-outline-variant">
      <div className="max-w-container-max w-full flex flex-col items-center text-center gap-6 mb-10">
        <img src={logoWords} alt="Rule the Board" className="h-12 w-auto" />
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
          Building grandmasters of life through the timeless game of chess.
        </p>

        {/* Instagram + email, centered, with the handles spelled out in text
            alongside each mark. Both marks sit in the same 36px bordered badge. */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a
            className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
            href="https://www.instagram.com/ruletheboardinc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rule the Board on Instagram"
          >
            <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center border border-outline-variant text-primary group-hover:border-primary transition-colors">
              <InstagramIcon className="w-[18px] h-[18px]" />
            </span>
            <span className="font-label-sm text-label-sm">@ruletheboardinc</span>
          </a>
          <a
            className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
            href="mailto:RuleTheBoardInc@gmail.com"
            aria-label="Email Rule the Board"
          >
            <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center border border-outline-variant text-primary group-hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </span>
            <span className="font-label-sm text-label-sm">RuleTheBoardInc@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="w-full max-w-container-max border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © {new Date().getFullYear()} Rule the Board Scholarship Program. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
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
    </footer>
  );
}
