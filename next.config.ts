import type { NextConfig } from "next";

// GITHUB_PAGES=true genera un sitio estático para https://<usuario>.github.io/puertas-automaticas/
const pages = process.env.GITHUB_PAGES === "true";
const basePath = pages ? "/puertas-automaticas" : "";

const nextConfig: NextConfig = {
  // Mantiene las URLs con "/" final, igual que el WordPress actual (evita perder posiciones).
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_PREVIEW: pages ? "true" : "",
  },
  ...(pages
    ? {
        output: "export" as const,
        images: { loader: "custom" as const, loaderFile: "./lib/image-loader.ts" },
      }
    : {
        images: { qualities: [70, 75, 85], formats: ["image/avif" as const, "image/webp" as const] },
        async redirects() {
          return [
            // Enlace roto del sitio anterior (/servicio/ en vez de /servicios/)
            { source: "/servicio", destination: "/servicios/", permanent: true },
            { source: "/contactanos", destination: "/contacto/", permanent: true },
            { source: "/sobre-nosotros", destination: "/nosotros/", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
