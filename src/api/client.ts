import type { ApiResponse } from '../types/api'

const BASE_URL = 'https://gdgoc-ugm-api.vercel.app/api'

export class ApiError extends Error {
  status: number | null

  constructor(message: string, status: number | null = null) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function request<T>(path: string, signal?: AbortSignal): Promise<T> {
  let response: Response

  try {
    response = await fetch(`${BASE_URL}${path}`, { signal })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error
    }
    throw new ApiError('Unable to reach the server. Check your connection and try again.')
  }

  if (!response.ok) {
    throw new ApiError(`The server responded with status ${response.status}.`, response.status)
  }

  const body = (await response.json()) as ApiResponse<T>

  if (!body.success) {
    throw new ApiError('The API reported an unsuccessful response.', response.status)
  }

  return body.data
}