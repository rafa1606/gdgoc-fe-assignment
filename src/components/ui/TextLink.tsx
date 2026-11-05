import { Link } from 'react-router'
import { ArrowRightIcon } from './ArrowRightIcon'

type TextLinkProps = {
  to: string
  children: string
}

export function TextLink({ to, children }: TextLinkProps) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 self-start text-base font-medium leading-5 text-google-blue-dark"
    >
      {children}
      <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}