import { useSearchParams } from 'react-router'
import { getInquiryCategories } from '../../api/endpoints'
import { useFetch } from '../../hooks/useFetch'
import { CommunityUpdates } from './CommunityUpdates'
import { InquiryCategories } from './InquiryCategories'

export function ContactWorkspace() {
  const { state, retry } = useFetch(getInquiryCategories)
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
            onRetry={retry}
            selectedId={selectedId}
            onSelect={selectCategory}
          />
          <CommunityUpdates />
        </div>
      </div>
    </div>
  )
}