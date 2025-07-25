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
    <section className="container w-full py-16">
      <div className="grid mb-10">
        <span className="mb-8 mx-auto inline-flex gap-1 items-center px-2.5 py-1 text-center text-neutral-500 text-sm tracking-widest uppe bg-neutral-100 rounded-full">
          <Icon icon="material-symbols:check" className="text-lg" />
          Servicios
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6" ref={container}>
          { services.map((service, index) => (
            <ServiceCard key={index} {...service} className="fade-up-animation" />
          )) }
        </div>
      </div>
    </section>
  )
}