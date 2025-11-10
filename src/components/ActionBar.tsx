// src/components/ActionBar.tsx
import { Button } from "@/components/ui/button";
import { ChevronLeft, ShoppingCart, Ellipsis } from "lucide-react";
import ShareIcon from "@/assets/images/compartilhar.png";

export default function ActionBar() {
    return (
        <nav className="flex justify-between items-center p-2 h-16">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ChevronLeft className="size-5" />
            </Button>

            <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <img src={ShareIcon} alt="Compartilhar" className="size-5" />
                </Button>
                {/* <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <ShoppingCart className="size-5" />
                </Button> */}
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Ellipsis className="size-5" />
                </Button>
            </div>
        </nav>
    );
}