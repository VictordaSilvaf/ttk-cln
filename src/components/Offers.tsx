import { ChevronRightIcon } from "lucide-react";

export default function Offers() {
  return (
    <section className="px-4 mt-3 bg-[#121212]">
      <div className="flex py-3 items-center justify-between">
        <p className="font-bold text-lg text-[#d0d0d0]">Ofertas</p>
        <ChevronRightIcon className="size-5 text-[#d0d0d0]" />
      </div>

      <div className="pb-4">
        
        <div className="py-2 px-4 bg-[#121C1D] rounded-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#d0d0d0] font-semibold">Cupom de envio</p>
              <p className="text-[#51585A] text-sm leading-4 mt-0.5">Desconto de R$ 20 no frete em <br/> pedidos acima de R$ 10</p>
            </div>

            <button type="button" className="bg-[#19BFC3] py-1 px-2 rounded-sm text-sm text-white">
                Resgatar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
