import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface UIState {
  isScrolled: boolean
  isNavbarLightTheme: boolean
  setScrolled: (value: boolean) => void
  setNavbarLightTheme: (value: boolean) => void
}

export const useUIStore = create<UIState>()(
  devtools((set) => ({
    isScrolled: false,
    isNavbarLightTheme: false,
    setScrolled: (value) => set({ isScrolled: value }),
    setNavbarLightTheme: (value) => set({ isNavbarLightTheme: value })
  }))
)