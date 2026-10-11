const steps = [
  { title: "Nos escribes", text: "Envías por WhatsApp una foto de tu puerta y sus medidas aproximadas." },
  { title: "Visita y cotización", text: "Revisamos la puerta, recomendamos el motor adecuado y te enviamos un valor claro." },
  { title: "Instalación", text: "Montamos motor, sensores y controles, y te explicamos cómo usar el sistema." },
  { title: "Mantenimiento", text: "Seguimos disponibles para revisiones preventivas y reparaciones." },
];

export function Process() {
  return (
    <section aria-labelledby="proceso" className="container-x pb-24 lg:pb-32">
      <h2 id="proceso" className="text-3xl font-semibold text-ink sm:text-[2.6rem]">Así trabajamos</h2>
      <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.title} className="border-t-2 border-ink pt-5">
            <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-ink-soft">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
