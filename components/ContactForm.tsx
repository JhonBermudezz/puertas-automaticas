"use client";

import { useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import { coverage, services, whatsappUrl } from "@/lib/site";

/** Arma un mensaje de WhatsApp con los datos del formulario (sin servidor). */
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
    "mt-2 w-full rounded-xl border-0 bg-ground px-4 py-3.5 text-ink ring-1 ring-line transition-shadow duration-150 outline-none placeholder:text-ink-soft focus:bg-surface focus:ring-2 focus:ring-petrol-700";

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div>
        <label htmlFor="nombre" className="font-medium text-ink">Nombre</label>
        <input id="nombre" name="nombre" required autoComplete="name" className={field} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="servicio" className="font-medium text-ink">Servicio</label>
          <select id="servicio" name="servicio" required className={field} defaultValue="">
            <option value="" disabled>Elige una opción</option>
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="municipio" className="font-medium text-ink">Municipio</label>
          <select id="municipio" name="municipio" required className={field} defaultValue="Villavicencio">
            {coverage.map((c) => (
              <option key={c}>{c}</option>
            ))}
            <option>Otro municipio</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="mensaje" className="font-medium text-ink">Detalles (opcional)</label>
        <textarea id="mensaje" name="mensaje" rows={4} className={field} aria-describedby="mensaje-ayuda" />
        <p id="mensaje-ayuda" className="mt-2 text-sm text-ink-soft">Por ejemplo: puerta corrediza de 4 metros que quiero automatizar.</p>
      </div>
      <button type="submit" className="btn w-full bg-petrol-900 text-on-petrol hover:bg-petrol-800">
        Enviar por WhatsApp <PaperPlaneTilt size={18} />
      </button>
      {sent && (
        <p className="text-center text-sm text-petrol-700" role="status">
          Se abrió WhatsApp con tu mensaje. Solo falta enviarlo.
        </p>
      )}
    </form>
  );
}
