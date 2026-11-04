const baseControl =
  'w-full rounded-lg border bg-white px-4 text-base placeholder:text-muted transition-colors focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-surface disabled:text-muted'

export function controlClass(hasError = false) {
  const tone = hasError
    ? 'border-error focus:border-error focus:ring-error/30'
    : 'border-line focus:border-google-blue focus:ring-google-blue/30'

  return `${baseControl} ${tone}`
}