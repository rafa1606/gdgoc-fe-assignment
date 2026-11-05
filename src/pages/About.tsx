import { AboutIntro } from '../components/about/AboutIntro'
import { BelongSection } from '../components/about/BelongSection'
import { CommitmentSection } from '../components/about/CommitmentSection'
import { PurposeSection } from '../components/about/PurposeSection'
import { ValuesSection } from '../components/about/ValuesSection'
import { InvitationSection } from '../components/overview/InvitationSection'

export function About() {
  return (
    <>
      <AboutIntro />
      <PurposeSection />
      <ValuesSection />
      <BelongSection />
      <CommitmentSection />
      <InvitationSection exploreTo="/overview" />
    </>
  )
}