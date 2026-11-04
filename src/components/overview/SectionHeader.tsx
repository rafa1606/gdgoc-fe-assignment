import { SectionLabel } from '../ui/SectionLabel'

type SectionHeaderProps = {
  headingId: string
  label: string
  title: string
  description?: string
  wide?: boolean
}

export function SectionHeader({
  headingId,
  label,
  title,
  description,
  wide = false,
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4.5 ${wide ? 'max-w-240' : 'max-w-200'}`}>
      <SectionLabel>{label}</SectionLabel>
      <h2
        id={headingId}
        className="text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-5xl"
      >
        {title}
      </h2>
      {description && <p className="text-lg leading-7 text-muted">{description}</p>}
    </div>
  )
}