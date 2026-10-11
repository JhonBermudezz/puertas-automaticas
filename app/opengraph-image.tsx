import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Puertas Automáticas del Llano — Villavicencio, Meta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bg, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/og-fondo.jpg")),
    readFile(join(process.cwd(), "public/brand/logo-cubo.png")),
  ]);
  const bgSrc = `data:image/jpeg;base64,${bg.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#071726" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bgSrc} alt="" width={1200} height={900} style={{ position: "absolute", right: 0, top: -120, width: 760, height: 870, objectFit: "cover", opacity: 0.85 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", background: "linear-gradient(90deg, #071726 45%, rgba(7,23,38,0.6) 70%, rgba(7,23,38,0.1))" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, width: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="" width={110} height={75} />
            <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
              <span style={{ fontSize: 30, fontWeight: 700 }}>Puertas Automáticas</span>
              <span style={{ fontSize: 20, color: "#14b8a6", letterSpacing: 6 }}>DEL LLANO</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 800, color: "white" }}>Puertas automáticas y eléctricas en Villavicencio</span>
            <span style={{ marginTop: 22, fontSize: 28, color: "rgba(255,255,255,0.75)" }}>Instalación · Mantenimiento · +30 años en el Meta</span>
          </div>
          <div style={{ display: "flex", height: 8, width: 360, borderRadius: 8, background: "linear-gradient(90deg,#1f5e8c,#14898a,#3fa65a,#b8d432)" }} />
        </div>
      </div>
    ),
    size,
  );
}
