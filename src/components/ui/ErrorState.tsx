type ErrorStateProps = {
  message: string
  onRetry?: () => void
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center gap-4 py-16 text-center"
    >
      <p className="text-lg font-medium text-ink">Something went wrong</p>
      <p className="max-w-md text-sm text-muted">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex h-13 items-center justify-center rounded-lg bg-google-blue px-6 font-medium text-white transition-colors hover:bg-google-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue"
        >
          Try again
        </button>
      )}
    </div>
  )
}