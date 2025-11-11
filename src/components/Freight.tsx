// src/components/Freight.tsx
import { priceFormt } from "@/utils/priceFormat";
import { formatDateBR } from "@/utils/formatDateBR";
import { TruckIcon, CheckCircle2Icon } from "lucide-react";
import type { ProductProps } from "@/data/products";
import { useTheme } from "next-themes";

interface FreightProps {
  product: ProductProps;
}

export default function Freight({ product }: FreightProps) {
  const { shipping } = product;
  const { freeShipping, value } = shipping;
  const { theme } = useTheme()


  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <section className="mt-5 px-4 text-white">
      <div className="border-t border-white/10"></div>

      <div className="flex items-center mt-4 gap-2">
        <TruckIcon className="size-5 text-primary flex-shrink-0" />

        {freeShipping ? (
          <div className={`flex items-center gap-1.5 rounded-md py-1 px-2 text-sm font-semibold ${theme === '' ? 'bg-emerald-900/50 text-emerald-300' : 'bg-emerald-400/30 text-emerald-500'}`}>
            <CheckCircle2Icon className="size-4" />
            <span>Frete Grátis</span>
          </div>
        ) : (
          <div className="bg-amber-900/50 rounded-md py-1 px-2 text-sm font-semibold text-amber-300">
            Frete: {priceFormt(value)}
          </div>
        )}

        <p className="text-primary text-sm">
          Chegará até <span className="font-medium">{formatDateBR(estimatedDelivery.toISOString())}</span>
        </p>
      </div>

      {!freeShipping && (
        <p className="text-primary/80 text-xs mt-1.5 ml-9">
          Taxa de envio incluída
        </p>
      )}
    </section>
  );
}