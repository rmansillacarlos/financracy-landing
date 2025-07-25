interface Service {
  title: string
  description: string
  icon?: string
  href?: string
  buttonText?: string
}

const services: Service[] = [
  {
    title: "Tarjeta virtual",
    description: "Usa tu tarjeta virtual Visa en Chile y en el extranjero, totalmente gratis.",
    icon: "ion:card-outline",
    href: "#",
    buttonText: "Abre tu cuenta"
  },
  {
    title: "Tarjeta débito",
    description: "Solicita tu tarjeta de débito Mastercard física, sin costo de mantención.",
    icon: "ion:card-outline",
    href: "#",
    buttonText: "Solicitar"
  },
  {
    title: "Tarjeta de crédito",
    description: "Solicita tu tarjeta de crédito y disfruta de pagar hasta 3 cuotas sin interés, y otros beneficios exclusivos.",
    icon: "entypo:credit",
    href: "#",
    buttonText: "Solicitar"
  },
  {
    title: "Pago de cuentas",
    description: "Paga tus cuentas de forma rápida y segura desde la app.",
    icon: "streamline-cyber:cash-hand-4",
    href: "#",
    buttonText: "Abre tu cuenta"
  },
  // {
  //   title: "Recarga tu celular",
  //   description: "Recarga tu celular desde la app de forma rápida",
  //   icon: "bi:phone",
  //   href: "#",
  //   buttonText: "Saber más"
  // },
  // {
  //   title: "Transferencias",
  //   description: "Realiza transferencias nacionales e internacionales.",
  //   icon: "streamline-cyber:cash-hand-4",
  //   href: "#",
  //   buttonText: "Saber más"
  // },
]

export default services