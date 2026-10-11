import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

const facts = [
  { term: "Desde hace", value: `${site.yearsExperience} años` },
  { term: "Base", value: "Villavicencio, Meta" },
  { term: "Atención", value: "Lunes a sábado" },
];

export function About() {
  return (
    <section aria-labelledby="nosotros" className="container-x pb-24 lg:pb-32">
      <div className="grid overflow-hidden rounded-[var(--radius-panel)] bg-petrol-900 text-on-petrol lg:grid-cols-[1fr_1.15fr]">
        <div className="relative min-h-[22rem] p-3 lg:p-4">
          <div className="relative size-full min-h-[20rem] overflow-hidden rounded-[var(--radius-frame)]">
            <Image
              src="/proyectos/carlos-guarama-talanquera-villavicencio.webp"
              alt="Carlos Javier Guarama Otero, fundador de Puertas Automáticas del Llano, junto a una talanquera instalada en Villavicencio"
              fill
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:py-16 lg:pr-16 lg:pl-10">
          <h2 id="nosotros" className="text-3xl font-semibold text-white sm:text-[2.6rem]">
            Treinta años automatizando puertas en el Llano
          </h2>
          <p className="mt-6 max-w-[56ch] leading-relaxed text-on-petrol-soft">
            Somos una empresa de Villavicencio dirigida por {site.founder}, técnico en electrónica. Diagnosticamos la falla real
            (motor, tarjeta, sensores o mecánica) en lugar de cambiar piezas a ciegas, y respondemos por cada instalación.
          </p>
          <p className="mt-4 max-w-[56ch] leading-relaxed text-on-petrol-soft">
            Trabajamos con dos pilares: seriedad y honestidad. Cotizamos claro y cumplimos los tiempos acordados.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/12 pt-6 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.term}>
                <dt className="text-sm text-on-petrol-soft">{f.term}</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">{f.value}</dd>
              </div>
            ))}
          </dl>
          <Link href="/nosotros/" className="group mt-10 inline-flex items-center gap-2 self-start font-semibold text-white">
            Conocer la empresa
            <ArrowRight size={18} className="text-lime transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
