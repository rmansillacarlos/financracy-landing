"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { fadeUpAnimation, videoScrollAnimation, splitTextAnimation } from "@/animations/animations"
import Button from "@/components/ui/Button"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null!)
  const videoRef = useRef<HTMLVideoElement>(null!)

  useGSAP(() => {
    splitTextAnimation()
    fadeUpAnimation(container, { y: 20, duration: 1, delay: .2 })
    const videoCleanup = videoScrollAnimation(videoRef, container)

    return () => {
      if (videoCleanup) videoCleanup()
    }
  }, { scope: container })

  return (
    <div className="" ref={container}>
      <section className="mx-auto bottom-0 p-4 min-h-screen flex flex-col gap-6 justify-start items-center overflow-hidden md:p-0">
        <div id="welcome" className="h-[58vh] container flex flex-col items-center justify-end text-center opacity-100 md:h-[38vh]">
          <h1 className="max-w-[500px] text-5xl font-bold split">Tu dinero, tu futuro. Cambia la forma.</h1>
          <p className="p-2 text-base mb-2 split-paragraph fade-up-animation md:text-lg md:max-w-[640px]">Cambia la forma de ver tu futuro con una mirada financiera. <br /> Disfruta de la seguridad y rapidez a la hora de administrar tu dinero.</p>
          <Button 
            className="!rounded-full"
            size="lg"
          >
            Abre tu cuenta gratis
          </Button>
        </div>
      </section>

      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="fixed mx-auto w-[940px] h-auto bottom-0 object-cover overflow-hidden -z-10 opacity-100 md:bottom-8"
      >
        <source src="/video/hero-phone.webm" type="video/mp4" />
      </video>
    </div>
  )
}