import { getTracks } from '../api/endpoints'
import { EmptyState } from '../components/ui/EmptyState'
import { ErrorState } from '../components/ui/ErrorState'
import { LoadingState } from '../components/ui/LoadingState'
import { useFetch } from '../hooks/useFetch'

export function Overview() {
  const { state, retry } = useFetch(getTracks)

  return (
    <section className="mx-auto max-w-3xl p-6">
      {state.status === 'loading' && <LoadingState />}

      {state.status === 'error' && <ErrorState message={state.error.message} onRetry={retry} />}

      {state.status === 'success' && state.data.length === 0 && (
        <EmptyState title="No tracks found" />
      )}

      {state.status === 'success' && state.data.length > 0 && (
        <ul className="space-y-3">
          {state.data.map((track) => (
            <li key={track.id} className="rounded-lg border border-line p-4">
              <p className="font-medium text-ink">{track.name}</p>
              <p className="text-sm text-muted">{track.tagline}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}