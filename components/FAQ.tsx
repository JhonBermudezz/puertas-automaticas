import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Acordeón sin JavaScript (<details>): el contenido siempre es legible para Google y las IA. */
export function FAQ({ items, title = "Preguntas frecuentes" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section id="preguntas" className="py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading eyebrow="Resolvemos tus dudas" title={title} intro="Si no encuentras tu respuesta, escríbenos por WhatsApp y te respondemos." />
        <div className="divide-y divide-navy-800/10 border-y border-navy-800/10">
          {items.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group py-2" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 text-left">
                  <h3 className="text-lg font-semibold text-navy-800">{f.q}</h3>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-navy-800/15 text-navy-800 transition duration-300 group-open:rotate-45 group-open:border-transparent group-open:bg-brand-teal group-open:text-white">
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="pr-14 pb-5 leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
