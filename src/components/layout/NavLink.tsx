import clsx from "clsx"
import Link from "next/link"

interface Props {
  href: string
  active?: boolean
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function NavLink({ href, active, children, onClick }: Props) {
  return (
    <li>
      <Link 
        href={href}
        className={clsx(
          "py-1.5 px-2 text-neutral-700/80 hover:text-neutral-400 text-base",
          active && ''
        )}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  )
}