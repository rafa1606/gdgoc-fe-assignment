import { FormatsSection } from '../components/overview/FormatsSection'
import { InvitationSection } from '../components/overview/InvitationSection'
import { JourneySection } from '../components/overview/JourneySection'
import { OutcomesSection } from '../components/overview/OutcomesSection'
import { OverviewIntro } from '../components/overview/OverviewIntro'
import { SectionNav } from '../components/overview/SectionNav'
import { StartSection } from '../components/overview/StartSection'
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
      <StartSection />
      <InvitationSection />
    </>
  )
}