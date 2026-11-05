export type FaqFilterOption = {
  value: string
  label: string
}

type FaqFilterProps = {
  options: FaqFilterOption[]
  selected: string
  onSelect: (value: string) => void
}

export function FaqFilter({ options, selected, onSelect }: FaqFilterProps) {
  return (
    <div role="group" aria-label="Filter questions by topic" className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isSelected = option.value === selected

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(option.value)}
            className={`h-10 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue ${
              isSelected
                ? 'border-google-blue-dark bg-tint-blue text-google-blue-dark'
                : 'border-line bg-white text-ink hover:bg-surface'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}