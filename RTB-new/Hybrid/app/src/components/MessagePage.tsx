import type { ReactNode } from 'react';
import logoFull from '../assets/rtb-full.png';
import { CheckerStrip, MarginMotif, Knight, Queen } from './ChessMotifs';

/**
 * Shared shell for the 404 and error screens.
 *
 * It renders its own logo and is fully self-contained, because the error
 * boundary has to be able to show it when Layout itself is what blew up —
 * meaning it cannot rely on the Nav or Footer being mounted.
 */
export default function MessagePage({
  eyebrow,
  title,
  body,
  children,
  piece = 'knight',
  showLogo = false,
}: {
  eyebrow: string;
  title: string;
  body: ReactNode;
  children: ReactNode;
  piece?: 'knight' | 'queen';
  showLogo?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-background px-margin-mobile md:px-margin-desktop py-20 md:py-28">
      <MarginMotif
        side="left"
        className="top-24"
        piece={
          piece === 'knight' ? (
            <Knight className="w-28 h-28 text-accent-orange/30" />
          ) : (
            <Queen className="w-28 h-28 text-primary/25" />
          )
        }
      />
      <MarginMotif
        side="right"
        className="top-24"
        piece={<Queen className="w-28 h-28 text-primary/25" />}
      />

      <div className="max-w-2xl mx-auto text-center">
        {showLogo && <img src={logoFull} alt="Rule the Board" className="h-12 w-auto mx-auto mb-10" />}

        <CheckerStrip className="w-[47px] h-[23px] mx-auto mb-8" />

        <p className="font-label-bold text-label-bold uppercase tracking-widest text-secondary mb-4">
          {eyebrow}
        </p>
        <h1 className="font-headline-xl text-headline-xl text-primary mb-6 leading-tight">{title}</h1>
        <div className="font-body-lg text-body-lg text-on-surface-variant mb-10">{body}</div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">{children}</div>
      </div>
    </section>
  );
}
