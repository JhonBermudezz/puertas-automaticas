import Image from "next/image";
import { brandNames } from "@/lib/site";

// Logos con fondo propio o ilegibles en tamaño pequeño quedan fuera.
const shown = ["nice", "faac", "came", "beninca", "genius", "zkteco", "dahua", "hikvision"] as const;

export function BrandStrip() {
  return (
    <section aria-labelledby="marcas" className="container-x pb-20">
      <div className="border-t border-line pt-8">
        <h2 id="marcas" className="font-sans text-[0.95rem] font-medium tracking-normal text-ink-soft">
          Instalamos y reparamos equipos de estas marcas
        </h2>
        <ul className="mt-6 grid grid-cols-4 items-center gap-x-6 gap-y-6 lg:grid-cols-8">
          {shown.map((b) => (
            <li key={b} className="flex h-12 items-center justify-center">
              <Image
                src={`/marcas/${b}.webp`}
                alt={brandNames[b]}
                width={160}
                height={80}
                className="max-h-10 w-auto object-contain opacity-70 mix-blend-multiply grayscale transition-[filter,opacity] duration-200 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
