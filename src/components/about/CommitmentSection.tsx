import spark from '../../assets/commitment-spark.svg'

export function CommitmentSection() {
  return (
    <section
      aria-labelledby="commitment-heading"
      className="bg-tint-yellow px-4 py-10 sm:px-8 xl:px-24 xl:py-14"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 xl:gap-16">
        <img
          src={spark}
          alt=""
          aria-hidden="true"
          className="size-14 shrink-0 sm:size-16 xl:size-18"
        />
        <div className="flex max-w-278 flex-col gap-3.5">
          <h2
            id="commitment-heading"
            className="text-2xl font-bold leading-8 sm:text-[28px] sm:leading-9"
          >
            A space to learn. A responsibility to care.
          </h2>
          <p className="text-base leading-7 text-muted sm:text-lg">
            We want every conversation and learning experience to be respectful, inclusive, and
            constructive. Be kind, give credit, and make room for people who are just getting
            started.
          </p>
        </div>
      </div>
    </section>
  )
}