import Image from "next/image";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { coverage } from "@/lib/site";

export function Coverage() {
  return (
    <section aria-labelledby="cobertura" className="container-x pb-24 lg:pb-32">
      <div className="grid items-center gap-12 rounded-[var(--radius-panel)] bg-surface p-8 ring-1 ring-line sm:p-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 id="cobertura" className="text-3xl font-semibold text-ink sm:text-[2.6rem]">Desde Villavicencio, en todo el Meta</h2>
          <p className="mt-4 max-w-[56ch] text-ink-soft">
            Atendemos instalaciones y mantenimientos en estos municipios, y realizamos proyectos en otras regiones de Colombia.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {coverage.map((c) => (
              <li key={c} className="flex items-center gap-2 text-ink">
                <MapPin size={18} className="shrink-0 text-petrol-700" /> {c}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/brand/mapa-meta-colombia.webp"
          alt="Mapa de Colombia con el departamento del Meta resaltado"
          width={415}
          height={504}
          className="mx-auto hidden w-full max-w-[15rem] opacity-90 lg:block"
        />
      </div>
    </section>
  );
}
