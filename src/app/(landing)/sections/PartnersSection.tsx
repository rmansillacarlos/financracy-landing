import Icon from "@/components/ui/Icon"
import Image from "next/image"

const partners = [
  {
    name: "PayPal",
    logo: "/img/partners/paypal.svg"
  },
  {
    name: "Credicorp",
    logo: "/img/partners/credicorp.svg"
  },
  {
    name: "Chubb",
    logo: "/img/partners/chubb.svg"
  },
  {
    name: "Fintoc",
    logo: "/img/partners/fintoc.svg"
  },
  {
    name: "Krealo",
    logo: "/img/partners/krealo.svg"
  }
]

export default function PartnersSection() {
  return (
    <section className="mx-auto container min-h-[60vh] py-16 flex">
      <div className="m-auto place-items-center">
        <div className="mb-16 w-fit flex gap-3 items-center text-center text-2xl font-bold">
          <Icon icon="mdi:partnership-outline" />
          Nuestros socios estratégicos
        </div>
        
        <div className="flex flex-wrap justify-center gap-16">
          { partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo} 
              alt={`${partner.name} logo`} 
              className="w-auto h-5 drop-shadow-2xl drop-shadow-neutral-600 drop-shad"
              width={150}
              height={50}
            />
          )) }
        </div>
      </div>
    </section>
  )
}