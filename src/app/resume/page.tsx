import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { education, experience, infrastructureHighlights, leadership, profile, references, skillGroups } from "@/content/portfolio-data";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Sameera Roshan Dias.",
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto w-full max-w-5xl px-5 pb-24 pt-10 md:px-8">
          <div className="flex items-start justify-between gap-4">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Resume</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">Sameera Roshan Dias</h1>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                Software Engineer with production-focused full-stack experience in SaaS, ERP, cloud delivery, and secure backend architecture.
              </p>
            </div>
            <a
              href="/Sameera-Roshan-Dias-Resume.pdf"
              download
              className="shrink-0 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Download PDF
            </a>
          </div>

          <article className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h2 className="text-xl font-semibold text-text-primary">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {profile.location} · {profile.phone} · {profile.email}
            </p>

            <h2 className="mt-8 text-xl font-semibold text-text-primary">Experience</h2>
            <div className="mt-4 space-y-6">
              {experience.map((item) => (
                <section key={`${item.company}-${item.role}-${item.period}`}>
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-lg font-semibold text-text-primary">{item.role}</h3>
                    <p className="text-sm font-medium text-text-muted">{item.period}</p>
                  </div>
                  <p className="text-sm font-semibold text-accent-secondary">{item.company}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-text-secondary">
                    {item.highlights.slice(0, 4).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <h2 className="mt-8 text-xl font-semibold text-text-primary">Technical Skills</h2>
            <div className="mt-4 space-y-3">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-semibold text-text-primary">{group.category}</p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    <span className="font-medium text-accent">Production:</span>{" "}
                    {group.items.filter((i) => i.level === "production").map((i) => i.name).join(", ")}
                    {group.items.some((i) => i.level === "familiar") && (
                      <> · <span className="text-text-muted">Familiar: {group.items.filter((i) => i.level === "familiar").map((i) => i.name).join(", ")}</span></>
                    )}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-8 text-xl font-semibold text-text-primary">Infrastructure & DevOps</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-text-secondary">
              {infrastructureHighlights.slice(0, 4).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-text-primary">Education</h2>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-text-secondary">
              {education.map((item) => (
                <li key={`${item.title}-${item.period}`}>
                  <p className="font-medium text-text-primary">{item.title}</p>
                  <p>{item.institute}</p>
                  <p className="text-text-muted">{item.period}</p>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-text-primary">Leadership</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-text-secondary">
              {leadership.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>

            <details className="mt-8 rounded-xl border border-border bg-surface-elevated p-4">
              <summary className="cursor-pointer text-sm font-semibold text-text-primary">Professional references</summary>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-secondary">
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
      <Footer />
    </>
  );
}
