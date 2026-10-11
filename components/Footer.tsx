import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { FacebookIcon, WhatsAppIcon } from "./BrandIcons";
import { coverage, services, site, telUrl, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-20 pb-28 text-white/70 md:pb-10">
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient" aria-hidden="true" />
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Más de {site.yearsExperience} años instalando, reparando y dando mantenimiento a puertas automáticas y eléctricas en Villavicencio y el Meta.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="grid size-10 place-items-center rounded-full bg-white/5 transition hover:bg-brand-blue hover:text-white">
              <FacebookIcon />
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full bg-white/5 transition hover:bg-whatsapp hover:text-navy-950">
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">Servicios</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}/`} className="transition hover:text-brand-lime">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">Cobertura</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {coverage.map((c) => (
              <li key={c}>{c}, Meta</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">Contacto</h2>
          {/* NAP: debe ser idéntico al de Google Business Profile */}
          <address className="mt-4 space-y-3.5 text-sm not-italic">
            <p className="flex gap-3"><MapPin className="size-5 shrink-0 text-brand-teal" /> {site.city}, {site.region}, Colombia</p>
            <a href={telUrl} className="flex gap-3 transition hover:text-white"><Phone className="size-5 shrink-0 text-brand-teal" /> {site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="flex gap-3 break-all transition hover:text-white"><Mail className="size-5 shrink-0 text-brand-teal" /> {site.email}</a>
            <p className="flex gap-3"><Clock className="size-5 shrink-0 text-brand-teal" /> {site.hours.display}</p>
          </address>
        </div>
      </div>

      <div className="container-x mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. Villavicencio, Meta, Colombia.</p>
        <nav aria-label="Pie de página" className="flex gap-5">
          <Link href="/nosotros/" className="hover:text-white">Nosotros</Link>
          <Link href="/proyectos/" className="hover:text-white">Proyectos</Link>
          <Link href="/contacto/" className="hover:text-white">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
}
