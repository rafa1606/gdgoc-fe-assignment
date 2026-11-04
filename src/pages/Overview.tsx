import { FormatsSection } from '../components/overview/FormatsSection'
import { JourneySection } from '../components/overview/JourneySection'
import { OutcomesSection } from '../components/overview/OutcomesSection'
import { OverviewIntro } from '../components/overview/OverviewIntro'
import { SectionNav } from '../components/overview/SectionNav'
import { TracksSection } from '../components/overview/TracksSection'

export function Overview() {
  return (
    <>
      <OverviewIntro />
      <SectionNav />
      <TracksSection />
      <OutcomesSection />
      <FormatsSection />
      <JourneySection />
    </>
  )
}