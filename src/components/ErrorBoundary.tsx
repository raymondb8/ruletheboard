import { Component, type ErrorInfo, type ReactNode } from 'react';
import ErrorPage from '../pages/ErrorPage';

/**
 * Catches render-time errors anywhere below it and swaps in the branded error
 * screen instead of React's blank white page.
 *
 * Has to be a class: as of React 19 there is still no hook equivalent of
 * componentDidCatch / getDerivedStateFromError.
 *
 * Note this does NOT catch errors in event handlers, async callbacks, or
 * outside React's render cycle — those still surface in the console, which is
 * the documented React behaviour, not a gap in this component.
 */
export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage onRetry={() => this.setState({ hasError: false })} />;
    }
    return this.props.children;
  }
}
