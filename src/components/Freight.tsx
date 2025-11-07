import { priceFormt } from "@/utils/priceFormat";
import { TruckIcon } from "lucide-react";

export default function Freight({ value }: { value: number }) {
  return (
    <section className=" mt-5 px-4 text-white">
      <div className="border-t border-gray-100/20 px-4"></div>
      <div className="flex items-center mt-4 gap-1">
        <TruckIcon className="text-[#D0D0D0]" />
        <div className="bg-[#054D47] ml-1.5 rounded-md f py-1 text-sm px-1.5 font-semibold text-[#81C4C3]">
          <p className="-mt-0.5">{ value === 0 ?  'Free shipping' : `${priceFormt(value)}` }</p>
        </div>
        <p className="text-[#D0D0D0]">Get by Nov 10-17</p>
      </div>
      <p className="text-[#D0D0D0] mt-2 ml-9">
        Taxa de envio: <span>R$ 10,80</span>
      </p>
    </section>
  );
}
