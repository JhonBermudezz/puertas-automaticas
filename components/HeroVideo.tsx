"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * El póster carga primero (LCP rápido). El video solo se activa en pantallas medianas/grandes,
 * sin "ahorro de datos" y sin "reducir movimiento".
 */
export function HeroVideo({ name, alt }: { name: string; alt: string }) {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    if (!reduce && !conn?.saveData && wide) setEnabled(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src={`/video/${name}-poster.webp`}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover"
      />
      {enabled && (
        <video
          ref={ref}
          className={`absolute inset-0 size-full scale-105 object-cover transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={`/video/${name}-poster.webp`}
          onCanPlay={() => setReady(true)}
        >
          <source src={`/video/${name}.webm`} type="video/webm" />
          <source src={`/video/${name}.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
