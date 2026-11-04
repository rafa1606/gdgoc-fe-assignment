import { SectionLabel } from '../ui/SectionLabel'

export function ContactIntro() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="px-4 pb-10 pt-12 sm:px-8 xl:px-24 xl:pb-14 xl:pt-18"
    >
      <div className="flex flex-col gap-6">
        <SectionLabel>Contact • Let’s connect</SectionLabel>
        <h1
          id="contact-heading"
          className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Good things start with <span className="text-google-blue-dark">hello.</span>
        </h1>
        <p className="max-w-[770px] text-lg leading-[1.55] text-muted xl:text-[22px]">
          A question, a collaboration, or an idea for the community? Tell us what’s on your mind.
        </p>
      </div>
    </section>
  )
}