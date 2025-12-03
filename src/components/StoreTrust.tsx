import type { ProductProps } from "@/data/products";
import { Star, CircleCheckBig, Clock } from "lucide-react";

export default function StoreTrust({ product }: { product: ProductProps }) {
  const { store } = product;

  return (
    <div className="bg-background px-4 py-4">
      {/* Barra de Confiança */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-foreground">
            Confiança na loja
          </span>
          <span className="text-xs font-medium text-green-600">Excelente</span>
        </div>
        <div className="relative w-full h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full w-full bg-[#fe2a54] transition-all"
            style={{ transform: "translateX(-12%)" }}
          />
        </div>
      </div>

      {/* Métricas rápidas */}
      <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
          <span>
            +{store.totalSold.toLocaleString("pt-BR")} vendas concluídas
          </span>
        </div>
        <div className="flex items-center gap-1">
          <CircleCheckBig className="w-3 h-3 text-green-500" />
          <span>Oferece um bom atendimento</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-blue-500" />
          <span>Entrega dentro do prazo</span>
        </div>
      </div>

      {/* Tag Loja Oficial */}
      <div className="flex items-center gap-2">
        <div className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
          Loja Oficial
        </div>
        <span className="text-xs text-muted-foreground">
          Vende há {new Date().getFullYear() - 2017} anos no site
        </span>
      </div>
    </div>
  );
}
