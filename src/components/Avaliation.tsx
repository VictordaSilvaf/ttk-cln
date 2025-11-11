// src/components/Avaliation.tsx
import { StarIcon, StarHalfIcon, CameraIcon } from "lucide-react";
import { formatNumber } from "@/utils/formatNumber";
import { formatDateBR } from "@/utils/formatDateBR2";
import type { ProductProps } from "@/data/products";

interface AvaliationProps {
  product: ProductProps;
}

export default function Avaliation({ product }: AvaliationProps) {
  const { reviews } = product;
  const { total, average, list, withMedia } = reviews;
  console.log(total, average, list, withMedia);


  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    return (
      <>
        {Array.from({ length: full }).map((_, i) => (
          <StarIcon key={`full-${i}`} className="size-4 text-yellow-400 fill-yellow-400" />
        ))}
        {hasHalf && <StarHalfIcon className="size-4 text-yellow-400 fill-yellow-400" />}
        {Array.from({ length: empty }).map((_, i) => (
          <StarIcon key={`empty-${i}`} className="size-4 text-yellow-400" />
        ))}
      </>
    );
  };

  return (
    <section className="px-4 mt-3 py-4 bg-background">
      {/* Título + Média */}
      <p className="font-bold text-lg text-primary/90">
        Avaliações dos clientes ({formatNumber(total)})
      </p>

      <div className="mt-3 flex items-center gap-2">
        <p className="text-white font-semibold">
          {average.toFixed(1)} <span className="text-primary/90 text-sm">/5</span>
        </p>
        <div className="flex items-center gap-0.5">
          {renderStars(average)}
        </div>
      </div>

      {/* Lista de avaliações */}
      <div className="mt-5 space-y-7">
        {list.map((review) => (
          <div key={review.id}>
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" >
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="size-7 rounded-full object-cover"
                />
              </div>
              <p className="text-primary/90 text-sm font-medium">{review.author}</p>
              {review.avatar && (
                <CameraIcon className="size-3.5 text-[#19BFC3] ml-auto" />
              )}
            </div>

            <div className="flex items-center gap-0.5 mt-2">
              {renderStars(review.rating)}
            </div>

            <p className="text-primary/90 text-sm mt-2 leading-relaxed">
              {review.comment}
            </p>

            {review.hasMedia && (
              <img
                src={review.media?.url}
                alt={review.comment}
                className="object-cover aspect-square max-h-[200px] rounded-xs"
              />
            )}

            <p className="text-[#8B8B8B] text-xs mt-1">{formatDateBR(review.date)}</p>
          </div>
        ))}
      </div>

      {/* Avaliações da loja */}
      <div className="border-t border-white/10 mt-6 pt-4">
        <p className="font-bold text-md text-primary/90">
          Avaliações da loja ({formatNumber(total)})
        </p>

        <div className="mt-3">
          <button className="bg-white/5 hover:bg-white/10 rounded-md flex items-center gap-1.5 py-1.5 px-2 font-medium text-sm text-[#D0D0D0] transition-colors">
            <CameraIcon className="size-4" />
            Inclui imagens ou vídeos ({withMedia})
          </button>
        </div>
      </div>
    </section>
  );
}