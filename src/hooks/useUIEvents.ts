"use client"

import { useEffect } from "react"
import { useUIStore } from "@/stores/ui-store"

interface UIEventsOptions {
  thresholdMobile?: number
  thresholdDesktop?: number
}

export const useUIEvents = ({
  thresholdMobile = 20,
  thresholdDesktop = 60
}: UIEventsOptions = {}) => {
  const { setScrolled } = useUIStore()

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768
      setScrolled(window.scrollY > (isMobile ? thresholdMobile : thresholdDesktop))
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [thresholdMobile, thresholdDesktop, setScrolled])
}
