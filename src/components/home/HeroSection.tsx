import { ButtonLink } from '../ui/ButtonLink'
import { SectionLabel } from '../ui/SectionLabel'
import { HeroArtwork } from './HeroArtwork'

// Empat titik warna komunitas, saling menumpuk 3px seperti di desain
const communityDots = ['bg-google-red', 'bg-google-yellow', 'bg-google-green', 'bg-google-blue']

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-col gap-10 px-4 pb-10 pt-10 sm:px-8 lg:flex-row lg:items-center xl:pb-16 xl:pl-24 xl:pr-16 xl:pt-18"
    >
      <div className="flex flex-col items-start gap-7 lg:flex-1">
        <SectionLabel>GDGoC UGM • 2026/2027</SectionLabel>

        <h1
          id="hero-heading"
          className="text-5xl font-bold leading-[1.05] sm:text-6xl xl:text-[clamp(4.5rem,5.5556vw,5rem)]"
        >
          <span className="block">Big ideas.</span>
          <span className="block text-google-blue-dark">Built together.</span>
        </h1>

        <p className="text-lg leading-7 text-muted xl:text-[21px] xl:leading-[33px]">
          A place for curious minds at{' '}
          <strong className="font-bold">Universitas Gadjah Mada</strong> to learn, connect, and
          build technology that matters.
        </p>

        <div className="flex flex-wrap gap-3">
          <ButtonLink to="#tracks">Find your learning track</ButtonLink>
          <ButtonLink to="/about" variant="secondary">
            Get to know us
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2.5">
          <div aria-hidden="true" className="flex -space-x-[3px]">
            {communityDots.map((color) => (
              <span key={color} className={`size-4 rounded-full border-2 border-white ${color}`} />
            ))}
          </div>
          <p className="text-sm leading-[18px] text-muted">
            Different backgrounds. A shared curiosity.
          </p>
        </div>
      </div>

      <div className="w-full max-w-155 lg:w-[48.5%] lg:shrink-0">
        <HeroArtwork />
      </div>
    </section>
  )
}