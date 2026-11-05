import { SparkIcon } from '../ui/SparkIcon'

export function BelongingSection() {
  return (
    <section
      aria-labelledby="belonging-heading"
      className="bg-tint-green px-4 py-10 sm:px-8 xl:px-24 xl:py-16"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 xl:gap-16">
        <SparkIcon className="size-20 shrink-0 text-google-green xl:size-25" />
        <div className="flex flex-col gap-4">
          <h2
            id="belonging-heading"
            className="text-3xl font-bold leading-[1.125] xl:text-[40px]"
          >
            <span className="block">Different majors. Different starting points.</span>
            <span className="block">A place for all of them.</span>
          </h2>
          <p className="text-lg leading-7 text-muted">
            You don’t have to be the most experienced person in the room. Curiosity, kindness, and
            a willingness to learn are a good place to start.
          </p>
        </div>
      </div>
    </section>
  )
}