import { Link } from 'react-router'
import { ArrowRightIcon } from '../ui/ArrowRightIcon'
import { SectionLabel } from '../ui/SectionLabel'

export function StartSection() {
  return (
    <section
      id="start"
      aria-labelledby="start-heading"
      className="bg-tint-yellow px-4 py-12 sm:px-8 xl:px-24 xl:py-14"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-col gap-4 lg:w-2/5 lg:shrink-0 xl:w-115">
          <SectionLabel>Start where you are</SectionLabel>
          <h2 id="start-heading" className="text-3xl font-bold sm:text-4xl">
            <span className="block">New to tech?</span>
            That’s a starting point, too.
          </h2>
        </div>

        <div className="max-w-181 lg:flex-1">
          <p className="text-lg leading-7 text-muted">
            You don’t need a finished portfolio or the perfect track choice. Pick a topic you’re
            curious about. If you’re unsure, tell us what interests you and we can start a
            conversation.
          </p>
          <Link
            to="/contact?category=joining-learning"
            className="group mt-5 inline-flex items-center gap-3 text-base font-medium leading-5 text-google-blue-dark"
          >
            Ask about getting started
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}