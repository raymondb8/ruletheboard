import { Link } from 'react-router-dom';
import MessagePage from '../components/MessagePage';

/**
 * Shared placeholder for /privacy and /terms. Rule the Board doesn't have
 * finished legal copy yet — this says so honestly instead of shipping
 * invented policy text or a dead "#" link.
 */
export default function LegalPending({ title }: { title: string }) {
  return (
    <MessagePage
      eyebrow="In Progress"
      title={title}
      piece="queen"
      body={
        <>
          We're finalizing this page. In the meantime, reach out to us directly at{' '}
          <a className="text-secondary underline underline-offset-4" href="mailto:RuleTheBoardInc@gmail.com">
            RuleTheBoardInc@gmail.com
          </a>{' '}
          with any questions.
        </>
      }
    >
      <Link
        to="/"
        className="focus-ring-invert lift-button navy-lift bg-primary text-on-primary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase text-center"
      >
        Back to home
      </Link>
    </MessagePage>
  );
}
