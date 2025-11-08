import { ChevronRightIcon, LayoutGridIcon } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function Variations() {
  return (
    <section className=" mt-4 px-4">
      <div className="border-t border-gray-100/20"></div>
      <div className="flex items-center mt-4 justify-between">
        <div className="flex items-center gap-2">
          <button type="button">
            <LayoutGridIcon className="text-[#d0d0d0] size-4" />
          </button>
          <div className="flex items-center gap-1">
            {[0, 1, 2].map(() => (
              <Skeleton className="size-8" />
            ))}
          </div>
          <div className="text-[#d0d0d0] text-sm">
            4 opções disponíveis
          </div>
        </div>

        <div>
            <ChevronRightIcon className="size-5 text-[#d0d0d0]" />
        </div>
      </div>
    </section>
  );
}
