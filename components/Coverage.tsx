import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { coverage, whatsappUrl } from "@/lib/site";

export function Coverage() {
  return (
    <section id="cobertura" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Zona de cobertura"
            title={<>Desde Villavicencio para todo el <span className="text-gradient">Meta</span></>}
            intro="Nuestra base está en Villavicencio. Atendemos instalaciones y mantenimientos en los principales municipios del Meta y realizamos proyectos en otras regiones de Colombia."
          />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {coverage.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 0.04}>
                <a
                  href={whatsappUrl(`Hola, necesito una puerta automática en ${c}, Meta.`)}
                  target="_blank"
                  rel="noopener"
                  className={`group flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-lg ${
                    i === 0 ? "border-transparent bg-navy-800 text-white" : "border-navy-800/10 bg-white text-navy-800 hover:border-brand-teal"
                  }`}
                >
                  <MapPin className={`size-4 shrink-0 ${i === 0 ? "text-brand-lime" : "text-brand-teal"}`} />
                  {c}
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-brand-gradient opacity-25 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <Image
              src="/brand/mapa-meta-colombia.webp"
              alt="Mapa de Colombia con el departamento del Meta resaltado"
              width={415}
              height={504}
              className="relative mx-auto w-full max-w-sm drop-shadow-2xl"
            />
            {/* Pin sobre Villavicencio (aprox.) */}
            <span className="absolute top-[43%] left-[42%]" aria-hidden="true">
              <span className="absolute -inset-3 animate-ping rounded-full bg-brand-lime/50" />
              <span className="relative grid size-6 place-items-center rounded-full bg-brand-lime shadow-lg ring-4 ring-white">
                <Navigation className="size-3 fill-navy-950 text-navy-950" />
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
