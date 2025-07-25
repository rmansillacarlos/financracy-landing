"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { fadeUpAnimation } from "@/animations/animations"
import Icon from "@/components/ui/Icon"

const partners = [
  {
    name: "PayPal",
    logo: "/img/partners/paypal.svg"
  },
  {
    name: "Credicorp",
    logo: "/img/partners/credicorp.svg"
  },
  {
    name: "Chubb",
    logo: "/img/partners/chubb.svg"
  },
  {
    name: "Fintoc",
    logo: "/img/partners/fintoc.svg"
  },
  {
    name: "Krealo",
    logo: "/img/partners/krealo.svg"
  }
]

const repeatedPartners = [...partners, ...partners]

export default function PartnersSection() {
  const container = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    fadeUpAnimation(container, { y: 20 })
  }, { scope: container })

  return (
    <section className="max-w-screen min-h-[40vh] container py-32 place-content-center" ref={container}>
      <div className="m-auto flex flex-col place-items-center">
        <div className="mb-12 w-fit flex gap-3 items-center text-center text-2xl font-bold fade-up-animation">
          <Icon icon="mdi:partnership-outline" className="hidden md:block" />
          Nuestros socios estratégicos
        </div>

        <div className="relative max-w-screen overflow-hidden lg:max-w-[80vw] fade-up-animation">
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none z-10 md:w-32" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none z-10 md:w-32" />

          <div className="min-w-fits flex gap-16 animate-partners-marquee">
            { repeatedPartners.map((partner, index) => (
              <Image
                key={index}
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="flex-shrink-0 w-auto h-3 drop-shadow-2xl drop-shadow-neutral-500 object-contain transition lg:h-5"
                width={120}
                height={40}
              />
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}