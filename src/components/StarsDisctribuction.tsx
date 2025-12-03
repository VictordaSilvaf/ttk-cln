import type { ProductProps } from "@/data/products";
import { Star } from "lucide-react";

type StarRating = {
  rating: 5 | 4 | 3 | 2 | 1;
  count: number;
};

export default function StarsDistribution({
  product,
}: {
  product: ProductProps;
}) {
  // Dados reais da página da Makita que você enviou
  const distribution: StarRating[] = [
    { rating: 5, count: product.reviews.total - 145 - 28 - 8 - 4 }, // Calculado para totalizar as vendas
    { rating: 4, count: 145 },
    { rating: 3, count: 28 },
    { rating: 2, count: 8 },
    { rating: 1, count: 4 },
  ];

  // Função para renderizar as 5 estrelas (cheias ou vazias)
  const renderStars = (filled: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < filled
            ? "text-yellow-500 fill-yellow-500"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">
        <tbody className="[&_tr:last-child]:border-0">
          {distribution.map(({ rating, count }) => (
            <tr
              key={rating}
              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
            >
              <td className="p-4 align-middle flex items-center gap-2 py-2">
                <div className="flex">{renderStars(rating)}</div>
                <span className="text-sm">
                  {rating} estrela{rating > 1 ? "s" : ""}
                </span>
              </td>
              <td className="p-4 align-middle text-right py-2">
                <span className="font-medium">
                  {count.toLocaleString("pt-BR")}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
