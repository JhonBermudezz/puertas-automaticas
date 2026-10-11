import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { services } from "@/lib/site";

// Disposición tipo "bento": las dos primeras tarjetas son más grandes.
const spans = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
];

export function ServicesGrid() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Servicios"
            title={<>Todo para automatizar tu <span className="text-gradient">entrada</span></>}
            intro="Instalación, automatización de puertas existentes, mantenimiento preventivo y reparación. Trabajamos en casas, conjuntos, fincas, locales y empresas."
          />
          <Reveal>
            <Link href="/servicios/" className="group inline-flex items-center gap-2 font-semibold text-brand-blue">
              Ver todos los servicios
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-14 grid auto-rows-[17rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 4) * 0.06} className={spans[i]}>
              <Link
                href={`/servicios/${s.slug}/`}
                className="group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-navy-900 p-6 text-white shadow-lg shadow-navy-900/10"
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes={i < 2 ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"}
                  className="object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" />
                <span className="absolute top-5 right-5 grid size-10 place-items-center rounded-full bg-white/10 backdrop-blur-md transition duration-500 group-hover:rotate-45 group-hover:bg-brand-lime group-hover:text-navy-950">
                  <ArrowUpRight className="size-5" />
                </span>
                <div className="relative">
                  <h3 className={`font-bold ${i < 1 ? "text-3xl" : "text-xl"}`}>{s.name}</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-white/70 ${i < 1 ? "max-w-sm text-base" : "line-clamp-2"}`}>{s.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
