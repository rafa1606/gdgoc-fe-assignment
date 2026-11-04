import type { InquiryCategory } from '../../types/api'

type InquiryCategoryCardProps = {
  category: InquiryCategory
  selected: boolean
  onSelect: (id: string) => void
}

export function InquiryCategoryCard({ category, selected, onSelect }: InquiryCategoryCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(category.id)}
      className={`flex w-full items-start gap-4.5 rounded-2xl p-5 text-left ring-1 ring-inset transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue ${
        selected ? 'bg-tint-blue ring-tint-blue' : 'bg-white ring-line hover:bg-surface'
      }`}
    >
      <span aria-hidden="true" className="text-2xl leading-[30px] text-google-blue-dark">
        {category.icon}
      </span>
      <span className="flex flex-col gap-1.5">
        <span className="text-lg leading-[21px]">{category.label}</span>
        <span className="text-sm leading-[22px] text-muted">{category.description}</span>
      </span>
    </button>
  )
}