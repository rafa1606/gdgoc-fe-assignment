import { useSearchParams } from 'react-router'
import { getTracks } from '../../api/endpoints'
import { useFetch } from '../../hooks/useFetch'
import { EmptyState } from '../ui/EmptyState'
import { ErrorState } from '../ui/ErrorState'
import { LoadingState } from '../ui/LoadingState'
import { SectionLabel } from '../ui/SectionLabel'
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
      <div className="flex max-w-200 flex-col gap-4.5">
        <SectionLabel>Explore your interests</SectionLabel>
        <h2
          id="tracks-heading"
          className="text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-5xl"
        >
          Three ways in. Plenty of ways forward.
        </h2>
        <p className="text-lg leading-7 text-muted">
          These pathways are starting points, not boxes. Follow one deeply or bring different
          skills together.
        </p>
      </div>

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