import ScrollWatcher from "@/components/ui/ScrollWatcher"
import DownlaodAppSection from "./sections/DownloadAppSection"
import HeroSection from "./sections/HeroSection"
import PartnersSection from "./sections/PartnersSection"
import ServicesSection from "./sections/ServicesSection"
import TestimonialsSection from "./sections/TestimonialsSection"

export default function Home() {
  return (
    <main className="font-sans bg-white text-black pt-20 flex flex-col place-items-center justify-items-center gap-16">
      <ScrollWatcher thresholdDesktop={2100} isNavbarLightTheme={true} />
      <HeroSection />
      <DownlaodAppSection />
      <ServicesSection />
      <div className="w-full bg-neutral-900 text-white z-20">
        <TestimonialsSection />
        <PartnersSection />
      </div>
    </main>
  );
}
