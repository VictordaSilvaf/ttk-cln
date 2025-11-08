import { CheckIcon, ShieldCheckIcon } from "lucide-react";

export default function ProtectionClient() {
  return (
    <section className="mt-4 bg-[#3A220A] py-2">
      <div className="flex items-center gap-1 px-4">
        <ShieldCheckIcon className="size-5 text-[#DAB896]" />
        <p className="text-[#DAB896] font-semibold">Proteção do cliente</p>
      </div>

      <div className="grid grid-cols-2 px-10 gap-2 mt-2">
        {[1, 2, 3, 4].map(() => (
          <div className="flex items-center gap-1">
            <CheckIcon className="size-3 text-[#DAB896]" />
            <p className="text-sm text-[#D8CABD]">Lorem Ipsum</p>
          </div>
        ))}
      </div>
    </section>
  );
}
