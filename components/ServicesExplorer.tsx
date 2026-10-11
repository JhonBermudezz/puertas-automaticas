"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus } from "@phosphor-icons/react/dist/ssr";
import type { Service } from "@/lib/site";

/**
 * Interacción principal del sitio: al pasar o seleccionar un servicio, la foto grande cambia
 * con una revelación por clip-path (de abajo hacia arriba, como una puerta que sube).
 * En móvil se comporta como acordeón con la foto dentro de cada fila.
 */
export function ServicesExplorer({ services }: { services: Service[] }) {
  const [active, setActiveState] = useState(0);
  const [prev, setPrev] = useState(0);
  const current = services[active];
  const setActive = (i: number) => {
    if (i === active) return;
    setPrev(active);
    setActiveState(i);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
      <ul className="divide-y divide-line border-y border-line">
        {services.map((s, i) => {
          const isOpen = i === active;
          return (
            <li key={s.slug}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={isOpen}
                aria-controls={`servicio-${s.slug}`}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="flex items-center">
                  <span
                    aria-hidden="true"
                    className={`h-0.5 shrink-0 rounded-full bg-lime transition-[width,margin] duration-300 ease-[var(--ease-out)] ${isOpen ? "mr-4 w-6" : "mr-0 w-0"}`}
                  />
                  <span className={`font-display text-xl font-semibold transition-colors duration-150 sm:text-2xl ${isOpen ? "text-ink" : "text-ink-soft group-hover:text-ink"}`}>
                    {s.name}
                  </span>
                </span>
                <Plus
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ease-[var(--ease-out)] lg:hidden ${isOpen ? "rotate-45 text-ink" : "text-ink-soft"}`}
                />
              </button>
              {/* Contenido móvil */}
              <div id={`servicio-${s.slug}`} className={`grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out)] lg:hidden ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-frame)]">
                    <Image src={s.image} alt={s.imageAlt} fill sizes="100vw" className="object-cover" />
                  </div>
                  <p className="mt-4 text-ink-soft">{s.short}</p>
                  <Link href={`/servicios/${s.slug}/`} className="mt-3 mb-6 inline-flex items-center gap-1.5 font-semibold text-petrol-900">
                    Ver {s.name.toLowerCase()} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Panel de escritorio */}
      <div className="relative hidden lg:block">
        <div className="sticky top-24">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-frame)] bg-petrol-950">
            {services.map((s, i) => (
              <Image
                key={s.slug}
                src={s.image}
                alt={i === active ? s.imageAlt : ""}
                fill
                sizes="50vw"
                className={`object-cover ${i === active ? "transition-[clip-path] duration-700 ease-[var(--ease-in-out)]" : ""}`}
                style={{
                  // La nueva foto sube sobre la anterior, que se queda quieta debajo.
                  clipPath: i === active || i === prev ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
                  zIndex: i === active ? 2 : i === prev ? 1 : 0,
                }}
              />
            ))}
          </div>
          <div className="mt-6 flex items-start justify-between gap-8">
            <p className="max-w-[48ch] text-ink-soft" aria-live="polite">
              {current.short}
            </p>
            <Link
              href={`/servicios/${current.slug}/`}
              className="btn shrink-0 bg-surface !px-5 !py-3 text-ink ring-1 ring-line hover:bg-petrol-900 hover:text-on-petrol hover:ring-petrol-900"
            >
              Ver servicio <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
