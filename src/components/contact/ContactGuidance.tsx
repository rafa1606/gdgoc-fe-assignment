import { Link } from 'react-router'
import type { FetchState } from '../../hooks/useFetch'
import type { InquiryCategory } from '../../types/api'
import { ArrowRightIcon } from '../ui/ArrowRightIcon'
import { LoadingState } from '../ui/LoadingState'
import { SectionLabel } from '../ui/SectionLabel'
import { curlyApostrophes } from '../../utils/text'

type ContactGuidanceProps = {
  state: FetchState<InquiryCategory[]>
}

type Tip = {
  id: string
  heading: string
  text: string
}

const tipHeadings: Record<string, string> = {
  'joining-learning': 'For learning questions',
  collaboration: 'For collaborations',
}

const fallbackTip: Tip = {
  id: 'not-sure',
  heading: 'Not sure which category fits?',
  text: 'Choose General inquiry. A clear question is always a good starting point.',
}

function buildTips(categories: InquiryCategory[]): Tip[] {
  const fromApi = categories.flatMap((category) => {
    const heading = tipHeadings[category.id]
    if (!heading) return []
    return [{ id: category.id, heading, text: curlyApostrophes(category.guidance) }]
  })

  return [...fromApi, fallbackTip]
}

export function ContactGuidance({ state }: ContactGuidanceProps) {
  const tips = buildTips(state.status === 'success' ? state.data : [])

  return (
    <section
      aria-labelledby="guidance-heading"
      className="border-t border-line px-4 py-12 sm:px-8 xl:px-24 xl:py-18"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-20">
        <div className="flex flex-col gap-5 lg:w-2/5 lg:shrink-0 xl:w-105">
          <SectionLabel>A little guidance</SectionLabel>
          <h2
            id="guidance-heading"
            className="text-balance text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-[40px] xl:leading-[45px]"
          >
            Help us understand your idea.
          </h2>
          <Link
            to="/overview"
            className="group inline-flex items-center gap-3 self-start text-base font-medium leading-5 text-google-blue-dark"
          >
            Explore the programs first
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="lg:flex-1">
          {state.status === 'loading' ? (
            <LoadingState label="Loading guidance..." />
          ) : (
            <ul className="flex flex-col gap-6.5">
              {tips.map((tip) => (
                <li key={tip.id} className="border-b border-line pb-2.5">
                  <h3 className="text-xl font-bold leading-6">{tip.heading}</h3>
                  <p className="mt-2.5 text-base leading-[25px] text-muted">{tip.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}