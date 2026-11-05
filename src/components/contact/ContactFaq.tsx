import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router'
import { getFaqs } from '../../api/endpoints'
import { useFetch } from '../../hooks/useFetch'
import type { FetchState } from '../../hooks/useFetch'
import type { InquiryCategory } from '../../types/api'
import { curlyApostrophes } from '../../utils/text'
import { FaqItem } from '../home/FaqItem'
import { EmptyState } from '../ui/EmptyState'
import { ErrorState } from '../ui/ErrorState'
import { LoadingState } from '../ui/LoadingState'
import { SectionLabel } from '../ui/SectionLabel'
import { FaqFilter } from './FaqFilter'

type ContactFaqProps = {
  categoriesState: FetchState<InquiryCategory[]>
}

// Dibuat di luar komponen supaya referensinya tetap sama dan useFetch tidak mengulang request
const fetchAllFaqs = (signal: AbortSignal) => getFaqs(undefined, signal)

// Cadangan kalau label kategori belum ada: "joining-learning" menjadi "Joining learning"
function humanize(slug: string) {
  const text = slug.replace(/-/g, ' ')
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function ContactFaq({ categoriesState }: ContactFaqProps) {
  const { state, retry } = useFetch(fetchAllFaqs)
  const [searchParams, setSearchParams] = useSearchParams()
  const [openIds, setOpenIds] = useState<string[]>([])
  
  const sectionRef = useRef<HTMLElement>(null)

  // Nilai awal saja: apakah halaman dibuka lewat tautan yang sudah membawa ?faq=...
  const [openedWithFilter] = useState(() => searchParams.has('faq'))

  // Kalau iya, langsung gulir ke section ini. Klik chip setelahnya tidak menggulir
  useEffect(() => {
    if (openedWithFilter) {
      sectionRef.current?.scrollIntoView({ behavior: 'instant' })
    }
  }, [openedWithFilter])

  const faqs = state.status === 'success' ? state.data : []

  // Kategori diambil dari data FAQ, labelnya dari daftar kategori inquiry
  const slugs = [...new Set(faqs.map((faq) => faq.category))]
  const labels = new Map(
    categoriesState.status === 'success'
      ? categoriesState.data.map((category) => [category.id, category.label])
      : [],
  )
  const options = [
    { value: 'all', label: 'All' },
    ...slugs.map((slug) => ({ value: slug, label: labels.get(slug) ?? humanize(slug) })),
  ]

  // Filter disimpan di URL. Nilai yang tidak dikenal dianggap "all"
  const requested = searchParams.get('faq')
  const selected = requested !== null && slugs.includes(requested) ? requested : 'all'
  const visibleFaqs = selected === 'all' ? faqs : faqs.filter((faq) => faq.category === selected)

  function selectFilter(value: string) {
    setSearchParams(
      (current) => {
        const next = new URLSearchParams(current)
        if (value === 'all') {
          next.delete('faq')
        } else {
          next.set('faq', value)
        }
        return next
      },
      { replace: true },
    )
  }

  function toggle(id: string) {
    setOpenIds((ids) => (ids.includes(id) ? ids.filter((openId) => openId !== id) : [...ids, id]))
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="contact-faq-heading"
      className="border-t border-line px-4 py-12 sm:px-8 xl:px-24 xl:py-18"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-20">
        <div className="flex flex-col gap-5 lg:w-2/5 lg:shrink-0 xl:w-105">
          <SectionLabel>Quick answers</SectionLabel>
          <h2
            id="contact-faq-heading"
            className="text-balance text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-[40px] xl:leading-[45px]"
          >
            Questions people often ask.
          </h2>
          <p className="text-base leading-[25px] text-muted">
            Pick a topic to find a quick answer before you write to us.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-1">
          {state.status === 'loading' && <LoadingState label="Loading questions..." />}
          {state.status === 'error' && <ErrorState message={state.error.message} onRetry={retry} />}
          {state.status === 'success' &&
            (faqs.length === 0 ? (
              <EmptyState
                title="No questions yet"
                description="Common questions will show up here once they are published."
              />
            ) : (
              <>
                <FaqFilter options={options} selected={selected} onSelect={selectFilter} />
                <p aria-live="polite" className="text-sm text-muted">
                  Showing {visibleFaqs.length} of {faqs.length} questions
                </p>
                <div className="flex flex-col gap-6">
                  {visibleFaqs.map((faq) => (
                    <FaqItem
                      key={faq.id}
                      faq={{
                        id: faq.id,
                        question: curlyApostrophes(faq.question),
                        answer: curlyApostrophes(faq.answer),
                      }}
                      isOpen={openIds.includes(faq.id)}
                      onToggle={() => toggle(faq.id)}
                    />
                  ))}
                </div>
              </>
            ))}
        </div>
      </div>
    </section>
  )
}