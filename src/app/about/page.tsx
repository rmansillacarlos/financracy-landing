import ScrollWatcher from "@/components/ui/ScrollWatcher"
import AboutUsSection from "./components/AboutUsSection"

export default function AboutPage() {

  return (
    <main className="min-h-screen">
      <ScrollWatcher thresholdDesktop={60} />
      <AboutUsSection />
    </main>
  )
}