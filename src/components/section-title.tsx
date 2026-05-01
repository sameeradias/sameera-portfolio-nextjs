type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-ink-muted)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[color:var(--brand-ink)] md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
    </div>
  );
}
