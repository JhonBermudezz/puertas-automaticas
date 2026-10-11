import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quotes } from "@phosphor-icons/react/dist/ssr";
import { Shutter } from "./Shutter";
import { site } from "@/lib/site";

export function About() {
  return (
    <section aria-labelledby="v2-nosotros" className="mx-auto grid max-w-[1312px] items-center gap-12 px-5 py-24 sm:px-9 lg:grid-cols-2 lg:gap-20 lg:py-32">
      <div className="relative">
        <Shutter className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-frame)] sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="/proyectos/carlos-guarama-talanquera-villavicencio.webp"
            alt="Carlos Javier Guarama Otero, fundador, junto a una talanquera instalada en Villavicencio"
            fill
            sizes="(min-width:1024px) 600px, 100vw"
            className="object-cover"
          />
        </Shutter>
        <div className="absolute right-4 bottom-4 rounded-2xl bg-graphite-900 px-6 py-5 text-white shadow-[0_16px_40px_-16px_rgb(17_21_20/0.6)] sm:-right-6 sm:bottom-10">
          <p className="font-v2 text-5xl leading-none font-bold tabular-nums">+{site.yearsExperience}</p>
          <p className="mt-2 max-w-[11rem] text-sm leading-snug text-steel-300">años de experiencia en el Meta</p>
        </div>
      </div>

      <div>
        <h2 id="v2-nosotros" className="text-4xl leading-[1.05] font-bold text-graphite-950 sm:text-5xl">
          Compromiso en cada instalación
        </h2>
        <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-steel-700">
          Somos una empresa de Villavicencio dirigida por su fundador, técnico en electrónica. Diagnosticamos la falla real, sea motor,
          tarjeta, sensores o mecánica, y respondemos por cada trabajo que entregamos.
        </p>
        <figure className="mt-10 border-l-0 bg-white p-7 ring-1 ring-steel-200 sm:rounded-3xl sm:p-8 rounded-3xl">
          <Quotes size={28} weight="fill" className="text-petrol-700" />
          <blockquote className="mt-3 font-v2 text-xl leading-snug font-semibold text-graphite-900">
            “Mi objetivo es dar un servicio técnico que detecte y solucione cualquier falla con eficacia y profesionalismo.”
          </blockquote>
          <figcaption className="mt-5 text-sm">
            <span className="font-semibold text-graphite-900">{site.founder}</span>
            <span className="block text-steel-500">Fundador y técnico en electrónica</span>
          </figcaption>
        </figure>
        <Link href="/nosotros/" className="group mt-8 inline-flex items-center gap-2 font-semibold text-graphite-900">
          Conocer la empresa <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
