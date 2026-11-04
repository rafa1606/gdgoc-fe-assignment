import { Link } from 'react-router'
import { ArrowRightIcon } from '../ui/ArrowRightIcon'
import { SectionLabel } from '../ui/SectionLabel'

export function InvitationSection() {
  return (
    <section
      aria-labelledby="invitation-heading"
      className="px-4 py-12 sm:px-8 xl:px-24 xl:py-16"
    >
      <div className="flex flex-col gap-8 rounded-3xl bg-tint-blue p-6 sm:p-10 lg:flex-row lg:items-center lg:gap-12 xl:rounded-[32px] xl:p-12">
        <div className="flex flex-col gap-4 lg:flex-1">
          <SectionLabel>Your next chapter</SectionLabel>
          <h2
            id="invitation-heading"
            className="text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-[44px] xl:leading-[49px]"
          >
            <span className="block">Bring your curiosity.</span>
            We’ll build from there.
          </h2>
          <p className="text-lg leading-7 text-muted">
            Find a learning track, meet a collaborator, or start a conversation.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 lg:w-65 lg:shrink-0">
          <a
            href="#tracks"
            className="inline-flex h-13 items-center justify-center gap-4 rounded-lg bg-google-blue px-6 font-medium text-white transition-colors hover:bg-google-blue-dark"
          >
            Explore the overview
            <ArrowRightIcon />
          </a>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-base font-medium leading-5 text-google-blue-dark"
          >
            Talk to the community
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}