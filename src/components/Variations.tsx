import { useState } from "react";
import { ChevronRightIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductProps, ProductVariation } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface VariationsProps {
  product: ProductProps;
  handleBuy: (variant: ProductVariation) => void;
}

export default function Variations({ product, handleBuy }: VariationsProps) {
  const [selectedId, setSelectedId] = useState<string | null>(
    product?.variations?.[0]?.id ?? null
  );
  const [quantity, _] = useState(1);

  const variations = product?.variations ?? [];
  const selectedVariation = variations.find((v) => v.id === selectedId);

  const total =
    (selectedVariation?.pricePromotional ?? selectedVariation?.price ?? 0) *
    quantity;

  return (
    <Drawer>
      <section className="mt-4 px-4">
        <div className="border-t border-white/10"></div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <p className="text-sm text-primary/80 font-medium">
              {variations?.length}{" "}
              {variations?.length === 1 ? "opção disponível" : "opções disponíveis"}
            </p>
          </div>

          <DrawerTrigger asChild>
            <button className="flex items-center gap-1 text-sm text-primary/80 hover:text-primary transition">
              Selecionar versão
              <ChevronRightIcon className="size-4" />
            </button>
          </DrawerTrigger>
        </div>
      </section>

      <DrawerContent className="bg-background text-white border-t border-white/10">
        <div className="mx-auto w-full max-w-md p-5 space-y-4">
          <DrawerHeader className="pb-0">
            <DrawerTitle className="text-lg font-semibold text-primary">
              Selecione a versão
            </DrawerTitle>
          </DrawerHeader>

          {/* Lista de variações */}
          <div className="space-y-3">
            {variations.map((variation) => {
              const isSelected = selectedId === variation.id;
              return (
                <div
                  key={variation.id}
                  onClick={() => setSelectedId(variation.id)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border px-3 py-3 cursor-pointer transition-all",
                    isSelected
                      ? "border-rose-500 bg-rose-500/10"
                      : `border-primary/10 hover:border-primary/30`
                  )}
                >
                  <img
                    src={variation.image}
                    alt={variation.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />

                  <div className="flex flex-col flex-1">
                    <span className="font-medium text-primary text-sm">
                      {variation.title}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-rose-400 font-semibold">
                        R$ {variation?.pricePromotional?.toFixed(2)}
                      </span>
                      <span className="text-xs text-primary/40 line-through">
                        R$ {variation.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <CheckIcon className="text-rose-500 size-5 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Quantidade */}
          {/* <div className="flex items-center justify-between pt-4">
            <span className="text-white/80 font-medium">Quantidade</span>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-white border border-white/20 size-8"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </Button>
              <span className="text-lg font-semibold w-6 text-center">{quantity}</span>
              <Button
                variant="ghost"
                className="text-white border border-white/20 size-8"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </Button>
            </div>
          </div> */}

          {/* Total */}
          <div className="flex items-center justify-between pt-4 border-t border-primary/10">
            <span className="text-primary/60 text-sm font-medium">Total:</span>
            <span className="text-rose-400 text-xl font-semibold">
              R$ {total.toFixed(2)}
            </span>
          </div>

          {/* Botões */}
          <DrawerFooter className="pt-4 flex flex-col gap-3">
            <Button onClick={() => handleBuy(selectedVariation || variations[0])} className="w-full bg-rose-500 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-md">
              Comprar agora
            </Button>
            <DrawerClose asChild>
              <Button
                variant="ghost"
                className="w-full text-white/60 hover:text-white/80"
              >
                Cancelar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
