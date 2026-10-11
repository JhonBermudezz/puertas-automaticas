"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "@phosphor-icons/react/dist/ssr";
import type { Video } from "@/lib/site";
import { asset } from "@/lib/asset";

/** Reproductor destacado con lista de videos al lado (sin ventanas modales). */
export function VideoGallery({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = videos[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <div className="relative aspect-video overflow-hidden rounded-[var(--radius-frame)] bg-petrol-950">
          {playing ? (
            <video
              key={v.slug}
              className="size-full object-contain"
              src={asset(`/video/${v.slug}.mp4`)}
              poster={asset(`/video/${v.slug}.webp`)}
              controls
              autoPlay
              playsInline
            />
          ) : (
            <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0" aria-label={`Reproducir: ${v.title}`}>
              <Image src={`/video/${v.slug}.webp`} alt="" fill sizes="(min-width:1024px) 60vw, 100vw" className={v.vertical ? "object-contain" : "object-cover"} />
              <span className="absolute inset-0 bg-petrol-950/25 transition-colors duration-200 group-hover:bg-petrol-950/40" />
              <span className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-petrol-900 shadow-lg transition-transform duration-200 ease-[var(--ease-out)] group-hover:scale-105 group-active:scale-95">
                <Play size={26} weight="fill" className="translate-x-0.5" />
              </span>
            </button>
          )}
        </div>
        <p className="mt-4 font-semibold text-ink">{v.title}</p>
        <p className="text-sm text-ink-soft">Puerta {v.type.toLowerCase()}</p>
      </div>

      <ul className="grid max-h-[32rem] content-start gap-2 overflow-y-auto pr-1">
        {videos.map((item, i) => (
          <li key={item.slug}>
            <button
              type="button"
              onClick={() => {
                setActive(i);
                setPlaying(true);
              }}
              aria-current={i === active ? "true" : undefined}
              className={`flex w-full items-center gap-4 rounded-2xl p-2 text-left transition-colors duration-150 ${
                i === active ? "bg-surface ring-1 ring-line" : "hover:bg-surface/70"
              }`}
            >
              <span className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-petrol-950">
                <Image src={`/video/${item.slug}.webp`} alt="" fill sizes="112px" className="object-cover" />
              </span>
              <span>
                <span className="block font-medium text-ink">{item.title}</span>
                <span className="text-sm text-ink-soft">Puerta {item.type.toLowerCase()}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
