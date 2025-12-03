import { Sparkles, type LucideIcon } from "lucide-react";

export interface ProductProps {
  slug: string;
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
  coupon?: string; // ex: "FLASH20"
  flashSaleEndTime?: string; // para contagem regressiva
  installments: {
    count: number;
    value: number;
    interestFree: boolean;
  };
  coupons: Array<{
    title: string;
    discountPercentage?: number;
    maxDiscount?: number;
    bonus?: boolean;
  }>;
  shipping: {
    freeShipping: boolean;
    value: number;
    estimatedDelivery: string;
  };
  variations: ProductVariation[];
  protection: {
    verifiedStore: boolean;
    guarantees: string[];
  };
  offers: {
    coupons: Coupon[];
  };
  creators?: {
    total: number;
    videos: CreatorVideo[];
  };
  reviews: {
    total: number;
    average: number;
    list: Review[];
    withMedia: number;
  };
  store: Store;
  about: {
    description: string; // pode ter \n
    images: string[]; // imagens da descrição
  };
}

export interface ProductVariation {
  id: string;
  type: "color" | "size" | "storage";
  title: string;
  label: string;
  value: string;
  inStock: boolean;
  image?: string; // opcional: imagem específica
  price: number;
  pricePromotional?: number;
  checkoutUrl: string;
}

export interface Coupon {
  id: string;
  title: string;
  description: string;
  discountValue?: number; // R$
  discountPercentage?: number;
  minPurchase?: number;
  validUntil: string; // ISO
  type: "shipping" | "product" | "payment";
}

export interface CreatorVideo {
  id: string;
  thumbnail: string; // URL ou import
  author: string;
  views: string;
  duration: string; // ex: "2:15"
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number; // 1 a 5
  comment: string;
  date: string; // ISO
  hasMedia?: boolean;
  media?: {
    type: "image" | "video";
    url: string;
  };
}

export interface Store {
  id: string;
  name: string;
  avatar: string;
  totalSold: number;
  verified: boolean;
  relatedProducts: Array<{
    id: string;
    image: string;
    title: string;
    price: number;
  }>;
}

// PRODUTOS
const now = new Date();
const end = new Date();

// adiciona 1 dia
end.setDate(now.getDate() + 1);

// define horário fixo: 13:00 (1 da tarde)
end.setUTCHours(13, 0, 0, 0);

const flashSaleEndTime = end.toISOString();

// === IMAGENS DO SWITCH 2 (crie pastas ou use placeholders) ===
import BundleImg1 from "@/assets/images/switch2/bundle-switch-mario-frente2.jpg";
import BundleImg2 from "@/assets/images/switch2/bundle-switch-mario-jogo.jpg";
import BundleImg3 from "@/assets/images/switch2/bundle-switch-online.jpg";
import BundleThumb1 from "@/assets/images/switch2/bundle-creator1.jpg";
import BundleThumb2 from "@/assets/images/switch2/bundle-creator2.jpg";
import BundleStoreAvatar from "@/assets/images/switch2/nintendo-store.jpg";
import BundleDesc1 from "@/assets/images/switch2/bundle-especificacoes.jpg";
import BundleDesc2 from "@/assets/images/switch2/bundle-conteudo.jpg";
import Review1 from "@/assets/images/switch2/review1.jpg";
import Review2 from "@/assets/images/switch2/review2.jpg";
import Review3 from "@/assets/images/switch2/review3.jpg";
import Review4 from "@/assets/images/switch2/review4.jpg";

