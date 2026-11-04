import type { FetchState } from '../../hooks/useFetch'
import type { InquiryCategory } from '../../types/api'
import { EmptyState } from '../ui/EmptyState'
import { ErrorState } from '../ui/ErrorState'
import { LoadingState } from '../ui/LoadingState'
import { InquiryCategoryCard } from './InquiryCategoryCard'

type InquiryCategoriesProps = {
  state: FetchState<InquiryCategory[]>
  onRetry: () => void
  selectedId: string | null
  onSelect: (id: string) => void
}

export function InquiryCategories({ state, onRetry, selectedId, onSelect }: InquiryCategoriesProps) {
  return (
    <div className="flex flex-col gap-4.5">
      <h2 className="text-[28px] font-bold leading-[31px]">What brings you here?</h2>
      <p className="text-base leading-[25px] text-muted">
        Pick the closest topic in the form. We’ll take it from there.
      </p>

      {state.status === 'loading' && <LoadingState label="Loading categories..." />}
      {state.status === 'error' && <ErrorState message={state.error.message} onRetry={onRetry} />}
      {state.status === 'success' &&
        (state.data.length === 0 ? (
          <EmptyState
            title="No categories yet"
            description="Inquiry topics will show up here once they are published."
          />
        ) : (
          <ul className="flex flex-col gap-4.5">
            {state.data.map((category) => (
              <li key={category.id}>
                <InquiryCategoryCard
                  category={category}
                  selected={category.id === selectedId}
                  onSelect={onSelect}
                />
              </li>
            ))}
          </ul>
        ))}
    </div>
  )
}