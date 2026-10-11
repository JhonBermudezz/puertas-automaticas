import { Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { telUrl, whatsappUrl } from "@/lib/site";

/** Botón flotante de WhatsApp en escritorio y barra fija Llamar / WhatsApp en móvil. */
export function FloatingContact() {
  return (
    <>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener"
        aria-label="Escribir por WhatsApp"
        data-event="click_whatsapp_float"
        className="fixed right-6 bottom-6 z-40 hidden size-14 place-items-center rounded-full bg-petrol-900 text-on-petrol shadow-[0_10px_30px_-8px_rgb(10_42_36/0.55)] transition-[transform,background-color] duration-150 hover:bg-petrol-800 active:scale-95 md:grid"
      >
        <WhatsappLogo size={28} />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-surface md:hidden">
        <a href={telUrl} data-event="click_llamada_bar" className="flex items-center justify-center gap-2 py-4 font-semibold text-ink">
          <Phone size={20} /> Llamar
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener"
          data-event="click_whatsapp_bar"
          className="flex items-center justify-center gap-2 bg-petrol-900 py-4 font-semibold text-on-petrol"
        >
          <WhatsappLogo size={20} /> WhatsApp
        </a>
      </div>
    </>
  );
}
