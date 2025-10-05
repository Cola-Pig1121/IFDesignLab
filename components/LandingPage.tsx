"use client"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function LandingPage() {
    return (
        <div className="landing-scroll-container w-full h-[100svh] overflow-y-auto bg-white">
            <br />
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
                            transform="translate(-7.2972973,8.1081081)"
                            fontSize={29}
                            fill="#305e81">
                            <tspan x="87.567566" y="50.270271" id="tspan19">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan2">About IF Design Lab</tspan>
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
                            transform="translate(481.13434,0.62365324)"
                            fontSize={25}
                            fill="#305e81">
                            <tspan x="87.567566" y="50.270271" id="tspan24">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan22">IF Design Lab </tspan>
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan23">是一个由设计驱动的实验室，致力于跨学科、多领域的创意</tspan>
                            </tspan>
                            <tspan x="87.567566" y="82.14991" id="tspan26">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan25">探索。我们相信设计不仅是一种专业方法，更是一种源于想象力、创造力、</tspan>
                            </tspan>
                            <tspan x="87.567566" y="114.02955" id="tspan28">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan27">好奇心与爱的实践。在这里，设计的边界被不断拓展，每一个项目都注入独</tspan>
                            </tspan>
                            <tspan x="87.567566" y="145.90919" id="tspan30">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan29">特的思考与深刻的意义。从品牌形象、工业产品到数字艺术与视觉叙事，我</tspan>
                            </tspan>
                            <tspan x="87.567566" y="177.78882" id="tspan32">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan31">们以开放的心态与专业的技术，融合实验精神与多元视角，打造兼具想象力</tspan>
                            </tspan>
                            <tspan x="87.567566" y="209.66846" id="tspan34">
                                <tspan fontFamily="Arial" fontWeight="bold" id="tspan33">与影响力的作品。</tspan>
                            </tspan>
                        </text>
                    </svg>
                </div>
                <div className="px-4 sm:px-8 lg:px-[80px] py-12 sm:py-16 lg:py-2">
                    <div className="relative lg:hidden">
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
                            <svg width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
                                <line x1="0" y1="0" x2="100%" y2="0" className="stroke-current text-[#305E81]/35" strokeWidth="1" />
                                <line x1="0" y1="100%" x2="100%" y2="100%" className="stroke-current text-[#305E81]/35" strokeWidth="1" />
                                <line x1="260px" y1="-72px" x2="260px" y2="0" className="stroke-current text-[#305E81]/35" strokeWidth="1" />
                                <line x1="260px" y1="100%" x2="260px" y2="calc(100% + 24px)" className="stroke-current text-[#305E81]/35" strokeWidth="1" />
                            </svg>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[260px_1px_1fr] items-stretch">
                            <div className="grid grid-rows-[1fr_auto]">
                                <div className="p-4 sm:p-6 lg:p-7">
                                    <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] font-medium font-patika leading-tight tracking-wide">
                                        About IF Design Lab
                                    </h2>
                                </div>
                                <div className="p-4 sm:p-6 lg:p-7">
                                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium font-patika opacity-80">
                                        What we do ?
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#305E81]/35 w-px hidden md:block" />

                            {/* Right Column Content */}
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