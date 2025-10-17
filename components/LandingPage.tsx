"use client"
import Image from "next/image"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"

export default function LandingPage() {
    return (
        <div className="landing-scroll-container w-full h-[100svh] overflow-y-auto bg-white">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Nav solidBg />
            </div>
            {/* 占位高度，避免固定导航遮挡内容 */}
            <div className="h-16 sm:h-20" />
            {/* About Section */}
            <section className="relative bg-[#FBFEFF] w-full min-h-screen text-[#305E81]">
                <div className="hidden lg:block">
                    <svg
                        viewBox="0 0 1440 279"
                        fill="none"
                        version="1.1"
                        id="svg9"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs id="defs9" />
                        <path d="M 0.5,22.5 H 1440" stroke="#002949" id="path3" />
                        <path d="M -9,251 H 1440" stroke="#002949" id="path4" />
                        <path d="M 80,0 V 279" stroke="#002949" id="path5" />
                        <path d="M 363,0 V 279" stroke="#002949" id="path6" />
                        <path d="M 566,0 V 279" stroke="#002949" id="path7" />
                        <path d="M 1392,0 V 279" stroke="#002949" id="path8" />
                        <text
                            xmlSpace="preserve"
                            x="87.567566"
                            y="50.270271"
                            id="text9"
                            transform="translate(0.7293202,9.2547677)"
                            fontSize={27.3333}
                            fill="#305e81">
                            <tspan x="87.567566" y="50.270271" id="tspan2">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan1">About IF Design Lab</tspan>
                            </tspan>
                        </text>
                        <text
                            xmlSpace="preserve"
                            x="87.567566"
                            y="50.270271"
                            id="text9-8"
                            transform="translate(-4.4081273,219.63518)"
                            fontSize={20}
                            fill="#305e81">
                            <tspan x="87.567566" y="50.270271" id="tspan21">
                                <tspan fontFamily="Arial" id="tspan20">what we do?</tspan>
                            </tspan>
                        </text>
                        <text
                            xmlSpace="preserve"
                            x="87.567566"
                            y="50.270271"
                            id="text9-9"
                            transform="matrix(0.96497952,0,0,1.0064235,493.38502,0.4321752)"
                            fontSize={24.3535}
                            fill="#305e81">
                            <tspan x="87.567566" y="50.270271" id="tspan10">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan7">IF Design Lab </tspan>
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan9">是一个由设计驱动的实验室，致力于跨学科、多领域的创意探</tspan>
                            </tspan>
                            <tspan x="87.567566" y="81.3255" id="tspan12">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan11">索。我们相信设计不仅是一种专业方法，更是一种源于想象力、创造力、好奇</tspan>
                            </tspan>
                            <tspan x="87.567566" y="112.38073" id="tspan14">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan13">心与爱的实践。在这里，设计的边界被不断拓展，每一个项目都注入独特的思</tspan>
                            </tspan>
                            <tspan x="87.567566" y="143.43596" id="tspan16">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan15">考与深刻的意义。从品牌形象、工业产品到数字艺术与视觉叙事，我们以开放</tspan>
                            </tspan>
                            <tspan x="87.567566" y="174.49119" id="tspan18">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan17">的心态与专业的技术，融合实验精神与多元视角，打造兼具想象力与影响力的</tspan>
                            </tspan>
                            <tspan x="87.567566" y="205.54642" id="tspan20">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan19">作品。</tspan>
                            </tspan>
                        </text>
                    </svg>
                </div>
                <div className="px-4 sm:px-8 lg:px-[80px] py-12 sm:py-16 lg:py-2">
                    <div className="relative lg:hidden">

                        <div className="flex flex-col">
                            <div className="p-4 sm:p-6 lg:p-7">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] font-medium font-patika leading-tight tracking-wide">
                                    About IF Design Lab
                                </h2>
                            </div>
                            <div className="p-4 sm:p-6 lg:p-7 space-y-4">
                                <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.9] font-inter">
                                    IF Design Lab 是一个由设计驱动的实验室，致力于跨学科、多领域的创意探索。
                                    我们相信设计不仅是一种专业方法，更是一种源于想象力、创造力、好奇心与爱的实践。
                                </p>
                                <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.9] font-inter">
                                    在这里，设计的边界被不断拓展。每一个项目都注入独特的思考与深刻的意义。
                                    从品牌形象、工业产品到数字艺术与视觉叙事，我们以开放的心态与专业的技术，
                                    融合实验精神与多元视角，打造兼具想象力与影响力的作品。
                                </p>
                            </div>
                            <div className="p-4 sm:p-6 lg:p-7">
                                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium font-patika opacity-80">
                                    What we do ?
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Slogan */}
                    <div className="relative mt-10">
                        <div className="p-4 sm:p-6 lg:p-7">
                            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold font-patika leading-tight mb-2">
                                We imagine, We create
                            </h3>
                            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold font-patika leading-tight">
                                We design the future togetherwith our unique aesthetics and soul
                            </h3>
                        </div>
                    </div>
                    <div className="mt-8 sm:mt-10 rounded-xl overflow-hidden bg-[#F0FFFE] border border-[#305E81]/20">
                        <div className="relative h-[340px] sm:h-[400px] lg:h-[518px] w-full">
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
                <div className="px-4 sm:px-8 md:px-12 lg:px-[80px] py-10 md:py-16">
                    <h2 className="text-[#305E81] text-2xl md:text-4xl font-semibold mb-8 md:mb-16 font-inter">
                        The lasted News
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* News Card 1 */}
                        <div className="news-card cursor-pointer">
                            <div className="relative h-44 sm:h-52 md:h-[237px] w-full overflow-hidden rounded-lg bg-[#01144C] mb-4 md:mb-6">
                                <Image src="/Card/adventure.png" alt="AdventureX" fill className="object-cover transition-smooth" />
                            </div>
                            <div className="space-y-2 md:space-y-3">
                                <p className="text-[#828282] text-xs md:text-base font-medium font-inter">Quick Read</p>
                                <h3 className="text-black text-lg md:text-2xl font-medium leading-snug transition-smooth hover:text-[#305E81] font-patika">
                                    为 AdventureX 2025 提供设计帮助以及支持
                                </h3>
                                <p className="text-[#828282] text-xs md:text-sm font-patika">Oct.02.2025</p>
                            </div>
                        </div>

                        {/* News Card 2 */}
                        <div className="news-card cursor-pointer">
                            <div className="relative h-44 sm:h-52 md:h-[237px] w-full overflow-hidden rounded-lg bg-[#E5F5FF] mb-4 md:mb-6">
                                <Image src="/Card/十叠科技CDS.png" alt="App mockup" fill className="object-cover transition-smooth" />
                            </div>
                            <div className="space-y-2 md:space-y-3">
                                <p className="text-[#828282] text-xs md:text-base font-medium font-inter">Quick Read</p>
                                <h3 className="text-black text-lg md:text-2xl font-medium leading-snug transition-smooth hover:text-[#305E81] font-patika">
                                    与 十叠科技CDS 达成紧密的协作关系，成为战略合作伙伴
                                </h3>
                                <p className="text-[#828282] text-xs md:text-sm font-patika">Oct.02.2025</p>
                            </div>
                        </div>

                        {/* News Card 3 */}
                        <div className="news-card cursor-pointer">
                            <div className="relative h-44 sm:h-52 md:h-[237px] w-full overflow-hidden rounded-lg bg-[#F6F0E4] mb-4 md:mb-6">
                                <Image src="/Card/智教联盟.png" alt="App mockup" fill className="object-cover transition-smooth" />
                            </div>
                            <div className="space-y-2 md:space-y-3">
                                <p className="text-[#828282] text-xs md:text-base font-medium font-inter">Quick Read</p>
                                <h3 className="text-black text-lg md:text-2xl font-medium leading-snug transition-smooth hover:text-[#305E81] font-patika">
                                    为 智教联盟 提供设计帮助以及内容编辑排版支持
                                </h3>
                                <p className="text-[#828282] text-xs md:text-sm font-patika">Oct.02.2025</p>
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