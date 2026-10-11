"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, WhatsappLogo, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";
import { services, site, telUrl, whatsappUrl } from "@/lib/site";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios/", label: "Servicios" },
  { href: "/proyectos/", label: "Proyectos" },
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/contacto/", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-200 ${
        scrolled || open ? "bg-ground/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-ground"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full bg-surface p-1 shadow-[0_1px_2px_rgb(14_26_23/0.06)] ring-1 ring-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors duration-150 ${
                    isActive(item.href) ? "bg-petrol-900 text-on-petrol" : "text-ink-soft hover:bg-ground hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            data-event="click_whatsapp_header"
            className="btn hidden bg-petrol-900 !py-3 text-on-petrol hover:bg-petrol-800 sm:inline-flex"
          >
            <WhatsappLogo size={20} weight="regular" />
            Cotizar por WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-surface lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Móvil" className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-ground lg:hidden">
          <div className="container-x pt-4 pb-32">
            <ul className="divide-y divide-line">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-4 font-display text-2xl font-semibold text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-medium text-ink-soft">Servicios</p>
            <ul className="mt-3 grid gap-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}/`} className="block py-1.5 text-ink">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={telUrl} className="mt-8 block text-lg font-medium text-ink">
              {site.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
