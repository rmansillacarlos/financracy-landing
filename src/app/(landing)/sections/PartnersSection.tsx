"use client"

import Icon from "@/components/ui/Icon"
import Image from "next/image"

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
  return (
    <section className="mx-auto max-w-screen min-h-[60vh] container py-32">
      <div className="m-auto flex flex-col place-items-center">
        <div className="mb-16 w-fit flex gap-3 items-center text-center text-2xl font-bold">
          <Icon icon="mdi:partnership-outline" />
          Nuestros socios estratégicos
        </div>

        <div className="relative w-[80vw] overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none z-10" />

          <div className="min-w-fits flex gap-16 animate-partners-marquee">
            { repeatedPartners.map((partner, index) => (
              <Image
                key={index}
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="flex-shrink-0 w-auto h-5 drop-shadow-2xl drop-shadow-neutral-500 object-contain transition"
                width={150}
                height={50}
              />
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}