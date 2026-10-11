import { Plus, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { whatsappUrl } from "@/lib/site";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section aria-labelledby="v2-faq" className="mx-auto grid max-w-[1312px] gap-12 px-5 pb-24 sm:px-9 lg:grid-cols-[1fr_1.5fr] lg:gap-20 lg:pb-32">
      <div>
        <h2 id="v2-faq" className="text-4xl leading-[1.05] font-bold text-graphite-950 sm:text-5xl">Preguntas frecuentes</h2>
        <div className="mt-8 rounded-3xl bg-graphite-900 p-7 text-white">
          <p className="font-v2 text-xl font-bold">¿No encuentras tu respuesta?</p>
          <p className="mt-2 text-steel-300">Escríbenos y te responde directamente nuestro equipo técnico.</p>
          <a href={whatsappUrl()} target="_blank" rel="noopener" className="btn mt-6 bg-white text-graphite-900 hover:bg-steel-100">
            <WhatsappLogo size={20} /> Escribir por WhatsApp
          </a>
        </div>
      </div>
      <div className="divide-y divide-steel-300 border-y border-steel-300">
        {items.map((f, i) => (
          <details key={f.q} className="group" open={i === 0}>
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-6">
              <h3 className="text-lg font-bold text-graphite-950 sm:text-xl">{f.q}</h3>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-graphite-900 ring-1 ring-steel-200 transition-[transform,background-color,color] duration-300 ease-[var(--ease-out)] group-open:rotate-45 group-open:bg-graphite-900 group-open:text-white">
                <Plus size={18} />
              </span>
            </summary>
            <p className="max-w-[62ch] pr-14 pb-6 leading-relaxed text-steel-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
