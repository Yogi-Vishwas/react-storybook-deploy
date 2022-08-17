import React, {ReactNode} from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  // @ts-ignore
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.error(error);
    return {hasError: true};
  }

  // @ts-ignore
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  // @ts-ignore
  render(): ReactNode {
    if (this.state.hasError) {
      // no we only use these boundaries on top level, we can return the 404
      return <h1>Something went wrong</h1>;
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
