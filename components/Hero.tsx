import Link from "next/link";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { HeroVideo } from "./HeroVideo";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="container-x grid items-center gap-10 pt-6 pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pt-10 lg:pb-24">
      <div className="max-w-xl animate-copy-in">
        <h1 className="text-[2.6rem] font-semibold text-ink sm:text-5xl xl:text-[3.4rem]">
          Puertas automáticas en Villavicencio
        </h1>
        <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-ink-soft sm:text-xl">
          Instalamos, automatizamos y mantenemos puertas, talanqueras y control de acceso en todo el Meta, para hogares, conjuntos y empresas.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={whatsappUrl("Hola, vi su página web y quiero cotizar una puerta automática.")}
            target="_blank"
            rel="noopener"
            data-event="click_whatsapp_hero"
            className="btn bg-petrol-900 text-on-petrol hover:bg-petrol-800"
          >
            <WhatsappLogo size={20} />
            Cotizar por WhatsApp
          </a>
          <Link href="/proyectos/" className="group inline-flex items-center gap-2 font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-petrol-900">
            Ver proyectos
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="relative aspect-[4/3] animate-frame-open overflow-hidden rounded-[var(--radius-frame)] bg-petrol-950 lg:aspect-[5/4]">
        <HeroVideo name="hero-cortina-enrollable" alt="Cortina enrollable eléctrica abriéndose en un garaje residencial" />
      </div>
    </section>
  );
}
