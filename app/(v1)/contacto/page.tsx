import { Clock, EnvelopeSimple, FacebookLogo, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contacto: cotiza tu puerta automática en Villavicencio",
  description: `Cotiza la instalación o el mantenimiento de tu puerta automática en Villavicencio y el Meta. WhatsApp y teléfono ${site.phoneDisplay}. ${site.hours.display}.`,
  path: "/contacto/",
});

const channels = [
  { icon: WhatsappLogo, label: "WhatsApp", value: site.phoneDisplay, href: whatsappUrl(), external: true },
  { icon: Phone, label: "Teléfono", value: site.phoneDisplay, href: telUrl },
  { icon: EnvelopeSimple, label: "Correo", value: site.email, href: `mailto:${site.email}` },
  { icon: FacebookLogo, label: "Facebook", value: "PuertasAutomaticasDelLlano", href: site.social.facebook, external: true },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Cotiza tu puerta automática"
        intro="Cuéntanos qué necesitas y te respondemos por WhatsApp. Si nos envías una foto de tu puerta, podemos orientarte más rápido."
        crumbs={[{ name: "Contacto", path: "/contacto/" }]}
      />
      <section aria-label="Canales de contacto y formulario" className="container-x pb-24 lg:pb-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <ul className="divide-y divide-line border-y border-line">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})} className="group flex items-center gap-5 py-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-surface text-petrol-900 ring-1 ring-line transition-colors duration-150 group-hover:bg-petrol-900 group-hover:text-on-petrol">
                      <Icon size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-ink-soft">{label}</span>
                      <span className="block truncate font-semibold text-ink">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <MapPin size={22} className="mt-0.5 shrink-0 text-petrol-700" />
                <div>
                  <dt className="text-sm text-ink-soft">Ubicación</dt>
                  <dd className="font-semibold text-ink">{site.city}, {site.region}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock size={22} className="mt-0.5 shrink-0 text-petrol-700" />
                <div>
                  <dt className="text-sm text-ink-soft">Horario</dt>
                  <dd className="font-semibold text-ink">{site.hours.display}</dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="rounded-[var(--radius-panel)] bg-surface p-7 ring-1 ring-line sm:p-10">
            <h2 className="text-2xl font-semibold text-ink">Escríbenos</h2>
            <p className="mt-2 text-ink-soft">Al enviar, se abre WhatsApp con tu mensaje listo.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Mapa" className="container-x pb-24 lg:pb-32">
        <div className="overflow-hidden rounded-[var(--radius-panel)] ring-1 ring-line">
          <iframe
            title="Mapa de Villavicencio, Meta"
            src="https://www.google.com/maps?q=Villavicencio,+Meta,+Colombia&output=embed"
            className="h-96 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
