import Image from "next/image";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export function CTA() {
  return (
    <section className="mx-auto max-w-[1312px] px-3 pb-24 sm:px-5 lg:pb-32">
      <div className="relative grid overflow-hidden rounded-[32px] bg-petrol-900 lg:grid-cols-[1.15fr_1fr]">
        <div className="relative z-10 px-7 py-14 sm:px-14 lg:py-24">
          <h2 className="max-w-[16ch] text-4xl leading-[1.05] font-bold text-white sm:text-[3.4rem]">
            Tu próxima puerta, instalada como debe ser
          </h2>
          <p className="mt-6 max-w-[44ch] text-lg text-on-petrol-soft">
            Envíanos una foto de tu puerta y te respondemos con una recomendación y un valor de referencia.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href={whatsappUrl()} target="_blank" rel="noopener" data-event="click_whatsapp_cta" className="btn bg-white text-petrol-900 hover:bg-on-petrol">
              Cotizar ahora
            </a>
            <a href={telUrl} className="inline-flex items-center gap-2 font-semibold text-white">
              <Phone size={18} className="text-lime" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="relative min-h-72 lg:min-h-0">
          <Image src="/proyectos/puerta-abatible-negra-motores-brazo-villavicencio.webp" alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
