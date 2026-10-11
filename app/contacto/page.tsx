import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { FacebookIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { pageMetadata } from "@/lib/seo";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contacto: cotiza tu puerta automática en Villavicencio",
  description: `Cotiza la instalación o el mantenimiento de tu puerta automática en Villavicencio y el Meta. WhatsApp y teléfono ${site.phoneDisplay}. ${site.hours.display}.`,
  path: "/contacto/",
});

const channels = [
  { icon: WhatsAppIcon, label: "WhatsApp", value: site.phoneDisplay, href: whatsappUrl(), external: true },
  { icon: Phone, label: "Teléfono", value: site.phoneDisplay, href: telUrl },
  { icon: Mail, label: "Correo", value: site.email, href: `mailto:${site.email}` },
  { icon: FacebookIcon, label: "Facebook", value: "PuertasAutomaticasDelLlano", href: site.social.facebook, external: true },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={<>Cotiza tu puerta <span className="text-gradient-light">automática</span></>}
        intro="Cuéntanos qué necesitas y te respondemos por WhatsApp. Si nos envías una foto de tu puerta, mejor."
        crumbs={[{ name: "Contacto", path: "/contacto/" }]}
      />
      <section className="py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-4">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener" } : {})}
                className="group flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-800/5 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-navy-800 text-brand-lime transition group-hover:bg-brand-teal group-hover:text-white">
                  <Icon className="size-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{label}</span>
                  <span className="block truncate font-semibold text-navy-800">{value}</span>
                </span>
              </a>
            ))}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-navy-900 p-6 text-white">
                <MapPin className="size-6 text-brand-lime" />
                <p className="mt-3 text-sm text-white/60">Ubicación</p>
                <p className="font-semibold">{site.city}, {site.region}</p>
              </div>
              <div className="rounded-3xl bg-navy-900 p-6 text-white">
                <Clock className="size-6 text-brand-lime" />
                <p className="mt-3 text-sm text-white/60">Horario</p>
                <p className="font-semibold">{site.hours.display}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-navy-900/10 ring-1 ring-navy-800/5 sm:p-10">
            <h2 className="text-2xl font-bold text-navy-800">Escríbenos</h2>
            <p className="mt-2 text-muted">Completa el formulario y se abrirá WhatsApp con tu mensaje listo para enviar.</p>
            <div className="mt-8"><ContactForm /></div>
          </Reveal>
        </div>
      </section>
      <section className="pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-navy-800/5">
            <iframe
              title="Mapa de Villavicencio, Meta"
              src="https://www.google.com/maps?q=Villavicencio,+Meta,+Colombia&output=embed"
              className="h-96 w-full border-0 grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
