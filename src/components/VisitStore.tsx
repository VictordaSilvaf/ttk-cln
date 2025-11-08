import { ChevronRight } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function VisitStore() {
  return (
    <section className="px-4 mt-3 py-4 bg-[#121212]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="rounded-full size-16" />
          <div className="">
            <p className="uppercase text-[#d0d0d0] font-semibold">
              Nome da loja
            </p>
            <p className="text-[#d0d0d0] text-sm">13.6k vendido(a)</p>
          </div>
        </div>

        <button className="bg-gray-200/10 rounded-md flex items-center gap-1 py-2 px-7 font-medium text-sm text-[#d0d0d0]">
          Visitar
        </button>
      </div>
      <div className="border-t border-gray-100/20 my-4"></div>

      <div className="flex items-center justify-between">
        <p className="text-[#d0d0d0] font-semibold text-sm">Mais desta loja</p>
        <ChevronRight className="text-[#d0d0d0] size-4" />
      </div>

      <div className="flex items-center mt-3 gap-2">
        {[1, 2, 3, 4].map(() => (
          <Skeleton className="w-20 h-28" />
        ))}
      </div>
    </section>
  );
}
