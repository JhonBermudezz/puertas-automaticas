"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./BrandIcons";
import { services, site, telUrl, whatsappUrl } from "@/lib/site";

const nav = [
  { href: "/servicios/", label: "Servicios", mega: true },
  { href: "/proyectos/", label: "Proyectos" },
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/contacto/", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-navy-900/85 shadow-lg shadow-black/10 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-all duration-500 ${solid ? "h-16" : "h-20"}`}>
        <Logo light />

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.mega ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white ${
                    pathname.startsWith(item.href) ? "text-white" : ""
                  }`}
                >
                  {item.label}
                  <ChevronDown className="size-4 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute top-full left-1/2 w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-navy-900/95 p-3 shadow-2xl backdrop-blur-xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/servicios/${s.slug}/`}
                        className="rounded-xl p-3 transition hover:bg-white/5"
                      >
                        <span className="block text-sm font-semibold text-white">{s.name}</span>
                        <span className="mt-0.5 line-clamp-2 block text-xs text-white/55">{s.short}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white ${
                  pathname.startsWith(item.href) ? "text-white" : "text-white/85"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telUrl}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/85 transition hover:text-white xl:flex"
          >
            <Phone className="size-4" />
            {site.phoneDisplay}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            data-event="click_whatsapp_header"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-navy-950 shadow-lg shadow-whatsapp/25 transition hover:-translate-y-0.5 hover:shadow-whatsapp/40 sm:flex"
          >
            <WhatsAppIcon className="size-4" />
            Cotizar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto bg-navy-900 lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 pt-4 pb-40">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <Link href={item.href} className="block py-3 font-display text-3xl font-semibold text-white">
                    {item.label}
                  </Link>
                  {item.mega && (
                    <div className="mb-3 grid grid-cols-1 gap-1 border-l border-white/10 pl-4">
                      {services.map((s) => (
                        <Link key={s.slug} href={`/servicios/${s.slug}/`} className="py-1.5 text-white/70">
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <a href={telUrl} className="mt-6 flex items-center gap-2 text-lg text-white/80">
                <Phone className="size-5" /> {site.phoneDisplay}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
