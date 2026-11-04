import { getFormats } from '../../api/endpoints'
import { useFetch } from '../../hooks/useFetch'
import type { LearningFormat } from '../../types/api'
import { EmptyState } from '../ui/EmptyState'
import { ErrorState } from '../ui/ErrorState'
import { LoadingState } from '../ui/LoadingState'
import { FormatCard } from './FormatCard'
import { SectionHeader } from './SectionHeader'


// Urutan kartu mengikuti desain Figma.
const displayOrder = ['study-groups', 'hands-on-workshops', 'project-circles', 'knowledge-sharing']

function rank(id: string) {
  const index = displayOrder.indexOf(id)
  return index === -1 ? displayOrder.length : index
}

function sortByDisplayOrder(formats: LearningFormat[]) {
  return [...formats].sort((a, b) => rank(a.id) - rank(b.id))
}

export function FormatsSection() {
  const { state, retry } = useFetch(getFormats)

  return (
    <section
      id="formats"
      aria-labelledby="formats-heading"
      className="bg-surface px-4 py-12 sm:px-8 xl:px-24 xl:py-20"
    >
      <SectionHeader
        headingId="formats-heading"
        label="Ways to learn"
        title="The format changes. The curiosity stays."
        description="Explore the kinds of experiences that help you move from understanding to doing."
      />

      <div className="mt-9">
        {state.status === 'loading' && <LoadingState label="Loading formats..." />}
        {state.status === 'error' && (
          <ErrorState message={state.error.message} onRetry={retry} />
        )}
        {state.status === 'success' &&
          (state.data.length === 0 ? (
            <EmptyState
              title="No formats yet"
              description="Learning formats will show up here once they are published."
            />
          ) : (
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-y-9">
              {sortByDisplayOrder(state.data).map((format) => (
                <FormatCard key={format.id} format={format} />
              ))}
            </div>
          ))}
      </div>
    </section>
  )
}