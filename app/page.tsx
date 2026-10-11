import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Stats } from "@/components/Stats";
import { WhyUs } from "@/components/WhyUs";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { Process } from "@/components/Process";
import { BrandMarquee } from "@/components/BrandMarquee";
import { Coverage } from "@/components/Coverage";
import { Founder } from "@/components/Founder";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, pageMetadata } from "@/lib/seo";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Puertas automáticas y eléctricas en Villavicencio | Puertas Automáticas del Llano",
    description: site.description,
    path: "/",
  }),
  title: { absolute: "Puertas automáticas y eléctricas en Villavicencio | Puertas Automáticas del Llano" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Hero />
      <ServicesGrid />
      <Stats />
      <WhyUs />
      <ProjectsShowcase />
      <Process />
      <BrandMarquee />
      <Coverage />
      <Founder />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
