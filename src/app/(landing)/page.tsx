import DownlaodAppSection from "./sections/DownloadAppSection";
import HeroSection from "./sections/HeroSection"
import PartnersSection from "./sections/PartnersSection";
import ServicesSection from "./sections/ServicesSection"
import TestimonialsSection from "./sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="font-sans flex flex-col place-items-center justify-items-center gap-16">
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
