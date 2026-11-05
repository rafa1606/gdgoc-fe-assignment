import { getValues } from '../../api/endpoints'
import { useFetch } from '../../hooks/useFetch'
import { EmptyState } from '../ui/EmptyState'
import { ErrorState } from '../ui/ErrorState'
import { LoadingState } from '../ui/LoadingState'
import { SectionHeader } from '../overview/SectionHeader'
import { ValueCard } from './ValueCard'

export function ValuesSection() {
  const { state, retry } = useFetch(getValues)

  return (
    <section
      aria-labelledby="values-heading"
      className="px-4 py-12 sm:px-8 xl:px-24 xl:py-22"
    >
      <SectionHeader
        headingId="values-heading"
        label="What guides us"
        title="Good technology starts with good company."
      />

      <div className="mt-10">
        {state.status === 'loading' && <LoadingState label="Loading values..." />}
        {state.status === 'error' && (
          <ErrorState message={state.error.message} onRetry={retry} />
        )}
        {state.status === 'success' &&
          (state.data.length === 0 ? (
            <EmptyState
              title="No values yet"
              description="Community values will show up here once they are published."
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {state.data.map((value) => (
                <ValueCard key={value.id} value={value} />
              ))}
            </div>
          ))}
      </div>
    </section>
  )
}