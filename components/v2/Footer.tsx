import Link from "next/link";
import { FacebookLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { services, site, telUrl, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-graphite-950 pt-20 pb-10 text-steel-300">
      <div className="mx-auto grid max-w-[1312px] gap-12 px-5 sm:px-9 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="max-w-[24ch] font-v2 text-3xl leading-tight font-bold text-white">¿Hablamos de tu puerta?</p>
          <a href={whatsappUrl()} target="_blank" rel="noopener" className="btn mt-6 bg-white text-graphite-900 hover:bg-steel-100">
            Cotizar ahora
          </a>
        </div>
        <nav aria-label="Servicios">
          <h2 className="font-sans text-sm font-semibold tracking-normal text-white">Servicios</h2>
          <ul className="mt-4 grid gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}/`} className="transition-colors hover:text-white">{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal text-white">Contacto</h2>
          <address className="mt-4 grid gap-2 not-italic">
            <span>{site.city}, {site.region}, Colombia</span>
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

      {/* Firma de marca a todo el ancho */}
      <p aria-hidden="true" className="mx-auto mt-20 max-w-[1312px] px-4 font-v2 text-[length:12.5vw] leading-[0.9] font-bold tracking-[-0.05em] whitespace-nowrap text-graphite-800 select-none lg:text-[10.4rem]">
        Puertas del Llano
      </p>

      <div className="mx-auto mt-10 flex max-w-[1312px] flex-col gap-3 border-t border-white/10 px-5 pt-6 text-sm sm:flex-row sm:justify-between sm:px-9">
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
