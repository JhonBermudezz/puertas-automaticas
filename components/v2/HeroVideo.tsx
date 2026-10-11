"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroVideo({ name, alt }: { name: string; alt: string }) {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && !conn?.saveData) setEnabled(true);
  }, []);

  return (
    <>
      <Image src={`/video/${name}-poster.webp`} alt={alt} fill priority sizes="(min-width:1312px) 1290px, 100vw" className="object-cover" />
      {enabled && (
        <video
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
        >
          <source src={`/video/${name}.webm`} type="video/webm" />
          <source src={`/video/${name}.mp4`} type="video/mp4" />
        </video>
      )}
    </>
  );
}
