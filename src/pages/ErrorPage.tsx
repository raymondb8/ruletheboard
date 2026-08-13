import MessagePage from '../components/MessagePage';

/**
 * Shown when the error boundary catches an unexpected render error.
 *
 * Deliberately uses plain <a> and a hard reload rather than react-router
 * <Link>: if the router or a shared layout is what threw, client-side
 * navigation may be exactly what is broken. A full document load is the one
 * escape hatch guaranteed to work.
 */
export default function ErrorPage({ onRetry }: { onRetry?: () => void }) {
  return (
    <MessagePage
      eyebrow="Unexpected check"
      title="Something went wrong on our side."
      piece="queen"
      showLogo
      body={
        <>
          That wasn't your fault — our board got knocked over. Try that again, and if it keeps
          happening, let us know at{' '}
          <a className="text-secondary underline underline-offset-4" href="mailto:hello@ruletheboard.org">
            hello@ruletheboard.org
          </a>
          .
        </>
      }
    >
      <button
        type="button"
        onClick={() => (onRetry ? onRetry() : window.location.reload())}
        className="focus-ring-invert lift-button coral-lift bg-secondary-strong text-on-secondary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase text-center"
      >
        Reset the board
      </button>
      <a
        href="/"
        className="focus-ring-invert lift-button navy-lift bg-primary text-on-primary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase text-center"
      >
        Back to home
      </a>
    </MessagePage>
  );
}
