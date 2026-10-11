import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
  as: As = "h2",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  light?: boolean;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase ${light ? "text-brand-lime" : "text-brand-teal"}`}>
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <As className={`mt-3 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-navy-800"}`}>{title}</As>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/65" : "text-muted"}`}>{intro}</p>}
    </Reveal>
  );
}
