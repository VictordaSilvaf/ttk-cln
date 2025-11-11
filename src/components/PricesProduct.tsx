// src/components/PricesProduct.tsx
import { priceFormt } from "@/utils/priceFormat";
import { TicketCheckIcon, ZapIcon } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import { useCountdown } from "@/utils/useCountdown";
import type { ProductProps } from "@/data/products";

interface PricesProductProps {
  product: ProductProps;
}

export default function PricesProduct({ product }: PricesProductProps) {
  const { flashSaleEndTime, variations } = product;
  const countdown = useCountdown(flashSaleEndTime || "");

  const discountPercentage = variations?.[0]?.pricePromotional ? Math.round(
    ((variations?.[0]?.price - variations?.[0]?.pricePromotional) / variations?.[0]?.price) * 100
  ) : 0;

  return (
    <section>
      <div className="w-full aspect-square overflow-hidden relative">
        <ImageCarousel product={product} />
      </div>

      <div className="bg-[#FD732B] py-2 px-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            {discountPercentage > 0 && (
              <span className="bg-white text-sm px-1.5 py-0.5 rounded-sm text-app-primary font-bold">
                -{discountPercentage}%
              </span>
            )}

            <span className="text-white font-semibold mt-1.5">R$</span>
            <span className="text-2xl text-white font-semibold">
              {priceFormt(variations?.[0]?.pricePromotional || 0)}
            </span>
            <TicketCheckIcon className="size-5 text-white mt-1" />
          </div>

          <div className="flex items-center gap-1">
            <ZapIcon className="text-white size-5" />
            <p className="font-semibold text-white text-sm">Oferta Relâmpago</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-1">
          <s className="text-[#FFC9A4] text-sm">{priceFormt(variations?.[0]?.price)}</s>
          <p className="text-right text-white text-sm">
            Termina em:{" "}
            <span className="font-bold text-yellow-300">{countdown}</span>
          </p>
        </div>
      </div>
    </section>
  );
}