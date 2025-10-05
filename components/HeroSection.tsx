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
      <div className="absolute inset-0 flex items-center justify-between px-11 lg:px-16">
        {/* Left Text - Chinese */}
        <div className="text-white font-bold leading-tight hero-text-shadow" style={{ fontSize: 'clamp(48px, 5.2vw, 75px)' }}>
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
               style={{ fontSize: 'clamp(32px, 3.5vw, 50px)', lineHeight: '1.2' }}>
            Breaking
          </div>
          <div className="animate-fade-in-up animation-delay-600" 
               style={{ fontSize: 'clamp(32px, 3.5vw, 50px)', lineHeight: '1.2' }}>
            Moving forward
          </div>
        </div>
      </div>

      {/* Power By Credit */}
      <div className="absolute bottom-6 right-6 text-white text-sm flex items-center gap-2 opacity-90">
        <span className="font-medium">Power By</span>
        <Image src="/logo.png" alt="IF Design Lab Logo" width={32} height={32} className="opacity-90" />
      </div>
    </section>
  )
}