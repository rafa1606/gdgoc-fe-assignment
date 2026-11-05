import { SectionLabel } from '../ui/SectionLabel'
import { TextLink } from '../ui/TextLink'

// Warna kotak solusi di kartu contoh proyek
const solutionTiles = [
  { label: 'Discover', tint: 'bg-tint-blue' },
  { label: 'Connect', tint: 'bg-tint-green' },
  { label: 'Share', tint: 'bg-tint-red' },
]

export function ProjectSection() {
  return (
    <section
      aria-labelledby="project-heading"
      className="flex flex-col gap-10 px-4 py-12 sm:px-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16 xl:px-24 xl:py-22"
    >
      <figure className="flex flex-col gap-6 rounded-[32px] bg-tint-yellow p-6 sm:p-10 lg:flex-1 xl:w-148 xl:flex-none">
        <div className="flex items-center justify-between">
          <p className="text-xs leading-[15px] text-muted">IDEA → PROTOTYPE</p>
          <p aria-hidden="true" className="text-2xl leading-[30px] text-google-blue-dark">
            {'</>'}
          </p>
        </div>

        <div className="flex flex-col gap-6 rounded-2xl border border-line bg-white p-[19px] sm:p-[25px]">
          <div aria-hidden="true" className="flex gap-1.5">
            <span className="size-2 rounded-full bg-google-red" />
            <span className="size-2 rounded-full bg-google-yellow" />
            <span className="size-2 rounded-full bg-google-green" />
          </div>
          <p className="text-2xl font-bold leading-[1.125] sm:text-[32px]">
            <span className="block">A little less friction.</span>
            <span className="block">A better campus day.</span>
          </p>
          <ul className="grid grid-cols-3 gap-3">
            {solutionTiles.map((tile) => (
              <li
                key={tile.label}
                className={`rounded-xl p-4 text-[13px] font-bold leading-4 text-black ${tile.tint}`}
              >
                {tile.label}
              </li>
            ))}
          </ul>
          <p className="text-[13px] leading-5 text-muted">
            Start with a student need. Build a small, useful solution.
          </p>
        </div>

        <figcaption className="text-[11px] leading-[14px] text-muted">
          EXAMPLE PROJECT BRIEF • NOT A LAUNCHED PRODUCT
        </figcaption>
      </figure>

      <div className="flex flex-col gap-6 lg:flex-1">
        <SectionLabel>Build something that matters</SectionLabel>
        <h2
          id="project-heading"
          className="text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-5xl"
        >
          Your next project could start on campus.
        </h2>
        <p className="text-lg leading-7 text-muted">
          What if finding a study partner, sharing resources, or navigating campus felt easier?
          Small, familiar problems can be the beginning of meaningful work.
        </p>
        <p className="text-base leading-[25px] text-muted">
          Bring research, design, and development together. Try an idea, get feedback, and make
          the next version better.
        </p>
        <TextLink to="/overview">Explore project-based learning</TextLink>
      </div>
    </section>
  )
}