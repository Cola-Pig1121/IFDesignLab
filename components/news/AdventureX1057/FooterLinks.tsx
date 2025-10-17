export default function FooterLinks() {
  return (
    <section className="w-full">
      <div className="w-[1438px] mx-auto mt-[80px] bg-white/50 rounded-md">
        <div className="max-w-[1280px] mx-auto">
          <div className="h-px bg-[#305E81]/20" />
          <div className="flex justify-end gap-8 py-6">
            {/* 三列 Topic + Page（示意） */}
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-[187px] text-center">
                <div className="font-inter text-[16px] font-medium text-black">Topic</div>
                <div className="mt-6 font-inter text-[16px] text-[#454545] font-medium">Page</div>
                <div className="mt-6 font-inter text-[16px] text-[#454545] font-medium">Page</div>
                <div className="mt-6 font-inter text-[16px] text-[#454545] font-medium">Page</div>
              </div>
            ))}
          </div>
          <div className="flex items-end justify-between py-6">
            <div className="flex items-center gap-6">
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/882c5e40-1a3b-44e7-938d-d35fc432c215"
                alt="Logo"
                className="w-[53px] h-[47px]"
              />
              <p className="font-inter text-[13px] text-black">
                本网站及其所有内容，包括所有文本、图形、视频和照片，均为 If Design Lab 或各种第三方的版权作品。
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* 四个社交图标（示意） */}
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c3930e5-c287-4145-95e7-a4acd327bc5b"
                alt="icon1"
                className="w-5 h-5"
              />
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a9861f7-ba57-481a-abb3-5735c85eb26a"
                alt="icon2"
                className="w-5 h-5"
              />
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edcac2f0-f8bc-4c46-bc41-a3496abf0aad"
                alt="icon3"
                className="w-5 h-5"
              />
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b172ad2-5c45-4ad4-b4dc-990698b3a9d1"
                alt="icon4"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}