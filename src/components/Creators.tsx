// src/components/Creators.tsx
import { ChevronRightIcon, PlayCircleIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { ProductProps } from "@/data/products";

interface CreatorsProps {
  product: ProductProps;
}

export default function Creators({ product }: CreatorsProps) {
  const creators = product.creators ?? { total: 0, videos: [] };
  const { total, videos } = creators;

  // Se não tiver vídeos, pula a seção
  if (videos.length === 0) {
    return null;
  }

  return (
    <section className="px-4 mt-3 py-4 bg-[#121212]">
      <div className="flex items-center justify-between mb-3">
        <p className="font-bold text-lg text-[#D0D0D0]">
          Vídeos de criadores ({total > 99 ? "99+" : total}+)
        </p>
        <ChevronRightIcon className="size-5 text-[#D0D0D0]" />
      </div>

      <ScrollArea className="w-full">
        <div className="flex gap-3 pb-2">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative flex-shrink-0 w-48 cursor-pointer group overflow-hidden rounded-lg"
            >
              <img
                src={video.thumbnail}
                alt={`Vídeo de ${video.author}`}
                className="w-full h-28 object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <PlayCircleIcon className="size-10 text-white drop-shadow-lg" />
              </div>

              <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                {video.duration}
              </span>

              <div className="mt-2 text-left">
                <p className="text-[#D0D0D0] text-sm font-medium truncate">{video.author}</p>
                <p className="text-[#8B8B8B] text-xs">{video.views} visualizações</p>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}