import artwork from '../../assets/about-artwork.png'
import { SectionLabel } from '../ui/SectionLabel'

export function AboutIntro() {
  return (
    <section
      aria-labelledby="about-heading"
      className="px-4 py-12 sm:px-8 lg:py-16 xl:px-24 xl:py-20"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-6.5 lg:max-w-180">
          <SectionLabel>About GDGoC UGM</SectionLabel>
          <h1
            id="about-heading"
            className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block">Built by students.</span>
            <span className="block text-google-blue-dark">For what’s next.</span>
          </h1>
          <p className="text-lg leading-[1.55] text-muted xl:text-[22px]">
            We’re a community of learners and makers at Universitas Gadjah Mada, connected by
            curiosity and the belief that technology can do good.
          </p>
          <p className="text-[13px] uppercase leading-4 text-muted">
            Universitas Gadjah Mada • 2026/2027
          </p>
        </div>

        <img
          src={artwork}
          alt=""
          aria-hidden="true"
          width={464}
          height={400}
          className="h-auto w-full max-w-116 lg:w-[38%] xl:w-116"
        />
      </div>
    </section>
  )
}