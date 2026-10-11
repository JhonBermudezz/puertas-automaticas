import Image from "next/image";
import { Certificate, Clock, Cpu, MapPinArea, Toolbox, Wrench } from "@phosphor-icons/react/dist/ssr";

const left = [
  { icon: Certificate, text: "Más de 30 años automatizando puertas en el Meta." },
  { icon: Cpu, text: "Técnicos en electrónica: encontramos la falla real." },
  { icon: Toolbox, text: "Soluciones para casas, fincas, conjuntos y empresas." },
];
const right = [
  { icon: Clock, text: "Cotización clara y respeto por los tiempos acordados." },
  { icon: Wrench, text: "Repuestos de la misma marca del motor." },
  { icon: MapPinArea, text: "Atención en Villavicencio y municipios del Meta." },
];

function Item({ icon: Icon, text, align }: { icon: typeof Cpu; text: string; align: "left" | "right" }) {
  return (
    <li className={`flex items-center gap-4 ${align === "left" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-petrol-900 text-white">
        <Icon size={22} />
      </span>
      <p className="max-w-[26ch] font-medium text-graphite-900">{text}</p>
    </li>
  );
}

export function WhyUs() {
  return (
    <section aria-labelledby="v2-por-que" className="bg-steel-200/60 py-24 lg:py-32">
      <div className="mx-auto max-w-[1312px] px-5 sm:px-9">
        <h2 id="v2-por-que" className="mx-auto max-w-[20ch] text-center text-4xl leading-[1.05] font-bold text-graphite-950 sm:text-5xl">
          Por qué nos eligen hogares y administradores
        </h2>
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_22rem_1fr] lg:gap-12">
          <ul className="grid gap-8 lg:gap-12">
            {left.map((it) => <Item key={it.text} {...it} align="left" />)}
          </ul>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[999px_999px_28px_28px] bg-graphite-900">
            <Image src="/proyectos/tecnicos-instalando-puerta-automatica-meta.webp" alt="Técnicos de Puertas Automáticas del Llano instalando una puerta" fill sizes="384px" className="object-cover" />
          </div>
          <ul className="grid gap-8 lg:gap-12">
            {right.map((it) => <Item key={it.text} {...it} align="right" />)}
          </ul>
        </div>
      </div>
    </section>
  );
}
