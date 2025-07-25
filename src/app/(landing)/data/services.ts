interface Service {
  title: string
  description: string
  icon?: string
  href: string
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
  {
    title: "Recarga tu celular",
    description: "Recarga tu celular desde la app de forma rápida",
    icon: "bi:phone",
    href: "#",
    buttonText: "Saber más"
  },
  {
    title: "Transferencias",
    description: "Realiza transferencias nacionales e internacionales.",
    icon: "streamline:subscription-cashflow",
    href: "#",
    buttonText: "Saber más"
  },
  {
    title: "3 cuotas sin interés",
    description: "Paga en hasta 3 cuotas sin interés usando tu tarjeta de crédito Financracy.",
    icon: "mdi:credit-card-multiple-outline",
    href: "#",
    buttonText: "Ver comercios"
  },
  {
    title: "Hasta 30% dcto. en viajes",
    description: "Descuentos exclusivos en pasajes de bus, avión y alojamientos pagando con tu tarjeta Financracy.",
    icon: "mingcute:airplane-line",
    href: "#",
    buttonText: "Ver beneficios"
  },
  {
    title: "Hasta 50% dcto. en comida",
    description: "Disfruta de promociones y descuentos en restaurantes y delivery asociados.",
    icon: "mdi:food-outline",
    href: "#",
    buttonText: "Ver promociones"
  },
]

export default services