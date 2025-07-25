import gsap from "gsap"

export const videoScrollAnimation = (videoRef: React.RefObject<HTMLVideoElement>, container: React.RefObject<HTMLDivElement>) => {
  const videoEl = videoRef?.current
  if (!videoEl) return

  const initScrollVideo = () => {
    const duration = videoEl.duration
    if (!duration || isNaN(duration)) return

    gsap.timeline().to(videoEl, {
      scrollTrigger: {
        trigger: container?.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          videoEl.currentTime = self.progress * duration
        }
      }
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
    y: 40,
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