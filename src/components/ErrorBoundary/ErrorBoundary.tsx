import React, { Component } from "react";

import { ErrorFallback } from "../";

import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  handleClose = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const {
      errorMessage = "Something went wrong. Please try again.",
      fallbackComponent,
    } = this.props;
    if (this.state.hasError) {
      if (fallbackComponent) {
        return fallbackComponent;
      }
      return (
        <ErrorFallback
          errorMessage={errorMessage}
          onRetry={this.handleRetry}
          onClose={this.handleClose}
          className={this.props.className}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
