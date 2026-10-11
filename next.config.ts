import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mantiene las URLs con "/" final, igual que el WordPress actual (evita perder posiciones).
  trailingSlash: true,
  images: {
    qualities: [70, 75, 85],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Enlace roto del sitio anterior (/servicio/ en vez de /servicios/)
      { source: "/servicio", destination: "/servicios/", permanent: true },
      { source: "/contactanos", destination: "/contacto/", permanent: true },
      { source: "/sobre-nosotros", destination: "/nosotros/", permanent: true },
    ];
  },
};

export default nextConfig;
