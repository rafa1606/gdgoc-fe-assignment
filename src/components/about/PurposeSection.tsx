import { SectionLabel } from '../ui/SectionLabel'

export function PurposeSection() {
  return (
    <section
      aria-labelledby="purpose-heading"
      className="bg-surface px-4 py-12 sm:px-8 lg:py-16 xl:px-24 xl:py-20"
    >
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 xl:grid-cols-[400px_1fr] xl:gap-24">
        <div className="flex flex-col gap-5">
          <SectionLabel>Why we come together</SectionLabel>
          <h2
            id="purpose-heading"
            className="text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-5xl"
          >
            <span className="block">A bridge from</span>
            <span className="block">
              <span className="text-google-blue-dark">“I wonder”</span> to
            </span>
            <span className="block bg-linear-to-b from-[#2974da] to-[#71abfe] bg-clip-text text-transparent">
              “I made this.”
            </span>
          </h2>
        </div>

        <div className="flex max-w-188 flex-col gap-6">
          <p className="text-xl leading-8 sm:text-2xl sm:leading-[37px]">
            Learning feels different when there’s someone to exchange ideas with, a problem you care
            about, and the space to give it a try.
          </p>
          <p className="text-base leading-7 text-muted sm:text-lg">
            That’s the spirit of Google Developer Groups on Campus at UGM. We create room for
            students to explore technology, develop practical skills, and learn from one another.
          </p>
          <p className="text-base leading-7 text-muted sm:text-lg">
            Our campus is the starting point. The questions we ask and the things we build can reach
            beyond it.
          </p>
        </div>
      </div>
    </section>
  )
}