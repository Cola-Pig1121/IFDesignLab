"use client"
import { useState } from "react"
import HeroSection from "@/components/HeroSection"
import LandingPage from "@/components/LandingPage"
import SlideController from "@/components/SlideController"

export default function Home() {
  const [showLanding, setShowLanding] = useState(false)

  const handleSlideChange = (show: boolean) => {
    setShowLanding(show)
  }

  return (
    <div className="relative min-h-screen bg-white w-full overflow-hidden">
      {/* Hero Section - 固定背景 */}
      <div className="fixed inset-0 z-10">
        <HeroSection />
      </div>

      {/* Landing Page - 滑动覆盖层 */}
      <div 
        className={`fixed inset-0 z-20 transition-transform duration-700 ease-in-out ${
          showLanding ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ 
          transform: showLanding ? 'translateY(0)' : 'translateY(100%)',
          height: '100vh',
          overflowY: showLanding ? 'auto' : 'hidden'
        }}
      >
        <LandingPage />
      </div>

      {/* 滑动控制器 */}
      <SlideController onSlideChange={handleSlideChange} />
    </div>
  )
}
