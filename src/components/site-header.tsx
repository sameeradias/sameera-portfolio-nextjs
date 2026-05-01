import Link from "next/link";

const navItems = [
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <Link href="/" className="group">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-ink-muted)]">Sameera Dias</p>
          <p className="text-sm font-semibold text-[color:var(--brand-ink)] transition group-hover:text-[color:var(--brand-accent)]">
            Software Engineer
          </p>
        </Link>

        <nav aria-label="Primary" className="flex w-full flex-wrap items-center gap-4 md:w-auto md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[color:var(--brand-ink)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:sameeradias98@gmail.com"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
