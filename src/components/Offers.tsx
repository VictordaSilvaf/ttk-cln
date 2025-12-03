// src/components/Offers.tsx
import { useState } from "react";
import { ChevronRightIcon, CopyIcon, CheckIcon } from "lucide-react";
import { useCountdown } from "@/utils/useCountdown";
import { priceFormt } from "@/utils/priceFormat";
import type { ProductProps } from "@/data/products";

interface OffersProps {
  product: ProductProps;
}

// Componente interno para cada cupom
function CouponItem({
  coupon,
}: {
  coupon: ProductProps["offers"]["coupons"][0];
}) {
  const [copied, setCopied] = useState(false);
  const countdown = useCountdown();
  const isExpired = countdown === "Encerrado";

  const handleCopy = () => {
    const code = `CUPOM${coupon.id}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`p-4 rounded-lg border transition-all ${
        isExpired
          ? "bg-[#1A1A1A] border-white/10 opacity-60"
          : "bg-[#121C1D] border-white/20"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-[#D0D0D0] font-semibold text-sm">{coupon.title}</p>
          <p className="text-[#51585A] text-xs leading-tight mt-1">
            {coupon.description}
          </p>

          {coupon.minPurchase && (
            <p className="text-[#19BFC3] text-xs mt-1">
              Mínimo: {priceFormt(coupon.minPurchase)}
            </p>
          )}

          <p
            className={`text-xs mt-1.5 ${
              isExpired ? "text-red-400" : "text-emerald-400"
            }`}
          >
            {isExpired ? "Expirado" : `Válido por: ${countdown}`}
          </p>
        </div>

        <button
          onClick={handleCopy}
          disabled={isExpired || copied}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
            isExpired
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : copied
              ? "bg-emerald-600 text-white"
              : "bg-[#19BFC3] text-white hover:bg-[#17A8AB]"
          )}
        >
          {copied ? (
            <>
              <CheckIcon className="size-3.5" />
              Copiado!
            </>
          ) : (
            <>
              <CopyIcon className="size-3.5" />
              Resgatar
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Offers({ product }: OffersProps) {
  const { coupons } = product.offers;

  return (
    <section className="px-4 mt-3 bg-[#121212]">
      <div className="flex items-center justify-between py-3">
        <p className="font-bold text-lg text-[#D0D0D0]">Ofertas</p>
        <ChevronRightIcon className="size-5 text-[#D0D0D0]" />
      </div>

      <div className="space-y-3 pb-4">
        {coupons.map((coupon) => (
          <CouponItem key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </section>
  );
}

// Helper para classes
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
