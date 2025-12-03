// src/components/ActionBar.tsx
import { Button } from "@/components/ui/button";
import { ChevronLeft, Ellipsis, Share } from "lucide-react";

export default function ActionBar({
  handleOpenBackRedirect,
}: {
  handleOpenBackRedirect: () => void;
}) {
  return (
    <nav className="flex justify-between items-center p-2 h-12">
      <div className="">
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:bg-white/10"
          onClick={handleOpenBackRedirect}
        >
          <ChevronLeft className="size-5" />
        </Button>
      </div>

      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:bg-white/10"
        >
          <Share className="size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:bg-white/10"
          onClick={handleOpenBackRedirect}
        >
          <Ellipsis className="size-5" />
        </Button>
      </div>
    </nav>
  );
}
