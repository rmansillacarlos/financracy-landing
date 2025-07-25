import gsap from "gsap"
import { SplitText } from "gsap/all"

interface Props {
  selectorClass?: string
  type?: "chars" | "words" | "lines"
  options?: gsap.TweenVars | {}
}

export const splitTextAnimation = ({selectorClass = '.split', type = 'words', options}: Props) => {
  const split = SplitText.create(selectorClass, {
    type,
    wordsClass: "word",
  })

  gsap.from(split[type], {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.2,
    ease: "back",
    ...options
  })

  return split
}