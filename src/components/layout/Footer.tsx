import Image from "next/image"
import Link from "next/link"
import navLinks from "@/lib/json/navLinks.json"

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="w-fit text-neutral-400 hover:text-neutral-200">{ children }</Link>
)

export default function Footer() {
  return (
    <footer className="bg-neutral-950/90 text-neutral-200 md:py-10">
      <div className="container mx-auto p-8 flex flex-col-reverse justify-center gap-8 md:flex-row md:justify-between md:items-end">
        <div className="flex flex-col">
          <Image src="/img/logo.svg" alt="Financracy Logo" width={64} height={28} />
          <span className="mt-2 text-sm text-neutral-400">
            © {new Date().getFullYear()} Financracy. Todos los derechos reservados.
          </span>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          { navLinks.map((link) => (
            <FooterLink key={link.label} href={link.href}>
              {link.label}
            </FooterLink>
          )) }
        </div>
      </div>
    </footer>
  )
}