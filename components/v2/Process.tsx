const steps = [
  { title: "Nos escribes", text: "Una foto de tu puerta y sus medidas aproximadas por WhatsApp." },
  { title: "Visita técnica", text: "Revisamos la puerta y te recomendamos el motor adecuado." },
  { title: "Instalación", text: "Montamos motor, sensores y controles, y te enseñamos a usarlos." },
  { title: "Soporte", text: "Mantenimiento preventivo y reparaciones cuando lo necesites." },
];

export function Process() {
  return (
    <section aria-labelledby="v2-proceso" className="mx-auto max-w-[1312px] px-5 py-24 sm:px-9 lg:py-32">
      <h2 id="v2-proceso" className="text-4xl leading-[1.05] font-bold text-graphite-950 sm:text-5xl">Así trabajamos</h2>
      <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <span aria-hidden="true" className="absolute top-6 right-[12%] left-6 hidden h-px bg-steel-300 lg:block" />
        {steps.map((s, i) => (
          <li key={s.title} className="relative">
            <span className="relative grid size-12 place-items-center rounded-full bg-graphite-900 font-v2 text-lg font-bold text-white ring-8 ring-steel-100 tabular-nums">
              {i + 1}
            </span>
            <h3 className="mt-6 text-2xl font-bold text-graphite-950">{s.title}</h3>
            <p className="mt-2 max-w-[30ch] text-steel-700">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
