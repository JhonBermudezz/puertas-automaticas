/** Preguntas visibles en dos columnas (sin acordeón): se leen de un vistazo y quedan en el HTML para Google y las IA. */
export function FAQ({ items, title = "Preguntas frecuentes" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section aria-labelledby="preguntas" className="container-x pb-24 lg:pb-32">
      <h2 id="preguntas" className="text-3xl font-semibold text-ink sm:text-[2.6rem]">{title}</h2>
      <dl className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
        {items.map((f) => (
          <div key={f.q} className="border-t border-line pt-6">
            <dt className="font-display text-lg font-semibold text-ink">{f.q}</dt>
            <dd className="mt-3 max-w-[60ch] text-ink-soft">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
