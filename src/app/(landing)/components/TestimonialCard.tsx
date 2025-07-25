import Image from "next/image"
import Icon from "@/components/ui/Icon"
import clsx from "clsx"
import Card from "@/components/ui/Card"

interface Props {
  name: string
  city: string
  country: string
  rating: number
  comment: string
  className?: string
}

export default function TestimonialCard({ name, city, country, rating, comment, className }: Props) {
  return (
    <Card
      className={clsx(
        className,
        "p-7 flex flex-col gap-4 rounded-2xl bg-neutral-800/50"
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          src={`https://ui-avatars.com/api/?name=${name}&background=random`}
          alt={`${name} avatar`}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-neutral-500">{city}, {country}</span>
        </div>
      </div>
      <div className="flex gap-1">
        { Array.from({ length: rating }, (_, i) => (
          <Icon icon="mdi:star" key={i} className="text-yellow-500" />
        )) }
      </div>
      <p className="text-neutral-400">{comment}</p>
    </Card>
  )
}