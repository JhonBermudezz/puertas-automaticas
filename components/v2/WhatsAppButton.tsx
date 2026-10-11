import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { whatsappUrl } from "@/lib/site";

/** Un solo botón flotante, reconocible, en todas las pantallas. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener"
      aria-label="Escribir por WhatsApp"
      data-event="click_whatsapp_float"
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_10px_28px_-6px_rgb(17_21_20/0.45)] transition-transform duration-150 hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6 sm:size-16"
    >
      <WhatsappLogo size={30} weight="fill" />
    </a>
  );
}
