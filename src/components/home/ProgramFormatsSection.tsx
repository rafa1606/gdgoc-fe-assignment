import { programFormats } from '../../data/homeContent'
import { SectionHeader } from '../overview/SectionHeader'
import studyGroupsIcon from '../../assets/format-study-groups.svg'
import projectCirclesIcon from '../../assets/format-project-circles.svg'
import workshopsIcon from '../../assets/format-hands-on-workshops.svg'

const icons: Record<string, string> = {
  'study-groups': studyGroupsIcon,
  'hands-on-workshops': workshopsIcon,
  'project-circles': projectCirclesIcon,
}

export function ProgramFormatsSection() {
  return (
    <section
      aria-labelledby="program-formats-heading"
      className="bg-surface px-4 py-12 sm:px-8 xl:px-24 xl:py-20"
    >
      <SectionHeader
        headingId="program-formats-heading"
        label="More than a classroom"
        title="Less watching. More making."
        description="Learn in a way that turns a new concept into something you can actually use."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {programFormats.map((format) => (
          <article key={format.id} className="flex flex-col gap-5 rounded-3xl bg-white p-8">
            <img src={icons[format.id]} alt="" className="size-6" />
            <h3 className="text-[28px] font-bold leading-[31px]">{format.title}</h3>
            <p className="text-base leading-[25px] text-muted">{format.description}</p>
            {/* mt-auto: garis dan keterangan menempel di dasar kartu supaya sejajar antar kartu */}
            <div className="mt-auto flex flex-col gap-5">
              <hr className="border-line" />
              <p className="text-[13px] font-medium leading-4 text-google-blue-dark">
                {format.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}