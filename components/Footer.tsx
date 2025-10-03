import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#d9d9d9] mt-16 w-full">
      <div className="px-4 md:px-8 lg:px-20 py-12">
        <div className="grid grid-cols-[1fr_auto] gap-12 w-full">
          <div className="space-y-3">
            <Image src="/logo.png" alt="IF Design Lab Logo" width={40} height={40} className="opacity-80" />
            <p className="text-[#828282] text-sm max-w-md leading-relaxed">
              本网站及其所有内容，包括所有文本、图形、视频和图片，均为 IF Design Lab 或其第三方的版权作品。
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            <div className="space-y-3">
              <h4 className="text-[#454545] font-medium text-sm">Topic</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">Page</Link>
                <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">Page</Link>
                <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">Page</Link>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-[#454545] font-medium text-sm">Topic</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">Page</Link>
                <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">Page</Link>
                <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">Page</Link>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-[#454545] font-medium text-sm">Topic</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">Page</Link>
                <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">Page</Link>
                <Link href="#" className="block text-[#828282] text-sm hover:text-[#454545]">Page</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <Link href="#" className="text-[#828282] hover:text-[#454545]"><Facebook size={20} /></Link>
          <Link href="#" className="text-[#828282] hover:text-[#454545]"><Linkedin size={20} /></Link>
          <Link href="#" className="text-[#828282] hover:text-[#454545]"><Youtube size={20} /></Link>
          <Link href="#" className="text-[#828282] hover:text-[#454545]"><Instagram size={20} /></Link>
        </div>
      </div>
    </footer>
  )
}
