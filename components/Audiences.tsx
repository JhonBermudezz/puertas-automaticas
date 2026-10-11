import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { whatsappUrl } from "@/lib/site";

const groups = [
  {
    title: "Para tu casa o finca",
    text: "Automatizamos la puerta que ya tienes o instalamos una nueva, con control remoto y desbloqueo manual.",
    points: ["Corredizas y abatibles", "Puertas de garaje seccionales", "Motores con batería de respaldo"],
    image: "/proyectos/puerta-abatible-finca-meta.webp",
    alt: "Portón abatible automatizado en una finca del Meta",
    message: "Hola, quiero automatizar la puerta de mi casa.",
  },
  {
    title: "Para conjuntos y empresas",
    text: "Talanqueras, control de acceso y planes de mantenimiento para porterías con uso intensivo.",
    points: ["Talanqueras vehiculares", "Lectores, tarjetas y electroimanes", "Mantenimiento programado"],
    image: "/proyectos/talanquera-vehicular-condominio-meta.webp",
    alt: "Talanquera vehicular en la entrada de un condominio del Meta",
    message: "Hola, administro un conjunto o empresa y quiero una cotización.",
  },
];

export function Audiences() {
  return (
    <section aria-labelledby="clientes" className="container-x pb-24 lg:pb-32">
      <h2 id="clientes" className="text-3xl font-semibold text-ink sm:text-[2.6rem]">Una solución para cada entrada</h2>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {groups.map((g) => (
          <article key={g.title} className="flex flex-col overflow-hidden rounded-[var(--radius-panel)] bg-surface p-3 ring-1 ring-line">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-frame)]">
              <Image src={g.image} alt={g.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col px-4 pt-7 pb-5 sm:px-6">
              <h3 className="text-2xl font-semibold text-ink">{g.title}</h3>
              <p className="mt-3 max-w-[50ch] text-ink-soft">{g.text}</p>
              <ul className="mt-6 grid gap-2.5">
                {g.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-ink">
                    <Check size={18} weight="bold" className="shrink-0 text-petrol-700" /> {p}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl(g.message)}
                target="_blank"
                rel="noopener"
                className="mt-auto inline-flex items-center gap-2 self-start pt-8 font-semibold text-petrol-900 underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-petrol-900"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
