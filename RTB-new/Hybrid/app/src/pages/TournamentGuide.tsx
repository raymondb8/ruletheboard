import { Link } from 'react-router-dom';
import { Pawn, Knight, MarginMotif } from '../components/ChessMotifs';
import { WaveDivider, DashedRule } from '../components/Decor';

const format = [
  {
    title: 'Arrival & Roster Check',
    body: "Look for the advance roster on a wall or online when you arrive to make sure your name, rating, and USCF information are correct. You don't need a formal check-in if you pre-registered. See the director right away if you notice an error.",
  },
  {
    title: 'Finding Your Pairing',
    body: 'Check the pairings sheets about 10 to 15 minutes before the round starts to find your assigned board number, your opponent, and the color of your pieces.',
  },
  {
    title: 'The Swiss System',
    body: 'Our events use the Swiss system, so there are no eliminations. You play every round regardless of your results, and the director pairs you against players with scores similar to yours.',
  },
  {
    title: 'Finding the Board & Playing',
    body: "Head to your assigned board number and set up your equipment. The player with the black pieces usually provides the set and clock, but White's gear is used if Black doesn't have it. Wait to touch the clock until the director gives the official signal to begin.",
  },
  {
    title: 'Reporting the Result',
    body: 'Report your game score to the director right after the match ends. Write "1-0" if White won, "0-1" if Black won, or "0.5-0.5" for a draw. Both players should report together to prevent mistakes.',
  },
  {
    title: 'Waiting for the Next Round',
    body: 'Leave the playing hall right after turning in your score. Rounds follow a fixed schedule, so finishing early means waiting in the common area until the next round starts.',
  },
];

const etiquette = [
  {
    phase: 'Before the Game',
    rules: [
      'Turn off all cell phones, smartwatches, and other electronic items completely and store them away out of sight before your match begins.',
      'Offer a handshake, make clear eye contact, and say a polite phrase like "Good luck" right before the clocks start ticking.',
    ],
  },
  {
    phase: 'During the Game',
    rules: [
      'Keep completely quiet inside the playing hall. If you must communicate to offer a draw, do it in a quiet whisper.',
      "Follow the touch-move rule exactly. If you touch one of your pieces on purpose, you must move it if a legal move is possible. Your choice is final the moment your hand leaves the piece on a new square.",
      'Say "Adjust" clearly before touching a piece if you only want to center it on its square, and only on your turn.',
      "Press the clock button with the same hand you used to move your piece. Never slam the clock.",
      'Avoid distracting behaviors at the table, like humming, tapping your feet, or making unnecessary noise.',
    ],
  },
  {
    phase: 'Ending the Game',
    rules: [
      'Do not argue with your opponent if an issue or an illegal move happens. Pause the clock and raise your hand to summon a tournament director.',
      'To offer a draw, make your move, say "I offer a draw," then hit your clock. Your opponent can accept out loud or decline by making their next move.',
      'Stop the clock, offer a handshake, and say "I resign" if you\'re in a losing position and want to end the game gracefully.',
      'Say "Good game" and offer a handshake after your match concludes, no matter who wins.',
      'Reset all pieces to their starting squares before you leave the table.',
    ],
  },
];

const packingList = [
  'Your chess set: the roll-up board and pieces you received through the scholarship',
  'Your chess clock, set with the correct time delay or increment required by the organizers',
  'A pen or pencil, since you have to write down your moves during standard time controls',
  'A sweater or light jacket, because playing halls are usually cold',
  'A water bottle and quiet snacks',
  'A book or homework for downtime between games',
];

const pieceLetters = [
  { piece: 'King', letter: 'K' },
  { piece: 'Queen', letter: 'Q' },
  { piece: 'Rook', letter: 'R' },
  { piece: 'Bishop', letter: 'B' },
  { piece: 'Knight', letter: 'N' },
  { piece: 'Pawn', letter: '(none, just write the square)' },
];

const notationExamples = [
  { move: 'Nf3', meaning: 'Knight moves to f3' },
  { move: 'e4', meaning: 'Pawn moves to e4 (no letter for pawns)' },
  { move: 'Bxf7', meaning: 'Bishop captures on f7' },
  { move: 'exd5', meaning: 'Pawn from the e-file captures on d5' },
  { move: 'O-O / O-O-O', meaning: 'Kingside / Queenside castling' },
  { move: 'e8=Q', meaning: 'Pawn promotes to a queen on e8' },
  { move: 'Qh5+', meaning: 'Check' },
  { move: 'Qg7#', meaning: 'Checkmate' },
];

