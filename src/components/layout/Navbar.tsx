import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../../assets/gdgoc-logo.svg'
import type { NavItem } from '../../types/api'
import { ArrowRightIcon } from '../ui/ArrowRightIcon'

type NavbarProps = {
  items: NavItem[]
}

function linkClass({ isActive }: { isActive: boolean }) {
  const base = 'rounded-full px-5 py-3.5 text-base transition-colors'
  return isActive
    ? `${base} bg-tint-blue font-bold text-google-blue-dark`
    : `${base} text-muted hover:bg-surface`
}

const ctaClass =
  'h-13 items-center justify-center gap-4 rounded-lg bg-google-blue px-6 font-medium text-white transition-colors hover:bg-google-blue-dark'

export function Navbar({ items }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="border-b border-line bg-white">
      <div className="flex h-20 items-center justify-between px-4 sm:px-8 xl:h-26 xl:px-16">
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
            className="h-7 w-auto sm:h-9 xl:h-[38px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-2 xl:flex">
          {items.map((item) => (
            <NavLink key={item.href} to={item.href} end={item.href === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/overview" className={`${ctaClass} hidden xl:flex`}>
          Find your track
          <ArrowRightIcon />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface xl:hidden"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
            <path
              d={isOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="flex flex-col gap-2 border-t border-line px-4 py-4 sm:px-8 xl:hidden"
        >
          {items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              onClick={closeMenu}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/overview" onClick={closeMenu} className={`${ctaClass} mt-2 flex`}>
            Find your track
            <ArrowRightIcon />
          </Link>
        </nav>
      )}
    </header>
  )
}