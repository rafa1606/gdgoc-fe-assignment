import { SectionLabel } from '../ui/SectionLabel'

type SectionHeaderProps = {
  headingId: string
  label: string
  title: string
  description: string
}

export function SectionHeader({ headingId, label, title, description }: SectionHeaderProps) {
  return (
    <div className="flex max-w-200 flex-col gap-4.5">
      <SectionLabel>{label}</SectionLabel>
      <h2
        id={headingId}
        className="text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-5xl"
      >
        {title}
      </h2>
      <p className="text-lg leading-7 text-muted">{description}</p>
    </div>
  )
}