import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { telUrl, whatsappUrl } from "@/lib/site";

/** Botón flotante de WhatsApp (escritorio) + barra fija Llamar/WhatsApp (móvil). */
export function FloatingContact() {
  return (
    <>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener"
        aria-label="Escríbenos por WhatsApp"
        data-event="click_whatsapp_float"
        className="group fixed right-6 bottom-6 z-40 hidden size-16 place-items-center rounded-full bg-whatsapp text-white shadow-2xl shadow-whatsapp/40 transition hover:scale-110 md:grid"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp" aria-hidden="true" />
        <WhatsAppIcon className="relative size-8" />
        <span className="pointer-events-none absolute right-full mr-3 rounded-full bg-navy-900 px-4 py-2 text-sm font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition group-hover:opacity-100">
          ¿Hablamos? Escríbenos
        </span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-navy-900/95 backdrop-blur-xl md:hidden">
        <a href={telUrl} data-event="click_llamada_bar" className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white">
          <Phone className="size-5" /> Llamar
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener"
          data-event="click_whatsapp_bar"
          className="flex items-center justify-center gap-2 bg-whatsapp py-4 text-sm font-semibold text-navy-950"
        >
          <WhatsAppIcon className="size-5" /> WhatsApp
        </a>
      </div>
    </>
  );
}
