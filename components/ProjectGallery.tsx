"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MapPin } from "lucide-react";
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
            className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              filter === t ? "text-white" : "bg-white text-navy-800 ring-1 ring-navy-800/10 hover:ring-brand-teal"
            }`}
          >
            {filter === t && (
              <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-navy-800" transition={{ type: "spring", damping: 28, stiffness: 320 }} />
            )}
            <span className="relative">{t}</span>
          </button>
        ))}
      </div>

      <motion.ul layout className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.li
              key={p.src}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-800">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                  <span>
                    <span className="block text-xs font-semibold tracking-wider text-brand-lime uppercase">{p.type}</span>
                    <span className="block font-display font-semibold">{p.title}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1 text-xs text-white/70"><MapPin className="size-3.5" />{p.place}</span>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
