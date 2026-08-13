import logoWords from '../assets/rtb-words.png';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-base bg-surface-sunken border-t border-outline-variant">
      <div className="max-w-container-max w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={logoWords} alt="Rule the Board" className="h-12 w-auto" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs text-center md:text-left">
            Building grandmasters of life through the timeless game of chess.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {['Privacy Policy', 'Terms of Service', 'Charity Navigator', 'GuideStar'].map((label) => (
            <a
              key={label}
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary hover:underline transition-colors"
              href="#"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full max-w-container-max border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © {new Date().getFullYear()} Rule the Board Scholarship Program. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-outline-variant text-primary hover:border-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">public</span>
          </a>
          <a
            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-outline-variant text-primary hover:border-primary transition-colors"
            href="mailto:hello@ruletheboard.org"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
