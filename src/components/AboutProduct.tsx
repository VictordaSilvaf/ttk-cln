// src/components/AboutProduct.tsx
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import type { ProductProps } from "@/data/products";

interface AboutProductProps {
    product: ProductProps;
}

export default function AboutProduct({ product }: AboutProductProps) {
    const { about } = product;
    const { description, images } = about;
    const [expanded, setExpanded] = useState(false);

    // Divide descrição em parágrafos
    const paragraphs = description.split("\n").filter(p => p.trim());

    // Mostra apenas 3 linhas se não expandido
    const previewLines = paragraphs.slice(0, 3).join(" ");
    const showReadMore = paragraphs.length > 3;

    return (
        <section className="px-4 mt-3 py-4 bg-background">
            <p className="font-bold text-md text-primary">Sobre este produto</p>

            {/* Descrição com Leia mais/menos */}
            <div className="mt-3 text-primary text-sm leading-relaxed space-y-3">
                {expanded ? (
                    <>
                        {paragraphs.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </>
                ) : (
                    <p>{previewLines}{showReadMore && "..."}</p>
                )}

                {showReadMore && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-1 text-app-primary text-sm font-medium hover:underline mt-2"
                    >
                        {expanded ? (
                            <>Menos <ChevronUpIcon className="size-4" /></>
                        ) : (
                            <>Leia mais <ChevronDownIcon className="size-4" /></>
                        )}
                    </button>
                )}
            </div>

            {/* Imagens da descrição */}
            {images.length > 0 && (
                <div className="mt-5 grid grid-cols-2 gap-3">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Detalhe do produto ${i + 1}`}
                            className="w-full h-48 object-cover rounded-lg"
                            loading="lazy"
                        />
                    ))}
                </div>
            )}
        </section>
    );
}