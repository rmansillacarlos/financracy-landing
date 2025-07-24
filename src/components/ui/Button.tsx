import clsx from "clsx"
import Icon from "@/components/ui/Icon"
import { MouseEventHandler } from "react"

type ButtonVariant = 'primary' | 'secondary' | 'alpha'
type ButtonSize = 'sm' | 'md' | 'lg'

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
  const baseClasses = 'flex items-center gap-1 leading-5 rounded-lg cursor-pointer'
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-500/70',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-500/70',
    alpha: 'text-neutral-600 hover:bg-neutral-100/50'
  }

  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 gap-2 text-base',
  }

  const iconClasses = {
    sm: 'text-lg',
    md: 'text-lg',
    lg: 'text-xl'
  }

  return (
    <button className={clsx(
        className,
        baseClasses,
        variantClasses[variant],
        sizeClasses[size]
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