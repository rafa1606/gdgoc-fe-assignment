import { BelongingSection } from '../components/home/BelongingSection'
import { FaqSection } from '../components/home/FaqSection'
import { GettingStartedSection } from '../components/home/GettingStartedSection'
import { HeroSection } from '../components/home/HeroSection'
import { IntroSection } from '../components/home/IntroSection'
import { ProgramFormatsSection } from '../components/home/ProgramFormatsSection'
import { ProjectSection } from '../components/home/ProjectSection'
import { PromiseBar } from '../components/home/PromiseBar'
import { TrackDiscoverySection } from '../components/home/TrackDiscoverySection'
import { InvitationSection } from '../components/overview/InvitationSection'

export function Home() {
  return (
    <>
      <HeroSection />
      <PromiseBar />
      <IntroSection />
      <TrackDiscoverySection />
      <ProgramFormatsSection />
      <ProjectSection />
      <GettingStartedSection />
      <BelongingSection />
      <FaqSection />
      <InvitationSection exploreTo="/overview" />
    </>
  )
}