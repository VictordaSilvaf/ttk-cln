import { Button } from "@/components/ui/button";
import {
  AppWindowIcon,
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisIcon,
  MessageCircleIcon,
  MinusIcon,
  ShoppingCartIcon,
  Sparkles,
  StarIcon,
  StoreIcon,
  Tally1Icon,
  TicketCheckIcon,
  TicketIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react";
import ShareIcon from "@/assets/images/compartilhar.png";
import Image1 from "@/assets/images/iphone16-preto.webp";
import Image2 from "@/assets/images/iphone16-rosa.webp";
import Image3 from "@/assets/images/iphone16-verde.webp";
import { ImageCarousel } from "./components/ImageCarousel";
import { Tag } from "lucide-react";
import ImageLayout from "@/assets/images/layout.jpeg";

export interface ProductProps {
  title: string;
  description: string;
  descriptionImage: string;
  price: number;
  pricePromotional: number;
  images: string[];
  startDate: string;
  endDate: string;
  discountPercentage: number;
  promotionDetails: {
    title: string;
    icon: LucideIcon;
  };
  stars: {
    total: number;
    average: number;
  };
  solds: number;
  shipping: {
    freeShipping: boolean;
    value: number;
  };
}

const product: ProductProps = {
  title: "iPhone 15 Pro Max",
  description:
    "O iPhone 15 Pro Max combina design elegante, desempenho de ponta e câmera de alta resolução para quem busca o melhor da Apple.",
  descriptionImage: "https://example.com/iphone15promax.jpg",
  price: 7999.9,
  pricePromotional: 7499.9,
  images: [Image1, Image2, Image3],
  startDate: "2025-11-01T00:00:00Z",
  endDate: "2025-11-30T23:59:59Z",
  discountPercentage: 11, // percentual promocional aproximado
  promotionDetails: {
    title: "Desconto Especial",
    icon: Tag,
  },
  stars: {
    total: 124,
    average: 4.8,
  },
  solds: 58,
  shipping: {
    freeShipping: true,
    value: 0,
  },
};

const product2: ProductProps = {
  title: "Nintendo Switch 2 – A Nova Geração da Diversão",
  description:
    "O novo Nintendo Switch 2 chegou com tudo! Gráficos aprimorados, desempenho turbo e uma experiência híbrida ainda mais fluida. Jogue onde quiser, com quem quiser, sem limites — agora com tela OLED 4K, Joy-Cons redesenhados e bateria de longa duração.",
  descriptionImage: "https://example.com/nintendo-switch-2-banner.jpg",
  price: 4999.9,
  pricePromotional: 4599.9,
  images: [
    Image1, // Frente com dock e joy-cons
    Image2, // Tela OLED em gameplay vibrante
    Image3, // Modo portátil em mãos
  ],
  startDate: "2025-11-05T00:00:00Z",
  endDate: "2025-12-05T23:59:59Z",
  discountPercentage: 8, // desconto de lançamento
  promotionDetails: {
    title: "Lançamento Exclusivo!",
    icon: Sparkles,
  },
  stars: {
    total: 342,
    average: 4.9,
  },
  solds: 187,
  shipping: {
    freeShipping: true,
    value: 0,
  },
};

function App() {
  const productSell: ProductProps = product;

  return (
    <div className="bg-black h-screen w-screen">
      <header>
        <nav className="flex flex-row justify-between p-2">
          <Button
            variant={"ghost"}
            className="p-1.5! dark:hover:bg-black cursor-pointer"
          >
            <ChevronLeftIcon className="text-white size-5" />
          </Button>

          <div className="flex flex-row gap-1">
            <Button
              variant={"ghost"}
              className="dark:hover:bg-black cursor-pointer"
            >
              <img src={ShareIcon} alt="logo" className="size-5" />
            </Button>
            <Button
              variant={"ghost"}
              className="dark:hover:bg-black cursor-pointer"
            >
              <ShoppingCartIcon className="text-white size-5" />
            </Button>
            <Button
              variant={"ghost"}
              className="dark:hover:bg-black cursor-pointer"
            >
              <EllipsisIcon className="text-white size-5" />
            </Button>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="w-full aspect-square overflow-hidden relative">
            <ImageCarousel product={productSell} />
          </div>
          <div className="bg-[#FD732B] py-2 px-4">
            <div className=" w-full flex items-center justify-between">
              <div className="gap-1 flex items-center">
                <span className="bg-white text-sm px-1.5 py-0.5 rounded-sm text-app-primary font-bold capitalize">
                  -{productSell.discountPercentage}%
                </span>
                {/* <p className="text-xs text-white font-semibold capitalize">from</p> */}
                <span className="flex items-center">
                  <span className="text-md text-white font-semibold capitalize mt-1.5">
                    R$
                  </span>
                </span>
                <span className="text-md text-white font-semibold capitalize text-2xl">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "decimal",
                    currency: "BRL",
                  }).format(productSell.pricePromotional)}
                </span>
                <span>
                  <TicketCheckIcon className="mt-2 size-5 text-white" />
                </span>
              </div>

              <div className="w-full ">
                <div className="flex gap-0.5 items-center justify-end w-full">
                  <ZapIcon className="text-white size-5" />
                  <p className="font-semibold text-white text-sm">Flash Sale</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <s className="text-[#FFC9A4] font-normal">R$ 99,90</s>
              <p className="text-right text-white text-sm">
                Ends in <span className="font-medium">21:53:32</span>
              </p>
            </div>
          </div>
        </section>
        <section className="text-white px-4 mt-1.5">
          <div className="flex items-center gap-1.5">
            <AppWindowIcon className="text-white size-4" />
            <p className="font-normal text-sm text-[#D0D0D0]">2x R$ 44,50</p>
            <p className="text-[#DF537E] flex items-center gap-1">
              interest-free
              <ChevronRightIcon className="size-4 mt-1 text-[#D0D0D0]" />
            </p>
          </div>
        </section>
        <section className="mt-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="bg-[#621A29] rounded-md flex items-center gap-1 py-1 px-1.5 font-medium text-sm text-[#EBB4BA]">
              <TicketIcon className="size-5" />
              10% off, max R$ 25
            </button>
            <button className="bg-[#621A29] rounded-md flex items-center py-1 px-1.5 font-medium text-sm text-[#EBB4BA]">
              Save 6% with bonus
            </button>
          </div>

          <div>
            <ChevronRightIcon className="text-[#D0D0D0] size-4" />
          </div>
        </section>
        <section className="mt-3 px-4">
          <div className="flex items-start justify-between">
            <h2 className="font-bold text-xl text-[#D0D0D0]">
              {productSell.title}
            </h2>
            <button type="button">
              <BookmarkIcon className="text-[#D0D0D0]" />
            </button>
          </div>
        </section>
        <section className="px-4 mt-2">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <StarIcon className="text-yellow-300 size-5" />
              <p className="text-[#D0D0D0] text-sm">4.5</p>
              <span className="text-[#54719F] text-sm">(38)</span>
            </div>
            <MinusIcon className="text-[#D0D0D0] rotate-90 size-4" />
            <div className="text-[#D0D0D0] text-sm">463 sold</div>
          </div>
        </section>
      </main>
      <footer className=" fixed w-full  bg-black bottom-0 p-4">
        <div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="text-white flex flex-col items-center gap-0.5">
                <StoreIcon />
                <span className="text-sm text-[#D0D0D0]">Shop</span>
              </div>

              <div className="text-white flex flex-col items-center gap-0.5">
                <MessageCircleIcon />
                <span className="text-sm text-[#D0D0D0]">Chat</span>
              </div>
            </div>

            <div className="flex items-center w-full gap-2">
              <button className="bg-[#621A29] h-[60px] px-6 rounded-md" type="button">
                  <ShoppingCartIcon className="text-[#F95570]" />
              </button>

              <div className="bg-app-primary flex flex-col gap-0 py-1.5 w-full text-center rounded-md">
                  <div className="font-semibold text-lg text-white">R$ 89,01</div>
                  <div className="text-sm text-white">Buy now free shipping</div>
              </div>
            </div>
          </div>
        </div>

        {/* <img src={ImageLayout} /> */}
      </footer>
    </div>
  );
}

export default App;
