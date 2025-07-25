"use client"

import clsx from "clsx"

interface Props {
  variant?: 'light' | 'dark'
  className?: string
  onClick?: () => void
  children: React.ReactNode,
  ref?: React.RefObject<HTMLDivElement> | undefined
}

const baseClasses = 'p-7 flex flex-col rounded-xl'

export default function Card({ variant = "dark", children, className, onClick }: Props) {
  const variantClasses = {
    light: 'bg-white/50 backdrop-blur-xl border border-neutral-200/30 shadow-lg shadow-neutral-100/40',
    dark: 'bg-neutral-800/50 filter-blur-xl'
  }
  
  return (
    <article
      className={clsx(
        baseClasses,
        variantClasses[variant],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </article>
  )
}