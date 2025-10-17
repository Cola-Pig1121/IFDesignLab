"use client"
import Image from "next/image"
import Nav from "@/components/Nav"

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden w-full bg-white">
      <Image src="/Hero/Background.png" alt="Ice glacier mountain" fill className="object-cover" priority />

      {/* Navigation */}
      <Nav />

      {/* Hero Text */}
      {/* Text overlay - mobile: CN top-left, EN bottom-right */}
      <div className="absolute inset-0 sm:hidden">
        {/* Left Top - Chinese */}
        <div className="text-white font-bold leading-tight hero-text-shadow absolute top-16 left-4" style={{ fontSize: 'clamp(28px, 8vw, 75px)' }}>
          <div className="animate-fade-in-up">
            破冰，
          </div>
          <div className="ml-6 animate-fade-in-up animation-delay-200">
            前行。
          </div>
        </div>
        {/* Right Bottom - English */}
        <div className="text-white text-right font-medium hero-text-shadow absolute bottom-4 right-4">
          <div className="animate-fade-in-up animation-delay-400" 
               style={{ fontSize: 'clamp(18px, 5vw, 50px)', lineHeight: '1.2' }}>
            Breaking
          </div>
          <div className="animate-fade-in-up animation-delay-600" 
               style={{ fontSize: 'clamp(18px, 5vw, 50px)', lineHeight: '1.2' }}>
            Moving forward
          </div>
        </div>
      </div>

      {/* Text overlay - tablet/desktop: original left-right layout */}
      <div className="absolute inset-0 hidden sm:flex items-center justify-between px-8 lg:px-16">
        {/* Left Text - Chinese */}
        <div className="text-white font-bold leading-tight hero-text-shadow" style={{ fontSize: 'clamp(28px, 8vw, 75px)' }}>
          <div className="animate-fade-in-up">
            破冰，
          </div>
          <div className="ml-12 lg:ml-16 animate-fade-in-up animation-delay-200">
            前行。
          </div>
        </div>
        
        {/* Right Text - English */}
        <div className="text-white text-right font-medium hero-text-shadow">
          <div className="animate-fade-in-up animation-delay-400" 
               style={{ fontSize: 'clamp(18px, 5vw, 50px)', lineHeight: '1.2' }}>
            Breaking
          </div>
          <div className="animate-fade-in-up animation-delay-600" 
               style={{ fontSize: 'clamp(18px, 5vw, 50px)', lineHeight: '1.2' }}>
            Moving forward
          </div>
        </div>
      </div>

      {/* Power By Credit */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-white text-xs sm:text-sm hidden sm:flex items-center gap-2 opacity-90">
        <span className="font-medium">Power By</span>
        <Image src="/logo.svg" alt="IF Design Lab Logo" width={24} height={24} className="sm:w-8 sm:h-8 opacity-90" />
      </div>
    </section>
  )
}