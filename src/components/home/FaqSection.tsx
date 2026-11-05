import { useState } from 'react'
import { homeFaqs } from '../../data/homeContent'
import { SectionLabel } from '../ui/SectionLabel'
import { TextLink } from '../ui/TextLink'
import { FaqItem } from './FaqItem'

export function FaqSection() {
  // Daftar id yang terbuka. Awalnya semua terbuka, sama seperti desain
  const [openIds, setOpenIds] = useState<string[]>(homeFaqs.map((faq) => faq.id))

  function toggle(id: string) {
    setOpenIds((ids) => (ids.includes(id) ? ids.filter((openId) => openId !== id) : [...ids, id]))
  }

  return (
    <section
      aria-labelledby="faq-heading"
      className="flex flex-col gap-10 px-4 pb-0 pt-12 sm:px-8 lg:flex-row lg:gap-16 xl:gap-24 xl:px-24 xl:py-22"
    >
      <div className="flex flex-col gap-5 lg:w-[35%] lg:shrink-0 xl:w-100">
        <SectionLabel>A few good questions</SectionLabel>
        <h2 id="faq-heading" className="text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-5xl">
          <span className="block">Wondering where</span>
          <span className="block">to begin?</span>
        </h2>
        <TextLink to="/contact">Ask us a question</TextLink>
      </div>

      <div className="flex flex-col gap-6 lg:flex-1">
        {homeFaqs.map((faq) => (
          <FaqItem
            key={faq.id}
            faq={faq}
            isOpen={openIds.includes(faq.id)}
            onToggle={() => toggle(faq.id)}
          />
        ))}
      </div>
    </section>
  )
}