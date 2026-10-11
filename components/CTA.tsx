import Image from "next/image";
import { Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export function CTA({
  title = "¿Tu puerta necesita instalación o reparación?",
  text = "Escríbenos con una foto de tu puerta y te respondemos con una recomendación y un valor de referencia.",
  message,
  image = "/proyectos/puerta-abatible-moderna-negra-villavicencio.webp",
}: {
  title?: string;
  text?: string;
  message?: string;
  image?: string;
}) {
  return (
    <section className="container-x pb-24 lg:pb-32">
      <div className="grid overflow-hidden rounded-[var(--radius-panel)] bg-petrol-900 lg:grid-cols-[1.2fr_1fr]">
        <div className="px-7 py-14 sm:px-12 lg:py-20">
          <h2 className="max-w-[20ch] text-3xl font-semibold text-white sm:text-[2.6rem]">{title}</h2>
          <p className="mt-5 max-w-[48ch] text-on-petrol-soft">{text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener"
              data-event="click_whatsapp_cta"
              className="btn bg-white text-petrol-900 hover:bg-on-petrol"
            >
              <WhatsappLogo size={20} /> Cotizar por WhatsApp
            </a>
            <a href={telUrl} data-event="click_llamada_cta" className="inline-flex items-center gap-2 font-semibold text-white">
              <Phone size={18} className="text-lime" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="relative hidden min-h-80 p-4 lg:block">
          <div className="relative size-full overflow-hidden rounded-[var(--radius-frame)]">
            <Image src={image} alt="" fill sizes="40vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
