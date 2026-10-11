import Image from "next/image";
import { brandNames } from "@/lib/site";

const list = ["nice", "faac", "came", "beninca", "genius", "zkteco", "dahua", "hikvision", "ppa", "nas"] as const;

export function Brands() {
  const row = [...list, ...list];
  return (
    <section aria-labelledby="v2-marcas" className="py-16 sm:py-20">
      <h2 id="v2-marcas" className="text-center font-sans text-[0.95rem] font-medium tracking-normal text-steel-500">
        Instalamos y reparamos equipos de las marcas líderes
      </h2>
      <div className="group mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max animate-marquee-x items-center gap-14 group-hover:[animation-play-state:paused]">
          {row.map((b, i) => (
            <li key={`${b}-${i}`} aria-hidden={i >= list.length || undefined} className="flex h-12 w-32 shrink-0 items-center justify-center">
              <Image
                src={`/marcas/${b}.webp`}
                alt={i < list.length ? brandNames[b] : ""}
                width={160}
                height={80}
                className="max-h-10 w-auto object-contain opacity-60 mix-blend-multiply grayscale transition-[opacity,filter] duration-200 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
