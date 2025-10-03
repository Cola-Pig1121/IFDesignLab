"use client"
import { useEffect } from "react"

export default function ScrollSnap() {
  useEffect(() => {
    const hero = document.getElementById("hero")
    const about = document.getElementById("about")
    if (!hero || !about) return

    const onWheel = (e: WheelEvent) => {
      const top = window.scrollY
      const heroTop = hero.offsetTop
      const aboutTop = about.offsetTop
      const viewportH = window.innerHeight

      const inHero = top >= heroTop && top < heroTop + viewportH
      const crossedToAbout = top >= heroTop + viewportH - 1 && top < aboutTop + 100
      const inAbout = top >= aboutTop && top < aboutTop + viewportH

      // Only snap at the boundary between hero and about; keep the rest continuous
      if (e.deltaY > 0 && (inHero || crossedToAbout)) {
        window.scrollTo({ top: aboutTop, behavior: "smooth" })
      } else if (e.deltaY < 0 && inAbout) {
        window.scrollTo({ top: heroTop, behavior: "smooth" })
      }
    }

    window.addEventListener("wheel", onWheel, { passive: true })
    return () => window.removeEventListener("wheel", onWheel as any)
  }, [])
  return null
}
