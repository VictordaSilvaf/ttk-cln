"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { ProductProps } from "@/data/products";
import { useEffect, useRef } from "react";

export function BackRedirect({
  product,
  open,
  setOpen,
}: {
  product: ProductProps;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const timerRef = useRef<any | null>(null);
  const hasOpenedRef = useRef(false); // evita abrir mais de uma vez

  // Função para abrir o modal
  const triggerModal = () => {
    if (!hasOpenedRef.current) {
      setOpen(true);
      hasOpenedRef.current = true;
    }
  };

  // 1. Abre após 40 segundos na página
  useEffect(() => {
    if (hasOpenedRef.current) return;

    timerRef.current = setTimeout(() => {
      triggerModal();
    }, 40_000); // 40 segundos

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // 2. Exit-intent: abre quando o mouse sai da janela (topo da tela)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasOpenedRef.current) {
        triggerModal();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  // Dados do produto
  const oldPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const displayPrice = product.backRedirectPrice || product.pricePromotional;
  const newPrice = displayPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const savings = (product.price - displayPrice).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const discountPercent = Math.round(
    ((product.price - displayPrice) / product.price) * 100
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full max-w-md p-0 border-0 max-h-[90%] overflow-y-scroll ultra-clean-scroll">
        <div className="bg-white text-center pb-8 ">
          {/* Header laranja */}
          <div className="bg-linear-to-r from-orange-600 to-orange-500 pt-10 pb-6 text-white">
            <p className="text-3xl font-black">ESPERE!</p>
            <p className="text-lg font-medium mt-1">
              Não vá embora sem seu desconto especial!
            </p>
          </div>

          {/* Imagem do produto */}
          <div className="relative -mt-3 px-6">
            <div className="bg-white rounded-2xl shadow-2xl p-3 inline-block">
              <img
                src={
                  product.images[0] ||
                  product.descriptionImage ||
                  "/placeholder-makita.jpg"
                }
                alt={product.title}
                className="w-full max-w-xs rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Título */}
          <h2 className="mt-8 px-6 text-xl md:text-2xl font-bold text-gray-800 leading-tight">
            {product.title}
          </h2>

          {/* Preços */}
          <div className="mt-8 space-y-3">
            <p className="text-gray-500 line-through text-lg">De: {oldPrice}</p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="text-5xl md:text-6xl font-black text-red-600">
                {newPrice}
              </span>
              <div className="bg-red-600 text-white font-bold text-lg px-5 py-2 rounded-full shadow-lg animate-bounce">
                {discountPercent}% OFF
              </div>
            </div>

            <p className="text-xl md:text-2xl font-bold text-green-600">
              Você economiza {savings}!
            </p>
          </div>

          {/* Botão */}
          <div className="mt-10 px-6">
            <a
              href={product.backRedirectUrl}
              className="block w-full bg-linear-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 active:scale-95 text-white font-black text-xl py-6 rounded-2xl shadow-2xl transition-all transform duration-200 animate-pulse"
            >
              SIM! QUERO MEU DESCONTO AGORA
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-500 px-6">
            Oferta válida por tempo limitado • Estoque limitado • Pagamento
            seguro
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
