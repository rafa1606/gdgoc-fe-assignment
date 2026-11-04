import type {
  Faq,
  InquiryCategory,
  JourneyStep,
  LearningFormat,
  NavItem,
  Role,
  Stats,
  Track,
  Value,
} from '../types/api'
import { request } from './client'

export const getTracks = (signal?: AbortSignal) => request<Track[]>('/tracks', signal)

export const getTrack = (id: string, signal?: AbortSignal) =>
  request<Track>(`/tracks/${encodeURIComponent(id)}`, signal)

export const getValues = (signal?: AbortSignal) => request<Value[]>('/values', signal)

export const getFormats = (signal?: AbortSignal) => request<LearningFormat[]>('/formats', signal)

export const getJourney = (signal?: AbortSignal) => request<JourneyStep[]>('/journey', signal)

export const getRoles = (signal?: AbortSignal) => request<Role[]>('/roles', signal)

export const getInquiryCategories = (signal?: AbortSignal) =>
  request<InquiryCategory[]>('/inquiry-categories', signal)

export const getFaqs = (category?: string, signal?: AbortSignal) => {
  const query = category ? `?category=${encodeURIComponent(category)}` : ''
  return request<Faq[]>(`/faqs${query}`, signal)
}

export const getStats = (signal?: AbortSignal) => request<Stats>('/stats', signal)

export const getNavigation = (signal?: AbortSignal) => request<NavItem[]>('/navigation', signal)