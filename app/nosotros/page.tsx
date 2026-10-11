import Image from "next/image";
import { Handshake, Scale, ShieldCheck, Smile, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/Stats";
import { Founder } from "@/components/Founder";
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
  { icon: Smile, name: "Satisfacción" },
  { icon: Scale, name: "Ética" },
  { icon: Handshake, name: "Colaboración" },
  { icon: ShieldCheck, name: "Honestidad" },
  { icon: Sparkles, name: "Excelencia" },
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
        eyebrow="Nosotros"
        title={<>Más de {site.yearsExperience} años <span className="text-gradient-light">abriendo puertas</span> en el Llano</>}
        intro="Puertas Automáticas del Llano es una empresa de Villavicencio especializada en la automatización de puertas para hogares, comercios e industrias."
        image="/proyectos/valla-puertas-automaticas-del-llano.webp"
        crumbs={[{ name: "Nosotros", path: "/nosotros/" }]}
      />

      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold text-navy-800 sm:text-4xl">Quiénes somos</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Somos una empresa con {site.yearsExperience} años de experiencia en automatización de puertas. Ofrecemos soluciones
              personalizadas para hogares, comercios e industrias, con un equipo capacitado y comprometido con la calidad, la
              eficiencia y la seguridad en cada proyecto.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Nos adaptamos a las necesidades de cada cliente y trabajamos con materiales y tecnología de última generación para
              garantizar la durabilidad y fiabilidad de cada sistema.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-800/5">
                <h3 className="font-bold text-navy-800">Misión</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Brindar soluciones integrales en automatización de puertas con un servicio personalizado y de excelencia,
                  productos de alta calidad, tecnología avanzada, seguridad y durabilidad.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-800/5">
                <h3 className="font-bold text-navy-800">Visión</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Ser la empresa líder en automatización de puertas a nivel nacional, con soluciones innovadoras que superen las
                  expectativas de nuestros clientes.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
              <Image src="/proyectos/valla-puertas-automaticas-del-llano.webp" alt="Valla publicitaria de Puertas Automáticas del Llano en el Meta" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 size-40 rounded-3xl bg-brand-gradient" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="py-24 sm:py-32">
        <div className="container-x text-center">
          <h2 className="text-3xl font-bold text-navy-800 sm:text-4xl">Nuestros valores</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Dos pilares guían nuestro trabajo diario: <strong className="text-navy-800">seriedad y honestidad</strong>.
          </p>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {values.map(({ icon: Icon, name }, i) => (
              <Reveal as="li" key={name} delay={i * 0.06} className="group rounded-3xl bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-navy-800/5 transition hover:-translate-y-1">
                <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-gradient text-white transition duration-500 group-hover:rotate-12">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-4 font-bold text-navy-800">{name}</h3>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Founder />
      <CTA />
    </>
  );
}
