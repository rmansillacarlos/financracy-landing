import { Icon as IconifyIcon } from "@iconify/react"
import clsx from "clsx"

interface Props {
  icon: string
  className?: string
}

export default function Icon({ icon, className }: Props) {
  return (
    <IconifyIcon icon={icon} className={clsx(
        className
      )}
    />
  )
}