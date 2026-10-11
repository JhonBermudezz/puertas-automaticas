import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { brands, coverage, services, site } from "@/lib/site";

const stats = [
  { value: site.yearsExperience, prefix: "+", label: "años de experiencia en automatización" },
  { value: services.length, label: "tipos de solución para tu acceso" },
  { value: brands.length, label: "marcas de motores y control de acceso" },
  { value: coverage.length, prefix: "+", label: "municipios atendidos en el Meta" },
];

export function Stats() {
  return (
    <section aria-label="Cifras" className="relative overflow-hidden bg-navy-900 py-20 text-white">
      <div className="absolute inset-0 bg-steps opacity-60" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 size-[30rem] rounded-full bg-brand-teal/30 blur-3xl" aria-hidden="true" />
      <div className="container-x relative grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <p className="font-display text-5xl font-bold sm:text-6xl">
              <span className="text-gradient-light">
                <Counter to={s.value} prefix={s.prefix} />
              </span>
            </p>
            <p className="mt-2 max-w-[14rem] text-sm leading-snug text-white/65 sm:text-base">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
