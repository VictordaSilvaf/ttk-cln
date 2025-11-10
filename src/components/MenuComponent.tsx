import { ShoppingCart, Store } from "lucide-react";
import BottomNavButton from "./BottomNavButton";

export default function MenuComponent() {
    return (
        <div className="fixed bottom-0 left-0 right-0">
            <div className="p-4 py-1 bg-black border-t border-gray-100/20 z-10 flex flex-row pb-8 gap-4 pt-2">
                <BottomNavButton
                    variant="icon"
                    icon={Store}
                    label="Shop"
                />

                {/* Variante 2: Ícone sem padding extra */}
                {/* <BottomNavButton
                    variant="icon"
                    icon={ShoppingCart}
                    label="Cart"
                /> */}

                {/* Variante 3: Botão de preço (flex-1) */}
                <BottomNavButton
                    variant="price"
                    price="R$ 44,64"
                    subtitle="Compre agora | Frete Grátis"
                />
            </div>
        </div>
    )
}
