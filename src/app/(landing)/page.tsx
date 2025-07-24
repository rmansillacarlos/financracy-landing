import HeroSection from "./sections/HeroSection"
import PartnersSection from "./sections/PartnersSection";
import ServicesSection from "./sections/ServicesSection"
import TestimonialsSection from "./sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="font-sans flex flex-col place-items-center justify-items-center gap-16">
      <HeroSection />
      <ServicesSection />
      <div className="w-full bg-neutral-900 text-white">
        {/* <div className="relative -top-64 left-0 w-full h-64 bg-gradient-to-t from-neutral-900 to-transparent" /> */}
        <PartnersSection />
        <TestimonialsSection />
      </div>
      {/* <CallToActionSection /> */}
    </main>
  );
}
