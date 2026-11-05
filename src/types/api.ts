// Respons dari https://gdgoc-ugm-api.vercel.app/api
export interface ApiResponse<T> {
  success: boolean
  count?: number
  data: T
}

export interface Track {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  color: string
  skills: string[]
  what_you_do: string
  explore_link: string
  open: boolean
}

// Bagian Track yang dipakai kartu. what_you_do hanya tampil saat kartu dipilih
// jadi halaman yang memakai data statis (Home) boleh tidak mengisinya
export type TrackSummary = Omit<Track, 'icon' | 'color' | 'what_you_do'> & {
  what_you_do?: string
}

export interface Value {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

export interface LearningFormat {
  id: string
  name: string
  description: string
  icon: string
  cta: string
}

export interface JourneyStep {
  step: number
  id: string
  title: string
  description: string
}

export interface Role {
  id: string
  title: string
  description: string
  icon: string
  cta: string
}

export interface InquiryCategory {
  id: string
  label: string
  description: string
  icon: string
  guidance: string
}

export interface Faq {
  id: string
  question: string
  answer: string
  category: string
}

export interface Stats {
  community_members: number
  workshops_held: number
  projects_shipped: number
  active_tracks: number
  university: string
  city: string
  country: string
  founded_year: number
  social: {
    instagram: string
    linkedin: string
    github: string
  }
  tagline: string
}

export interface NavItem {
  label: string
  href: string
}