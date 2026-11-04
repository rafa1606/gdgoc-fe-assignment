type SectionLabelProps = {
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2.5">
      <span aria-hidden="true" className="size-[7px] rounded-full bg-google-blue" />
      <p className="text-xs font-medium uppercase text-muted">{children}</p>
    </div>
  )
}