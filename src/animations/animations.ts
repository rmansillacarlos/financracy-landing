import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

export const videoScrollAnimation = (videoRef: React.RefObject<HTMLVideoElement>, container?: React.RefObject<HTMLDivElement>) => {
  const videoEl = videoRef?.current
  if (!videoEl) return

  let tl: gsap.core.Timeline | null = null

  const initScrollVideo = () => {
    const isMobile = window.innerWidth <= 768
    
    const duration = videoEl.duration
    if (!duration || isNaN(duration)) return

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: container?.current,
        start: "top +=64",
        end: "+=1800",
        pin: true,
        scrub: .1,
        onUpdate: (self) => {
          videoEl.currentTime = self.progress * duration
        }
      }
    })

    tl
      .to("#welcome", {
        opacity: 0,
        duration: 1,
        delay: .5
      }, "<")
      .to(videoEl, {
        top: "50%",
        yPercent: -50,
        x: !isMobile ? 420 : 0,
        opacity: !isMobile ? 1 : .15,
        scale: 1.5,
        duration: 1
      }, "<")
      .to(videoEl, {
        opacity: 0,
        delay: 2,
        duration: 1
      })
      .to(videoEl, {
        x: -200
      })
  }

  if (videoEl.readyState >= 1) { 
    initScrollVideo()
  } else { 
    const handler = () => initScrollVideo()
    videoEl.addEventListener("loadedmetadata", handler)
    return () => {
      videoEl.removeEventListener("loadedmetadata", handler)
      if (tl) {
        tl.kill()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        gsap.set(videoEl, { clearProps: "all" })
      }
    }
  }

  return () => {
    if (tl) {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gsap.set(videoEl, { clearProps: "all" })
    }
  }
}

export const fadeUpAnimation = (container: React.RefObject<HTMLDivElement>, options: gsap.TweenVars = {}) => {
  const tween = gsap.from(".fade-up-animation", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: container.current,
        start: "top 75%"
      },
    ...options
  })

  return () => {
    if (tween) {
      tween.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gsap.utils.toArray(".fade-up-animation").forEach((el) => {
        gsap.set(el as gsap.TweenTarget, { clearProps: "all" })
      })
    }
  }
}

type SplitType = "chars" | "words" | "lines"

export const splitTextAnimation = (selectorClass: string = '.split', type: SplitType = 'words', options?: gsap.TweenVars) => {
  const split = SplitText.create(selectorClass, {
    type,
    wordsClass: "word",
  })

  gsap.from(split[type], {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.3,
    ease: "back",
    ...options
  })

  return split
}