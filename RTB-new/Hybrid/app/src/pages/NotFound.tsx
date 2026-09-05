import { Link } from 'react-router-dom';
import MessagePage from '../components/MessagePage';

/**
 * Catch-all 404. Rendered inside Layout, so it keeps the Nav and Footer — a
 * lost visitor should still have the whole site one tap away.
 */
export default function NotFound() {
  return (
    <MessagePage
      eyebrow="Illegal move"
      title="You've wandered off the board."
      piece="knight"
      body={
        <>
          This square doesn't exist. Not even the knight can reach it. The page may have moved, or the link that
          brought you here has a typo in it.
        </>
      }
    >
      <Link
        to="/"
        className="focus-ring-invert lift-button coral-lift bg-secondary-strong text-on-secondary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase text-center"
      >
        Back to the board
      </Link>
      <Link
        to="/programs"
        className="lift-button navy-lift bg-primary text-on-primary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase text-center focus-ring-invert"
      >
        See our programs
      </Link>
    </MessagePage>
  );
}
