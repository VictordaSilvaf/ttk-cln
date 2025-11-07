import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, EllipsisIcon, ShoppingCartIcon, Sparkles, type LucideIcon } from "lucide-react"
import ShareIcon from "@/assets/images/compartilhar.png"
import Image1 from "@/assets/images/iphone16-preto.webp"
import Image2 from "@/assets/images/iphone16-rosa.webp"
import Image3 from "@/assets/images/iphone16-verde.webp"
import { ImageCarousel } from "./components/ImageCarousel"
import { Tag } from "lucide-react";

export interface ProductProps {
  title: string
  description: string
  descriptionImage: string
  price: number
  pricePromotional: number
  images: string[]
  startDate: string
  endDate: string
  discountPercentage: number
  promotionDetails: {
    title: string
    icon: LucideIcon
  }
  stars: {
    total: number
    average: number
  }
  solds: number
  shipping: {
    freeShipping: boolean
    value: number
  }
}

const product: ProductProps = {
  title: "iPhone 15 Pro Max",
  description: "O iPhone 15 Pro Max combina design elegante, desempenho de ponta e câmera de alta resolução para quem busca o melhor da Apple.",
  descriptionImage: "https://example.com/iphone15promax.jpg",
  price: 7999.90,
  pricePromotional: 7499.90,
  images: [
    Image1,
    Image2,
    Image3
  ],
  startDate: "2025-11-01T00:00:00Z",
  endDate: "2025-11-30T23:59:59Z",
  discountPercentage: 6, // percentual promocional aproximado
  promotionDetails: {
    title: "Desconto Especial",
    icon: Tag
  },
  stars: {
    total: 124,
    average: 4.8
  },
  solds: 58,
  shipping: {
    freeShipping: true,
    value: 0
  }
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
    Image3  // Modo portátil em mãos
  ],
  startDate: "2025-11-05T00:00:00Z",
  endDate: "2025-12-05T23:59:59Z",
  discountPercentage: 8, // desconto de lançamento
  promotionDetails: {
    title: "Lançamento Exclusivo!",
    icon: Sparkles
  },
  stars: {
    total: 342,
    average: 4.9
  },
  solds: 187,
  shipping: {
    freeShipping: true,
    value: 0
  }
};


function App() {
  const productSell: ProductProps = product

  return (
    <div className="bg-black h-screen w-screen">
      <header>
        <nav className='flex flex-row justify-between p-2'>
          <Button variant={"ghost"} className="p-1.5! dark:hover:bg-black cursor-pointer">
            <ChevronLeftIcon className="text-white size-5" />
          </Button>

          <div className="flex flex-row gap-1">
            <Button variant={"ghost"} className="dark:hover:bg-black cursor-pointer">
              <img src={ShareIcon} alt="logo" className="size-5" />
            </Button>
            <Button variant={"ghost"} className="dark:hover:bg-black cursor-pointer">
              <ShoppingCartIcon className="text-white size-5" />
            </Button>
            <Button variant={"ghost"} className="dark:hover:bg-black cursor-pointer">
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
          <div className="bg-app-primary w-full p-3 grid grid-cols-2 grid-rows-2">
            <div className="gap-2 flex items-center">
              <span className="bg-white text-sm px-2 py-0.5 rounded-sm text-app-primary font-semibold capitalize">-{productSell.discountPercentage}%</span>
              <p className="text-xs text-white font-semibold capitalize">from</p>
              <span className="text-white font-semibold capitalize"><span className="mr-1 text-xs">R$</span>{new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL' }).format(productSell.pricePromotional)}</span>
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
