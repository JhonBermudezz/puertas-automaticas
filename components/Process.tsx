import { CalendarCheck, ClipboardList, Settings, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { icon: ClipboardList, title: "Cuéntanos qué necesitas", text: "Escríbenos por WhatsApp con fotos y medidas aproximadas de tu puerta." },
  { icon: CalendarCheck, title: "Visita y cotización", text: "Revisamos la puerta, recomendamos el motor adecuado y te enviamos una cotización clara." },
  { icon: Settings, title: "Instalación", text: "Montamos el motor, los sensores y los controles, y te enseñamos a usar el sistema." },
  { icon: Wrench, title: "Mantenimiento", text: "Te acompañamos después: mantenimiento preventivo y soporte cuando lo necesites." },
];

export function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading center eyebrow="Cómo trabajamos" title={<>De la foto por WhatsApp a tu puerta <span className="text-gradient">funcionando</span></>} />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-lime md:block" aria-hidden="true" />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 0.12} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl bg-navy-800 text-white shadow-xl shadow-navy-800/20 ring-8 ring-paper">
                <Icon className="size-6" />
                <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-brand-lime text-xs font-bold text-navy-950">{i + 1}</span>
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy-800 md:mt-5">{title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
