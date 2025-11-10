// src/components/InfoProduct.tsx
import {
  BookmarkIcon,
  StarIcon,
  StarIcon as StarOutlineIcon, // estrela vazia
} from "lucide-react";
import type { ProductProps } from "@/data/products";

interface InfoProductProps {
  product: ProductProps;
}

export default function InfoProduct({ product }: InfoProductProps) {
  const { title, stars, solds } = product;
  const { average, total } = stars;

  /** Renderiza as 5 estrelas (cheia, meia ou vazia) */
  const renderStars = () => {
    const fullStars = Math.floor(average);                // 4  ou 5
    const fraction = average - fullStars;                 // 0.0 … 0.999…
    const hasHalfStar = fraction >= 0.5 && fraction < 1; // só meia se < 1
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div
        className="flex gap-0.5"
        role="img"
        aria-label={`${average.toFixed(1)} de 5 estrelas`}
      >
        {/* Estrelas cheias */}
        {Array(fullStars)
          .fill(null)
          .map((_, i) => (
            <StarIcon
              key={`full-${i}`}
              className="size-5 text-yellow-400 fill-yellow-400"
            />
          ))}

        {/* Meia‑estrela (apenas se houver fração 0.5 … 0.999) */}
        {hasHalfStar && (
          <div className="relative">
            {/* fundo vazio */}
            <StarOutlineIcon className="size-5 text-yellow-400" />
            {/* metade preenchida */}
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <StarIcon className="size-5 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        )}

        {/* Estrelas vazias */}
        {Array(emptyStars)
          .fill(null)
          .map((_, i) => (
            <StarOutlineIcon
              key={`empty-${i}`}
              className="size-5 text-yellow-400"
            />
          ))}
      </div>
    );
  };

  const isBestSeller = solds > 100;

  return (
    <div className="">
      {/* Título + Favorito */}
      <section className="mt-3 px-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-bold text-xl text-[#D0D0D0] leading-tight flex-1">
            {title}
          </h2>
          <button
            type="button"
            aria-label="Salvar produto"
            className="text-[#D0D0D0] hover:text-white transition-colors"
          >
            <BookmarkIcon className="size-6" />
          </button>
        </div>

        {/* Badge "Mais Vendido" */}
        {isBestSeller && (
          <span className="inline-block mt-1.5 bg-orange-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            Mais Vendido
          </span>
        )}
      </section>

      {/* Avaliações + Vendidos */}
      <section className="px-4 mt-2 ">
        <div className="flex items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-1 text-xs">
            {renderStars()}
            <span className="text-[#D0D0D0] font-medium">
              {average.toFixed(1)}
            </span>
            <span className="text-[#54719F]">({total} avaliações)</span>
          </div>

          <span className="text-[#D0D0D0]/50">•</span>

          <div className="text-[#D0D0D0] font-medium text-xs">
            {solds} {solds === 1 ? "vendido" : "vendidos"}
          </div>
        </div>
      </section>
    </div>
  );
}