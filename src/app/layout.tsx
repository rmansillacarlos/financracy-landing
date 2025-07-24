import type { Metadata } from "next"
import "./globals.css"
import localFont from 'next/font/local'
import { Navbar } from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const graphieFont = localFont({
  src: [
    {
      path: "../fonts/GraphieRegular.otf",
      weight: "400",
      style: 'normal',
    },
    {
      path: "../fonts/GraphieExtraBold.otf",
      weight: "700",
      style: 'normal',
    }
  ],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Finalia (Prueba)",
  description: "Estás a un paso de potenciar tus finanzas con Finalia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${graphieFont.variable} antialiased pt-20`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
