import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Puertas automáticas y eléctricas en Villavicencio | Puertas Automáticas del Llano",
    template: "%s | Puertas Automáticas del Llano",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.name,
  formatDetection: { telephone: true },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  other: {
    "geo.region": "CO-MET",
    "geo.placename": "Villavicencio",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2236",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
          Saltar al contenido
        </a>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
