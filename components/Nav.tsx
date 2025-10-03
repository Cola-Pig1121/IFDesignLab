import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6">
      <div className="text-white text-2xl font-light">
        <Image src="/logo.png" alt="IF Design Lab Logo" width={40} height={40} className="opacity-80" />
      </div>
      <div className="flex gap-8 text-white text-sm">
        <Link href="#work" className="hover:opacity-80 transition-opacity">
          Work
        </Link>
        <Link href="#about" className="hover:opacity-80 transition-opacity">
          About
        </Link>
        <Link href="#people" className="hover:opacity-80 transition-opacity">
          People
        </Link>
        <Link href="#contact" className="hover:opacity-80 transition-opacity">
          Contact
        </Link>
        <Link href="#newsroom" className="hover:opacity-80 transition-opacity">
          Newsroom
        </Link>
      </div>
    </nav>
  )
}
