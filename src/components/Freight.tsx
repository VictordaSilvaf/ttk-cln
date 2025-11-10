// src/components/Freight.tsx
import { priceFormt } from "@/utils/priceFormat";
import { formatDateBR } from "@/utils/formatDateBR";
import { TruckIcon, CheckCircle2Icon } from "lucide-react";
import type { ProductProps } from "@/data/products";

interface FreightProps {
  product: ProductProps;
}

export default function Freight({ product }: FreightProps) {
  const { shipping } = product;
  const { freeShipping, value, estimatedDelivery } = shipping;

  return (
    <section className="mt-5 px-4 text-white">
      <div className="border-t border-white/10"></div>

      <div className="flex items-center mt-4 gap-2">
        <TruckIcon className="size-5 text-[#D0D0D0] flex-shrink-0" />

        {freeShipping ? (
          <div className="flex items-center gap-1.5 bg-emerald-900/50 rounded-md py-1 px-2 text-sm font-semibold text-emerald-300">
            <CheckCircle2Icon className="size-4" />
            <span>Frete Grátis</span>
          </div>
        ) : (
          <div className="bg-amber-900/50 rounded-md py-1 px-2 text-sm font-semibold text-amber-300">
            Frete: {priceFormt(value)}
          </div>
        )}

        <p className="text-[#D0D0D0] text-sm">
          Chegará até <span className="font-medium">{formatDateBR(estimatedDelivery)}</span>
        </p>
      </div>

      {!freeShipping && (
        <p className="text-[#D0D0D0]/80 text-xs mt-1.5 ml-9">
          Taxa de envio incluída
        </p>
      )}
    </section>
  );
}