import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  experience,
  featuredProjects,
  impactStats,
  profile,
  projects,
  resumeHighlights,
  skillGroups,
} from "@/content/portfolio-data";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  telephone: profile.phone,
  address: profile.location,
  url: profile.linkedin,
  sameAs: [profile.linkedin, profile.github],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="brand-page-bg flex-1">
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-14 pt-16 md:grid-cols-[1.6fr_1fr] md:px-8 md:pt-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-ink-muted)]">Portfolio 2026</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--brand-ink)] md:text-6xl">{profile.name}</h1>
            <p className="mt-4 text-xl font-semibold text-slate-700 md:text-2xl">{profile.title}</p>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-700">{profile.heroLine}</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{profile.summary}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                View Resume
              </Link>
              <a
                href="/Sameera-Roshan-Dias-Resume.txt"
                download
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
              >
                Download CV
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(120deg,rgba(15,23,42,.08),rgba(15,118,110,.15),rgba(15,23,42,.05))]" />
            <div className="relative">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--brand-ink)] text-2xl font-bold text-white">
                SD
              </div>
              <h2 className="text-lg font-semibold text-[color:var(--brand-ink)]">Engineering Snapshot</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {resumeHighlights.map((highlight) => (
                  <li key={highlight} className="rounded-xl bg-slate-50 px-3 py-2">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 md:px-8">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {impactStats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-[color:var(--brand-ink)]">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-6xl px-5 pb-20 md:px-8">
          <SectionTitle
            eyebrow="Selected Work"
            title="Case Studies With Production Context"
            description="A curated set of projects that demonstrate architecture depth, delivery ownership, and measurable business relevance."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
            >
              Explore all {projects.length} projects
            </Link>
          </div>
        </section>

        <section id="experience" className="mx-auto w-full max-w-6xl px-5 pb-20 md:px-8">
          <SectionTitle
            eyebrow="Experience"
            title="Professional Timeline"
            description="Hands-on execution across full-stack delivery, cloud deployments, CI/CD, and production-grade ERP workflows."
          />

          <div className="space-y-6">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}-${item.period}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[color:var(--brand-ink)]">{item.role}</h3>
                    <p className="text-sm font-medium text-[color:var(--brand-accent)]">
                      {item.company}
                      {item.location ? ` · ${item.location}` : ""}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-slate-500">{item.period}</p>
                </div>

                <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600 md:text-base">
                  {item.highlights.slice(0, 4).map((point) => (
                    <li key={point} className="rounded-xl bg-slate-50 px-4 py-3">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-6xl px-5 pb-20 md:px-8">
          <SectionTitle
            eyebrow="Core Skills"
            title="Technology and Delivery Toolkit"
            description="Balanced across application development, data architecture, and cloud delivery automation."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.category} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[color:var(--brand-ink)]">{group.category}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{group.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-8">
          <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(125deg,#0f172a,#164e63,#0f172a)] p-8 text-white shadow-xl md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">Open To Opportunities</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s Build Software That Lasts</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-100 md:text-lg">
              I&apos;m open to backend-heavy or full-stack roles where product quality, reliability, and ownership matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
    </>
  );
}
