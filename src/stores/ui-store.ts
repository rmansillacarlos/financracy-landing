import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface UIState {
  isScrolled: boolean
  setScrolled: (value: boolean) => void
}

export const useUIStore = create<UIState>()(
  devtools((set) => ({
    isScrolled: false,
    setScrolled: (value) => set({ isScrolled: value })
  }))
)