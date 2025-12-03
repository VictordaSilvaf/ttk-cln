// src/components/InterestFree.tsx
import { ChevronRightIcon, TicketIcon } from "lucide-react";
import type { ProductProps } from "@/data/products";

interface InterestFreeProps {
  product: ProductProps;
}

export default function InterestFree({ product }: InterestFreeProps) {
  const { coupons } = product;

  return (
    <>
      {/* Parcelamento */}
      {/* <section className="text-white px-4 mt-1.5">
        <div className="flex items-center gap-1.5">
          <AppWindowIcon className="text-white size-4 flex-shrink-0" />
          <p className="font-normal text-sm text-[#D0D0D0]">
            {formatInstallment(installments.count, installments.value, installments.interestFree)}
          </p>
          {installments.interestFree && (
            <p className="text-[#DF537E] flex items-center gap-1 text-sm font-medium">
              sem juros
              <ChevronRightIcon className="size-4 text-[#D0D0D0]" />
            </p>
          )}
        </div>
      </section> */}

      {/* Cupons */}
      <section className="mt-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {coupons.map((coupon, index) => (
            <button
              key={index}
              className={`rounded-md flex items-center gap-1 py-1.5 px-2 font-medium text-sm text-white whitespace-nowrap bg-[#fe2a54]`}
            >
              {coupon.bonus ? (
                <TicketIcon className="size-4" />
              ) : (
                <span className="text-xs">%</span>
              )}
              {coupon.title}
            </button>
          ))}
        </div>

        <ChevronRightIcon className="text-[#D0D0D0] size-4 flex-shrink-0" />
      </section>
    </>
  );
}
