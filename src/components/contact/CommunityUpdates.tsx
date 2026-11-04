import { ArrowRightIcon } from '../ui/ArrowRightIcon'
import { SectionLabel } from '../ui/SectionLabel'

const instagramHandle = '@gdgoc.ugm'
const instagramUrl = `https://www.instagram.com/${instagramHandle.replace('@', '')}`

export function CommunityUpdates() {
  return (
    <aside
      aria-labelledby="community-updates-heading"
      className="flex flex-col gap-4 rounded-3xl bg-tint-yellow p-6.5"
    >
      <SectionLabel>Stay curious, stay connected</SectionLabel>
      <h3 id="community-updates-heading" className="text-[26px] font-bold leading-[29px]">
        Looking for community updates?
      </h3>
      <p className="text-base leading-[25px] text-muted">
        Follow <strong className="font-bold">{instagramHandle}</strong> for learning
        opportunities and what’s happening in the community.
      </p>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-3 self-start text-base font-medium leading-5 text-google-blue-dark"
      >
        <span>
          Find {instagramHandle}
          <span className="sr-only"> (opens in a new tab)</span>
        </span>
        <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
      </a>
    </aside>
  )
}