import { firstMoves } from '../../data/homeContent'
import { SectionHeader } from '../overview/SectionHeader'

export function GettingStartedSection() {
  return (
    <section
      aria-labelledby="getting-started-heading"
      className="px-4 pb-12 pt-2 sm:px-8 xl:px-24 xl:pb-22"
    >
      <SectionHeader
        headingId="getting-started-heading"
        label="Make your first move"
        title="You don’t need to have it all figured out."
      />

      <ol className="mt-10 grid gap-10 md:grid-cols-3">
        {firstMoves.map((move, index) => (
          <li key={move.title} className="flex flex-col gap-5">
            <span className="text-[44px] font-bold leading-[53px] text-google-blue-dark">
              {String(index + 1).padStart(2, '0')}
            </span>
            <hr className="border-line" />
            <h3 className="text-[25px] font-bold leading-7">{move.title}</h3>
            <p className="text-base leading-[25px] text-muted">{move.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}