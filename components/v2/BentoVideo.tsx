"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

/** Video silencioso en bucle que solo se reproduce mientras está en pantalla. */
export function BentoVideo({ slug, title }: { slug: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setAllowed(true);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.3 });
    io.observe(v);
    return () => io.disconnect();
  }, [allowed]);

  return (
    <>
      <Image src={`/video/${slug}.webp`} alt={title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
      {allowed && (
        <video ref={ref} className="absolute inset-0 size-full object-cover" src={asset(`/video/${slug}.mp4`)} muted loop playsInline preload="none" aria-hidden="true" />
      )}
    </>
  );
}
