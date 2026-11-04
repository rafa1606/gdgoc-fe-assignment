import { Link } from 'react-router'
import type { Track } from '../../types/api'
import { ArrowRightIcon } from '../ui/ArrowRightIcon'
import researchArtwork from '../../assets/track-research.svg'
import designArtwork from '../../assets/track-design.svg'
import developmentArtwork from '../../assets/track-development.svg'

type TrackStyle = {
  artwork: string | null
  tint: string
}

const trackStyles: Record<string, TrackStyle> = {
  'research-discovery': { artwork: researchArtwork, tint: 'bg-tint-blue' },
  'design-creativity': { artwork: designArtwork, tint: 'bg-tint-yellow' },
  development: { artwork: developmentArtwork, tint: 'bg-tint-green' },
}

const fallbackStyle: TrackStyle = { artwork: null, tint: 'bg-surface' }

type TrackCardProps = {
  track: Track
  selected: boolean
}

export function TrackCard({ track, selected }: TrackCardProps) {
  const style = trackStyles[track.id] ?? fallbackStyle

  return (
    <article
      aria-current={selected ? 'true' : undefined}
      className={`flex flex-col overflow-hidden rounded-3xl border bg-white ${
        selected ? 'border-google-blue ring-2 ring-google-blue' : 'border-line'
      }`}
    >
      <div className={`relative h-58 shrink-0 overflow-hidden ${style.tint}`}>
        {style.artwork && (
          <img
            src={style.artwork}
            alt=""
            className="absolute -top-1 left-1/2 size-[257px] max-w-none -translate-x-1/2"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4.5 p-7">
        <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-google-blue-dark">
          {track.tagline}
        </p>
        <h3 className="text-[28px] font-bold leading-[31px]">{track.name}</h3>
        <p className="text-base leading-[25px] text-muted">{track.description}</p>

        {selected && (
          <p className="rounded-2xl bg-tint-blue px-4 py-3 text-sm leading-6">
            <span className="font-medium text-google-blue-dark">What you'll do: </span>
            {track.what_you_do}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-4.5">
          <hr className="border-line" />
          <p className="text-[13px] leading-5 text-muted lg:min-h-10">{track.skills.join(' · ')}</p>
          {track.open ? (
            <Link
              to={`${track.explore_link}#tracks`}
              className="group inline-flex items-center gap-3 self-start text-base font-medium text-google-blue-dark"
            >
              <span>
                Explore this track
                <span className="sr-only"> {track.name}</span>
              </span>
              <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <p className="text-base text-muted">Not open right now</p>
          )}
        </div>
      </div>
    </article>
  )
}