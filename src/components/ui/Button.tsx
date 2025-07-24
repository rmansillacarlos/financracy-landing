import clsx from "clsx"
import Icon from "@/components/ui/Icon"
import { MouseEventHandler } from "react"

type ButtonVariant = 'primary' | 'secondary' | 'alpha'
type ButtonSize = 'sm' | 'md' | 'xl'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  children?: React.ReactNode
  className?: string
  ariaLabel?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ variant = 'primary', size = 'md', icon, className, children, ariaLabel, onClick }: Props) {
  const baseClasses = 'flex items-center gap-1.5 leading-5 rounded-lg cursor-pointer'
  const variantClasses = {
    primary: 'bg-indigo-600 text-white outline outline-indigo-500/90 hover:bg-indigo-500',
    secondary: 'bg-neutral-700/50 text-white outline outline-neutral-700/90 hover:bg-neutral-700',
    alpha: 'hover:bg-neutral-700/50'
  }

  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-sm font-light',
    md: 'px-3 py-2 text-base font-light',
    xl: 'px-3 py-2 gap-2 text-3xl font-normal',
  }

  const iconClasses = {
    sm: 'text-md',
    md: 'text-lg',
    xl: 'text-4xl'
  }

  return (
    <button className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
      { icon && (
        <Icon icon={icon} className={iconClasses[size]} />
      ) }
    </button>
  )
}