export default function TournamentGuide() {
  return (
    <div className="relative overflow-hidden">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-12 md:pt-24 text-center relative">
        <MarginMotif side="left" className="top-16" piece={<Pawn className="w-24 h-24 text-accent-teal/30" />} />
        <MarginMotif side="right" className="top-16" piece={<Knight className="w-28 h-28 text-accent-orange/30" />} />
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full mb-6">
          <span className="material-symbols-outlined text-[18px]">menu_book</span>
          <span className="text-label-sm font-label-bold uppercase">Parents' & Scholars' Guide</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl mb-6 text-primary max-w-3xl mx-auto">
          Getting Ready for Tournaments
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Tournaments are exciting, but they can be overwhelming the first time. Here's everything Rule the Board
          scholars need to know before the clock starts ticking.
        </p>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="max-w-2xl mb-10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Format of a Tournament</h2>
          <DashedRule className="mb-4 text-accent-teal" />
          <p className="text-on-surface-variant">Tournaments can feel chaotic, but they always follow this structure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {format.map((item, i) => (
            <div key={item.title} className="flex gap-4 bg-white rounded-2xl p-5 border border-outline-variant soft-card">
              <span className="font-headline-md text-headline-md text-secondary shrink-0">{i + 1}</span>
              <div>
                <h3 className="font-label-bold text-label-bold text-primary mb-1">{item.title}</h3>
                <p className="text-on-surface-variant text-body-md">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WaveDivider className="text-surface-muted" />
      <section className="bg-surface-muted py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mb-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Chess Tournament Etiquette</h2>
            <DashedRule className="mb-4 text-accent-orange" />
            <p className="text-on-surface-variant">
              When competing, scholars represent Odyssey and Rule the Board. Sportsmanship, respect, and
              focus are expected at all times.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {etiquette.map((section) => (
              <div key={section.phase} className="bg-white rounded-[24px] p-6 border border-outline-variant soft-card">
                <h3 className="font-headline-md text-headline-md text-primary mb-4">{section.phase}</h3>
                <ul className="space-y-3">
                  {section.rules.map((rule) => (
                    <li key={rule} className="flex gap-3 text-body-md text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                        check
                      </span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider className="text-surface-muted" flip />
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="max-w-2xl mb-10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-3">What to Bring</h2>
          <DashedRule className="mb-4 text-accent-green" />
          <p className="text-on-surface-variant">
            The scholarship provides your chess gear. Packing it on tournament day is on you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
          {packingList.map((item) => (
            <div key={item} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-outline-variant">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'wght' 700" }}>
                check_circle
              </span>
              <span className="font-body-md text-on-surface">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <WaveDivider className="text-surface-muted" />
      <section className="bg-surface-muted py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mb-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Notation Basics</h2>
            <DashedRule className="mb-4 text-accent-blue" />
            <p className="text-on-surface-variant">
              Every scholar is required to notate their own games. Here's the quick version.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-white rounded-[24px] p-6 border border-outline-variant soft-card">
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Piece Letters</h3>
              <div className="space-y-2">
                {pieceLetters.map((p) => (
                  <div key={p.piece} className="flex justify-between text-body-md border-b border-outline-variant/60 py-2">
                    <span className="text-on-surface-variant">{p.piece}</span>
                    <span className="font-label-bold text-primary">{p.letter}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[24px] p-6 border border-outline-variant soft-card">
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Reading a Move</h3>
              <div className="space-y-2">
                {notationExamples.map((n) => (
                  <div key={n.move} className="flex justify-between gap-4 text-body-md border-b border-outline-variant/60 py-2">
                    <span className="font-label-bold text-primary font-mono">{n.move}</span>
                    <span className="text-on-surface-variant text-right">{n.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 text-center">
        <p className="text-on-surface-variant mb-6">Have a question this guide didn't cover?</p>
        <Link
          to="/get-involved"
          className="tactile-button focus-ring-invert bg-secondary-strong text-on-secondary px-8 py-4 rounded-2xl font-label-bold text-label-bold uppercase inline-block"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
