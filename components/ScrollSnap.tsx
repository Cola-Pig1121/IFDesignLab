"use client"
import { useEffect } from "react"

export default function ScrollSnap() {
  useEffect(() => {
    const hero = document.getElementById("hero")
    const about = document.getElementById("about")
    if (!hero || !about) return

    let snapping = false
    let bufferTimer: number | null = null
    let lastWheelDirection: number | null = null

    const clearBuffer = () => {
      if (bufferTimer) {
        clearTimeout(bufferTimer)
        bufferTimer = null
      }
    }

    const onWheel = (e: WheelEvent) => {
      if (snapping) return
      const top = window.scrollY
      const heroTop = hero.offsetTop
      const heroBottom = heroTop + hero.offsetHeight
      const aboutTop = about.offsetTop
      const viewportH = window.innerHeight

      // when scrolling down from hero area -> snap to about
      if (e.deltaY > 0 && top < heroBottom && top >= heroTop) {
        snapping = true
        window.scrollTo({ top: aboutTop, behavior: "smooth" })
        setTimeout(() => (snapping = false), 500)
        return
      }

      // when scrolling up and hero is at least partially visible, start buffer
      const heroVisibleHeight = Math.max(0, Math.min(heroBottom, top + viewportH) - Math.max(heroTop, top))
      const heroVisibleRatio = heroVisibleHeight / Math.min(viewportH, hero.offsetHeight)

      if (e.deltaY < 0 && heroVisibleRatio > 0.05) {
        // user is scrolling up and hero is partially visible -> start/refresh buffer
        lastWheelDirection = -1
        clearBuffer()
        bufferTimer = window.setTimeout(() => {
          // if within buffer and user kept scrolling up recently, snap to hero
          if (lastWheelDirection === -1) {
            snapping = true
            window.scrollTo({ top: heroTop, behavior: "smooth" })
            setTimeout(() => (snapping = false), 500)
          } else {
            // otherwise bounce back to about top
            snapping = true
            window.scrollTo({ top: aboutTop, behavior: "smooth" })
            setTimeout(() => (snapping = false), 300)
          }
          bufferTimer = null
        }, 300) // 300ms buffer
        return
      }

      // if scrolling down while in the buffer area, cancel buffer and snap to about
      if (e.deltaY > 0 && heroVisibleRatio > 0.05) {
        clearBuffer()
        snapping = true
        window.scrollTo({ top: aboutTop, behavior: "smooth" })
        setTimeout(() => (snapping = false), 300)
      }
    }

    window.addEventListener("wheel", onWheel, { passive: true })
    return () => {
      window.removeEventListener("wheel", onWheel as any)
      clearBuffer()
    }
  }, [])
  return null
}
