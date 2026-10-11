import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { BrandMarquee } from "@/components/BrandMarquee";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Servicios de puertas automáticas en Villavicencio y el Meta",
  description:
    "Instalación, automatización, mantenimiento y reparación de puertas corredizas, abatibles, levadizas, cortinas enrollables, talanqueras y control de acceso en Villavicencio y el Meta.",
  path: "/servicios/",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title={<>Servicios de puertas <span className="text-gradient-light">automáticas</span> en Villavicencio</>}
        intro="Instalamos puertas nuevas, automatizamos las que ya tienes y las mantenemos funcionando. Elige el tipo de puerta para ver los detalles."
        image="/proyectos/puerta-corrediza-conjunto-residencial-villavicencio.webp"
        crumbs={[{ name: "Servicios", path: "/servicios/" }]}
      />
      <section className="py-24">
        <div className="container-x space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article className="group grid overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-navy-900/5 ring-1 ring-navy-800/5 md:grid-cols-[1fr_1.3fr]">
                <div className={`relative min-h-64 overflow-hidden ${i % 2 ? "md:order-last" : ""}`}>
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 sm:p-12">
                  <p className="font-display text-sm font-bold text-brand-teal">0{i + 1}</p>
                  <h2 className="mt-2 text-2xl font-bold text-navy-800 sm:text-3xl">
                    <Link href={`/servicios/${s.slug}/`} className="hover:text-brand-blue">{s.name}</Link>
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{s.answer}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-navy-800">
                        <CircleCheck className="size-5 shrink-0 text-brand-green" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/servicios/${s.slug}/`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue">
                    Ver {s.name.toLowerCase()} <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <BrandMarquee />
      <div className="pt-24 sm:pt-32"><CTA /></div>
    </>
  );
}
