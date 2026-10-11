import type { Metadata } from "next";
import { coverage, site, type Service } from "./site";

export const businessId = `${site.url}/#negocio`;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "es_CO",
      type: "website",
    },
    // La imagen la genera app/opengraph-image.tsx
    twitter: { card: "summary_large_image", title, description },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: site.name,
    alternateName: "Puertas eléctricas del Llano",
    description: site.description,
    url: site.url,
    logo: `${site.url}/brand/logo-completo.webp`,
    image: [
      `${site.url}/proyectos/puerta-abatible-moderna-negra-villavicencio.webp`,
      `${site.url}/proyectos/talanquera-vehicular-condominio-meta.webp`,
      `${site.url}/proyectos/puerta-seccional-garaje-casa-villavicencio.webp`,
    ],
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    founder: { "@type": "Person", name: site.founder, jobTitle: "Fundador y técnico en electrónica" },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      ...coverage.map((c) => ({ "@type": "City", name: `${c}, Meta` })),
      { "@type": "AdministrativeArea", name: "Meta, Colombia" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: site.hours.open,
        closes: site.hours.close,
      },
    ],
    sameAs: [site.social.facebook],
    knowsAbout: [
      "Puertas automáticas",
      "Puertas eléctricas",
      "Puertas corredizas",
      "Puertas abatibles",
      "Puertas levadizas",
      "Cortinas enrollables",
      "Talanqueras vehiculares",
      "Control de acceso",
    ],
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: s.name,
    description: s.answer,
    url: `${site.url}/servicios/${s.slug}/`,
    image: `${site.url}${s.image}`,
    provider: { "@id": businessId },
    areaServed: coverage.map((c) => ({ "@type": "City", name: `${c}, Meta` })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
