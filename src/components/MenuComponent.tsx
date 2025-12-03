import { CheckIcon, Store } from "lucide-react";
import BottomNavButton from "./BottomNavButton";
import type { ProductProps, ProductVariation } from "@/data/products";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MenuProps {
  product: ProductProps;
  handleBuy: (variant: ProductVariation) => void;
  handleOpenBackRedirect: () => void;
}

export default function MenuComponent({
  product,
  handleBuy,
  handleOpenBackRedirect,
}: MenuProps) {
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
      <div className="fixed bottom-0 left-0 right-0">
        <div className="p-4 py-1 bg-background border-t border-primary/5 z-10 flex flex-row pb-2 gap-6 pt-2">
          <BottomNavButton
            variant="icon"
            icon={Store}
            label="Shop"
            onClick={handleOpenBackRedirect}
            className="text-primary!"
          />

          {/* Variante 2: Ícone sem padding extra */}
          {/* <BottomNavButton
                    variant="icon"
                    icon={ShoppingCart}
                    label="Cart"
                /> */}

          {/* Variante 3: Botão de preço (flex-1) */}
          <DrawerTrigger asChild>
            <BottomNavButton
              // onClick={() => handleBuy(product.variations?.[0] || {} as ProductVariation)}
              variant="price"
              price={product.variations?.[0]?.pricePromotional?.toLocaleString(
                "pt-BR",
                { style: "currency", currency: "BRL" }
              )}
              subtitle="Compre agora | Frete Grátis"
            />
          </DrawerTrigger>
        </div>
      </div>

      <DrawerContent className="bg-background text-primary border-t border-primary/10">
        <div className="mx-auto w-full max-w-md p-5 py-2 space-y-1">
          <DrawerHeader className="pb-0">
            <DrawerTitle className="text-lg font-semibold text-primary">
              Selecione a versão
            </DrawerTitle>
          </DrawerHeader>

          {/* Lista de variações */}
          <div className="space-y-4 pb-2">
            {product.variations.map((variation, index) => {
              const isSelected = selectedId === variation.id;
              return (
                <div
                  key={variation.id}
                  onClick={() => setSelectedId(variation.id)}
                  className={cn(
                    "flex items-center gap-3 relative rounded-xl border px-3 py-3 cursor-pointer transition-all",
                    isSelected
                      ? "border-rose-500 bg-rose-500/10"
                      : "border-primary/10 hover:border-primary/30"
                  )}
                >
                  {index === 1 && (
                    <span className="-top-2.5 left-4 absolute px-3 py-0.5 rounded-full bg-rose-500 text-white text-xs font-semibold">
                      Mais Popular
                    </span>
                  )}
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
                      <span className="text-rose-600 font-semibold">
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

          {/* Total */}
          <div className="flex items-center justify-between pt-2 border-t border-primary/5">
            <span className="text-white/60 text-sm font-medium">Total:</span>
            <span className="text-rose-600 text-xl font-semibold">
              R$ {total.toFixed(2)}
            </span>
          </div>

          {/* Botões */}
          <DrawerFooter className="pt-4 flex flex-col gap-1">
            <Button
              onClick={() => handleBuy(selectedVariation || variations[0])}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-md"
            >
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
