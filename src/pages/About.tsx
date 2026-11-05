import { AboutIntro } from '../components/about/AboutIntro'
import { CommitmentSection } from '../components/about/CommitmentSection'
import { PurposeSection } from '../components/about/PurposeSection'
import { ValuesSection } from '../components/about/ValuesSection'

export function About() {
  return (
    <>
      <AboutIntro />
      <PurposeSection />
      <ValuesSection />
      <CommitmentSection />
    </>
  )
}