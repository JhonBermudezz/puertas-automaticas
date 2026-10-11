import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center bg-navy-950 px-5 pt-24 text-center text-white">
      <div>
        <p className="font-display text-8xl font-bold text-gradient-light">404</p>
        <h1 className="mt-4 text-3xl font-bold">Esta puerta no abre</h1>
        <p className="mt-3 text-white/60">La página que buscas no existe o cambió de dirección.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-navy-950">Volver al inicio</Link>
      </div>
    </section>
  );
}
