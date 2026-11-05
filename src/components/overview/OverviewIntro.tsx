import heroArtwork from '../../assets/hero-artwork.svg'
import { SectionLabel } from '../ui/SectionLabel'

export function OverviewIntro() {
  return (
    <section className="flex flex-col gap-10 px-4 pb-10 pt-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:px-24 xl:pb-14 xl:pt-16">
      <div className="flex max-w-[920px] flex-col gap-6">
        <SectionLabel>Overview • Programs & learning tracks</SectionLabel>
        <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">
          Find your spark.
          <span className="block text-google-blue-dark">Build your own path.</span>
        </h1>
        <p className="text-lg leading-[1.55] text-muted xl:text-[21px]">
          Explore how research, creativity, and development connect. Start with one interest. Grow
          through practice and the people around you.
        </p>
      </div>

      <div className="relative mx-auto size-52 shrink-0 sm:size-60 lg:mx-0 lg:h-70 lg:w-66">
        <img
          src={heroArtwork}
          alt=""
          className="size-full -translate-x-[14.5%] object-contain lg:absolute lg:-left-[15px] lg:-top-[12px] lg:size-[285.73px] lg:max-w-none lg:translate-x-0"
        />
      </div>
    </section>
  )
}