import ScrollWatcher from "@/components/ui/ScrollWatcher"
import AboutUsSection from "./components/AboutUsSection"

export default function AboutPage() {

  return (
    <main className="bg-neutral-900 min-h-screen text-neutral-100">
      {/* <ScrollWatcher thresholdDesktop={100} /> */}
            <ScrollWatcher thresholdDesktop={2100} isNavbarLightTheme={false} />
      <AboutUsSection />
    </main>
  )
}