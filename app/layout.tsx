import type { Metadata, Viewport } from "next";
import { Geist, Schibsted_Grotesk, Urbanist } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const display = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted", display: "swap" });
const text = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist", display: "swap" });

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
  themeColor: "#f4f6f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO" className={`${display.variable} ${text.variable} ${urbanist.variable}`}>
      <body>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:ring-1 focus:ring-line">
          Saltar al contenido
        </a>
        <JsonLd data={localBusinessSchema()} />
        {children}
      </body>
    </html>
  );
}
