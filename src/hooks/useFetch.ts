import { useEffect, useState } from 'react'
import { ApiError } from '../api/client'

type FetchState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: ApiError }
  | { status: 'success'; data: T }

export function useFetch<T>(fetcher: (signal: AbortSignal) => Promise<T>) {
  const [state, setState] = useState<FetchState<T>>({ status: 'loading' })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    fetcher(controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return
        setState({ status: 'success', data })
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        const apiError =
          error instanceof ApiError ? error : new ApiError('Something went wrong. Please try again.')
        setState({ status: 'error', error: apiError })
      })

    return () => controller.abort()
  }, [fetcher, attempt])

  function retry() {
    setState({ status: 'loading' })
    setAttempt((current) => current + 1)
  }

  return { state, retry }
}