import Image from 'next/image'

interface PosterCardProps {
  title: string
  subtitle: string
  date: string
  time: string
  location: string
  iconUrl: string
}

const PosterCard = ({
  title,
  subtitle,
  date,
  time,
  location,
  iconUrl
}: PosterCardProps) => {
  return (
    <div className="relative w-[153.35px] h-[204.57px] bg-[#00239C] overflow-hidden">
      {/* Header */}
      <div className="absolute top-[8.99px] right-[53.16px]">
        <span className="text-[4.79px] text-white font-orbix leading-[8.09px]">
          ADVENTUREX 25
        </span>
      </div>

      {/* Content */}
      <div className="absolute top-[8.99px] left-[8.99px] w-[135.38px]">
        <h3 className="text-[14.38px] text-white font-semibold leading-tight">
          {title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
          {subtitle.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h3>
      </div>

      {/* Icon */}
      <div 
        className="absolute top-[47.47px] right-[44px] w-[105.88px] h-[131.26px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29de2f75-7f99-460e-a678-e5c9b23c7110)'
        }}
      >
        <div className="h-full flex justify-end items-end">
          <Image 
            src={iconUrl}
            alt=""
            width={35.94}
            height={35.94}
            className="mb-[1.91px]"
          />
        </div>
      </div>

      {/* Blue label */}
      <div className="absolute bottom-[42.45px] left-0 w-[105.88px] h-[42.45px] bg-[#0039FF] flex flex-col justify-center items-center">
        <span className="text-[4.47px] text-white font-orbix">@ACTIVITY</span>
        <span className="text-[4.97px] text-white font-medium mt-[2.85px] leading-[6.70px]">
          这个夏天最大的黑客松可以玩点什么？
        </span>
      </div>

      {/* White footer */}
      <div className="absolute bottom-0 left-0 w-full h-[16.77px] bg-white flex items-end justify-end">
        <span className="text-[4.79px] text-[#00239C] font-medium mb-[6.03px] mr-[9.87px]">
          {location} {date} {time}
        </span>
      </div>

      {/* Small label */}
      <div className="absolute top-[108.28px] left-[10.48px] w-[18.36px] h-[17.97px] flex justify-center items-end">
        <span className="text-[9.12px] text-white font-bold leading-none">
          蓝调<br />活动
        </span>
      </div>
    </div>
  )
}

export function Poster() {
  const posters = [
    {
      title: 'Open Flow：\n',
      subtitle: '人文松弛与酒精分子共振计划',
      date: '2025 · 7 · 25',
      time: '10:00pm ~ 11:00pm',
      location: '中国杭州 湖畔创研中心',
      iconUrl: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c6b0623-fadd-4e66-a8b2-c6b37c9ea1dc'
    },
    {
      title: '性公益讲座：\n',
      subtitle: '性教育系统优化指南\n从生物代码到\n算法伦理',
      date: '2025 · 7 · 26',
      time: '7:30pm ~ 8:30pm',
      location: '中国杭州 湖畔创研中心',
      iconUrl: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c6b0623-fadd-4e66-a8b2-c6b37c9ea1dc'
    },
    {
      title: '草地飞盘体验课：\n',
      subtitle: '从零开始的身体协作指南',
      date: '2025 · 7 · 25',
      time: '8:00pm ~ 9:00pm',
      location: '中国杭州 湖畔创研中心',
      iconUrl: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c6b0623-fadd-4e66-a8b2-c6b37c9ea1dc'
    }
  ]

  return (
    <div className="w-full">
      <h2 className="text-[32px] text-[#305E81] font-medium mb-6">海报系统</h2>
      
      <div className="flex flex-wrap gap-[14px]">
        {posters.map((poster, index) => (
          <PosterCard key={index} {...poster} />
        ))}
      </div>

      <p className="text-[24px] text-[#305E81] font-medium mt-6 w-[781px]">
        我们为 AdventureX 设计了面向所有参会者的海报系统。通过高饱和度的色彩布局强化信息层级，并结合图像建模与版式设计，实现内容直观传递。在功能优先的基础上，兼顾视觉美感。海报采用高对比度排版、辅助色点提示与图标化设计，使关键信息更易识别与理解，从而大幅提升信息传达效率与观众决策速度。
      </p>
    </div>
  )
}