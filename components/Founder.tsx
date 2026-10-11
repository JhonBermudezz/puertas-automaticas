import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function Founder() {
  return (
    <section aria-labelledby="fundador" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="relative grid overflow-hidden rounded-[2rem] bg-navy-900 text-white shadow-2xl shadow-navy-900/20 lg:grid-cols-2">
          <div className="relative min-h-80">
            <Image
              src="/proyectos/carlos-guarama-talanquera-villavicencio.webp"
              alt="Carlos Javier Guarama Otero, fundador de Puertas Automáticas del Llano, junto a una talanquera en Villavicencio"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-900" />
          </div>
          <Reveal className="relative p-8 sm:p-12 lg:p-16">
            <Quote className="size-12 text-brand-lime" aria-hidden="true" />
            <blockquote className="mt-6 font-display text-xl leading-relaxed font-medium sm:text-2xl">
              “Como experto en electrónica, mi objetivo es darte un servicio técnico que detecte y solucione cualquier falla
              en sistemas eléctricos, electrónicos o mecánicos, con eficacia y profesionalismo.”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-12 w-1 rounded-full bg-brand-gradient" aria-hidden="true" />
              <div>
                <h2 id="fundador" className="text-lg font-bold">{site.founder}</h2>
                <p className="text-sm text-white/60">Fundador · Experto en electrónica · +{site.yearsExperience} años de experiencia</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
