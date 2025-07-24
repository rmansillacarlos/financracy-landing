'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useScroll, useMotionValueEvent } from "motion/react"
import clsx from "clsx"
import navLinks from "@/lib/json/navLinks.json"
import NavLink from "@/components/layout/NavLink"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const { scrollY } = useScroll()

  const blurClasses = 'backdrop-blur-xl bg-white/70 shadow-xl shadow-black-200/30 duration-300 transition-all ease-in-out !mt-0'
  const containerLgClasses = 'mb-2 md:mt-2'
  const navLgClasses = 'md:max-w-6xl'

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isMobile = window.innerWidth <= 768
    setScrolled(latest > (isMobile ? 30 : 80))
  })

  useEffect(() => {
    const bodyClasses = document.body.classList
    if (open) {
      bodyClasses.add('overflow-hidden')
    } else {
      bodyClasses.remove('overflow-hidden')
    }

    return () => {
      bodyClasses.remove('overflow-hidden')
    }
  }, [open])

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 z-60 w-full overflow-hidden font-sans",
          scrolled || open ? blurClasses : '',
          containerLgClasses
        )}
      >
        <nav 
          className={clsx(
            "mx-auto",
            navLgClasses
          )}
        >
          <div className="p-4 flex justify-between place-items-center">
            <Link href="/">
              <Image 
                src="/img/logo-dark.svg" 
                alt="Finalia Logo" 
                width={72}
                height={24}
                className="h-6"
              />
            </Link>
            <Button 
              variant="alpha"
              className="!p-0.5 md:hidden" 
              onClick={() => setOpen(!open)}
            >
              <Icon icon={open ? 'heroicons-outline:menu-alt-3' : 'heroicons-outline:menu'} className="text-[26px]" />
            </Button>
            {/* Desktop NavItems */}
            <ul 
              className="hidden md:flex md:gap-10"
            >
              { navLinks.map(({ href, label }) => (
                <NavLink
                  key={label}
                  href={href}
                  active={pathname === href}
                >
                  {label}
                </NavLink>
              )) }
            </ul>
            <Link href="" target="_blank" className="hidden md:block">
              <Button size="sm">
                Acceder
              </Button>
            </Link>
          </div>
          {/* Mobile NavItems */}
          <ul 
            className={clsx(
              "w-full h-screen z-50 px-4 flex flex-col gap-4",
              open ? 'relative' : 'hidden'
            )}
          >
            { navLinks.map(({ href, label }) => (
              <NavLink
                key={label}
                href={href}
                active={pathname === href}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            )) }
          </ul>
        </nav>
      </div>
    </>
  )
}