export const productBundle: ProductProps = {
  slug: "console-nintendo-switch-2-mario-kart-world-3-meses-online",
  title:
    "Console Nintendo Switch 2 + Mario Kart world + 3 Meses Nintendo Switch Online",
  description:
    "KIT COMPLETO para começar a jogar AGORA! Console Nintendo Switch 2 com tela OLED 4K + o melhor jogo de corrida Mario World + 3 meses de Nintendo Switch Online grátis para multiplayer online e jogos clássicos.",
  descriptionImage: "https://example.com/bundle-switch-2-mario.jpg",
  price: 5499.9, // Preço original
  pricePromotional: 99.9, // 9% OFF no bundle
  images: [BundleImg1, BundleImg2, BundleImg3],
  startDate: "2025-11-05T00:00:00Z",
  endDate: "2025-12-15T23:59:59Z",
  flashSaleEndTime: flashSaleEndTime,
  discountPercentage: 9,
  promotionDetails: {
    title: "KIT COMPLETO + Brinde!",
    icon: Sparkles,
  },
  stars: { total: 289, average: 4.5 },
  solds: 256,
  shipping: {
    freeShipping: true,
    value: 0,
    estimatedDelivery: "2025-11-12",
  },
  installments: {
    count: 12,
    value: 416.66, // 99.90 / 12
    interestFree: true,
  },
  coupons: [
    { title: "Brinde: 3 meses de Nintendo Switch Online", bonus: true },
  ],
  variations: [
    {
      id: "1",
      type: "storage",
      title: "Console Nintendo Switch 2",
      label: "256GB",
      value: "256",
      inStock: true,
      image: BundleDesc1,
      pricePromotional: 99.9,
      price: 4599.9,
      checkoutUrl: "https://pay.trendbombou.site/69121521dc41853b51ba1f7d",
    },
    {
      id: "2",
      type: "storage",
      title:
        "Console Nintendo Switch 2 + Mario Kart world + 3 Meses Nintendo Switch Online",
      label: "512GB",
      value: "512",
      inStock: true,
      image: BundleDesc2,
      pricePromotional: 129.9,
      price: 5999.9,
      checkoutUrl: "https://pay.trendbombou.site/69122273dc41853b51ba4f21",
    },
  ],
  protection: {
    verifiedStore: true,
    guarantees: [
      "Devolução grátis em 15 dias",
      "Garantia Nintendo de 2 anos",
      "Testado e lacrado de fábrica",
    ],
  },
  offers: {
    coupons: [
      {
        id: "bundle2",
        type: "product",
        title: "Frete Grátis + Suporte VIP",
        description: "Apenas para este kit",
        minPurchase: 99.9,
        validUntil: "2025-11-30T23:59:59Z",
      },
    ],
  },
  creators: {
    total: 28,
    videos: [
      {
        id: "b1",
        thumbnail: BundleThumb1,
        author: "Nintendo Brasil",
        views: "45K",
        duration: "4:22",
      },
      {
        id: "b2",
        thumbnail: BundleThumb2,
        author: "Mario Kart BR",
        views: "32K",
        duration: "2:58",
      },
    ],
  },
  reviews: {
    total: 867,
    average: 4.5,
    withMedia: 65,
    list: [
      {
        id: "br1",
        author: "João Gamer",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        comment:
          "Simplesmente sensacional! Chegou em 3 dias, tudo lacrado e funcionando. Já joguei o fim de semana todo, Mario Kart é viciante demais!",
        date: "2025-11-08T16:45:00Z",
        hasMedia: true,
        media: {
          type: "image",
          url: Review1,
        },
      },
      {
        id: "br2",
        author: "Fernanda Lima",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        rating: 5,
        comment:
          "Comprei de presente pro meu filho e ele amou! Chegou super rápido, bem embalado e com frete grátis. Recomendo demais!",
        date: "2025-11-07T11:20:00Z",
        hasMedia: false,
      },
      {
        id: "br3",
        author: "Carlos M.",
        avatar: "https://randomuser.me/api/portraits/men/48.jpg",
        rating: 4,
        comment:
          "Produto excelente! Só achei que podia vir com mais acessórios, mas fora isso, tudo certo. Atendimento foi ótimo.",
        date: "2025-11-06T18:10:00Z",
        hasMedia: false,
      },
      {
        id: "br4",
        author: "Ana Souza",
        avatar: "https://randomuser.me/api/portraits/women/60.jpg",
        rating: 5,
        comment:
          "Amei! Muito fácil de configurar e usar. Entrega foi super rápida e o produto é de ótima qualidade!",
        date: "2025-11-05T09:32:00Z",
        hasMedia: true,
        media: {
          type: "video",
          url: Review2,
        },
      },
      {
        id: "br5",
        author: "Rafael Torres",
        avatar: "https://randomuser.me/api/portraits/men/70.jpg",
        rating: 5,
        comment:
          "Vale cada centavo! O desempenho é incrível e o visual é lindo. Chegou antes do prazo, nota 10!",
        date: "2025-11-04T14:05:00Z",
        hasMedia: false,
      },
      {
        id: "br6",
        author: "Mariana Costa",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg",
        rating: 4,
        comment:
          "Gostei bastante! Embalagem perfeita, produto original e funcionando bem. Só demorou um pouquinho na entrega.",
        date: "2025-11-03T20:45:00Z",
        hasMedia: false,
      },
      {
        id: "br7",
        author: "Lucas Andrade",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        rating: 5,
        comment:
          "Produto impecável! A qualidade me surpreendeu. Tô jogando todo dia com os amigos, e roda liso. Vale muito a pena!",
        date: "2025-11-09T12:15:00Z",
        hasMedia: true,
        media: {
          type: "image",
          url: Review3,
        },
      },
      {
        id: "br8",
        author: "Beatriz Nogueira",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        comment:
          "Chegou tudo certinho e super bem embalado! A cor é linda e o acabamento é perfeito. Tô apaixonada 😍",
        date: "2025-11-08T17:40:00Z",
        hasMedia: true,
        media: {
          type: "image",
          url: Review4,
        },
      },
      {
        id: "br9",
        author: "Felipe Rocha",
        avatar: "https://randomuser.me/api/portraits/men/26.jpg",
        rating: 4,
        comment:
          "Entrega super rápida e produto original. Só achei o cabo meio curto, mas o resto tá ótimo. Recomendo!",
        date: "2025-11-07T22:05:00Z",
        hasMedia: false,
      },
    ],
  },
  store: {
    id: "nintendo-br",
    name: "Nintendo Oficial BR",
    avatar: BundleStoreAvatar,
    totalSold: 28400,
    verified: true,
    relatedProducts: [],
  },
  about: {
    description: `🎮 KIT COMPLETO NINTENDO SWITCH 2 - PRONTO PARA JOGAR!

✅ O QUE VOCÊ RECEBE:
• Console Nintendo Switch 2 256GB (tela OLED 8" 4K)
• Jogo físico Mario Kart World (lacrado)
• 3 meses Nintendo Switch Online (código digital)
• Dock 4K com cabo HDMI
• 2 Joy-Cons magnéticos (cinza neon)
• Fonte oficial + alça de pulso

🚀 DESTAQUES:
• Tela OLED 120Hz com HDR
• Até 12h de bateria em modo portátil
• Multiplayer online grátis por 3 meses
• 100+ jogos clássicos no Online
• Compatível com TODOS jogos Switch 1

🎁 BRINDES EXCLUSIVOS:
• Capa protetora personalizada
• Suporte VIP Nintendo por 30 dias

✅ GARANTIA: 2 anos Nintendo + 15 dias devolução grátis`,
    images: [BundleDesc1, BundleDesc2],
  },
};

export const allProducts: ProductProps[] = [productBundle];

// Função para buscar produto pelo slug
export function getProductBySlug(slug: string): ProductProps | undefined {
  return allProducts.find((p) => p.slug === slug);
}
