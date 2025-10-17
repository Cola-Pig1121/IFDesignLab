export default function Hero() {
  return (
    <section className="w-full">
      <div className="w-[1440px] h-[539px] mx-auto relative overflow-hidden rounded-xl bg-[#01144C]">
        {/* 顶部 Logo 与右侧菜单（视觉参考） */}
        <div className="absolute top-0 left-0 right-0">
          <div className="flex items-center justify-between px-7 pt-5">
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25a0114e-f527-4d74-a636-3cd25fa1c997"
              alt="Logo"
              className="w-[53px] h-[47px]"
            />
            <nav className="hidden md:flex items-center gap-10 text-white font-patika text-[20px]">
              <span>Work</span>
              <span>About</span>
              <span>People</span>
              <span>Contact</span>
              <span>Newsroom</span>
            </nav>
          </div>
        </div>

        {/* 中部视觉（参考原图） */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[727px] h-[113px]">
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f6f078e-4fdf-4972-af4a-df6693c2c861"
              alt="Hero Title"
              className="absolute left-0 top-[34px] w-[564px] h-[57px]"
            />
            <div
              className="absolute top-0 right-0 w-[197px] h-[113px] bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/182805b2-0341-4569-8623-511da7e0ff39')",
                backgroundSize: "100% 100%",
              }}
            >
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05d751bc-e78d-40f5-8739-2b386fbfd343"
                alt="Chevron"
                className="w-[12px] h-[7px] mr-[19px] mb-[48px] ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}