"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/site";

/** Carrusel con scroll-snap nativo (arrastre táctil real) y flechas para escritorio. */
export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 20), behavior: "smooth" });
  };

  return (
    <div>
      <div className="container-x flex items-end justify-between gap-6">
        <div>
          <h2 id="proyectos" className="text-3xl font-semibold text-ink sm:text-[2.6rem]">Trabajos entregados</h2>
          <p className="mt-4 max-w-[52ch] text-ink-soft">Fotos reales de puertas que instalamos en Villavicencio y el Meta.</p>
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button type="button" onClick={() => scroll(-1)} aria-label="Proyectos anteriores" className="grid size-12 place-items-center rounded-full bg-surface text-ink ring-1 ring-line transition-[background-color,transform] duration-150 hover:bg-petrol-900 hover:text-on-petrol active:scale-95">
            <ArrowLeft size={20} />
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Más proyectos" className="grid size-12 place-items-center rounded-full bg-surface text-ink ring-1 ring-line transition-[background-color,transform] duration-150 hover:bg-petrol-900 hover:text-on-petrol active:scale-95">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth scroll-px-[max(1.25rem,calc((100vw_-_1280px)/2_+_2rem))] px-[max(1.25rem,calc((100vw_-_1280px)/2_+_2rem))] pb-2"
      >
        {projects.map((p) => (
          <li key={p.src} className="w-[78vw] shrink-0 snap-start sm:w-[22rem] lg:w-[24rem]">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-frame)] bg-line">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 24rem, 78vw" className="object-cover transition-transform duration-500 ease-[var(--ease-out)] hover:scale-[1.03]" />
              </div>
              <figcaption className="mt-4">
                <span className="block font-semibold text-ink">{p.title}</span>
                <span className="text-sm text-ink-soft">
                  {p.type}, {p.place}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="container-x mt-8">
        <Link href="/proyectos/" className="font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-petrol-900">
          Ver todos los proyectos y videos
        </Link>
      </div>
    </div>
  );
}
