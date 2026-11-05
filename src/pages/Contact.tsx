import { getInquiryCategories } from '../api/endpoints'
import { ContactFaq } from '../components/contact/ContactFaq'
import { ContactGuidance } from '../components/contact/ContactGuidance'
import { ContactIntro } from '../components/contact/ContactIntro'
import { ContactWorkspace } from '../components/contact/ContactWorkspace'
import { useFetch } from '../hooks/useFetch'

export function Contact() {
  const { state, retry } = useFetch(getInquiryCategories)

  return (
    <>
      <ContactIntro />
      <ContactWorkspace state={state} onRetry={retry} />
      <ContactGuidance state={state} />
      <ContactFaq categoriesState={state} />
    </>
  )
}