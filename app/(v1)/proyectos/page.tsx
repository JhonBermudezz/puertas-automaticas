import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { VideoGallery } from "@/components/VideoGallery";
import { CTA } from "@/components/CTA";
import { pageMetadata } from "@/lib/seo";
import { projects, videos } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Proyectos de puertas automáticas en Villavicencio y el Meta",
  description:
    "Fotos y videos de proyectos reales: puertas corredizas, abatibles, levadizas, talanqueras y control de acceso instalados por Puertas Automáticas del Llano en Villavicencio y el Meta.",
  path: "/proyectos/",
});

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        title="Proyectos reales en Villavicencio y el Meta"
        intro="Puertas que instalamos y mantenemos en casas, conjuntos residenciales, fincas y empresas del Llano."
        image="/proyectos/puerta-abatible-moderna-negra-villavicencio.webp"
        imageAlt="Puerta abatible automática negra instalada en una residencia de Villavicencio"
        crumbs={[{ name: "Proyectos", path: "/proyectos/" }]}
      />
      <section aria-labelledby="videos" className="container-x pb-24 lg:pb-32">
        <h2 id="videos" className="text-3xl font-semibold text-ink sm:text-[2.4rem]">Puertas en funcionamiento</h2>
        <div className="mt-10">
          <VideoGallery videos={videos} />
        </div>
      </section>
      <section aria-labelledby="fotos" className="container-x pb-24 lg:pb-32">
        <h2 id="fotos" className="text-3xl font-semibold text-ink sm:text-[2.4rem]">Galería de fotos</h2>
        <div className="mt-8">
          <ProjectGallery projects={projects} />
        </div>
      </section>
      <CTA title="¿Quieres una puerta como estas?" />
    </>
  );
}
