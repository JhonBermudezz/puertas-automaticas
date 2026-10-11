"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Service } from "@/lib/site";

const tags: Record<string, string> = {
  "puertas-corredizas-automaticas": "Residencial",
  "puertas-abatibles-automaticas": "Residencial",
  "puertas-levadizas-seccionales": "Garajes",
  "cortinas-enrollables-electricas": "Comercial",
  "talanqueras-vehiculares": "Conjuntos",
  "control-de-acceso": "Seguridad",
  "mantenimiento-reparacion-puertas-automaticas": "Soporte",
};

export function ServicesCarousel({ services }: { services: Service[] }) {
  const track = useRef<HTMLUListElement>(null);
  const go = (dir: 1 | -1) => {
    const el = track.current;
    const w = el?.querySelector("li")?.clientWidth ?? 300;
    el?.scrollBy({ left: dir * (w + 16), behavior: "smooth" });
  };

  return (
    <section aria-labelledby="v2-servicios" className="mx-auto max-w-[1312px] px-3 sm:px-5">
      <div className="overflow-hidden rounded-[32px] bg-graphite-900 py-14 sm:py-20">
        <div className="flex flex-col justify-between gap-6 px-6 sm:flex-row sm:items-end sm:px-12">
          <div>
            <h2 id="v2-servicios" className="max-w-[16ch] text-4xl leading-[1.05] font-bold text-white sm:text-5xl">
              Soluciones para cada tipo de entrada
            </h2>
            <p className="mt-4 max-w-[46ch] text-steel-300">Desde el portón de tu casa hasta la portería de un conjunto. Instalación nueva, automatización y soporte.</p>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => go(-1)} aria-label="Servicios anteriores" className="grid size-12 place-items-center rounded-full bg-white/[0.08] text-white transition-[background-color,transform] duration-150 hover:bg-white/15 active:scale-95">
              <ArrowLeft size={20} />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Más servicios" className="grid size-12 place-items-center rounded-full bg-white text-graphite-900 transition-transform duration-150 active:scale-95">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <ul ref={track} className="scrollbar-none mt-12 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 sm:scroll-px-12 sm:px-12">
          {services.map((s, i) => {
            const dark = i === 1;
            return (
              <li key={s.slug} className="w-[82%] shrink-0 snap-start sm:w-[19.5rem]">
                <Link
                  href={`/servicios/${s.slug}/`}
                  className={`group flex h-full flex-col rounded-[24px] p-4 transition-transform duration-300 ease-[var(--ease-out)] hover:-translate-y-1 ${
                    dark ? "bg-graphite-700 text-white ring-1 ring-white/10" : "bg-white text-graphite-950"
                  }`}
                >
                  <span className={`self-start rounded-full px-3 py-1 text-xs font-semibold ring-1 ${dark ? "ring-white/25 text-steel-200" : "ring-steel-300 text-steel-700"}`}>
                    {tags[s.slug]}
                  </span>
                  <h3 className="mt-4 min-h-[3.4rem] px-1 text-[1.45rem] leading-tight font-bold">{s.name}</h3>
                  <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:640px) 19.5rem, 82vw" className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex flex-1 items-end justify-between gap-4 px-1 pb-1">
                    <p className={`line-clamp-3 text-[0.95rem] ${dark ? "text-steel-300" : "text-steel-700"}`}>{s.short}</p>
                    <span className={`grid size-11 shrink-0 place-items-center rounded-full ring-1 transition-colors duration-200 ${dark ? "ring-white/25 group-hover:bg-white group-hover:text-graphite-900" : "ring-steel-300 group-hover:bg-graphite-900 group-hover:text-white"}`}>
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
