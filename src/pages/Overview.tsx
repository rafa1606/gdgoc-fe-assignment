import { OverviewIntro } from '../components/overview/OverviewIntro'
import { SectionNav } from '../components/overview/SectionNav'
import { TracksSection } from '../components/overview/TracksSection'

export function Overview() {
  return (
    <>
      <OverviewIntro />
      <SectionNav />
      <TracksSection />
    </>
  )
}