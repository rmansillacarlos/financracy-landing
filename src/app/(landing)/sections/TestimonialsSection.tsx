"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { fadeUpAnimation } from "@/animations/animations"
import Icon from "@/components/ui/Icon"
import TestimonialCard from "@/app/(landing)/components/TestimonialCard"

const testimonials = [
  {
    name: "Camila Rojas",
    city: "Concepción",
    country: "Chile",
    rating: 5,
    comment: "Me encanta la seguridad y la rapidez de Finalia. Es justo lo que necesitaba para mi futuro financiero.",
  },
  {
    name: "Pedro Martínez",
    city: "Antofagasta",
    country: "Chile",
    rating: 4,
    comment: "Finalia ha cambiado mi forma de ver el ahorro. Muy recomendable para quienes buscan tranquilidad financiera.",
  },
  {
    name: "Carlos Ramírez",
    city: "Puerto Montt",
    country: "Chile",
    rating: 5,
    comment: "Excelente plataforma, fácil de usar y con muchas opciones para administrar mi dinero.",
  }
]

export default function TestimonialsSection() {
  const container = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    fadeUpAnimation(container, { y: 20, duration: 0.8 })
  }, { scope: container })

  return (
    <section className="mx-auto container px-4 py-32 place-items-center md:px-0" ref={container}>
      <div className="mb-12 w-fit flex gap-3 items-center text-center text-2xl font-bold fade-up-animation">
        <Icon icon="mdi:comment-text-outline" className="hidden md:block" />
        +2 millones de personas en Chile confían en nosotros
      </div>
      
      <div className="grid grid-cols-1 gap-4 justify-center lg:grid-cols-3 lg:gap-6">
        { testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
            className="fade-up-animation"
          />
        )) }
      </div>
    </section>
  )
}