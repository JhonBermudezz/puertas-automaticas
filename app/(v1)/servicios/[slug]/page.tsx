import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { VideoGallery } from "@/components/VideoGallery";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { coverage, services, videos, whatsappUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: s.metaDescription, path: `/servicios/${s.slug}/` });
}

export default async function ServicePage({ params }: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const msg = `Hola, quiero cotizar ${s.name.toLowerCase()}.`;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const videoType = videos.find((v) => v.slug === s.video)?.type;
  const vids = videoType ? videos.filter((v) => v.type === videoType) : [];

  return (
    <>
      <JsonLd data={[serviceSchema(s), faqSchema(s.faqs)]} />
      <PageHero
        title={s.h1}
        intro={s.answer}
        image={s.image}
        imageAlt={s.imageAlt}
        crumbs={[
          { name: "Servicios", path: "/servicios/" },
          { name: s.name, path: `/servicios/${s.slug}/` },
        ]}
      >
        <a href={whatsappUrl(msg)} target="_blank" rel="noopener" className="btn bg-petrol-900 text-on-petrol hover:bg-petrol-800">
          <WhatsappLogo size={20} /> Cotizar por WhatsApp
        </a>
      </PageHero>

      <section aria-labelledby="como-funciona" className="container-x pb-24 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 id="como-funciona" className="text-3xl font-semibold text-ink sm:text-[2.4rem]">Cómo funciona</h2>
            {s.body.map((p) => (
              <p key={p} className="mt-5 max-w-[65ch] text-lg leading-relaxed text-ink-soft">{p}</p>
            ))}
            <h2 className="mt-14 text-2xl font-semibold text-ink sm:text-3xl">Qué incluye</h2>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3 border-t border-line pt-4 text-ink">
                  <Check size={20} weight="bold" className="mt-0.5 shrink-0 text-petrol-700" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <aside className="self-start rounded-[var(--radius-panel)] bg-petrol-900 p-8 text-on-petrol lg:sticky lg:top-24">
            <h2 className="font-sans text-sm font-semibold tracking-normal text-white">Ideal para</h2>
            <ul className="mt-3 grid gap-1.5">
              {s.idealFor.map((x) => (
                <li key={x} className="text-on-petrol-soft">{x}</li>
              ))}
            </ul>
            <h2 className="mt-8 font-sans text-sm font-semibold tracking-normal text-white">Dónde lo instalamos</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
              {coverage.map((c) => (
                <li key={c} className="flex items-center gap-1.5 text-on-petrol-soft">
                  <MapPin size={14} className="text-lime" /> {c}
                </li>
              ))}
            </ul>
            <a href={whatsappUrl(msg)} target="_blank" rel="noopener" className="btn mt-8 w-full bg-white text-petrol-900 hover:bg-on-petrol">
              <WhatsappLogo size={20} /> Cotizar por WhatsApp
            </a>
          </aside>
        </div>
      </section>

      {vids.length > 0 && (
        <section aria-labelledby="videos" className="container-x pb-24 lg:pb-32">
          <h2 id="videos" className="text-3xl font-semibold text-ink sm:text-[2.4rem]">Videos de {s.name.toLowerCase()} instaladas</h2>
          <div className="mt-10">
            <VideoGallery videos={vids} />
          </div>
        </section>
      )}

      <FAQ items={s.faqs} title={`Preguntas sobre ${s.name.toLowerCase()}`} />

      <section aria-labelledby="otros" className="container-x pb-24 lg:pb-32">
        <h2 id="otros" className="text-2xl font-semibold text-ink">Otros servicios</h2>
        <ul className="mt-6 grid divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/servicios/${r.slug}/`} className="group flex h-full items-start justify-between gap-4 py-6 md:px-6 md:first:pl-0">
                <span>
                  <span className="block font-display text-lg font-semibold text-ink">{r.name}</span>
                  <span className="mt-1 block text-ink-soft">{r.short}</span>
                </span>
                <ArrowUpRight size={20} className="shrink-0 text-ink-soft transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTA title={`¿Necesitas ${s.name.toLowerCase()}?`} message={msg} image={s.image} />
    </>
  );
}
