import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  crumbs,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image?: string;
  imageAlt?: string;
  crumbs: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  const all = [{ name: "Inicio", path: "/" }, ...crumbs];
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-36 pb-20 text-white sm:pt-44 sm:pb-28">
      <JsonLd data={breadcrumbSchema(all)} />
      {image && (
        <>
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-10 object-cover opacity-40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        </>
      )}
      <div className="absolute inset-0 -z-10 bg-steps opacity-40" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-20 -z-10 size-[30rem] rounded-full bg-brand-teal/30 blur-3xl" aria-hidden="true" />
      <div className="container-x">
        <nav aria-label="Ruta de navegación">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/55">
            {all.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
                {i < all.length - 1 ? (
                  <Link href={c.path} className="transition hover:text-white">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-white/85">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="mt-8 animate-rise text-sm font-semibold tracking-wider text-brand-lime uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl animate-rise text-4xl leading-[1.05] font-bold [animation-delay:100ms] sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-white/70 [animation-delay:200ms] sm:text-xl">{intro}</p>}
        {children && <div className="mt-9 animate-rise [animation-delay:300ms]">{children}</div>}
      </div>
    </section>
  );
}
