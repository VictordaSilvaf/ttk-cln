import { Skeleton } from "./ui/skeleton";

export default function Creators() {
  return (
    <section className="px-4 mt-3 py-4 bg-[#121212]">
      <p className="font-bold text-lg text-[#d0d0d0]">
        Vídeos de criadores (30+)
      </p>

      <div className="mt-3 flex items-center gap-2">
        {[1, 2, 3, 4].map(() => (
          <Skeleton className="w-20 h-28" />
        ))}
      </div>
    </section>
  );
}
