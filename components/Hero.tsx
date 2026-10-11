import { ArrowRight, Award, Clock, ShieldCheck, Wrench } from "lucide-react";
import Link from "next/link";
import { HeroVideo } from "./HeroVideo";
import { WhatsAppIcon } from "./BrandIcons";
import { site, whatsappUrl } from "@/lib/site";

const trust = [
  { icon: Award, label: `+${site.yearsExperience} años de experiencia` },
  { icon: ShieldCheck, label: "Motores de marcas líderes" },
  { icon: Wrench, label: "Instalación y mantenimiento" },
  { icon: Clock, label: "Lun – Sáb · 7 a. m. – 6 p. m." },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-950 pt-28 pb-10 text-white md:items-center md:pb-24">
      <HeroVideo name="hero-cortina-enrollable" alt="Cortina enrollable eléctrica abriéndose en un garaje" />

      {/* Capas para legibilidad + tono de marca */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30 md:bg-gradient-to-r md:from-navy-950/95 md:via-navy-950/70 md:to-navy-950/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,137,138,0.35),transparent_60%)]" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="inline-flex animate-rise items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/85 backdrop-blur-md sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-lime opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-lime" />
            </span>
            Villavicencio · Meta · Colombia
          </p>

          <h1 className="mt-6 animate-rise text-[2.6rem] leading-[1.02] font-bold [animation-delay:120ms] sm:text-6xl lg:text-7xl">
            Puertas <span className="text-gradient-light">automáticas</span> y eléctricas en Villavicencio y el Meta
          </h1>

          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-white/75 [animation-delay:240ms] sm:text-xl">
            Instalamos, reparamos y damos mantenimiento a puertas corredizas, abatibles, levadizas,
            cortinas enrollables y talanqueras. Más de {site.yearsExperience} años abriendo puertas en el Llano.
          </p>

          <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <a
              href={whatsappUrl("Hola, vi su página web y quiero cotizar una puerta automática.")}
              target="_blank"
              rel="noopener"
              data-event="click_whatsapp_hero"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-navy-950 shadow-xl shadow-whatsapp/30 transition hover:-translate-y-0.5 hover:shadow-whatsapp/50"
            >
              <WhatsAppIcon className="size-5" />
              Cotiza por WhatsApp
            </a>
            <Link
              href="/proyectos/"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
            >
              Ver proyectos reales
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <ul className="mt-14 grid animate-rise grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-8 [animation-delay:480ms] lg:grid-cols-4">
          {trust.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-white/80">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-lime">
                <Icon className="size-[18px]" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
          <span className="size-1.5 animate-scroll-dot rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
