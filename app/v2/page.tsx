import type { Metadata } from "next";
import { Hero } from "@/components/v2/Hero";
import { Brands } from "@/components/v2/Brands";
import { ServicesCarousel } from "@/components/v2/ServicesCarousel";
import { About } from "@/components/v2/About";
import { ProjectsBento } from "@/components/v2/ProjectsBento";
import { WhyUs } from "@/components/v2/WhyUs";
import { Process } from "@/components/v2/Process";
import { FAQ } from "@/components/v2/FAQ";
import { CTA } from "@/components/v2/CTA";
import { faqs, services } from "@/lib/site";

// Versión alternativa para comparar. No se indexa; si se elige, pasa a ser la página de inicio.
export const metadata: Metadata = {
  title: { absolute: "Versión 2 | Puertas Automáticas del Llano" },
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

export default function HomeV2() {
  return (
    <>
      <Hero />
      <Brands />
      <ServicesCarousel services={services} />
      <About />
      <ProjectsBento />
      <WhyUs />
      <Process />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
