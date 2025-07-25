"use client"

import { useUIEvents } from "@/hooks/useUIEvents"

interface Props {
  thresholdMobile?: number
  thresholdDesktop?: number
  isNavbarLightTheme?: boolean
}

export default function ScrollWatcher({
  thresholdMobile = 120,
  thresholdDesktop = 120
}: Props) {
  useUIEvents({ thresholdMobile, thresholdDesktop })

  return null
}