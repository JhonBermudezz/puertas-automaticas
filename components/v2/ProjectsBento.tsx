import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Shutter } from "./Shutter";
import { BentoVideo } from "./BentoVideo";

// 7 celdas exactas en una cuadrícula de 4 x 3 (escritorio).
const tiles = [
  { kind: "video", slug: "puerta-abatible-finca-atardecer", title: "Portón abatible de finca", type: "Abatible", place: "Meta", span: "sm:col-span-2 lg:row-span-2" },
  { src: "/proyectos/puerta-abatible-moderna-negra-villavicencio.webp", alt: "Puerta abatible negra con detalles de vidrio en Villavicencio", title: "Abatible de dos hojas", type: "Abatible", place: "Villavicencio", span: "" },
  { src: "/proyectos/puerta-peatonal-control-acceso-electroiman.webp", alt: "Puerta peatonal con control de acceso", title: "Acceso peatonal", type: "Control de acceso", place: "Meta", span: "lg:row-span-2" },
  { src: "/proyectos/puerta-seccional-garaje-casa-villavicencio.webp", alt: "Puerta seccional de garaje blanca automática", title: "Garaje seccional", type: "Levadiza", place: "Villavicencio", span: "" },
  { src: "/proyectos/talanquera-vehicular-condominio-meta.webp", alt: "Talanquera vehicular en condominio del Meta", title: "Talanquera de condominio", type: "Talanquera", place: "Meta", span: "" },
  { src: "/proyectos/puerta-abatible-madera-garaje-residencia.webp", alt: "Puerta abatible de madera para garaje residencial", title: "Abatible en madera", type: "Abatible", place: "Meta", span: "sm:col-span-2" },
  { src: "/proyectos/puerta-corrediza-conjunto-residencial-villavicencio.webp", alt: "Puerta corrediza de conjunto residencial en Villavicencio", title: "Corrediza de conjunto", type: "Corrediza", place: "Villavicencio", span: "" },
] as const;

export function ProjectsBento() {
  return (
    <section aria-labelledby="v2-proyectos" className="mx-auto max-w-[1312px] px-3 pb-24 sm:px-5 lg:pb-32">
      <div className="flex flex-col justify-between gap-6 px-2 sm:flex-row sm:items-end sm:px-4">
        <h2 id="v2-proyectos" className="max-w-[18ch] text-4xl leading-[1.05] font-bold text-graphite-950 sm:text-5xl">
          Proyectos que hablan por nosotros
        </h2>
        <Link href="/proyectos/" className="btn self-start bg-white text-graphite-900 ring-1 ring-steel-200 hover:bg-graphite-900 hover:text-white sm:self-auto">
          Ver todos los proyectos <ArrowRight size={18} />
        </Link>
      </div>

      <ul className="mt-12 grid auto-rows-[15rem] grid-cols-1 gap-3 sm:grid-cols-2 lg:auto-rows-[16rem] lg:grid-cols-4">
        {tiles.map((t, i) => (
          <li key={t.title} className={t.span}>
            <Shutter delay={(i % 4) * 90} className="group relative size-full overflow-hidden rounded-[var(--radius-frame)] bg-graphite-900">
              {"kind" in t ? (
                <BentoVideo slug={t.slug} title={t.title} />
              ) : (
                <Image src={t.src} alt={t.alt} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]" />
              )}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur-sm">
                <span className="min-w-0">
                  <span className="block truncate font-v2 font-bold text-graphite-950">{t.title}</span>
                  <span className="block text-xs text-steel-500">{t.type}, {t.place}</span>
                </span>
                {"kind" in t && <span className="shrink-0 rounded-full bg-graphite-900 px-2.5 py-1 text-[0.7rem] font-semibold text-white">Video</span>}
              </div>
            </Shutter>
          </li>
        ))}
      </ul>
    </section>
  );
}
