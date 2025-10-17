"use client"
import Image from "next/image"
import Link from "next/link"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import { newsData } from "@/lib/news"

export default function NewsroomPage() {
  return (
    <div className="min-h-screen bg-[#FBFEFF] text-[#305E81]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#E5F5FF]">
        <Nav solidBg />
      </div>
      <div className="h-16 sm:h-20" />

      <main className="px-4 sm:px-8 lg:px-[80px] py-10 sm:py-16">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-8 sm:mb-12 font-inter">Newsroom</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsData.map((item) => (
            <Link key={item.slug} href={`/news/${item.slug}`} className="news-card cursor-pointer group">
              <div className="relative h-44 sm:h-52 md:h-[237px] w-full overflow-hidden rounded-lg bg-[#01144C] mb-4 md:mb-6">
                <Image src={item.cover} alt={item.title} fill className="object-cover transition-smooth group-hover:scale-[1.02]" />
              </div>
              <div className="space-y-2 md:space-y-3">
                <p className="text-[#828282] text-xs md:text-base font-medium font-inter">{item.category}</p>
                <h3 className="text-black text-lg md:text-2xl font-medium leading-snug transition-smooth hover:text-[#305E81] font-patika">
                  {item.title}
                </h3>
                <p className="text-[#828282] text-xs md:text-sm font-patika">{new Date(item.date).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" })}</p>
                <p className="text-[#305E81]/80 text-sm md:text-base font-inter line-clamp-2">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}