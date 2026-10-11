"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { coverage, services, whatsappUrl } from "@/lib/site";

/** Formulario que arma un mensaje de WhatsApp (sin servidor, sin spam). */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      `Hola, soy ${f.get("nombre")}.`,
      `Necesito: ${f.get("servicio")}.`,
      `Municipio: ${f.get("municipio")}.`,
      f.get("mensaje") ? `Detalles: ${f.get("mensaje")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappUrl(msg), "_blank", "noopener");
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-2xl border-0 bg-paper px-4 py-3.5 text-navy-800 ring-1 ring-navy-800/10 transition outline-none placeholder:text-muted/60 focus:bg-white focus:ring-2 focus:ring-brand-teal";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="nombre" className="text-sm font-semibold text-navy-800">Nombre</label>
        <input id="nombre" name="nombre" required autoComplete="name" placeholder="Tu nombre" className={field} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="servicio" className="text-sm font-semibold text-navy-800">¿Qué necesitas?</label>
          <select id="servicio" name="servicio" required className={field} defaultValue="">
            <option value="" disabled>Elige un servicio</option>
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="municipio" className="text-sm font-semibold text-navy-800">Municipio</label>
          <select id="municipio" name="municipio" required className={field} defaultValue="Villavicencio">
            {coverage.map((c) => (
              <option key={c}>{c}</option>
            ))}
            <option>Otro municipio</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="mensaje" className="text-sm font-semibold text-navy-800">Cuéntanos más (opcional)</label>
        <textarea id="mensaje" name="mensaje" rows={4} placeholder="Ej: puerta corrediza de 4 metros, quiero automatizarla" className={field} />
      </div>
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 font-semibold text-navy-950 shadow-xl shadow-whatsapp/25 transition hover:-translate-y-0.5"
      >
        Enviar por WhatsApp <Send className="size-4 transition group-hover:translate-x-1" />
      </button>
      {sent && <p className="text-center text-sm text-brand-green" role="status">¡Listo! Se abrió WhatsApp con tu mensaje.</p>}
    </form>
  );
}
