import Link from "next/link";
import { ArrowRight, CalendarCheck, MapPinArea, ShieldCheck, Wrench } from "@phosphor-icons/react/dist/ssr";
import { HeroVideo } from "./HeroVideo";
import { brands, coverage, services, site, whatsappUrl } from "@/lib/site";

const stats = [
  { icon: CalendarCheck, value: `+${site.yearsExperience}`, label: "años automatizando puertas" },
  { icon: Wrench, value: `${services.length}`, label: "líneas de servicio" },
  { icon: ShieldCheck, value: `${brands.length}`, label: "marcas que instalamos" },
  { icon: MapPinArea, value: `${coverage.length}`, label: "municipios del Meta" },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-[1312px] px-3 pt-8 sm:px-5 lg:pt-14">
      <div className="grid gap-6 px-2 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16 lg:px-4">
        <h1 className="animate-copy-in text-[2.75rem] leading-[1.02] font-bold text-graphite-950 sm:text-6xl xl:text-[4.6rem]">
          Puertas automáticas en Villavicencio y el Meta
        </h1>
        <div className="animate-copy-in [animation-delay:120ms]">
          <p className="max-w-[40ch] text-lg leading-relaxed text-steel-700">
            Instalación, automatización y mantenimiento de puertas, talanqueras y control de acceso para hogares, conjuntos y empresas.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={whatsappUrl("Hola, vi su página web y quiero cotizar una puerta automática.")}
              target="_blank"
              rel="noopener"
              data-event="click_whatsapp_hero"
              className="btn bg-petrol-900 text-white hover:bg-petrol-800"
            >
              Cotizar ahora
            </a>
            <Link href="/proyectos/" className="group inline-flex items-center gap-2 font-semibold text-graphite-900">
              Ver proyectos
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Marco: el video se ve completo, en su proporción original */}
      <div className="mt-10 animate-bezel-in rounded-[32px] bg-graphite-900 p-2.5 sm:p-3 lg:mt-12">
        <div className="relative aspect-[1280/692] overflow-hidden rounded-[24px] bg-graphite-950">
          <HeroVideo name="hero-cortina-enrollable" alt="Cortina enrollable eléctrica instalada por Puertas Automáticas del Llano, abriéndose" />
        </div>
        <dl className="grid grid-cols-2 gap-y-6 px-4 py-7 sm:px-6 lg:grid-cols-4 lg:py-8">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={`flex items-center gap-4 px-2 sm:px-4 ${i > 0 ? "lg:border-l lg:border-white/10" : ""} ${i % 2 === 1 ? "border-l border-white/10 lg:border-l" : ""}`}
            >
              <span className="hidden size-12 shrink-0 place-items-center rounded-2xl bg-white/[0.06] text-lime sm:grid">
                <Icon size={24} />
              </span>
              <div className="flex flex-col-reverse">
                <dt className="mt-1.5 text-sm leading-snug text-steel-300">{label}</dt>
                <dd className="font-v2 text-4xl leading-none font-bold text-white tabular-nums sm:text-[2.6rem]">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
