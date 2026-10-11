import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { VideoGallery } from "./VideoGallery";
import { projects, videos } from "@/lib/site";

export function ProjectsShowcase() {
  const featured = projects.filter((p) => !p.tall).slice(0, 6);
  return (
    <section id="proyectos" className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-steps opacity-40" aria-hidden="true" />
      <div className="absolute top-1/3 -left-40 size-[36rem] rounded-full bg-brand-blue/30 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            light
            eyebrow="Proyectos reales"
            title={<>Trabajos hechos en <span className="text-gradient-light">Villavicencio</span> y el Meta</>}
            intro="Nada de fotos de catálogo: estas son puertas que instalamos y mantenemos para casas, conjuntos y fincas del Llano."
          />
          <Reveal>
            <Link href="/proyectos/" className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-navy-950">
              Ver galería completa <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal as="li" key={p.src} delay={(i % 3) * 0.08}>
              <figure className="group relative overflow-hidden rounded-3xl">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={800}
                  height={600}
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 aspect-[4/3]`}
                />
                <figcaption className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-between gap-3 rounded-2xl bg-navy-950/70 px-4 py-3 opacity-0 backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100">
                  <span>
                    <span className="block text-xs font-semibold tracking-wider text-brand-lime uppercase">{p.type}</span>
                    <span className="block text-sm font-semibold">{p.title}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1 text-xs text-white/70">
                    <MapPin className="size-3.5" /> {p.place}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-2xl font-bold sm:text-3xl">Míralas funcionando</h3>
            <p className="mt-2 text-white/60">Videos reales de puertas que instalamos. Pasa el mouse para ver la vista previa.</p>
          </Reveal>
          <div className="mt-8">
            <VideoGallery videos={videos.slice(0, 5)} />
          </div>
        </div>
      </div>
    </section>
  );
}
