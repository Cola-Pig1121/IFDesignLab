import Image from "next/image"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ScrollSnap from "@/components/ScrollSnap"

export default function Home() {
  return (
    <div className="min-h-screen bg-white w-full">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen overflow-hidden w-full">
        <Image src="/Hero/Background.png" alt="Ice glacier mountain" fill className="object-cover" priority />

        {/* Navigation */}
        <Nav />
        <ScrollSnap />


        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-between px-12">
          <div className="text-white text-6xl font-light leading-tight">
            破冰，
            <br />
            前行。
          </div>
          <div className="text-white text-right">
            <div className="text-5xl font-light mb-2">Breaking</div>
            <div className="text-4xl font-light">Moving forward</div>
          </div>
        </div>

        {/* Power By Credit */}
        <div className="absolute bottom-4 right-4 text-white text-xs flex items-center gap-2">
          <span>Power By</span>
          <Image src="/logo.png" alt="IF Design Lab Logo" width={40} height={40} className="opacity-80" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 md:px-8 lg:px-20 py-12 w-full border-t border-[#d9d9d9]">
        <div className="grid grid-cols-1 sm:grid-cols-[250px_1fr] border-b border-[#d9d9d9]">
          <div className="border-b sm:border-b-0 sm:border-r border-[#d9d9d9] p-4 sm:p-8">
            <h2 className="text-[#305e81] text-xl sm:text-2xl font-bold">About <br/>IF Design Lab</h2>
          </div>
          <div className="p-4 sm:p-8">
            <p className="text-[#454545] leading-relaxed text-sm sm:text-base">
              IF Design Lab 是一个由设计驱动的实验室，致力于跨学科、多领域的创新探索。我们相信设计不仅是一种专业方法，更是一种源于想象力、创造力，以及对心灵美的关怀。
            </p>
            <p className="text-[#454545] leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
              在这里，设计的边界被不断拓展，每一个项目都注入独特的思考与深刻的意义。从品牌形象、工业产品到数字艺术与视觉叙事，我们以开放的心态与专业的技术，融合实验精神与多元视角，打造兼具想象力与影响力的作品。
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[250px_1fr]">
          <div className="border-b sm:border-b-0 sm:border-r border-[#d9d9d9] p-4 sm:p-8">
            <h3 className="text-[#454545] text-xs sm:text-sm">What we do ?</h3>
          </div>
          <div className="p-4 sm:p-8"></div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="px-4 md:px-8 lg:px-20 pt-8 w-full">
        <p className="text-[#305e81] text-3xl font-normal text-left">We imagine, We create</p>
        <p className="text-[#305e81] text-3xl font-normal text-left">We design the future together with our unique aesthetics and soul</p>
      </section>

      {/* Blue Sky Image Section */}
      <section className="px-4 md:px-8 lg:px-20 py-12 w-full">
        <div className="rounded-lg overflow-hidden">
          <Image src="/About/Background.png" alt="About grid background" width={1200} height={600} className="w-full" />
        </div>
      </section>

      {/* News Section */}
      <section className="px-4 md:px-8 lg:px-20 py-12 w-full">
        <h2 className="text-[#305e81] text-3xl font-normal mb-8 text-left">The lasted News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News Card 1 */}
          <div className="space-y-4">
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image src="/Card/adventure.png" alt="AdventureX" fill className="object-cover" />
            </div>
            <div className="space-y-2">
              <p className="text-[#828282] text-xs">Quick Read</p>
              <h3 className="text-[#454545] text-base font-medium leading-snug">
                为 AdventureX 2025 提供设计帮助以及支持
              </h3>
              <p className="text-[#828282] text-xs">04/25/2025</p>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="space-y-4">
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image src="/Card/十叠科技CDS.png" alt="App mockup" fill className="object-cover" />
            </div>
            <div className="space-y-2">
              <p className="text-[#828282] text-xs">Quick Read</p>
              <h3 className="text-[#454545] text-base font-medium leading-snug">
                与十叠科技CDS 达成紧密的协作关系，成为战略合作伙伴
              </h3>
              <p className="text-[#828282] text-xs">04/25/2025</p>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="space-y-4">
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image src="/Card/智教联盟.png" alt="App mockup" fill className="object-cover" />
            </div>
            <div className="space-y-2">
              <p className="text-[#828282] text-xs">Quick Read</p>
              <h3 className="text-[#454545] text-base font-medium leading-snug">
                为 智数联盟 提供设计帮助以及内容营销辅排支持
              </h3>
              <p className="text-[#828282] text-xs">04/25/2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
