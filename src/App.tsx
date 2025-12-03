import InterestFree from "./components/InterestFree";
import InfoProduct from "./components/InfoProduct";
import Freight from "./components/Freight";
import PricesProduct from "./components/PricesProduct";
import Variations from "./components/Variations";
import Avaliation from "./components/Avaliation";
import VisitStore from "./components/VisitStore";
import AboutProduct from "./components/AboutProduct";
import {
  productBundle2,
  type ProductProps,
  type ProductVariation,
} from "./data/products";
import MenuComponent from "./components/MenuComponent";
import ActionBar from "./components/ActionBar";
import ProductTabs from "./components/ProductTabs";
import { useTheme } from "next-themes";
import StoreTrust from "./components/StoreTrust";
import FAQSection from "./components/FaqQuestions";
import { useState } from "react";
import { BackRedirect } from "./components/BackRedirect";

function App() {
  const { setTheme } = useTheme();
  setTheme("white");
  const [open, setOpen] = useState(false);

  function handleOpenBackRedirect() {
    setOpen(!open);
  }

  const product = productBundle2 as ProductProps;

  // Se não encontrar produto
  if (!product) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">
            Produto não encontrado
          </h1>
          <p className="text-[#D0D0D0]">
            Verifique o link ou volte à página inicial.
          </p>
        </div>
      </div>
    );
  }

  function handleBuy(variant: ProductVariation) {
    window.location.href = variant.checkoutUrl;
  }

  return (
    <div className="bg-background h-screen w-screen overflow-y-scroll relative scrollbar-hide">
      <header className="bg-background fixed top-0 left-0 right-0 z-50 border-b border-white/10">
        <ActionBar handleOpenBackRedirect={handleOpenBackRedirect} />
        <ProductTabs />
      </header>

      <main className="pt-20 space-y-6 pb-32 overflow-y-auto">
        <section id="overview">
          <PricesProduct product={product} />
          <InterestFree product={product} />
          <InfoProduct product={product} />
          {product.shipping.freeShipping && <Freight product={product} />}
          <Variations product={product} handleBuy={handleBuy} />
        </section>

        <section id="reviews">
          <Avaliation product={product} />

          <StoreTrust product={product} />
        </section>

        <section id="description">
          <AboutProduct product={product} />
        </section>

        <section id="recommendations">
          <VisitStore product={product} />

          <FAQSection />
        </section>

        <div className="bg-linear-to-r mx-5 from-[#fe2a54]/10 to-[#fe2a54]/5 p-6 rounded-lg border-2 border-[#fe2a54]/20">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span>🎉</span>
            <span>Oferta Por Tempo Limitado!</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Aproveite essa oportunidade única de ter o melhor refrigerador
            portátil Makita com um desconto incrível. Estoque limitado!
          </p>
          <div className="bg-background p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              ⚠️ Importantes Observações:
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Baterias não inclusas - vendidas separadamente</li>
              <li>
                • A autonomia pode variar dependendo da temperatura ambiente e
                frequência de abertura
              </li>
              <li>• Compatível com todas as baterias 18V LXT Makita</li>
            </ul>
          </div>
        </div>

        <MenuComponent
          handleBuy={handleBuy}
          product={product}
          handleOpenBackRedirect={handleOpenBackRedirect}
        />

        <BackRedirect open={open} setOpen={setOpen} product={product} />
      </main>
    </div>
  );
}

export default App;
