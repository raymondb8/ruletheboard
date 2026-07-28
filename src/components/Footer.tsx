export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-base bg-surface-container border-t border-outline-variant">
      <div className="max-w-container-max w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-headline-md font-headline-md text-primary">Rule the Board</span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs text-center md:text-left">
            Building grandmasters of life through the timeless game of chess.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:underline text-secondary" href="#">
            Privacy Policy
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:underline text-secondary" href="#">
            Terms of Service
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:underline text-secondary" href="#">
            Charity Navigator
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:underline text-secondary" href="#">
            GuideStar
          </a>
        </div>
      </div>
      <div className="w-full max-w-container-max border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © 2024 Rule the Board Scholarship Program. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-secondary-fixed transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-primary">public</span>
          </a>
          <a
            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-secondary-fixed transition-colors"
            href="mailto:hello@ruletheboard.org"
          >
            <span className="material-symbols-outlined text-primary">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
