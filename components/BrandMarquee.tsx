import Image from "next/image";
import { brandNames, brands } from "@/lib/site";

export function BrandMarquee() {
  // Logos con fondo propio o muy pequeños quedan fuera del carrusel.
  const list = brands.filter((b) => b !== "accessmatic" && b !== "soyal");
  const row = [...list, ...list];
  return (
    <section aria-labelledby="marcas-title" className="border-y border-navy-800/10 bg-white py-14">
      <div className="container-x">
        <h2 id="marcas-title" className="text-center text-sm font-semibold tracking-wider text-muted uppercase">
          Instalamos y reparamos las marcas líderes del mercado
        </h2>
      </div>
      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-6 group-hover:[animation-play-state:paused]">
          {row.map((b, i) => (
            <li key={`${b}-${i}`} aria-hidden={i >= list.length || undefined} className="grid h-24 w-44 shrink-0 place-items-center rounded-2xl border border-navy-800/5 bg-white px-4 shadow-sm">
              <Image
                src={`/marcas/${b}.webp`}
                alt={i < list.length ? `Motores y equipos ${brandNames[b]}` : ""}
                width={160}
                height={80}
                className="max-h-14 w-auto object-contain mix-blend-multiply transition duration-500 hover:scale-110"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
