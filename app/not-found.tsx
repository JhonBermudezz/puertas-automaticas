import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[70svh] place-items-center py-24 text-center">
      <div>
        <p className="font-display text-7xl font-semibold text-petrol-900 tabular-nums">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-ink">No encontramos esta página</h1>
        <p className="mt-3 text-ink-soft">Puede que la dirección haya cambiado.</p>
        <Link href="/" className="btn mt-8 bg-petrol-900 text-on-petrol hover:bg-petrol-800">Volver al inicio</Link>
      </div>
    </section>
  );
}
