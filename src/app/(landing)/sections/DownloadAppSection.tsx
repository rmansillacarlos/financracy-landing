"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { fadeUpAnimation } from "@/animations/animations"
import Button from "@/components/ui/Button"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function DownlaodAppSection() {
  const container = useRef<HTMLDivElement>(null!)
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 38%",
        end: "bottom 20%",
        pin: true,
        scrub: .1,
      }
    })

    tl.to(container.current, {
      opacity: 0,
      duration: .5,
      delay: .5,
    })

    fadeUpAnimation(container)
  }, { scope: container })

  return (
    <section id="download" className="max-w-5xl min-h-[80vh] opacity-100" ref={container}>
      <div className="max-w-auto px-4 md:max-w-4/6">
        <h2 className="mb-3 text-5xl font-extrabold drop-shadow-lg drop-shadow-white fade-up-animation">
          Controla todo tu mundo financiero en un mismo lugar
        </h2>
        <p className="mb-4 text-neutral-500 fade-up-animation">
          Descubre una experiencia financiera única y sencilla. Con nuestra app, gestiona tus finanzas, ahorra y controla tus gastos de manera fácil, rápida y segura, todo desde la palma de tu mano.
        </p>
        <Button
          className="!rounded-full"
          icon="duo-icons:app"
          size="lg"
        >
          Descarga la app
        </Button>
      </div>
    </section>
  )
}