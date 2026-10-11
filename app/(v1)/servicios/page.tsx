import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { BrandStrip } from "@/components/BrandStrip";
import { CTA } from "@/components/CTA";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Servicios de puertas automáticas en Villavicencio y el Meta",
  description:
    "Instalación, automatización, mantenimiento y reparación de puertas corredizas, abatibles, levadizas, cortinas enrollables, talanqueras y control de acceso en Villavicencio y el Meta.",
  path: "/servicios/",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        title="Servicios de puertas automáticas en Villavicencio"
        intro="Instalamos puertas nuevas, automatizamos las que ya tienes y las mantenemos funcionando. Elige el tipo de puerta para ver los detalles."
        crumbs={[{ name: "Servicios", path: "/servicios/" }]}
      />
      <section aria-label="Lista de servicios" className="container-x pb-24 lg:pb-32">
        <ul className="divide-y divide-line border-y border-line">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/servicios/${s.slug}/`} className="group grid items-center gap-6 py-8 sm:grid-cols-[12rem_1fr_auto] sm:gap-10">
                <span className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-line">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:640px) 12rem, 100vw" className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]" />
                </span>
                <span>
                  <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{s.name}</h2>
                  <p className="mt-2 max-w-[62ch] text-ink-soft">{s.answer}</p>
                </span>
                <span className="hidden size-12 place-items-center rounded-full ring-1 ring-line transition-colors duration-150 group-hover:bg-petrol-900 group-hover:text-on-petrol group-hover:ring-petrol-900 sm:grid">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <BrandStrip />
      <CTA />
    </>
  );
}
