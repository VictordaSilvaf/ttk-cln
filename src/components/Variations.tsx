// src/components/Variations.tsx
import { useState } from "react";
import { ChevronRightIcon, LayoutGridIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils"; // Shadcn helper
import type { ProductProps } from "@/data/products";

interface VariationsProps {
  product: ProductProps;
}

export default function Variations({ product }: VariationsProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const variations = product?.variations;

  return (
    <section className="mt-4 px-4">
      <div className="border-t border-white/10"></div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3">
          <LayoutGridIcon className="size-4 text-[#D0D0D0]" />

          <div className="flex flex-wrap gap-2">
            {variations?.slice(0, 3).map((variation) => {
              const isSelected = selectedId === variation.id;
              const isOutOfStock = !variation.inStock;

              return (
                <button
                  key={variation.id}
                  onClick={() => variation.inStock && setSelectedId(variation.id)}
                  disabled={isOutOfStock}
                  className={cn(
                    "relative flex items-center justify-center size-9 rounded-md border transition-all",
                    isSelected
                      ? "border-white bg-white/10"
                      : "border-white/30 bg-white/5",
                    isOutOfStock && "opacity-50 cursor-not-allowed"
                  )}
                  aria-label={`Selecionar ${variation.label}`}
                >
                  {variation.type === "color" ? (
                    <div
                      className="size-6 rounded-full"
                      style={{ backgroundColor: getColorValue(variation.value) }}
                    />
                  ) : (
                    <span className="text-xs font-medium text-[#D0D0D0]">
                      {variation.value}
                    </span>
                  )}

                  {isSelected && (
                    <CheckIcon className="absolute -top-1 -right-1 size-3 text-white bg-emerald-500 rounded-full p-0.5" />
                  )}

                  {isOutOfStock && (
                    <span className="absolute inset-0 text-[8px] flex items-center justify-center font-bold text-red-400">
                      ESGOTADO
                    </span>
                  )}
                </button>
              );
            })}

            {variations && variations.length > 3 && (
              <div className="flex items-center justify-center size-9 rounded-md bg-white/5 border border-white/30">
                <span className="text-xs text-[#D0D0D0]">+{variations?.length - 3}</span>
              </div>
            )}
          </div>

          <p className="text-[#D0D0D0] text-sm">
            {variations?.length} {variations?.length === 1 ? "opção" : "opções"} disponível
            {variations?.length !== 1 && "s"}
          </p>
        </div>

        <ChevronRightIcon className="size-5 text-[#D0D0D0]" />
      </div>
    </section>
  );
}

// Helper para cores
function getColorValue(value: string): string {
  const map: Record<string, string> = {
    black: "#000000",
    pink: "#F8C8DC",
    green: "#90EE90",
    white: "#FFFFFF",
    blue: "#4169E1",
  };
  return map[value] || value;
}