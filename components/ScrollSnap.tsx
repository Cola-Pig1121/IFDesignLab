"use client"
import { useEffect } from "react"

export default function ScrollSnap() {
  useEffect(() => {
    const hero = document.getElementById("hero")
    const about = document.getElementById("about")
    if (!hero || !about) return

    let snapping = false
    let accumulatedUp = 0 // positive px accumulated when user scrolls up while hero visible
    let lastDir: number | null = null

    const resetAccum = () => (accumulatedUp = 0)

    const onWheel = (e: WheelEvent) => {
      if (snapping) return
      const top = window.scrollY
      const heroTop = hero.offsetTop
      const heroBottom = heroTop + hero.offsetHeight
      const aboutTop = about.offsetTop
      const viewportH = window.innerHeight

      // visible ratio of hero in viewport
      const heroVisibleHeight = Math.max(0, Math.min(heroBottom, top + viewportH) - Math.max(heroTop, top))
      const heroVisibleRatio = heroVisibleHeight / Math.min(viewportH, hero.offsetHeight)

      // downward intent while in hero -> immediately go to about
      if (e.deltaY > 0 && top < heroBottom && top >= heroTop) {
        snapping = true
        window.scrollTo({ top: aboutTop, behavior: "smooth" })
        setTimeout(() => (snapping = false), 500)
        return
      }

      // upward scrolling while hero is partially visible -> accumulate movement
      if (e.deltaY < 0 && heroVisibleRatio > 0.05) {
        // if direction changed from down to up, reset
        if (lastDir === 1) resetAccum()
        lastDir = -1

        accumulatedUp += -e.deltaY // deltaY negative -> add positive movement in px

        // threshold: 20% of hero height or 15% of viewport, whichever smaller
        const threshold = Math.min(hero.offsetHeight * 0.2, viewportH * 0.15)

        if (accumulatedUp >= threshold) {
          snapping = true
          window.scrollTo({ top: heroTop, behavior: "smooth" })
          setTimeout(() => {
            snapping = false
            resetAccum()
          }, 500)
        }
        return
      }

      // if user scrolls down while hero visible, cancel accumulated and snap to about
      if (e.deltaY > 0 && heroVisibleRatio > 0.01) {
        resetAccum()
        lastDir = 1
        snapping = true
        window.scrollTo({ top: aboutTop, behavior: "smooth" })
        setTimeout(() => (snapping = false), 300)
        return
      }

      // if hero visibility drops (user moved away) and accumulated didn't reach threshold -> bounce to about
      if (heroVisibleRatio <= 0.01 && accumulatedUp > 0) {
        // didn't reach threshold
        resetAccum()
        snapping = true
        window.scrollTo({ top: aboutTop, behavior: "smooth" })
        setTimeout(() => (snapping = false), 300)
      }
    }

    window.addEventListener("wheel", onWheel, { passive: true })
    return () => window.removeEventListener("wheel", onWheel as any)
  }, [])
  return null
}
