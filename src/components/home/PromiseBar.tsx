import { promises } from '../../data/homeContent'

export function PromiseBar() {
  return (
    <section
      aria-label="What we stand for"
      className="relative border-y border-line px-4 py-5 sm:px-8 xl:px-24 xl:py-[25px]"
    >
      <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-8">
        {promises.map((promise) => (
          <li key={promise.text} className="flex items-center gap-3.5 text-lg font-medium leading-[23px]">
            <span aria-hidden="true" className={`size-2 ${promise.accent}`} />
            {promise.text}
          </li>
        ))}
      </ul>
    </section>
  )
}