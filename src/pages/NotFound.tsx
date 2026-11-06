import { ButtonLink } from '../components/ui/ButtonLink'
import { SectionLabel } from '../components/ui/SectionLabel'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFound() {
  usePageTitle('Page not found')

  return (
    <section
      aria-labelledby="not-found-heading"
      className="px-4 pb-20 pt-12 sm:px-8 xl:px-24 xl:pb-32 xl:pt-18"
    >
      <div className="flex flex-col items-start gap-6">
        <SectionLabel>Error 404 • Page not found</SectionLabel>
        <h1
          id="not-found-heading"
          className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          This page took a <span className="text-google-blue-dark">wrong turn.</span>
        </h1>
        <p className="max-w-[770px] text-lg leading-[1.55] text-muted xl:text-[22px]">
          The page you are looking for does not exist or may have moved. Let’s get you back on
          track.
        </p>
        <ButtonLink to="/">Back to home</ButtonLink>
      </div>
    </section>
  )
}