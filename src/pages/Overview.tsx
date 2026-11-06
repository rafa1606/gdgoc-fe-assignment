import { FormatsSection } from '../components/overview/FormatsSection'
import { InvitationSection } from '../components/overview/InvitationSection'
import { JourneySection } from '../components/overview/JourneySection'
import { OutcomesSection } from '../components/overview/OutcomesSection'
import { OverviewIntro } from '../components/overview/OverviewIntro'
import { SectionNav } from '../components/overview/SectionNav'
import { StartSection } from '../components/overview/StartSection'
import { TracksSection } from '../components/overview/TracksSection'
import { usePageTitle } from '../hooks/usePageTitle'

export function Overview() {
  usePageTitle('Overview')

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