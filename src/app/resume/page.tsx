import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { education, experience, infrastructureHighlights, leadership, profile, references, skillGroups } from "@/content/portfolio-data";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Sameera Roshan Dias.",
};

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main className="brand-page-bg flex-1">
        <section className="mx-auto w-full max-w-5xl px-5 pb-24 pt-16 md:px-8 md:pt-20">
          <div className="flex items-start justify-between gap-4">
            <SectionTitle
              eyebrow="Resume"
              title="Sameera Roshan Dias"
              description="Software Engineer with production-focused full-stack experience in SaaS, ERP, cloud delivery, and secure backend architecture."
            />
            <a
              href="/Sameera-Roshan-Dias-Resume.pdf"
              download
              className="shrink-0 rounded-full bg-[color:var(--brand-ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Download PDF
            </a>
          </div>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-[color:var(--brand-ink)]">Contact</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
              {profile.location} · {profile.phone} · {profile.email}
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[color:var(--brand-ink)]">Experience</h2>
            <div className="mt-4 space-y-6">
              {experience.map((item) => (
                <section key={`${item.company}-${item.role}-${item.period}`}>
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                    <p className="text-sm font-medium text-slate-500">{item.period}</p>
                  </div>
                  <p className="text-sm font-semibold text-[color:var(--brand-accent)]">{item.company}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 md:text-base">
                    {item.highlights.slice(0, 4).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <h2 className="mt-8 text-xl font-semibold text-[color:var(--brand-ink)]">Technical Skills</h2>
            <div className="mt-4 space-y-3">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-semibold text-slate-900">{group.category}</p>
                  <p className="text-sm leading-7 text-slate-700">
                    <span className="font-medium">Production:</span>{" "}
                    {group.items.filter((i) => i.level === "production").map((i) => i.name).join(", ")}
                    {group.items.some((i) => i.level === "familiar") && (
                      <> · <span className="text-slate-500">Familiar: {group.items.filter((i) => i.level === "familiar").map((i) => i.name).join(", ")}</span></>
                    )}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-8 text-xl font-semibold text-[color:var(--brand-ink)]">Infrastructure & DevOps</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 md:text-base">
              {infrastructureHighlights.slice(0, 4).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-[color:var(--brand-ink)]">Education</h2>
            <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700 md:text-base">
              {education.map((item) => (
                <li key={`${item.title}-${item.period}`}>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p>{item.institute}</p>
                  <p className="text-slate-500">{item.period}</p>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-[color:var(--brand-ink)]">Leadership</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 md:text-base">
              {leadership.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>

            <details className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-slate-800">Professional references</summary>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                {references.map((item) => (
                  <li key={item.email}>
                    {item.name} · {item.role} · {item.phone} · {item.email}
                  </li>
                ))}
              </ul>
            </details>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
