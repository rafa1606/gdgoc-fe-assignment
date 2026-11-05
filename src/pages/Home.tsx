import { HeroSection } from '../components/home/HeroSection'
import { IntroSection } from '../components/home/IntroSection'
import { ProgramFormatsSection } from '../components/home/ProgramFormatsSection'
import { ProjectSection } from '../components/home/ProjectSection'
import { PromiseBar } from '../components/home/PromiseBar'
import { TrackDiscoverySection } from '../components/home/TrackDiscoverySection'

export function Home() {
  return (
    <>
      <HeroSection />
      <PromiseBar />
      <IntroSection />
      <TrackDiscoverySection />
      <ProgramFormatsSection />
      <ProjectSection />
    </>
  )
}