"use client"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="landing-scroll-container w-full h-screen overflow-y-auto bg-white">
      {/* About Section */}
      <section className="bg-[#FBFEFF] w-full min-h-screen relative">
        {/* Decorative Lines - matching Figma design */}
        <div className="absolute left-0 top-[94px] w-full h-px decorative-line-horizontal opacity-15"></div>
        <div className="absolute left-20 top-[72px] w-px h-6 decorative-line opacity-25"></div>
        <div className="absolute left-[363px] top-[72px] w-px h-6 decorative-line opacity-25"></div>
        <div className="absolute left-[566px] top-[72px] w-px h-6 decorative-line opacity-25"></div>
        <div className="absolute right-12 top-[72px] w-px h-6 decorative-line opacity-25"></div>
        
        <div className="max-w-[1440px] mx-auto px-20 py-24">
          {/* About Header */}
          <div className="mb-16 relative">
            <h2 className="text-[#305E81] text-3xl font-medium mb-8">About IF Design Lab</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12">
              <div></div>
              <div className="space-y-6">
                <p className="text-[#305E81] text-2xl font-medium leading-relaxed">
                  IF Design Lab 是一个由设计驱动的实验室，致力于跨学科、多领域的创意探索。我们相信设计不仅是一种源于想象力、创造力、好奇心与爱的实践。
                </p>
                <p className="text-[#305E81] text-2xl font-medium leading-relaxed">
                  在这里，设计的边界被不断拓展，每一个项目都注入独特的思考与深刻的意义。从品牌形象、工业产品到数字艺术与视觉叙事，我们以开放的心态与专业的技术，融合实验精神与多元视角，打造兼具想象力与影响力的作品。
                </p>
              </div>
            </div>
          </div>

          {/* What we do section */}
          <div className="mb-16 relative">
            {/* Decorative line above What we do */}
            <div className="absolute left-0 top-[-32px] w-full h-px decorative-line-horizontal opacity-10"></div>
            {/* Vertical decorative line for What we do */}
            <div className="absolute left-0 top-0 w-px h-6 decorative-line opacity-40"></div>
            <h3 className="text-[#305E81] text-lg font-medium mb-8 ml-4">What we do？</h3>
          </div>

          {/* Slogan Section */}
          <div className="mb-16">
            <h2 className="text-[#305E81] text-4xl font-semibold leading-tight mb-4">
              We imagine, We create
            </h2>
            <h2 className="text-[#305E81] text-4xl font-semibold leading-tight">
              We design the future together with our unique aesthetics and soul
            </h2>
          </div>

          {/* Background Image Section */}
          <div className="mb-16 rounded-xl overflow-hidden bg-[#F0FFFE]">
            <div className="relative h-[648px] w-full">
              <Image 
                src="/About/Background.png" 
                alt="About grid background" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-[#FBFEFF] w-full">
        <div className="max-w-[1440px] mx-auto px-20 py-16">
          <h2 className="text-[#305E81] text-4xl font-semibold mb-16">The lasted News</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="news-card cursor-pointer">
              <div className="relative h-[237px] w-full overflow-hidden rounded-lg bg-[#01144C] mb-6">
                <Image src="/Card/adventure.png" alt="AdventureX" fill className="object-cover transition-smooth" />
              </div>
              <div className="space-y-3">
                <p className="text-[#828282] text-base font-medium">Quick Read</p>
                <h3 className="text-black text-2xl font-medium leading-snug transition-smooth hover:text-[#305E81]">
                  为 AdventureX 2025 提供设计帮助以及支持
                </h3>
                <p className="text-[#828282] text-sm">Oct.02.2025</p>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="news-card cursor-pointer">
              <div className="relative h-[237px] w-full overflow-hidden rounded-lg bg-[#E5F5FF] mb-6">
                <Image src="/Card/十叠科技CDS.png" alt="App mockup" fill className="object-cover transition-smooth" />
              </div>
              <div className="space-y-3">
                <p className="text-[#828282] text-base font-medium">Quick Read</p>
                <h3 className="text-black text-2xl font-medium leading-snug transition-smooth hover:text-[#305E81]">
                  与 十叠科技CDS 达成紧密的协作关系，成为战略合作伙伴
                </h3>
                <p className="text-[#828282] text-sm">Oct.02.2025</p>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="news-card cursor-pointer">
              <div className="relative h-[237px] w-full overflow-hidden rounded-lg bg-[#F6F0E4] mb-6">
                <Image src="/Card/智教联盟.png" alt="App mockup" fill className="object-cover transition-smooth" />
              </div>
              <div className="space-y-3">
                <p className="text-[#828282] text-base font-medium">Quick Read</p>
                <h3 className="text-black text-2xl font-medium leading-snug transition-smooth hover:text-[#305E81]">
                  为 智教联盟 提供设计帮助以及内容编辑排版支持
                </h3>
                <p className="text-[#828282] text-sm">Oct.02.2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}