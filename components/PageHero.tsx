import Image from "next/image";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export function PageHero({
  title,
  intro,
  image,
  imageAlt = "",
  crumbs,
  children,
}: {
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  crumbs: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  const all = [{ name: "Inicio", path: "/" }, ...crumbs];
  return (
    <section className="container-x pt-6 pb-16 lg:pt-10 lg:pb-24">
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Ruta de navegación">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <CaretRight size={12} aria-hidden="true" />}
              {i < all.length - 1 ? (
                <Link href={c.path} className="transition-colors hover:text-ink">{c.name}</Link>
              ) : (
                <span aria-current="page" className="text-ink">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className={`mt-8 grid items-center gap-10 ${image ? "lg:grid-cols-[1fr_1fr] lg:gap-14" : ""}`}>
        <div className="animate-copy-in">
          <h1 className="max-w-[20ch] text-[2.4rem] font-semibold text-ink sm:text-5xl xl:text-[3.4rem]">{title}</h1>
          {intro && <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-ink-soft">{intro}</p>}
          {children && <div className="mt-9">{children}</div>}
        </div>
        {image && (
          <div className="relative aspect-[4/3] animate-frame-open overflow-hidden rounded-[var(--radius-frame)] bg-petrol-950">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
