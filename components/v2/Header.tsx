"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const nav = [
  { href: "/servicios/", label: "Servicios" },
  { href: "/proyectos/", label: "Proyectos" },
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/contacto/", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-16 max-w-[1312px] items-center justify-between gap-4 rounded-2xl bg-white/90 pr-2 pl-4 shadow-[0_1px_0_rgb(17_21_20/0.06),0_8px_24px_-12px_rgb(17_21_20/0.18)] backdrop-blur-md sm:pl-5">
        <Link href="/v2/" className="flex items-center gap-3" aria-label="Puertas Automáticas del Llano, ir al inicio">
          <Image src="/brand/logo-cubo.webp" alt="" width={500} height={340} priority className="h-8 w-auto" />
          <span className="font-v2 text-[1.05rem] leading-none font-bold tracking-tight text-graphite-900">
            Puertas Automáticas <span className="font-medium text-steel-500">del Llano</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-[0.95rem] font-medium text-steel-700 transition-colors duration-150 hover:text-graphite-950">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={telUrl} className="hidden px-3 text-[0.95rem] font-semibold text-graphite-900 xl:block">
            {site.phoneDisplay}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            className="btn hidden bg-graphite-900 !py-3 text-white hover:bg-petrol-900 sm:inline-flex"
          >
            Cotizar ahora
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-xl text-graphite-900 transition-colors hover:bg-steel-100 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Móvil" className="mx-auto mt-2 max-w-[1312px] rounded-2xl bg-white p-5 shadow-xl lg:hidden">
          <ul className="grid">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-steel-200 py-4 font-v2 text-2xl font-bold text-graphite-900 last:border-0">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={whatsappUrl()} target="_blank" rel="noopener" className="btn mt-4 w-full bg-graphite-900 text-white">
            Cotizar ahora
          </a>
        </nav>
      )}
    </header>
  );
}
