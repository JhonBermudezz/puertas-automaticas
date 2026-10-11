"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/lib/site";

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const types = ["Todos", ...Array.from(new Set(projects.map((p) => p.type)))];
  const [filter, setFilter] = useState("Todos");
  const list = filter === "Todos" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos por tipo">
        {types.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setFilter(t)}
            aria-pressed={filter === t}
            className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-[background-color,color,transform] duration-150 active:scale-[0.97] ${
              filter === t ? "bg-petrol-900 text-on-petrol" : "bg-surface text-ink-soft ring-1 ring-line hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.src}>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-frame)] bg-line">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-4">
                <span className="block font-semibold text-ink">{p.title}</span>
                <span className="text-sm text-ink-soft">{p.type}, {p.place}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}
