import { Outlet } from 'react-router'
import { getNavigation } from '../../api/endpoints'
import { useFetch } from '../../hooks/useFetch'
import type { NavItem } from '../../types/api'
import { Navbar } from './Navbar'

const fallbackNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Overview', href: '/overview' },
  { label: 'Contact', href: '/contact' },
]

export function Layout() {
  const { state } = useFetch(getNavigation)
  const items = state.status === 'success' ? state.data : fallbackNavigation

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar items={items} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}