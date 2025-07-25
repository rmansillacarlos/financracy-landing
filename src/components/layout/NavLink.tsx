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
          "py-1.5 px-2 text-neutral-600 text-base hover:text-neutral-500",
          active && "text-neutral-800 font-bold"
        )}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  )
}