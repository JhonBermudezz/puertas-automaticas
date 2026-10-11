import Link from "next/link";
import { FacebookLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";
import { services, site, telUrl, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-petrol-950 pt-16 pb-28 text-on-petrol-soft md:pb-12">
      <div className="container-x grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo onPetrol />
          <p className="mt-5 max-w-sm leading-relaxed">
            Instalación, mantenimiento y reparación de puertas automáticas en Villavicencio y el Meta desde hace más de {site.yearsExperience} años.
          </p>
        </div>

        <nav aria-label="Servicios">
          <h2 className="font-sans text-sm font-semibold tracking-normal text-white">Servicios</h2>
          <ul className="mt-4 grid gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}/`} className="transition-colors hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal text-white">Contacto</h2>
          {/* NAP: debe coincidir con Google Business Profile */}
          <address className="mt-4 grid gap-2 not-italic">
            <span>
              {site.city}, {site.region}, Colombia
            </span>
            <a href={telUrl} className="transition-colors hover:text-white">{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white">{site.email}</a>
            <span>{site.hours.display}</span>
          </address>
          <div className="mt-6 flex gap-2">
            <a href={whatsappUrl()} target="_blank" rel="noopener" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white">
              <WhatsappLogo size={20} />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="grid size-10 place-items-center rounded-full ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white">
              <FacebookLogo size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="container-x mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <nav aria-label="Pie de página" className="flex gap-5">
          <Link href="/nosotros/" className="hover:text-white">Nosotros</Link>
          <Link href="/proyectos/" className="hover:text-white">Proyectos</Link>
          <Link href="/contacto/" className="hover:text-white">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
}
