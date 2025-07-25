"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { fadeUpAnimation, videoScrollAnimation } from "@/animations/animations"
import { splitTextAnimation } from "@/animations/splitTextAnimations"
import Button from "@/components/ui/Button"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null!)
  const videoRef = useRef<HTMLVideoElement>(null!)

  useGSAP(() => {
    splitTextAnimation({})
    fadeUpAnimation(container, { y: 20, duration: 1, delay: .2 })
    videoScrollAnimation(videoRef, container)
  }, { scope: container })

  return (
    <section id="hero" className="mx-auto p-4 container min-h-screen flex flex-col justify-center items-center md:p-0" ref={container}>
      <div className="mb-2 min-h-[40vh]s flex flex-col items-center justify-end text-center gap-4">
        <h1 className="max-w-[500px] text-5xl font-bold split">Tu dinero, tu futuro. Cambia la forma.</h1>
        <p className="p-2 text-base mb-2 split-paragraph md:text-lg md:max-w-[640px] fade-up-animation">Cambia la forma de ver tu futuro con una mirada financiera. <br /> Disfruta de la seguridad y rapidez a la hora de administrar tu dinero.</p>
        <Button 
          className="!rounded-full"
          size="lg"
        >
          Abre tu cuenta gratis
        </Button>
      </div>

      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="mt-6 mx-auto w-[800px] h-auto object-cover opacity-100"
      >
        <source src="/video/hero-phone.webm" type="video/mp4" />
      </video>
    </section>
  )
}