"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Revela su contenido como una cortina enrollable que sube.
 * Solo se "arma" si el elemento está fuera de pantalla al montar: sin JS o ya visible, se ve normal.
 */
export function Shutter({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "open">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setState("armed");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setState("open"), delay);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} data-state={state} className={`shutter ${className}`}>
      {children}
    </div>
  );
}
