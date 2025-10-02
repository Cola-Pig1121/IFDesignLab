import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image src="/Hero/Background.png" alt="Ice glacier mountain" fill className="object-cover" priority />

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6">
          <div className="text-white text-2xl font-light">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="opacity-80">
              <path d="M10 10L20 5L30 10L20 15L10 10Z" stroke="white" strokeWidth="1.5" />
              <path d="M10 20L20 15L30 20L20 25L10 20Z" stroke="white" strokeWidth="1.5" />
            </svg>
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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-80">
            <path d="M5 5L10 2.5L15 5L10 7.5L5 5Z" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-[#d9d9d9]">
        <div className="grid grid-cols-[300px_1fr] border-b border-[#d9d9d9]">
          <div className="border-r border-[#d9d9d9] p-8">
            <h2 className="text-[#305e81] text-2xl font-normal">About IF Design Lab</h2>
          </div>
          <div className="p-8">
            <p className="text-[#454545] leading-relaxed">
              IF Design Lab
              是一个由设计驱动的实验室，致力于跨学科、多领域的创新探索。我们相信设计不仅是一种专业方法，更是一种源于想象力、创造力，以及对心灵美的关怀。
            </p>
            <p className="text-[#454545] leading-relaxed mt-4">
              在这里，设计的边界被不断拓展，每一个项目都注入独特的思考与深刻的意义。从品牌形象、工业产品到数字艺术与视觉叙事，我们以开放的心态与专业的技术，融合实验精神与多元视角，打造兼具想象力与影响力的作品。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[300px_1fr]">
          <div className="border-r border-[#d9d9d9] p-8">
            <h3 className="text-[#454545] text-sm">What we do ?</h3>
          </div>
          <div className="p-8"></div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="px-8 pt-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[#305e81] text-xl">We imagine, We create</p>
          <p className="text-[#305e81] text-base mt-2">We design the future together with our unique aesthetics and soul</p>
        </div>
      </section>

      {/* Blue Sky Image Section */}
      <section className="px-8 py-12">
        <div className="max-w-[1200px] mx-auto rounded-lg overflow-hidden">
          <Image src="/About/Background.png" alt="About grid background" width={1200} height={600} className="w-full" />
        </div>
      </section>

      {/* News Section */}
      <section className="px-8 py-12">
        <h2 className="text-[#305e81] text-3xl font-normal mb-8 text-center">The lasted News</h2>

        <div className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {/* News Card 1 */}
          <div className="space-y-4">
            <div className="bg-[#01144c] rounded-lg p-8 h-[200px] flex items-center justify-center">
              <Image
                src="/Card/adventure-x.png"
                alt="AdventureX"
                width={300}
                height={200}
                className="object-contain"
              />
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
            <div className="rounded-lg p-8 h-[200px] flex items-center justify-center">
              <Image
                src="/Card/十叠科技CDS.png"
                alt="App mockup"
                width={300}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <p className="text-[#828282] text-xs">Quick Read</p>
              <h3 className="text-[#454545] text-base font-medium leading-snug">
                与十科技CDS 达成紧密的协作关系，成为战略合作伙伴
              </h3>
              <p className="text-[#828282] text-xs">04/25/2025</p>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="space-y-4">
            <div className="bg-[#f0fffe] rounded-lg p-8 h-[200px] flex items-center justify-center overflow-hidden">
              <Image
                src="/Card/智教联盟.png"
                alt="App mockup"
                width={300}
                height={200}
                className="object-contain"
              />
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
      <footer className="border-t border-[#d9d9d9] mt-16">
        <div className="px-8 py-12">
          <div className="grid grid-cols-[1fr_auto] gap-12 max-w-[1200px] mx-auto">
            {/* Left Side */}
            <div className="space-y-3">
              <Image src="/logo.png" alt="IF Design Lab Logo" width={40} height={40} className="opacity-80" />
              <p className="text-[#828282] text-sm max-w-md leading-relaxed">
                本网站及其所有内容，包括所有文本、图形、视频和图片，均为 IF Design Lab 或其第三方的版权作品。
              </p>
            </div>

            {/* Right Side - Links */}
            <div className="grid grid-cols-3 gap-12">
              <div className="space-y-3">
                <h4 className="text-[#454545] font-medium text-sm">Topic</h4>
                <div className="space-y-2">
                  <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">
                    Page
                  </Link>
                  <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">
                    Page
                  </Link>
                  <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">
                    Page
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-[#454545] font-medium text-sm">Topic</h4>
                <div className="space-y-2">
                  <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">
                    Page
                  </Link>
                  <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">
                    Page
                  </Link>
                  <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">
                    Page
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-[#454545] font-medium text-sm">Topic</h4>
                <div className="space-y-2">
                  <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">
                    Page
                  </Link>
                  <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">
                    Page
                  </Link>
                  <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">
                    Page
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-end gap-4 mt-8">
            <Link href="#" className="text-[#828282] hover:text-[#454545]">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-[#828282] hover:text-[#454545]">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-[#828282] hover:text-[#454545]">
              <Youtube size={20} />
            </Link>
            <Link href="#" className="text-[#828282] hover:text-[#454545]">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
