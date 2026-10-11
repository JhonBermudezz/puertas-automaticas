import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { BrandStrip } from "@/components/BrandStrip";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { Audiences } from "@/components/Audiences";
import { Process } from "@/components/Process";
import { Coverage } from "@/components/Coverage";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, pageMetadata } from "@/lib/seo";
import { faqs, projects, site } from "@/lib/site";

const title = "Puertas automáticas y eléctricas en Villavicencio | Puertas Automáticas del Llano";

export const metadata: Metadata = {
  ...pageMetadata({ title, description: site.description, path: "/" }),
  title: { absolute: title },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Hero />
      <BrandStrip />
      <About />
      <Services />
      <section aria-labelledby="proyectos" className="pb-24 lg:pb-32">
        <ProjectsCarousel projects={projects} />
      </section>
      <Audiences />
      <Process />
      <Coverage />
      <FAQ items={faqs} />
      <CTA />
    </>
  );
}
