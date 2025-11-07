import { BookmarkIcon, MinusIcon, StarIcon } from "lucide-react";

export default function InfoProduct({
  title,
  total,
  average,
  solds,
}: {
  title: string;
  total: number;
  solds: number;
  average: number
}) {
  return (
    <>
      <section className="mt-3 px-4">
        <div className="flex items-start justify-between">
          <h2 className="font-bold text-xl text-[#D0D0D0]">
            {title}
          </h2>
          <button type="button">
            <BookmarkIcon className="text-[#D0D0D0]" />
          </button>
        </div>
      </section>
      <section className="px-4 mt-2">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <StarIcon className="text-yellow-300 size-5" />
            <p className="text-[#D0D0D0] text-sm">{ average }</p>
            <span className="text-[#54719F] text-sm">({ total })</span>
          </div>
          <MinusIcon className="text-[#D0D0D0] rotate-90 size-4" />
          <div className="text-[#D0D0D0] text-sm">{solds} sold</div>
        </div>
      </section>
    </>
  );
}
