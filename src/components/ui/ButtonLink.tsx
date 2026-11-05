import { Link } from 'react-router'
import { ArrowRightIcon } from './ArrowRightIcon'

type ButtonLinkProps = {
  // '#id' untuk lompat ke section di halaman ini, selain itu rute lain.
  to: string
  variant?: 'primary' | 'secondary'
  children: string
}

const baseClass =
  'inline-flex h-13 items-center justify-center gap-4 rounded-lg font-medium transition-colors'

const variantClass = {
  primary: 'bg-google-blue px-6 text-white hover:bg-google-blue-dark',
  // px 23 + border 1 = 24, sama dengan padding tombol primary
  secondary: 'border border-line bg-white px-[23px] text-google-blue-dark hover:bg-surface',
}

export function ButtonLink({ to, variant = 'primary', children }: ButtonLinkProps) {
  const className = `${baseClass} ${variantClass[variant]}`
  const content = (
    <>
      {children}
      <ArrowRightIcon />
    </>
  )

  if (to.startsWith('#')) {
    return (
      <a href={to} className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  )
}