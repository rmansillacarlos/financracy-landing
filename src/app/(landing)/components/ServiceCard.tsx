import Link from "next/link"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import clsx from "clsx"

interface Props {
  title: string
  description: string
  icon?: string
  href?: string
  buttonText?: string
  ref?: React.Ref<HTMLDivElement>
  className?: string
}

export default function ServiceCard({ title, description, icon, href, buttonText, ref, className }: Props) {
  return (
    <article 
      className={clsx(
        className,
        "flex flex-col justify-between border border-neutral-200/60 shadow-lg rounded-xl p-6"
      )}
      ref={ref}
    >
      <div>
        <span className="flex items-center gap-3 mb-2">
          { icon && <Icon icon={icon} className="text-xl" /> }
          <b className="text-lg font-semibold">{title}</b>
        </span>
        <p className="text-neutral-400 mb-4">{description}</p>
      </div>
      { href && (
        <div className="ml-auto">
          <Link href={href}>
            <Button 
              className="text-primary-500 hover:bg-primary-50" 
              variant="alpha" 
              size="sm" 
              icon="carbon:chevron-right"
            >
              { buttonText || "Más Información" }
            </Button>
          </Link>
        </div>
      ) }
    </article>
  )
}