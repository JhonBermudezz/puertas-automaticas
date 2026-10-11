import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/servicios/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${site.url}/servicios/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/proyectos/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/nosotros/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/contacto/`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
