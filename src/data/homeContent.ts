import type { TrackSummary } from '../types/api'

// Teks halaman Home mengikuti desain Figma,dan Data ini tidak ada di API
// (teks dan urutan API berbeda), jadi disimpan statis dan diberi tipe

export type CommunityPromise = {
  text: string
  // kelas warna kotak kecil di depan teks
  accent: string
}

export const promises: CommunityPromise[] = [
  { text: 'Learn by doing', accent: 'bg-google-blue' },
  { text: 'Connect across disciplines', accent: 'bg-google-red' },
  { text: 'Build with purpose', accent: 'bg-google-green' },
]

export const communityAttributes = ['Student-led', 'Peer-powered', 'Curiosity-first']

export const homeTracks: TrackSummary[] = [
  {
    id: 'research-discovery',
    name: 'Research & discovery',
    tagline: 'Explore the why',
    description:
      'Ask better questions, understand people, and turn insight into a clear problem worth solving.',
    skills: ['Problem framing', 'User research', 'Product thinking'],
    explore_link: '/overview?track=research-discovery',
    open: true,
  },
  {
    id: 'design-creativity',
    name: 'Design & creativity',
    tagline: 'Make it meaningful',
    description:
      'Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.',
    skills: ['UI/UX', 'Visual storytelling', 'Prototyping'],
    explore_link: '/overview?track=design-creativity',
    open: true,
  },
  {
    id: 'development',
    name: 'Development',
    tagline: 'Bring ideas to life',
    description:
      'Learn the tools, write the code, and build useful things with people who enjoy figuring it out.',
    skills: ['Web & mobile', 'Cloud', 'AI foundations'],
    explore_link: '/overview?track=development',
    open: true,
  },
]

export type ProgramFormat = {
  id: string
  title: string
  description: string
  detail: string
}

export const programFormats: ProgramFormat[] = [
  {
    id: 'study-groups',
    title: 'Study together',
    description:
      'Work through foundations in peer learning sessions. Bring your questions; leave with a next step.',
    detail: 'Study groups & guided practice',
  },
  {
    id: 'hands-on-workshops',
    title: 'Try it hands-on',
    description:
      'Explore a tool or technique in a workshop, then put it to work in a small experiment.',
    detail: 'Workshops & technical sessions',
  },
  {
    id: 'project-circles',
    title: 'Share the process',
    description:
      'Exchange feedback, explain your decisions, and learn from different ways of thinking.',
    detail: 'Project circles & sharing sessions',
  },
]