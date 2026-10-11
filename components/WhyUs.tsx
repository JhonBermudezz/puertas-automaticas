import Image from "next/image";
import { Award, Cpu, HardHat, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: Award,
    title: `${site.yearsExperience} años en el Llano`,
    text: "Somos pioneros en automatización de puertas en el Meta. Conocemos el clima, los materiales y los retos de cada tipo de propiedad.",
  },
  {
    icon: Cpu,
    title: "Técnicos en electrónica",
    text: "Diagnosticamos tarjetas, motores y sensores con criterio técnico. No cambiamos piezas a ciegas: encontramos la falla real.",
  },
  {
    icon: ShieldCheck,
    title: "Marcas reconocidas",
    text: "Instalamos motores Nice, BFT, FAAC, CAME, Beninca, LiftMaster y más, y reparamos con repuestos de la misma marca.",
  },
  {
    icon: HardHat,
    title: "Seriedad y honestidad",
    text: "Son nuestros dos pilares. Cotizamos claro, cumplimos los tiempos y respondemos por el trabajo que hacemos.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20 sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/proyectos/tecnicos-instalando-puerta-automatica-meta.webp"
              alt="Equipo de Puertas Automáticas del Llano instalando una puerta en el Meta"
              fill
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-6 w-56 animate-float rounded-2xl bg-white p-5 shadow-2xl shadow-navy-900/15 sm:right-8">
            <p className="font-display text-4xl font-bold text-gradient">+{site.yearsExperience}</p>
            <p className="mt-1 text-sm font-medium text-navy-800">años automatizando puertas en Villavicencio y el Meta</p>
          </div>
          <div className="absolute -top-6 -left-6 -z-10 size-40 rounded-3xl bg-brand-gradient opacity-90" aria-hidden="true" />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Por qué elegirnos"
            title={<>Experiencia que se nota en cada <span className="text-gradient">apertura</span></>}
            intro="Una puerta automática protege tu casa o tu negocio todos los días. Por eso la instalamos como si fuera la nuestra."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.08} className="group">
                <span className="grid size-12 place-items-center rounded-2xl bg-navy-800 text-brand-lime transition duration-500 group-hover:rotate-6 group-hover:bg-brand-teal group-hover:text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-800">{title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
