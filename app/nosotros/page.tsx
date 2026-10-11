import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { businessId, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Nosotros: 30 años automatizando puertas en el Llano",
  description:
    "Conoce a Puertas Automáticas del Llano: más de 30 años de experiencia en automatización de puertas en Villavicencio y el Meta, fundada por Carlos Javier Guarama Otero.",
  path: "/nosotros/",
});

const values = [
  { name: "Seriedad", text: "Cumplimos lo que cotizamos, en el tiempo acordado." },
  { name: "Honestidad", text: "Diagnosticamos la falla real y te decimos lo que de verdad necesita tu puerta." },
  { name: "Ética", text: "Trabajamos con repuestos de la misma marca y respondemos por la instalación." },
  { name: "Colaboración", text: "Escuchamos al cliente y adaptamos la solución a su espacio y su uso." },
  { name: "Excelencia", text: "Cuidamos los detalles de montaje, cableado y seguridad en cada proyecto." },
];

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${site.url}/nosotros/`,
          about: { "@id": businessId },
          mainEntity: {
            "@type": "Person",
            name: site.founder,
            jobTitle: "Fundador",
            worksFor: { "@id": businessId },
            knowsAbout: ["Electrónica", "Automatización de puertas", "Control de acceso"],
          },
        }}
      />
      <PageHero
        title={`Más de ${site.yearsExperience} años automatizando puertas en el Llano`}
        intro="Puertas Automáticas del Llano es una empresa de Villavicencio especializada en la automatización de puertas para hogares, comercios e industrias."
        image="/proyectos/tecnicos-instalando-puerta-automatica-meta.webp"
        imageAlt="Técnicos de Puertas Automáticas del Llano instalando una puerta en el Meta"
        crumbs={[{ name: "Nosotros", path: "/nosotros/" }]}
      />

      <section aria-labelledby="quienes" className="container-x pb-24 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 id="quienes" className="text-3xl font-semibold text-ink sm:text-[2.4rem]">Quiénes somos</h2>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
              Tenemos {site.yearsExperience} años de experiencia en automatización de puertas. Ofrecemos soluciones a la medida para
              hogares, comercios e industrias, con un equipo comprometido con la calidad, la eficiencia y la seguridad en cada proyecto.
            </p>
            <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
              Nos adaptamos a lo que necesita cada cliente y trabajamos con materiales y equipos de marcas reconocidas para que cada
              sistema sea durable y confiable.
            </p>
          </div>
          <dl className="grid content-start gap-8">
            <div className="border-t-2 border-ink pt-5">
              <dt className="font-display text-xl font-semibold text-ink">Misión</dt>
              <dd className="mt-2 max-w-[56ch] text-ink-soft">
                Brindar soluciones integrales en automatización de puertas con un servicio personalizado, productos de calidad,
                tecnología actual, seguridad y durabilidad.
              </dd>
            </div>
            <div className="border-t-2 border-ink pt-5">
              <dt className="font-display text-xl font-semibold text-ink">Visión</dt>
              <dd className="mt-2 max-w-[56ch] text-ink-soft">
                Ser la empresa líder en automatización de puertas a nivel nacional, con soluciones que superen las expectativas de
                nuestros clientes.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section aria-labelledby="fundador" className="container-x pb-24 lg:pb-32">
        <div className="grid overflow-hidden rounded-[var(--radius-panel)] bg-petrol-900 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative min-h-80 p-3 lg:p-4">
            <div className="relative size-full min-h-[18rem] overflow-hidden rounded-[var(--radius-frame)]">
              <Image
                src="/proyectos/carlos-guarama-talanquera-villavicencio.webp"
                alt={`${site.founder}, fundador de Puertas Automáticas del Llano`}
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:pr-16 lg:pl-10">
            <blockquote className="font-display text-2xl leading-snug font-medium text-white sm:text-[1.75rem]">
              “Mi objetivo es dar un servicio técnico que detecte y solucione cualquier falla eléctrica, electrónica o mecánica con eficacia
              y profesionalismo.”
            </blockquote>
            <div className="mt-8">
              <h2 id="fundador" className="font-sans text-lg font-semibold tracking-normal text-white">{site.founder}</h2>
              <p className="text-on-petrol-soft">Fundador y técnico en electrónica</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="valores" className="container-x pb-24 lg:pb-32">
        <h2 id="valores" className="text-3xl font-semibold text-ink sm:text-[2.4rem]">Nuestros valores</h2>
        <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.name} className="border-t border-line pt-5">
              <dt className="font-display text-xl font-semibold text-ink">{v.name}</dt>
              <dd className="mt-2 text-ink-soft">{v.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <CTA />
    </>
  );
}
