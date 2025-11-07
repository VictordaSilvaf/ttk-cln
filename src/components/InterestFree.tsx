import { AppWindowIcon, ChevronRightIcon, TicketIcon } from "lucide-react";

export default function InterestFree() {
  return (
    <>
      <section className="text-white px-4 mt-1.5">
        <div className="flex items-center gap-1.5">
          <AppWindowIcon className="text-white size-4" />
          <p className="font-normal text-sm text-[#D0D0D0]">2x R$ 44,50</p>
          <p className="text-[#DF537E] flex items-center gap-1">
            interest-free
            <ChevronRightIcon className="size-4 mt-1 text-[#D0D0D0]" />
          </p>
        </div>
      </section>
      <section className="mt-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="bg-[#621A29] rounded-md flex items-center gap-1 py-1 px-1.5 font-medium text-sm text-[#EBB4BA]">
            <TicketIcon className="size-5" />
            10% off, max R$ 25
          </button>
          <button className="bg-[#621A29] rounded-md flex items-center py-1 px-1.5 font-medium text-sm text-[#EBB4BA]">
            Save 6% with bonus
          </button>
        </div>

        <div>
          <ChevronRightIcon className="text-[#D0D0D0] size-4" />
        </div>
      </section>
    </>
  );
}
