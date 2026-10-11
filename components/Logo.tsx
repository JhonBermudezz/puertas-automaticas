import Image from "next/image";
import Link from "next/link";

export function Logo({ onPetrol = false }: { onPetrol?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Puertas Automáticas del Llano, ir al inicio">
      <Image src="/brand/logo-cubo.webp" alt="" width={500} height={340} priority className="h-9 w-auto" />
      <span className={`font-display leading-none font-semibold tracking-tight ${onPetrol ? "text-on-petrol" : "text-ink"}`}>
        <span className="block text-[1.02rem]">Puertas Automáticas</span>
        <span className={`mt-1 block text-[0.78rem] font-medium tracking-normal ${onPetrol ? "text-on-petrol-soft" : "text-ink-soft"}`}>
          del Llano
        </span>
      </span>
    </Link>
  );
}
