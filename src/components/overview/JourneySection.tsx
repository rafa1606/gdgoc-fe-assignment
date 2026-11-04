import { getJourney } from '../../api/endpoints'
import { useFetch } from '../../hooks/useFetch'
import type { JourneyStep } from '../../types/api'
import { EmptyState } from '../ui/EmptyState'
import { ErrorState } from '../ui/ErrorState'
import { LoadingState } from '../ui/LoadingState'
import { JourneyStage } from './JourneyStage'
import { SectionHeader } from './SectionHeader'

function sortByStep(steps: JourneyStep[]) {
  return [...steps].sort((a, b) => a.step - b.step)
}

export function JourneySection() {
  const { state, retry } = useFetch(getJourney)

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="px-4 py-12 sm:px-8 xl:px-24 xl:py-20"
    >
      <SectionHeader
        wide
        headingId="journey-heading"
        label="Progress, not perfection"
        title="A journey you can keep building on."
      />

      <div className="mt-10">
        {state.status === 'loading' && <LoadingState label="Loading journey..." />}
        {state.status === 'error' && (
          <ErrorState message={state.error.message} onRetry={retry} />
        )}
        {state.status === 'success' &&
          (state.data.length === 0 ? (
            <EmptyState
              title="No steps yet"
              description="The learning journey will show up here once it is published."
            />
          ) : (
            <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {sortByStep(state.data).map((step) => (
                <JourneyStage key={step.id} step={step} />
              ))}
            </ol>
          ))}
      </div>
    </section>
  )
}