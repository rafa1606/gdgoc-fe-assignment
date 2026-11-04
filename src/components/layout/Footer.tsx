import { Link } from 'react-router'
import { getStats } from '../../api/endpoints'
import logo from '../../assets/gdgoc-logo.svg'
import instagramIcon from '../../assets/instagram.svg'
import youtubeIcon from '../../assets/youtube.svg'
import { useFetch } from '../../hooks/useFetch'
import type { NavItem } from '../../types/api'

type FooterProps = {
  items: NavItem[]
}

const youtubeUrl = 'https://www.youtube.com/@gdgocugm'

const brandSegments = ['bg-google-blue', 'bg-google-red', 'bg-google-yellow', 'bg-google-green']

export function Footer({ items }: FooterProps) {
  const { state } = useFetch(getStats)
  const stats = state.status === 'success' ? state.data : null

  return (
    <footer className="bg-surface px-4 pb-7 pt-14 sm:px-8 xl:px-24">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-120 flex-col gap-6">
            <img
              src={logo}
              alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
              className="h-9 w-auto self-start xl:h-[42px]"
            />
            <p className="leading-[1.55] text-muted">
              A student community for curious minds, shared learning, and technology with purpose.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3.5 md:w-37.5">
            <p className="font-bold text-black">Explore</p>
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-[15px] text-muted transition-colors hover:text-google-blue-dark"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 md:w-65">
            <p className="font-bold text-black">Keep in the loop</p>
            {stats && <p className="text-lg text-google-blue-dark">{stats.social.instagram}</p>}
            <div className="flex gap-4">
              {stats && (
                <a
                  href={`https://www.instagram.com/${stats.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GDGoC UGM on Instagram"
                >
                  <img src={instagramIcon} alt="" className="size-6" />
                </a>
              )}
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GDGoC UGM on YouTube"
              >
                <img src={youtubeIcon} alt="" className="size-6" />
              </a>
            </div>
            {stats && <p className="text-sm leading-[1.55] text-muted">{stats.tagline}</p>}
          </div>
        </div>

        <div className="h-px bg-line" />

        <div className="flex flex-col gap-2 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
          <p>Made for the campus. Open to possibilities.</p>
        </div>

        <div className="flex h-1 w-40" aria-hidden="true">
          {brandSegments.map((color) => (
            <span key={color} className={`flex-1 ${color}`} />
          ))}
        </div>
      </div>
    </footer>
  )
}