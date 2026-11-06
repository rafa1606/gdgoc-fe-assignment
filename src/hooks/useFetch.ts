import { useEffect, useState } from 'react'
import { ApiError } from '../api/client'

export type FetchState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: ApiError }
  | { status: 'success'; data: T }

type Fetcher<T> = (signal: AbortSignal) => Promise<T>

// Hasil request disimpan per fetcher selama sesi, jadi pindah halaman tidak menunggu API lagi
const cache = new Map<Fetcher<unknown>, unknown>()

// Memanaskan cache di awal. Error diabaikan, halamannya akan mencoba sendiri
export function prefetch<T>(fetcher: Fetcher<T>) {
  if (cache.has(fetcher)) return
  fetcher(new AbortController().signal)
    .then((data) => cache.set(fetcher, data))
    .catch(() => {})
}

export function useFetch<T>(fetcher: Fetcher<T>) {
  const [state, setState] = useState<FetchState<T>>(() =>
    cache.has(fetcher)
      ? { status: 'success', data: cache.get(fetcher) as T }
      : { status: 'loading' },
  )
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    fetcher(controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return
        cache.set(fetcher, data)
        setState({ status: 'success', data })
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        // Data dari cache tetap tampil kalau pembaruan di belakang layar gagal
        if (cache.has(fetcher)) return
        const apiError =
          error instanceof ApiError ? error : new ApiError('Something went wrong. Please try again.')
        setState({ status: 'error', error: apiError })
      })

    return () => controller.abort()
  }, [fetcher, attempt])

  function retry() {
    cache.delete(fetcher)
    setState({ status: 'loading' })
    setAttempt((current) => current + 1)
  }

  return { state, retry }
}