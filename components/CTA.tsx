import { Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./BrandIcons";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export function CTA({
  title = "¿Tu puerta necesita instalación o reparación?",
  text = "Escríbenos con una foto de tu puerta y te asesoramos hoy mismo.",
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="px-4 pb-24 sm:pb-32">
      <Reveal className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-16 text-center shadow-2xl shadow-brand-teal/20 sm:px-12 sm:py-20">
        <div className="absolute inset-0 bg-steps opacity-70" aria-hidden="true" />
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl leading-tight font-bold text-white sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{text}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener"
              data-event="click_whatsapp_cta"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-navy-950 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-navy-900"
            >
              <WhatsAppIcon className="size-5 text-whatsapp" /> Escríbenos por WhatsApp
            </a>
            <a
              href={telUrl}
              data-event="click_llamada_cta"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/15 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/25"
            >
              <Phone className="size-5" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
