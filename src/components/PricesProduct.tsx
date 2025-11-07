import { priceFormt } from "@/utils/priceFormat";
import { TicketCheckIcon, ZapIcon } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";

export default function PricesProduct({
  price,
  promotional,
  product,
  discountPercentage,
}: {
  price: number;
  promotional: number;
  product: Object;
  discountPercentage: number;
}) {
  return (
    <section>
      <div className="w-full aspect-square overflow-hidden relative">
        <ImageCarousel product={product} />
      </div>
      <div className="bg-[#FD732B] py-2 px-4">
        <div className=" w-full flex items-center justify-between">
          <div className="gap-1 flex items-center">
            <span className="bg-white text-sm px-1.5 py-0.5 rounded-sm text-app-primary font-bold capitalize">
              -{discountPercentage}%
            </span>

            <span className="flex items-center">
              <span className="text-md text-white font-semibold capitalize mt-1.5">
                R$
              </span>
            </span>
            <span className="text-md text-white font-semibold capitalize text-2xl">
              {priceFormt(promotional)}
            </span>
            <span>
              <TicketCheckIcon className="mt-2 size-5 text-white" />
            </span>
          </div>

          <div className="w-full ">
            <div className="flex gap-0.5 items-center justify-end w-full">
              <ZapIcon className="text-white size-5" />
              <p className="font-semibold text-white text-sm">Flash Sale</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <s className="text-[#FFC9A4] font-normal">{priceFormt(price)}</s>
          <p className="text-right text-white text-sm">
            Ends in <span className="font-medium">21:53:32</span>
          </p>
        </div>
      </div>
    </section>
  );
}
