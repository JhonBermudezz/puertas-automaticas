import { Header } from "@/components/v2/Header";
import { Footer } from "@/components/v2/Footer";
import { WhatsAppButton } from "@/components/v2/WhatsAppButton";

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v2 bg-steel-100 text-graphite-950">
      <Header />
      <main id="contenido">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
