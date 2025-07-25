"use client"

import { useEffect } from "react"
import { useUIEvents } from "@/hooks/useUIEvents"
import { useUIStore } from "@/stores/ui-store"

interface Props {
  thresholdMobile?: number
  thresholdDesktop?: number
  isNavbarLightTheme?: boolean
}

export default function ScrollWatcher({
  thresholdMobile = 120,
  thresholdDesktop = 120,
  isNavbarLightTheme = true
}: Props) {

  const { setNavbarLightTheme } = useUIStore()

  useUIEvents({ thresholdMobile, thresholdDesktop })
  useEffect(() => {
    setNavbarLightTheme(isNavbarLightTheme)
  }, [])

  return null
}