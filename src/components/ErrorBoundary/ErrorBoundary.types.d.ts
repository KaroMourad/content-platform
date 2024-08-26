export interface ErrorBoundaryProps {
  children: React.ReactNode;
  errorMessage?: string;
  className?: string;
  fallbackComponent?: React.ReactNode;
  onRetry?: () => void;
  onClose?: () => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
