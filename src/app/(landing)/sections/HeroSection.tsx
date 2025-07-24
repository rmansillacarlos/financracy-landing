"use client"

import Button from "@/components/ui/Button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useGSAP(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    const tl = gsap.timeline()

    const initScrollVideo = () => {
      const duration = videoEl.duration
      if (!duration || isNaN(duration)) return

      tl.to(videoEl, {
        scrollTrigger: {
          trigger: "#hero",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            videoEl.currentTime = self.progress * duration
          }
        }
      })
    }

    if (videoEl.readyState >= 1) {
      initScrollVideo()
    } else {
      videoEl.addEventListener("loadedmetadata", initScrollVideo)
    }
  }, [])

  return (
    <section id="hero" className="container min-h-screen">
      <div className="mb-2 min-h-[40vh] flex flex-col items-center justify-end text-center gap-4">
        <h1 className="max-w-[500px] text-5xl font-bold">Tu dinero, tu futuro. Cambia la forma.</h1>
        <p className="max-w-[550px] text-lg mb-2">Cambia la forma de ver tu futuro con una mirada financiera. Disfruta de la seguridad y rapidez a la hora de administrar tu dinero.</p>
        <Button 
          className="!rounded-full"
          size="lg"
        >
          Abre tu cuenta gratis
        </Button>
      </div>
      <video
        id="hero-video"
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