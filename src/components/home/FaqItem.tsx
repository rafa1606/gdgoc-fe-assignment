import type { HomeFaq } from '../../data/homeContent'
import { ChevronDownIcon } from '../ui/ChevronDownIcon'

type FaqItemProps = {
  faq: HomeFaq
  isOpen: boolean
  onToggle: () => void
}

export function FaqItem({ faq, isOpen, onToggle }: FaqItemProps) {
  const answerId = `faq-answer-${faq.id}`

  return (
    <div className="border-b border-line pb-3.5">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 text-left text-xl font-medium leading-[25px]"
        >
          {faq.question}
          {/* Terbuka: panah ke bawah (sesuai desain). Tertutup: panah ke kanan. */}
          <ChevronDownIcon
            className={`size-6 shrink-0 text-google-blue transition-transform ${
              isOpen ? '' : '-rotate-90'
            }`}
          />
        </button>
      </h3>
      {isOpen && (
        <p id={answerId} className="mt-3.5 text-base leading-[25px] text-muted">
          {faq.answer}
        </p>
      )}
    </div>
  )
}