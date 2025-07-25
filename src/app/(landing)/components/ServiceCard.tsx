import Link from "next/link"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import Card from "@/components/ui/Card"

interface Props {
  title: string
  description: string
  icon?: string
  href: string
  buttonText?: string
  className?: string
}

export default function ServiceCard({ title, description, icon, href, buttonText, className }: Props) {
  return (
    <Link className={className} href={href}>
      <Card
        variant="light"
        className="group h-full justify-between hover:scale-[1.03] transition-all duration-300"
      >
        <div>
          <span className="flex items-center gap-2 mb-2">
            { icon && <Icon icon={icon} className="text-xl" /> }
            <b className="text-lg font-semibold">{title}</b>
          </span>
          <p className="text-neutral-400 mb-4">{description}</p>
        </div>
        { href && (
          <div className="ml-auto">
            <Button 
              className="text-primary-500 hover:bg-primary-50 group-hover:bg-primary-50" 
              variant="alpha" 
              size="sm" 
              icon="carbon:chevron-right"
            >
              { buttonText || "Más Información" }
            </Button>
          </div>
        ) }
      </Card>
    </Link>
  )
}