"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Button from "@/components/ui/Button"
import { videoScrollAnimation } from "@/animations/animations"
import { splitTextAnimation } from "@/animations/splitTextAnimations"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null!)
  const videoRef = useRef<HTMLVideoElement>(null!)

  useGSAP(() => {
    splitTextAnimation({})
    splitTextAnimation({ 
      selectorClass: ".split-paragraph", 
      type: "lines",
      options: {
        duration: .5,
        y: 40,
        ease: "ease.inOut", 
      }
    })
    videoScrollAnimation(videoRef, container)
  }, { scope: container })

  return (
    <section id="hero" className="container min-h-screen">
      <div className="mb-2 min-h-[40vh] flex flex-col items-center justify-end text-center gap-4">
        <h1 className="max-w-[500px] text-5xl font-bold split">Tu dinero, tu futuro. Cambia la forma.</h1>
        <p className="max-w-[550px] text-lg mb-2 split-paragraph">Cambia la forma de ver tu futuro con una mirada financiera. Disfruta de la seguridad y rapidez a la hora de administrar tu dinero.</p>
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
        className="mt-6 mx-auto w-[640px] h-auto object-cover fixeds bottom-0"
      >
        <source src="/video/hero-phone.webm" type="video/mp4" />
      </video>
    </section>
  )
}