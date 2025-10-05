import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 lg:px-16 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="IF Design Lab Logo" 
          width={48} 
          height={48} 
          className="opacity-90 hero-text-shadow" 
        />
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-12 text-white text-xl font-medium">
        <Link 
          href="#work" 
          className="hover:opacity-80 transition-smooth hero-text-shadow focus-visible"
        >
          Work
        </Link>
        <Link 
          href="#about" 
          className="hover:opacity-80 transition-smooth hero-text-shadow focus-visible"
        >
          About
        </Link>
        <Link 
          href="#people" 
          className="hover:opacity-80 transition-smooth hero-text-shadow focus-visible"
        >
          People
        </Link>
        <Link 
          href="#contact" 
          className="hover:opacity-80 transition-smooth hero-text-shadow focus-visible"
        >
          Contact
        </Link>
        <Link 
          href="#newsroom" 
          className="hover:opacity-80 transition-smooth hero-text-shadow focus-visible"
        >
          Newsroom
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white p-2 hero-text-shadow focus-visible">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}
