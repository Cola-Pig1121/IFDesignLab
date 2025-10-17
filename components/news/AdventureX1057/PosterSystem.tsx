export default function PosterSystem() {
  return (
    <section className="w-full">
      <div className="w-[1440px] mx-auto mt-[50px]">
        <div className="mx-[40px]">
          <div className="w-[1330px] h-px bg-[#305E81]/30 mx-auto" />
          <div className="mt-[20px] ml-[40px] flex">
            <div className="w-[247px]">
              <h3 className="font-inter text-[32px] text-[#305E81] font-medium">
                海报系统
              </h3>
            </div>
            {/* 右侧主图区域 */}
            <div className="ml-[220px] w-[781px]">
              <div className="rounded-lg bg-[#01144C] h-[374px] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21b8d74f-eae4-47a5-b21b-c7d15f2261f9"
                    alt="Poster Icon"
                    className="w-[33px] h-[33px]"
                  />
                </div>
              </div>
              {/* 缩略图栅格（示意，后续微调比例与素材） */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-[#00239C] h-[204px] rounded-md relative overflow-hidden">
                  <div className="absolute bottom-2 left-2 right-2 text-white text-xs">
                    <div className="font-orbix">ADVENTUREX 25</div>
                    <div className="font-inter mt-1">Open Flow：人文松弛与酒精分子共振计划</div>
                  </div>
                </div>
                <div className="bg-[#00239C] h-[204px] rounded-md relative overflow-hidden" />
                <div className="bg-[#00239C] h-[204px] rounded-md relative overflow-hidden" />
              </div>
            </div>
          </div>
        </div>

        {/* 说明段落（位于该模块之后，提炼原文） */}
        <p className="w-[781px] mx-auto mt-[21px] font-inter text-[24px] text-[#305E81] font-medium">
          我们为&nbsp;AdventureX&nbsp;设计了面向所有参会者的海报系统。通过高饱和度的色彩布局强化信息层级，并结合图像建模与版式设计，实现内容直观传递。在功能优先的基础上，兼顾视觉美感。海报采用高对比度排版、辅助色点提示与图标化设计，使关键信息更易识别与理解，从而大幅提升信息传达效率与观众决策速度。
        </p>
      </div>
    </section>
  )
}