import { Outlet, useLocation } from 'react-router'
import { getNavigation } from '../../api/endpoints'
import { useFetch } from '../../hooks/useFetch'
import type { NavItem } from '../../types/api'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

const fallbackNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Overview', href: '/overview' },
  { label: 'Contact', href: '/contact' },
]

export function Layout() {
  const { pathname } = useLocation()
  const { state } = useFetch(getNavigation)
  const items = state.status === 'success' ? state.data : fallbackNavigation

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar items={items} />
      {/* key=pathname: tiap pindah halaman, animasi masuk diputar ulang */}
      <main key={pathname} className="flex-1 motion-safe:animate-page-in">
        <Outlet />
      </main>
      <Footer items={items} />
    </div>
  )
}