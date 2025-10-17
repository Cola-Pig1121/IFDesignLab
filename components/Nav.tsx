"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type NavProps = { solidBg?: boolean }
export default function Nav({ solidBg = false }: NavProps) {
  const [open, setOpen] = useState(false)
  return (
    <nav className={`${solidBg ? 'bg-[#77889c]' : ''} absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 lg:px-16 py-4`}>
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/logo.svg" 
          alt="IF Design Lab Logo" 
          width={48} 
          height={48} 
          className={`${solidBg ? '' : 'hero-text-shadow'} opacity-90`} 
        />
      </div>
      
      {/* Navigation Links */}
      <div className={`hidden md:flex items-center gap-12 text-xl font-medium text-white`}>
        <Link 
          href="#work" 
          className={`hover:opacity-80 transition-smooth ${solidBg ? '' : 'hero-text-shadow'} focus-visible`}
        >
          Work
        </Link>
        <Link 
          href="#about" 
          className={`hover:opacity-80 transition-smooth ${solidBg ? '' : 'hero-text-shadow'} focus-visible`}
        >
          About
        </Link>
        <Link 
          href="#people" 
          className={`hover:opacity-80 transition-smooth ${solidBg ? '' : 'hero-text-shadow'} focus-visible`}
        >
          People
        </Link>
        <Link 
          href="#contact" 
          className={`hover:opacity-80 transition-smooth ${solidBg ? '' : 'hero-text-shadow'} focus-visible`}
        >
          Contact
        </Link>
        <Link 
          href="#newsroom" 
          className={`hover:opacity-80 transition-smooth ${solidBg ? '' : 'hero-text-shadow'} focus-visible`}
        >
          Newsroom
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className={`text-white p-2 ${solidBg ? '' : 'hero-text-shadow'} focus-visible`}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className={`md:hidden fixed left-0 right-0 top-[64px] sm:top-[80px] bottom-0 z-40 ${solidBg ? 'bg-[#E5F5FF] text-[#305E81]' : 'bg-black/30 text-white'} backdrop-blur-sm`}>
          <div className="px-8 py-4 flex flex-col gap-4 text-lg">
            <Link href="#work" className="hover:opacity-80 transition-smooth focus-visible" onClick={() => setOpen(false)}>Work</Link>
            <Link href="#about" className="hover:opacity-80 transition-smooth focus-visible" onClick={() => setOpen(false)}>About</Link>
            <Link href="#people" className="hover:opacity-80 transition-smooth focus-visible" onClick={() => setOpen(false)}>People</Link>
            <Link href="#contact" className="hover:opacity-80 transition-smooth focus-visible" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="#newsroom" className="hover:opacity-80 transition-smooth focus-visible" onClick={() => setOpen(false)}>Newsroom</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
