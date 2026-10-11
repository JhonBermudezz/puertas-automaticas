import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="contenido">{children}</main>
      <Footer />
      <FloatingContact />
    </>
  );
}
