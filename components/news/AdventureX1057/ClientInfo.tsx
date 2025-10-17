export default function ClientInfo() {
  return (
    <section className="w-full">
      <div className="w-[1330px] mx-auto mt-[50px]">
        <div className="w-full h-px bg-[#305E81]/30" />
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#305E81]">
          <div className="flex gap-2 items-center">
            <span className="font-patika text-[16px]">客户：</span>
            <span className="font-patika text-[16px] font-medium">AdventureX</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-patika text-[16px]">团队：</span>
            <span className="font-patika text-[16px] font-medium">AdventureX</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-patika text-[16px]">设计师：</span>
            <span className="font-patika text-[16px] font-medium">CarleightWu&nbsp;Mobai</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-patika text-[16px]">创意领域：</span>
            <span className="font-patika text-[16px] font-medium">活动周边</span>
          </div>
        </div>
      </div>
    </section>
  )
}