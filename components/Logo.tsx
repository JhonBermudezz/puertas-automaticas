import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="Puertas Automáticas del Llano — inicio">
      <Image
        src="/brand/logo-cubo.webp"
        alt=""
        width={500}
        height={340}
        priority
        className="h-9 w-auto transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
      />
      <span className={`font-display leading-[1.05] font-bold tracking-tight ${light ? "text-white" : "text-navy-800"}`}>
        <span className="block text-[0.95rem]">Puertas Automáticas</span>
        <span className={`block text-[0.7rem] font-semibold tracking-[0.2em] uppercase ${light ? "text-brand-lime" : "text-brand-teal"}`}>del Llano</span>
      </span>
    </Link>
  );
}
