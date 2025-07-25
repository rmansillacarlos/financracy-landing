import clsx from "clsx"
import Link from "next/link"

interface Props {
  href: string
  active?: boolean
  lightTheme?: boolean
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function NavLink({ href, active, lightTheme = false, children, onClick }: Props) {
  return (
    <li>
      <Link 
        href={href}
        className={clsx(
          "py-1.5 px-2 text-base ",
          lightTheme ? 'text-neutral-800 hover:text-neutral-700' : 'text-neutral-400 hover:text-neutral-300'
          // active && "text-neutral-800 font-bold"
        )}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  )
}