import { CameraIcon, StarIcon } from "lucide-react";

export default function Avaliation() {
  return (
    <section className="px-4 mt-3 py-4 bg-[#121212]">
      <p className="font-bold text-lg text-[#d0d0d0]">
        Avaliações dos clientes (1,4 mil)
      </p>
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <p className="text-white font-semibold">
            4.3 <span className="text-[#d0d0d0] text-sm">/5</span>
          </p>

          <div className="flex items-center gap-1">
            <StarIcon className="text-yellow-300 size-5" />
            <StarIcon className="text-yellow-300 size-5" />
            <StarIcon className="text-yellow-300 size-5" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        {[1, 2].map(() => (
          <div className="mb-7">
            <div className="flex items-center gap-2">
              <div className="rounded-full size-7 bg-white"></div>
              <p className="text-[#d0d0d0] text-sm">Victor da Silva</p>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <StarIcon className="text-yellow-300 size-4" />
              <StarIcon className="text-yellow-300 size-4" />
              <StarIcon className="text-yellow-300 size-4" />
              <StarIcon className="text-yellow-300 size-4" />
              <StarIcon className="text-yellow-300 size-4" />
            </div>

            <div className="text-[#d0d0d0] text-sm mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
              ipsam autem! Consequatur, omnis. Perspiciatis amet pariatur
              architecto quas repudiandae iure recusandae itaque blanditiis
              totam voluptate! Nam perferendis a consequuntur veniam?
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100/20"></div>
      <div className="">
        <p className="font-bold text-md mt-3 text-[#d0d0d0]">
          Avaliações da loja (1,4 mil)
        </p>
        <div className="mt-3">
          <button className="bg-gray-200/10 rounded-md flex items-center gap-1 py-1 px-1.5 font-medium text-sm text-[#d0d0d0]">
            <CameraIcon className="size-4" />
            Inclui imagens ou vídeos (100)
          </button>
        </div>
      </div>
    </section>
  );
}
