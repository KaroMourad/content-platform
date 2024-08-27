export interface ErrorFallbackProps {
  errorMessage: string;
  onRetry: () => void;
  onClose: () => void;
  className?: string;
}
