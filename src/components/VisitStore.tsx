// src/components/VisitStore.tsx
import { ChevronRightIcon, StoreIcon, CheckCircle2Icon } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { priceFormt } from "@/utils/priceFormat";
import { formatNumber } from "@/utils/formatNumber";
import type { ProductProps } from "@/data/products";

interface VisitStoreProps {
  product: ProductProps;
}

export default function VisitStore({ product }: VisitStoreProps) {
  const { store } = product;
  const { name, avatar, totalSold, verified, relatedProducts } = store;

  return (
    <section className="px-4 mt-3 py-4 bg-[#121212]">
      {/* Cabeçalho da loja */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="size-16 rounded-full object-cover ring-2 ring-white/10"
            />
            {verified && (
              <CheckCircle2Icon className="absolute -bottom-1 -right-1 size-5 text-emerald-400 bg-[#121212] rounded-full" />
            )}
          </div>

          <div>
            <p className="uppercase text-[#D0D0D0] font-bold text-sm tracking-wide">
              {name}
            </p>
            <p className="text-[#D0D0D0] text-xs">{formatNumber(totalSold)}</p>
          </div>
        </div>

        <button className="bg-white/10 hover:bg-white/20 rounded-md flex items-center gap-1.5 py-2 px-6 font-medium text-sm text-[#D0D0D0] transition-colors">
          <StoreIcon className="size-4" />
          Visitar
        </button>
      </div>
      {relatedProducts && relatedProducts.length > 0 && (
        <>
          <div className="border-t border-white/10 my-4" />

          {/* Produtos relacionados */}

          <div className="flex items-center justify-between mb-3">
            <p className="text-[#D0D0D0] font-semibold text-sm">Mais desta loja</p>
            <ChevronRightIcon className="size-4 text-[#D0D0D0]" />
          </div>

          <ScrollArea className="w-full">
            <div className="flex gap-3 pb-2">
              {relatedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="flex-shrink-0 w-20 cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-28 object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[#D0D0D0] text-xs mt-1.5 truncate">{prod.title}</p>
                  <p className="text-[#19BFC3] text-xs font-medium">
                    {priceFormt(prod.price)}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </>
      )}
    </section>
  );
}