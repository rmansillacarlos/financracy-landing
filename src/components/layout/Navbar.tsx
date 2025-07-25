"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import clsx from "clsx"
import navLinks from "@/lib/json/navLinks.json"
import { useUIStore } from "@/stores/ui-store"
import NavLink from "@/components/layout/NavLink"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const { isScrolled } = useUIStore()

  const blurClasses = 'backdrop-blur-xl bg-black/30 shadow-xls shadow-neutral-300/20s duration-300 transition-all ease-in-out !mt-0'

  const containerDesktopClasses = 'mb-2 md:mt-2'
  const navDesktopClasses = 'mx-auto md:max-w-6xl'

  useEffect(() => {
    const bodyClasses = document.body.classList
    if (open) bodyClasses.add('overflow-hidden')
    else bodyClasses.remove('overflow-hidden')

    return () => {
      bodyClasses.remove('overflow-hidden')
    }
  }, [open])

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 z-60 w-full overflow-hidden font-sans",
          isScrolled || open ? blurClasses : '',
          containerDesktopClasses
        )}
      >
        <nav className={navDesktopClasses}>
          <div className="p-4 flex justify-between place-items-center">
            <div className="mr-28">
              <Link href="/" className="w-fit">
                <Image 
                  src="/img/logo-dark.svg" 
                  alt="Financracy Logo" 
                  width={72}
                  height={24}
                  className="h-6"
                />
              </Link>
            </div>
            <Button 
              variant="alpha"
              className="!p-0.5 md:hidden" 
              onClick={() => setOpen(!open)}
            >
              <Icon icon={open ? 'heroicons-outline:menu-alt-3' : 'heroicons-outline:menu'} className="text-[26px]" />
            </Button>
            {/* Desktop NavItems */}
            <ul 
              className="hidden md:flex md:gap-8"
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
            <div className="hidden md:gap-3 md:inline-flex">
              <Link href="" target="_blank">
                <Button variant="alpha" size="sm" className="!text-neutral-100">
                  Descarga la app
                </Button>
              </Link>
              <Link href="" target="_blank" className="hidden md:block">
                <Button size="sm">
                  Acceder
                </Button>
              </Link>
            </div>
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
            <div className="pt-2 flex flex-col gap-3 border-t border-neutral-100">
              <Button variant="alpha" size="sm">
                Descarga la app
              </Button>
              <Button className="w-fit">
                Acceder
              </Button>
            </div>
          </ul>
        </nav>
      </div>
    </>
  )
}