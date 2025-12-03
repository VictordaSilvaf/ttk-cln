// src/components/VisitStore.tsx
"use client";

import {
  ChevronRightIcon,
  CheckCircle2Icon,
  UserPlus,
  Check,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { priceFormt } from "@/utils/priceFormat";
import type { ProductProps } from "@/data/products";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface VisitStoreProps {
  product: ProductProps;
}

export default function VisitStore({ product }: VisitStoreProps) {
  const { store } = product;
  const { name, avatar, totalSold, verified, relatedProducts } = store;

  // Chave única por loja (usando o nome ou id se tiver)
  const followKey = `followed_store_${
    store.id || name.replace(/\s+/g, "_").toLowerCase()
  }`;

  // Estado local + leitura do localStorage
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(followKey);
    if (saved === "true") {
      setIsFollowing(true);
    }
  }, [followKey]);

  const handleFollow = () => {
    const newState = !isFollowing;
    setIsFollowing(newState);
    localStorage.setItem(followKey, String(newState));

    // Opcional: disparar evento ou toast
    if (newState) {
      console.log(`Agora você segue: ${name}`);
      // ex: toast.success(`Seguindo ${name}!`);
    }
  };

  return (
    <section className="px-4 mt-3 py-4 bg-background rounded-lg border">
      {/* Cabeçalho da loja */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={avatar || "/makita-logo.png"}
              alt={name}
              className="size-16 rounded-full object-cover ring-2 ring-primary/10"
            />
            {verified && (
              <CheckCircle2Icon className="absolute -bottom-1 -right-1 size-5 text-emerald-400 bg-background rounded-full p-0.5" />
            )}
          </div>

          <div className="flex-1">
            <h3 className="font-medium text-sm">{name}</h3>
            <p className="text-xs text-muted-foreground">
              {totalSold?.toLocaleString("pt-BR") || "1.247"} produtos
            </p>
            <p className="text-xs text-muted-foreground">Vendedor desde 2018</p>
          </div>
        </div>

        {/* Botão Seguir / Seguindo */}
        <Button
          variant={isFollowing ? "secondary" : "outline"}
          size="sm"
          onClick={handleFollow}
          className="h-9 px-4 text-xs font-medium transition-all"
        >
          {isFollowing ? (
            <>
              <Check className="w-3.5 h-3.5 mr-1" />
              Seguindo
            </>
          ) : (
            <>
              <UserPlus className="w-3.5 h-3.5 mr-1" />
              Seguir
            </>
          )}
        </Button>
      </div>

      {/* Produtos relacionados */}
      {relatedProducts && relatedProducts.length > 0 && (
        <>
          <div className="border-t border-border/50 my-4" />

          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-sm text-foreground">
              Mais desta loja
            </p>
            <ChevronRightIcon className="size-4 text-muted-foreground" />
          </div>

          <ScrollArea className="w-full">
            <div className="flex gap-3 pb-2">
              {relatedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="flex-shrink-0 w-20 cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-lg bg-muted">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-28 object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs mt-1.5 truncate text-muted-foreground">
                    {prod.title}
                  </p>
                  <p className="text-xs font-medium text-primary">
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
