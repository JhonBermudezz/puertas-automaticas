import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CircleCheck, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { VideoGallery } from "@/components/VideoGallery";
import { WhatsAppIcon } from "@/components/BrandIcons";
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
  const vids = videos.filter((v) => s.video && (v.slug === s.video || v.type === videos.find((x) => x.slug === s.video)?.type)).slice(0, 5);

  return (
    <>
      <JsonLd data={[serviceSchema(s), faqSchema(s.faqs)]} />
      <PageHero
        eyebrow={s.name}
        title={s.h1}
        intro={s.answer}
        image={s.image}
        imageAlt={s.imageAlt}
        crumbs={[
          { name: "Servicios", path: "/servicios/" },
          { name: s.name, path: `/servicios/${s.slug}/` },
        ]}
      >
        <a
          href={whatsappUrl(msg)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 font-semibold text-navy-950 shadow-xl shadow-whatsapp/30 transition hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="size-5" /> Cotizar {s.name.toLowerCase()}
        </a>
      </PageHero>

      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="text-3xl font-bold text-navy-800 sm:text-4xl">¿Cómo funciona?</h2>
            {s.body.map((p) => (
              <p key={p} className="mt-5 text-lg leading-relaxed text-muted">{p}</p>
            ))}
            <h2 className="mt-14 text-2xl font-bold text-navy-800 sm:text-3xl">Lo que incluye</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3 rounded-2xl bg-white p-5 shadow-lg shadow-navy-900/5 ring-1 ring-navy-800/5">
                  <CircleCheck className="size-6 shrink-0 text-brand-green" />
                  <span className="font-medium text-navy-800">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15">
              <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:1024px) 35vw, 100vw" className="object-cover" />
            </div>
            <div className="rounded-3xl bg-navy-900 p-7 text-white">
              <h2 className="text-lg font-bold">Ideal para</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.idealFor.map((x) => (
                  <li key={x} className="rounded-full bg-white/10 px-4 py-1.5 text-sm">{x}</li>
                ))}
              </ul>
              <h2 className="mt-7 text-lg font-bold">Dónde lo instalamos</h2>
              <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-white/65">
                {coverage.map((c) => (
                  <span key={c} className="flex items-center gap-1"><MapPin className="size-3.5 text-brand-lime" />{c}</span>
                ))}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {vids.length > 0 && (
        <section className="bg-navy-950 py-24 text-white">
          <div className="container-x">
            <h2 className="text-3xl font-bold sm:text-4xl">Videos de {s.name.toLowerCase()} instaladas</h2>
            <div className="mt-10"><VideoGallery videos={vids} /></div>
          </div>
        </section>
      )}

      <FAQ items={s.faqs} title={`Preguntas sobre ${s.name.toLowerCase()}`} />

      <section className="pb-24">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-navy-800">Otros servicios</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/servicios/${r.slug}/`} className="group flex h-full items-start justify-between gap-4 rounded-3xl bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-800/5 transition hover:-translate-y-1 hover:shadow-xl">
                  <span>
                    <span className="block text-lg font-bold text-navy-800">{r.name}</span>
                    <span className="mt-1 block text-sm text-muted">{r.short}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-brand-teal transition group-hover:rotate-45" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA title={`¿Necesitas ${s.name.toLowerCase()}?`} message={msg} />
    </>
  );
}
