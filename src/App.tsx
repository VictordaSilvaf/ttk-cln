import InterestFree from "./components/InterestFree";
import InfoProduct from "./components/InfoProduct";
import Freight from "./components/Freight";
import PricesProduct from "./components/PricesProduct";
import Variations from "./components/Variations";
import Avaliation from "./components/Avaliation";
import VisitStore from "./components/VisitStore";
import AboutProduct from "./components/AboutProduct";
import {
  productBundle,
  type ProductProps,
  type ProductVariation,
} from "./data/products";
import MenuComponent from "./components/MenuComponent";
import ActionBar from "./components/ActionBar";
import ProductTabs from "./components/ProductTabs";
import { useTheme } from "next-themes";

function App() {
  const { setTheme } = useTheme();
  setTheme("white");

  const product = productBundle as ProductProps;

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
        <ActionBar />
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
        </section>

        <section id="description">
          <AboutProduct product={product} />
        </section>

        <section id="recommendations">
          {/* <Offers product={product} /> */}
          {/* <Creators product={product} /> */}
          <VisitStore product={product} />
        </section>

        <MenuComponent handleBuy={handleBuy} product={product} />
      </main>
    </div>
  );
}

export default App;
