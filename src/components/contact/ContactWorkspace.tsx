import { useSearchParams } from 'react-router'
import type { FetchState } from '../../hooks/useFetch'
import type { InquiryCategory } from '../../types/api'
import { CommunityUpdates } from './CommunityUpdates'
import { ContactForm } from './ContactForm'
import { InquiryCategories } from './InquiryCategories'

type ContactWorkspaceProps = {
  state: FetchState<InquiryCategory[]>
  onRetry: () => void
}

export function ContactWorkspace({ state, onRetry }: ContactWorkspaceProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const categories = state.status === 'success' ? state.data : []
  const requestedId = searchParams.get('category')
  const selectedId =
    categories.find((category) => category.id === requestedId)?.id ?? categories[0]?.id ?? null

  function selectCategory(id: string) {
    setSearchParams({ category: id }, { replace: true })
  }

  return (
    <div className="px-4 pb-12 sm:px-8 xl:px-24 xl:pb-20">
      <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-start lg:gap-12 xl:grid-cols-[456px_1fr] xl:gap-16">
        <div className="flex flex-col gap-8">
          <InquiryCategories
            state={state}
            onRetry={onRetry}
            selectedId={selectedId}
            onSelect={selectCategory}
          />
          <CommunityUpdates />
        </div>
        <ContactForm
          categoriesState={state}
          categoryId={selectedId}
          onCategoryChange={selectCategory}
        />
      </div>
    </div>
  )
}