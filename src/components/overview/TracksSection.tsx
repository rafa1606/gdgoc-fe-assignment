import { useSearchParams } from 'react-router'
import { getTracks } from '../../api/endpoints'
import { useFetch } from '../../hooks/useFetch'
import { EmptyState } from '../ui/EmptyState'
import { ErrorState } from '../ui/ErrorState'
import { LoadingState } from '../ui/LoadingState'
import { SectionHeader } from './SectionHeader'
import { TrackCard } from './TrackCard'

export function TracksSection() {
  const { state, retry } = useFetch(getTracks)
  const [searchParams] = useSearchParams()
  const selectedId = searchParams.get('track')

  return (
    <section
      id="tracks"
      aria-labelledby="tracks-heading"
      className="px-4 py-12 sm:px-8 xl:px-24 xl:py-20"
    >
      <SectionHeader
        headingId="tracks-heading"
        label="Explore your interests"
        title="Three ways in. Plenty of ways forward."
        description="These pathways are starting points, not boxes. Follow one deeply or bring different skills together."
      />

      <div className="mt-9">
        {state.status === 'loading' && <LoadingState label="Loading tracks..." />}
        {state.status === 'error' && (
          <ErrorState message={state.error.message} onRetry={retry} />
        )}
        {state.status === 'success' &&
          (state.data.length === 0 ? (
            <EmptyState
              title="No tracks yet"
              description="Learning tracks will show up here once they are published."
            />
          ) : (
            <div className="grid gap-6 lg:grid-cols-3">
              {state.data.map((track) => (
                <TrackCard key={track.id} track={track} selected={track.id === selectedId} />
              ))}
            </div>
          ))}
      </div>
    </section>
  )
}