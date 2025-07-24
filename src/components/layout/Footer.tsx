import Image from "next/image"
import Link from "next/link"

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-neutral-400 hover:text-neutral-200">{ children }</Link>
)

export default function Footer() {
  const footerLinks = [
    { href: "#", label: "Inicio" },
    { href: "#", label: "Sobre nosotros" },
    { href: "#", label: "Contacto" },
    { href: "#", label: "Términos y condiciones" }
  ]

  return (
    <footer className="bg-neutral-950/90 text-neutral-200 py-10">
      <div className="container mx-auto flex flex-col justify-between items-end gap-6 md:flex-row">
        <Image src="/img/logo.svg" alt="Finalia Logo" width={56} height={24} />
        <div className="text-xs text-neutral-400">
          © {new Date().getFullYear()} Finalia. Todos los derechos reservados.
        </div>
        <div className="flex flex-col gap-1 text-sm">
          { footerLinks.map((link) => (
            <FooterLink key={link.label} href={link.href}>
              {link.label}
            </FooterLink>
          )) }
        </div>
      </div>
    </footer>
  )
}