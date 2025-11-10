// src/components/ProtectionClient.tsx
import { CheckIcon, ShieldCheckIcon, StoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductProps } from "@/data/products";

interface ProtectionClientProps {
  product: ProductProps;
}

export default function ProtectionClient({ product }: ProtectionClientProps) {
  const { protection } = product;
  const { verifiedStore, guarantees } = protection;

  return (
    <section className="mt-4 bg-gradient-to-r from-[#3A220A] to-[#4A2B10] py-3">
      {/* Cabeçalho com selo */}
      <div className="flex items-center gap-2 px-4">
        <ShieldCheckIcon className="size-5 text-[#DAB896]" />
        <p className="text-[#DAB896] font-bold text-sm">Proteção do Cliente</p>

        {verifiedStore && (
          <div className="ml-auto flex items-center gap-1 bg-emerald-900/50 text-emerald-300 text-xs font-medium px-2 py-0.5 rounded-full">
            <StoreIcon className="size-3.5" />
            <span>Loja Verificada</span>
          </div>
        )}
      </div>

      {/* Lista de garantias */}
      <div
        className={cn(
          "grid px-4 mt-3 gap-2.5",
          guarantees.length <= 2 ? "grid-cols-1" : "grid-cols-2"
        )}
      >
        {guarantees.map((guarantee, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <CheckIcon className="size-3.5 text-[#DAB896] flex-shrink-0" />
            <p className="text-sm text-[#D8CABD] leading-tight">{guarantee}</p>
          </div>
        ))}
      </div>
    </section>
  );
}