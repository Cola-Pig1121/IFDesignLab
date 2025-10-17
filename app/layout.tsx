import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'IF Design Lab',
  description: 'IF Design Lab',
  generator: 'ColaPig',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#E5F5FF]">
          <Nav solidBg />
        </div>
        <div className="h-16 sm:h-20" />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
