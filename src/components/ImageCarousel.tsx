import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image1 from "@/assets/images/cadeira.png" // exemplo
import { Button } from "./ui/button"
import { XIcon } from "lucide-react"
import type { ProductProps } from "@/App"

export function ImageCarousel({ product }: {
    product: ProductProps
}) {
    return (
        <Carousel className="w-full">
            <CarouselContent className="p-0">
                {product.images.map((image, index) => (
                    <CarouselItem key={index} className="p-0">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Card className="p-0 rounded-none cursor-pointer">
                                    <CardContent className="flex aspect-square p-0 rounded-none relative">
                                        <img src={image} alt={`Imagem ${index + 1}`} className="w-full h-full object-cover" />
                                    </CardContent>
                                </Card>
                            </DialogTrigger>

                            <DialogContent showCloseButton={false} className="h-screen w-screen bg-black p-0 m-0 border-0 max-w-none rounded-none">
                                <DialogClose asChild>
                                    <div className="h-screen w-screen">
                                        <header className="absolute top-0 w-full z-10">
                                            <nav className='flex flex-row justify-between p-2 relative'>
                                                <Button variant={"ghost"} className="p-1.5! dark:hover:bg-black cursor-pointer">
                                                    <XIcon className="text-white size-5" />
                                                </Button>

                                                <div className="flex flex-row gap-1">

                                                </div>
                                            </nav>
                                        </header>

                                        <div className="h-full w-full flex items-center justify-center">
                                            <img src={Image1} alt={`Imagem ${index + 1}`} className="w-full object-cover select-none" />
                                        </div>
                                    </div>
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
