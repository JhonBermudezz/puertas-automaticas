import { ServicesExplorer } from "./ServicesExplorer";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section aria-labelledby="servicios" className="container-x pb-24 lg:pb-32">
      <h2 id="servicios" className="max-w-[18ch] text-3xl font-semibold text-ink sm:text-[2.6rem]">
        Qué hacemos por tu puerta
      </h2>
      <p className="mt-4 max-w-[60ch] text-ink-soft">
        Instalación nueva, automatización de puertas existentes, mantenimiento y reparación de todas las marcas.
      </p>
      <div className="mt-12">
        <ServicesExplorer services={services} />
      </div>
    </section>
  );
}
