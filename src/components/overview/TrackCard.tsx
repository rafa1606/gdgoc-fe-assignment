import { Link } from 'react-router'
import type { TrackSummary } from '../../types/api'
import { ArrowRightIcon } from '../ui/ArrowRightIcon'
import { cardHover } from '../ui/cardEffects'
import researchArtwork from '../../assets/track-research.webp'
import designArtwork from '../../assets/track-design.webp'
import developmentArtwork from '../../assets/track-development.webp'

// Ilustrasi diekspor dari Figma @2x dengan latar transparan. Cahaya (glow) di bawah
// ilustrasi melewati batas bingkai, jadi gambar dibuat lebih besar dari area bertinta
// dan posisinya diukur dari sudut kiri atas bingkai 400x232
type TrackArtwork = {
  src: string
  width: number
  height: number
  className: string
}

type TrackStyle = {
  artwork: TrackArtwork | null
  tint: string
}

const trackStyles: Record<string, TrackStyle> = {
  'research-discovery': {
    artwork: { src: researchArtwork, width: 817, height: 769, className: '-left-[8.5px] w-[408.5px]' },
    tint: 'bg-tint-blue',
  },
  'design-creativity': {
    artwork: { src: designArtwork, width: 807, height: 695, className: '-left-[3.5px] w-[403.5px]' },
    tint: 'bg-tint-yellow',
  },
  development: {
    artwork: { src: developmentArtwork, width: 848, height: 781, className: '-left-[24px] w-[424px]' },
    tint: 'bg-tint-green',
  },
}

const fallbackStyle: TrackStyle = { artwork: null, tint: 'bg-surface' }

type TrackCardProps = {
  track: TrackSummary
  selected?: boolean
}

export function TrackCard({ track, selected = false }: TrackCardProps) {
  const style = trackStyles[track.id] ?? fallbackStyle

  return (
    <article
      aria-current={selected ? 'true' : undefined}
      className={`flex flex-col overflow-hidden rounded-3xl border bg-white ${cardHover} ${
        selected ? 'border-google-blue ring-2 ring-google-blue' : 'border-line'
      }`}
    >
      <div className={`relative h-58 shrink-0 ${style.tint}`}>
        {style.artwork && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-58 w-100 -translate-x-1/2"
          >
            <img
              src={style.artwork.src}
              alt=""
              width={style.artwork.width}
              height={style.artwork.height}
              className={`absolute top-0 h-auto max-w-none ${style.artwork.className}`}
            />
          </div>
        )}
      </div>

      {/* relative: teks tampil di atas glow ilustrasi yang meluber ke area ini */}
      <div className="relative flex flex-1 flex-col gap-4.5 p-7">
        <p className="text-[11px] font-medium uppercase leading-[14px] text-google-blue-dark">
          {track.tagline}
        </p>
        <h3 className="text-[28px] font-bold leading-[31px]">{track.name}</h3>
        <p className="max-w-84 text-base leading-[25px] text-muted">{track.description}</p>

        {selected && track.what_you_do && (
          <p className="rounded-2xl bg-tint-blue px-4 py-3 text-sm leading-6">
            <span className="font-medium text-google-blue-dark">What you'll do: </span>
            {track.what_you_do}
          </p>
        )}

        {/* mt-auto: garis, skill, dan link menempel di dasar kartu supaya sejajar antar kartu */}
        <div className="mt-auto flex flex-col gap-4.5">
          <hr className="border-line" />
          <p className="text-[13px] leading-5 text-muted lg:min-h-10">{track.skills.join(' · ')}</p>
          {track.open ? (
            <Link
              to={`${track.explore_link}#tracks`}
              className="group inline-flex items-center gap-3 self-start text-base font-medium leading-5 text-google-blue-dark"
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