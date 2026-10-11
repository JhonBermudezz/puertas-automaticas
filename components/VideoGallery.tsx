"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import type { Video } from "@/lib/site";

/** Tarjetas con vista previa al pasar el mouse + reproductor a pantalla completa. */
export function VideoGallery({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<Video | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {videos.map((v, i) => (
          <li key={v.slug} className={i === 0 ? "col-span-2 row-span-2" : ""}>
            <VideoCard video={v} big={i === 0} onOpen={() => setActive(v)} />
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="fixed inset-0 z-[60] grid place-items-center bg-navy-950/95 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Cerrar video"
              className="absolute top-5 right-5 grid size-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              onClick={() => setActive(null)}
            >
              <X />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className={`mx-auto max-h-[80svh] rounded-2xl bg-black shadow-2xl ${active.vertical ? "w-auto" : "w-full"}`}
                src={`/video/${active.slug}.mp4`}
                poster={`/video/${active.slug}.webp`}
                controls
                autoPlay
                playsInline
              />
              <p className="mt-4 text-center font-display text-lg font-semibold text-white">{active.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function VideoCard({ video, big, onOpen }: { video: Video; big: boolean; onOpen: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => {
        setHover(true);
        ref.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setHover(false);
        ref.current?.pause();
      }}
      className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-navy-800 text-left sm:rounded-3xl"
      aria-label={`Reproducir video: ${video.title}`}
    >
      <Image
        src={`/video/${video.slug}.webp`}
        alt={video.title}
        fill
        sizes={big ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 25vw, 50vw"}
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      {/* Vista previa silenciosa solo en escritorio */}
      <video
        ref={ref}
        className={`absolute inset-0 hidden size-full object-cover transition-opacity duration-500 md:block ${hover ? "opacity-100" : "opacity-0"}`}
        src={`/video/${video.slug}.mp4`}
        muted
        loop
        playsInline
        preload="none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
      <span className={`absolute top-1/2 left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:bg-brand-lime group-hover:text-navy-950 ${big ? "size-20" : "size-12"}`}>
        <Play className={`${big ? "size-8" : "size-5"} translate-x-0.5 fill-current`} />
      </span>
      <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="text-xs font-semibold tracking-wider text-brand-lime uppercase">{video.type}</span>
        <span className={`block font-display font-semibold text-white ${big ? "text-xl sm:text-2xl" : "text-sm sm:text-base"}`}>{video.title}</span>
      </span>
    </button>
  );
}
