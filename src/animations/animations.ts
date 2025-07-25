import gsap from "gsap"

export const videoScrollAnimation = (videoRef: React.RefObject<HTMLVideoElement>, container?: React.RefObject<HTMLDivElement>) => {
  const videoEl = videoRef?.current
  if (!videoEl) return

  const initScrollVideo = () => {
    const isMobile = window.innerWidth <= 768
    
    const duration = videoEl.duration
    if (!duration || isNaN(duration)) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container?.current,
        start: "start +=64",
        end: "+=1800",
        pin: true,
        scrub: .1,
        onUpdate: (self) => {
          videoEl.currentTime = self.progress * duration
        }
      }
    })

    tl.to("#welcome", {
      opacity: 0,
      duration: 1,
      delay: .5
    }, "<")

    tl.to(videoEl, {
      y: -240,
      x: !isMobile ? 420 : 0,
      opacity: !isMobile ? 1 : .15,
      scale: 1.5,
      duration: 1
    }, "<")

    tl.to(videoEl, {
      opacity: 0,
      delay: 2,
      duration: 1
    })
    tl.to(videoEl, {
      x: -200
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
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: container.current,
        start: "top 80%"
      },
    ...options
  })
}