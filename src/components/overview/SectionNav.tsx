import { useLocation } from 'react-router'

const sections = [
  { id: 'tracks', label: 'Learning tracks' },
  { id: 'formats', label: 'Learning formats' },
  { id: 'journey', label: 'Your learning journey' },
  { id: 'start', label: 'Find a starting point' },
]

export function SectionNav() {
  const { hash } = useLocation()
  const activeId = hash ? hash.slice(1) : sections[0].id

  return (
    <nav
      aria-label="Overview sections"
      className="grid grid-cols-2 gap-x-4 gap-y-3 border-y border-line px-4 py-6 text-sm sm:px-8 sm:text-[15px] md:flex md:flex-wrap md:gap-x-8 xl:gap-x-12 xl:px-24"
    >
      {sections.map((section) => {
        const isActive = section.id === activeId
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? 'location' : undefined}
            className={`flex gap-2.5 md:whitespace-nowrap ${isActive ? 'font-bold text-google-blue-dark' : 'text-muted'}`}
          >
            {section.label}
            <span aria-hidden="true" className="text-base font-normal text-google-blue-dark">
              ↓
            </span>
          </a>
        )
      })}
    </nav>
  )
}