export type NewsItem = {
  slug: string
  title: string
  date: string
  category: string
  cover: string
  excerpt: string
  content: string[]
  gallery?: { src: string; alt: string }[]
  clientInfo?: { label: string; value: string }[]
  tags?: string[]
}

export const newsData: NewsItem[] = [
  {
    slug: "adventurex2025",
    title: "AdventureX2025",
    date: "2025-10-02",
    category: "Quick Read",
    cover: "/Card/adventure.png",
    excerpt: "作为中国年轻人的第一场原客站，AdventureX 真正扎根中国土壤，不断传播创意文化的魅力。",
    content: [
      "作为中国年轻人的第一场原客站，AdventureX 真正扎根中国土壤，不断传播创意文化的魅力。在举办的第二年，AdventureX 吸引了数百嘉宾参会、链圈资本、链接流动、理想汽车等超近历史真实赞助商与合作伙伴的支持并收获了千余份申请、提案、三百位申请者数据回流，在我们的提示里，他们从初期一步完成了十五个产品的创作与开发。",
      "火花在燃烧、知识在震荡、数据要采用、却终将爆照，点亮前行之路。我们受邀作为 AdventureX 2025 设计为 AdventureX 2025 添砖加瓦。",
      "我们为 AdventureX 设计了面向所有参会者的海报系统。通过高饱和度的色彩布局强化信息层级，并结合图像模糊与版式设计，实现内容视觉传递。为功能优化的基础上，兼顾视觉美感。海报采用高对比度背景，辅以色点提示与易读化设计，使关键信息更易识别与理解，从而大幅提升信息传达效率与观众决策速度。"
    ],
    gallery: [
      { src: "/Card/adventure.png", alt: "AdventureX 海报系统 1" },
      { src: "/Card/adventure.png", alt: "AdventureX 海报系统 2" },
      { src: "/Card/adventure.png", alt: "AdventureX 海报系统 3" }
    ],
    clientInfo: [
      { label: "客户", value: "AdventureX" },
      { label: "团队", value: "AdventureX" },
      { label: "设计师", value: "CodelightWu, Mobal" },
      { label: "创意顾问", value: "流体海风" }
    ],
    tags: ["adventurex", "event"]
  },
  {
    slug: "tech-summit",
    title: "年度科技峰会",
    date: "2025-08-15",
    category: "Conference",
    cover: "/Card/十叠科技CDS.png",
    excerpt: "年度科技峰会即将举行...",
    content: ["年度科技峰会即将举行..."],
    tags: ["conference"]
  }
]

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  return newsData.find(item => item.slug === slug) || null
}

export async function getAllNewsSlugs(): Promise<string[]> {
  return newsData.map(item => item.slug)
}