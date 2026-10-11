import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { VideoGallery } from "@/components/VideoGallery";
import { CTA } from "@/components/CTA";
import { pageMetadata } from "@/lib/seo";
import { projects, videos } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Proyectos de puertas automáticas en Villavicencio y el Meta",
  description:
    "Galería de proyectos reales: puertas corredizas, abatibles, levadizas, talanqueras y control de acceso instalados por Puertas Automáticas del Llano en Villavicencio y el Meta.",
  path: "/proyectos/",
});

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title={<>Proyectos reales en <span className="text-gradient-light">Villavicencio</span> y el Meta</>}
        intro="Puertas que instalamos y mantenemos en casas, conjuntos residenciales, fincas y empresas del Llano. Filtra por tipo de puerta."
        image="/proyectos/puerta-abatible-moderna-negra-villavicencio.webp"
        crumbs={[{ name: "Proyectos", path: "/proyectos/" }]}
      />
      <section className="py-24">
        <div className="container-x">
          <h2 className="sr-only">Galería de fotos</h2>
          <ProjectGallery projects={projects} />
        </div>
      </section>
      <section className="bg-navy-950 py-24 text-white">
        <div className="container-x">
          <h2 className="text-3xl font-bold sm:text-4xl">Videos de nuestras instalaciones</h2>
          <p className="mt-3 max-w-xl text-white/60">Puertas automáticas funcionando en casas, conjuntos y fincas del Meta.</p>
          <div className="mt-10"><VideoGallery videos={videos.slice(0, 9)} /></div>
        </div>
      </section>
      <div className="pt-24 sm:pt-32"><CTA title="¿Quieres que tu puerta sea el próximo proyecto?" /></div>
    </>
  );
}
