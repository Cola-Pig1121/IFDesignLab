import Image from "next/image"
import { notFound } from "next/navigation"
import { newsData } from "@/lib/news"
import AdventureX1057 from "@/components/news/AdventureX1057"

export function generateStaticParams() {
  return newsData.map(n => ({ slug: n.slug }))
}

type Props = { params: { slug: string } }

export default function NewsDetailPage({ params }: Props) {
  const item = newsData.find(n => n.slug === params.slug)
  if (!item) return notFound()

  return (
    <div className="min-h-screen bg-[#FBFEFF] text-[#305E81]">
      <main className="px-4 sm:px-8 lg:px-[80px] py-10 sm:py-16">
        <AdventureX1057 />
      </main>
    </div>
  )
}