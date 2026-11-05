import { communityAttributes } from '../../data/homeContent'
import { SectionLabel } from '../ui/SectionLabel'
import { TextLink } from '../ui/TextLink'

export function IntroSection() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="flex flex-col gap-10 px-4 py-12 sm:px-8 lg:flex-row lg:gap-16 xl:gap-24 xl:px-24 xl:py-22"
    >
      <div className="flex flex-col gap-5 lg:w-5/12 lg:shrink-0 xl:w-122.5">
        <SectionLabel>A campus. A community.</SectionLabel>
        <h2
          id="intro-heading"
          className="text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-5xl"
        >
          <span className="block">Not just learning tech.</span>
          <span className="block">Finding your people.</span>
        </h2>
        <TextLink to="/about">More about GDGoC UGM</TextLink>
      </div>

      <div className="flex flex-col gap-6 lg:flex-1">
        <p className="text-lg leading-7 text-muted xl:text-[21px] xl:leading-[33px]">
          Google Developer Groups on Campus, Universitas Gadjah Mada brings students together
          around one simple idea: we can go <strong className="font-bold">further</strong> when we{' '}
          <strong className="font-bold">learn</strong> with each other.
        </p>
        <p className="text-base leading-[25px] text-muted xl:text-lg xl:leading-7">
          From your first line of code to your next product idea, there’s room to ask questions,
          share what you know, and try something new.
        </p>
        <ul className="flex flex-wrap gap-3">
          {communityAttributes.map((attribute) => (
            <li
              key={attribute}
              className="rounded-full bg-surface px-3.5 py-2 text-[13px] font-bold leading-4 text-muted"
            >
              {attribute}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}