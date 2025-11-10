// src/components/ImageCarousel.tsx
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { useState } from "react";
import type { ProductProps } from "@/data/products";

interface ImageCarouselProps {
    product: ProductProps;
}

export function ImageCarousel({ product }: ImageCarouselProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Carousel className="w-full">
            <CarouselContent className="p-0">
                {product.images.map((image, index) => (
                    <CarouselItem key={index} className="p-0">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Card
                                    className="p-0 rounded-none cursor-pointer overflow-hidden"
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <CardContent className="flex aspect-square p-0">
                                        <img
                                            src={image}
                                            alt={`${product.title} - Imagem ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </CardContent>
                                </Card>
                            </DialogTrigger>

                            {/* Modal Full Screen com Carousel Interno */}
                            <DialogContent
                                className="h-screen w-screen max-w-none p-0 m-0 bg-black border-0 rounded-none"
                                showCloseButton={false}
                            >
                                <div className="relative h-full w-full">
                                    {/* Botão Fechar */}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-4 left-4 z-50 bg-black/50 hover:bg-black/70"
                                    >
                                        <XIcon className="size-6 text-white" />
                                    </Button>

                                    {/* Carousel no Modal */}
                                    <Carousel className="h-full w-full" defaultValue={selectedIndex}>
                                        <CarouselContent>
                                            {product.images.map((img, i) => (
                                                <CarouselItem key={i}>
                                                    <div className="flex items-center justify-center h-full">
                                                        <img
                                                            src={img}
                                                            alt={`${product.title} - Imagem ${i + 1}`}
                                                            className="max-w-full max-h-full object-contain select-none"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>

                                        {/* Navegação no Modal */}
                                        <CarouselPrevious className="left-4 bg-black/50 border-0 hover:bg-black/70" />
                                        <CarouselNext className="right-4 bg-black/50 border-0 hover:bg-black/70" />
                                    </Carousel>

                                    {/* Indicador de página */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 px-3 py-1.5 rounded-full">
                                        <span className="text-white text-sm font-medium">
                                            {selectedIndex + 1} / {product.images.length}
                                        </span>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Indicadores inferiores (pequenos dots) */}
            <div className="flex justify-center gap-1 mt-2">
                {product.images.map((_, i) => (
                    <button
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === selectedIndex ? "bg-white w-4" : "bg-white/50"
                            }`}
                        onClick={() => setSelectedIndex(i)}
                        aria-label={`Ir para imagem ${i + 1}`}
                    />
                ))}
            </div>
        </Carousel>
    );
}