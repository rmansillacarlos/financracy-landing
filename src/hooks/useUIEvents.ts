"use client"

import { useMotionValueEvent, useScroll } from "motion/react"
import { useUIStore } from "@/stores/ui-store"

interface UIEventsOptions {
  thresholdMobile?: number
  thresholdDesktop?: number
  isNavbarLightTheme?: boolean
}

export const useUIEvents = ({
  thresholdMobile = 20,
  thresholdDesktop = 60
}: UIEventsOptions = {}) => {

  const { setScrolled } = useUIStore()

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isMobile = window.innerWidth <= 768
    setScrolled(latest > (isMobile ? thresholdMobile : thresholdDesktop))
  })
}