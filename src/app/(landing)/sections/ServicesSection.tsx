"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import services from "@/app/(landing)/data/services"
import Icon from "@/components/ui/Icon"
import ServiceCard from "@/app/(landing)/components/ServiceCard"
import { fadeUpAnimation } from "@/animations/animations"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ServicesSection() {
  const container = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    fadeUpAnimation(container)
  }, { scope: container })

  return (
    <section id="services" className="p-4 container w-full py-16 md:p-8 4xl:p-0" ref={container}>
      <div className="flex flex-col mb-10">
        <span className="mb-12 mx-auto inline-flex gap-1 items-center px-2.5 py-1 text-center text-neutral-500 text-sm tracking-widest bg-neutral-100 rounded-full fade-up-animation">
          <Icon icon="material-symbols:check" className="text-lg" />
          Servicios
        </span>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          { services.map((service, index) => (
            <ServiceCard key={index} {...service} className="fade-up-animation" />
          )) }
        </div>
      </div>
    </section>
  )
}