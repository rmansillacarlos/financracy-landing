import gsap from "gsap"

export const videoScrollAnimation = (videoRef: React.RefObject<HTMLVideoElement>, container?: React.RefObject<HTMLDivElement>) => {
  const videoEl = videoRef?.current
  if (!videoEl) return

  const initScrollVideo = () => {
    const duration = videoEl.duration
    if (!duration || isNaN(duration)) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container?.current,
        start: "top top",
        end: "bottom 20%",
        pin: true,
        scrub: 1,
        // markers: true,
        onUpdate: (self) => {
          videoEl.currentTime = self.progress * duration
        }
      }
    })

    tl.to(videoEl, {
      opacity: 0,
      delay: 1.3,
      scale: 1.1
    })
    tl.to(container?.current, {
      opacity: 0,
      delay: 1
    })
  }

  if (videoEl.readyState >= 1) { 
    initScrollVideo()
  } else { 
    const handler = () => initScrollVideo()
    videoEl.addEventListener("loadedmetadata", handler)
    return () => videoEl.removeEventListener("loadedmetadata", handler)
  }
}

export const fadeUpAnimation = (container: React.RefObject<HTMLDivElement>, options: gsap.TweenVars = {}) => {
  gsap.from(".fade-up-animation", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: container.current,
        start: "top 80%"
      },
    ...options
  })
}