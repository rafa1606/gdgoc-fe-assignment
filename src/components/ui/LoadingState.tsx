type LoadingStateProps = {
  label?: string
}

export function LoadingState({ label = 'Loading...' }: LoadingStateProps) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-3 py-16 text-muted"
    >
      <span
        aria-hidden="true"
        className="size-8 animate-spin rounded-full border-4 border-line border-t-google-blue motion-reduce:animate-none"
      />
      <p className="text-sm">{label}</p>
    </div>
  )
}