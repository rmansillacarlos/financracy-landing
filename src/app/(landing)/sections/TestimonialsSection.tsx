import Icon from "@/components/ui/Icon"
import TestimonialCard from "../components/TestimonialCard"

const testimonials = [
  {
    name: "Josefa González",
    city: "Santiago",
    country: "Chile",
    rating: 5,
    comment: "Finalia me ayudó a organizar mis finanzas de manera fácil y rápida. ¡La recomiendo totalmente!",
  },
  {
    name: "Juan Pérez",
    city: "Valparaíso",
    country: "Chile",
    rating: 4,
    comment: "La app es muy intuitiva y el soporte es excelente. Ahora tengo más control sobre mi dinero.",
  },
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
  return (
    <section className="mx-auto container py-32 place-items-center">
      <div className="mb-16 w-fit flex gap-3 items-center text-center text-2xl font-bold">
        <Icon icon="mdi:comment-text-outline" />
        +2 millones de personas en Chile confían en nosotros
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-7">
        { testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
          />
        )) }
      </div>
    </section>
  )
}