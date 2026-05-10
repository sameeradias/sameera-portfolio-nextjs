import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { skillPages, getSkillPageBySlug } from "@/content/skills-data";
import { getProjectBySlug } from "@/content/portfolio-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return skillPages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillPageBySlug(slug);
  if (!skill) return { title: "Not Found" };
  return {
    title: skill.metaTitle,
    description: skill.description,
    keywords: skill.keywords,
    alternates: { canonical: `/skills/${slug}` },
  };
}

export default async function SkillPage({ params }: Props) {
  const { slug } = await params;
  const skill = getSkillPageBySlug(slug);
  if (!skill) notFound();

  const relatedProjects = skill.relatedProjectSlugs
    .map(getProjectBySlug)
    .filter(Boolean);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: skill.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 md:px-8">
          <nav className="mb-6 text-sm text-text-muted">
            <Link href="/skills" className="hover:text-text-primary">Skills</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{skill.title}</span>
          </nav>

          <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            {skill.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">{skill.intro}</p>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-text-primary">Production Experience</h2>
            <ul className="mt-4 space-y-2">
              {skill.experience.map((item) => (
                <li key={item} className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-text-primary">Architecture Patterns</h2>
            <ul className="mt-4 space-y-2">
              {skill.patterns.map((item) => (
                <li key={item} className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {relatedProjects.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-text-primary">Related Projects</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {relatedProjects.map((project) => (
                  <Link
                    key={project!.slug}
                    href={`/projects/${project!.slug}`}
                    className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-hover"
                  >
                    <h3 className="font-semibold text-text-primary">{project!.name}</h3>
                    <p className="mt-1 text-xs text-text-muted">{project!.label}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mt-10">
            <h2 className="text-xl font-bold text-text-primary">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              {skill.faq.map((f) => (
                <details key={f.question} className="rounded-xl border border-border bg-surface p-5">
                  <summary className="cursor-pointer font-medium text-text-primary">{f.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
