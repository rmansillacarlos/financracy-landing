"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { fadeUpAnimation } from "@/animations/animations"
import Image from "next/image"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Paragraph = ({ id, children }: { id?: string, children: React.ReactNode }) => {
  return (
    <p id={id} className="opacity-50 text-2xl text-white">{children}</p>
  )
}

export default function AboutUsSection() {
  const container = useRef<HTMLDivElement>(null!)
  useGSAP(() => {
    const ENABLED_OPTIONS = { opacity: 1, duration: 2 }
    const DISABLED_OPTIONS = { opacity: .5, duration: 2 }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "center center",
        end: "bottom",
        pin: true,
        scrub: 1,
      }
    })

    tl
      .to("#p1", ENABLED_OPTIONS)
      .to("#p2", ENABLED_OPTIONS)
      .to("#p1", DISABLED_OPTIONS, "<")
      .to("#p3", ENABLED_OPTIONS)
      .to("#p2", DISABLED_OPTIONS, "<")

    fadeUpAnimation(container)

  }, { scope: container })

  return (
    <div ref={container}>
      <section id="hero" className="w-full py-32 flex flex-col items-center justify-center fade-up-animation">
        <Image src="img/logo.svg" width={400} height={240} alt="Logo" />
        <p className="mt-6 max-w-2xl text-4xl text-neutral-100 text-center">
          Somos Financracy, una fintech innovadora dedicada a transformar la experiencia financiera de las personas en Chile y en Latinoamérica.
        </p>
      </section>

      <section id="about" className="mx-auto container h-[60vh] px-4 flex flex-col justify-center items-center">
        <h1 className="mb-4 text-5xl text-primary-400 font-extrabold text-center">Sobre nosotros</h1>
        <div className="max-w-3xl text-center space-y-6">
          <Paragraph id="p1">
            Pertenecemos al grupo Krealo, el corporate venture de Credicorp, lo que nos respalda con la solidez y experiencia de uno de los conglomerados financieros más importantes de la región.
          </Paragraph>
          <Paragraph id="p2">
            Nuestro equipo está comprometido con la transparencia, la seguridad y la innovación, ofreciendo productos y servicios que facilitan la vida financiera de nuestros usuarios.
          </Paragraph>
          <Paragraph id="p3">
            Hemos sido reconocidos por nuestra excelencia y compromiso con la inclusión financiera, recibiendo premios y certificaciones que garantizan la calidad y seguridad de nuestros servicios.
          </Paragraph>
        </div>
      </section>
    </div>
  )
}