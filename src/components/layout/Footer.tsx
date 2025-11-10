import { priceFormt } from "@/utils/priceFormat";
import { MessageCircleIcon, StoreIcon } from "lucide-react";

export default function Footer({
  pricePromotional,
}: {
  pricePromotional: number;
}) {
  return (
    <footer className="fixed w-full border-t border-gray-100/20 bg-black bottom-0 p-4">
      <div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="text-white flex flex-col items-center gap-0.5">
              <StoreIcon />
              <span className="text-sm text-[#D0D0D0]">Loja</span>
            </div>

            <div className="text-white flex flex-col items-center gap-0.5">
              <MessageCircleIcon />
              <span className="text-sm text-[#D0D0D0]">Chat</span>
            </div>
          </div>

          <div className="flex items-center w-full gap-2">
            {/* <button
              className="bg-[#621A29] h-[60px] px-6 rounded-md"
              type="button"
            >
              <ShoppingCartIcon className="text-[#F95570]" />
            </button> */}

            <div className="bg-app-primary flex flex-col gap-0 py-1.5 w-full text-center rounded-md">
              <div className="font-semibold text-lg text-white">
                {priceFormt(pricePromotional)}
              </div>
              <div className="text-sm text-white">Compre agora e receba frete</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

