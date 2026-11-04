type SectionLabelProps = {
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-start gap-2.5">
      <span aria-hidden="true" className="mt-1 size-[7px] rounded-full bg-google-blue" />
      <p className="text-xs font-medium uppercase leading-[15px] text-muted">{children}</p>
    </div>
  )
}