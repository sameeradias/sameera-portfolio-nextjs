import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllStacks, getStackBySlug } from "@/lib/stack";
import { getProjectBySlug } from "@/content/portfolio-data";

type Props = { params: Promise<{ technology: string }> };

export function generateStaticParams() {
  return getAllStacks().map((s) => ({ technology: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { technology } = await params;
  const stack = getStackBySlug(technology);
  if (!stack) return { title: "Not Found" };
  return {
    title: `${stack.technology} — Projects & Articles`,
    description: `Projects and articles using ${stack.technology} by Sameera Roshan Dias.`,
    alternates: { canonical: `/stack/${technology}` },
  };
}

export default async function StackTechnologyPage({ params }: Props) {
  const { technology } = await params;
  const stack = getStackBySlug(technology);
  if (!stack) notFound();

  const projects = stack.projectSlugs.map(getProjectBySlug).filter(Boolean);

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 md:px-8">
          <nav className="mb-6 text-sm text-text-muted">
            <Link href="/stack" className="hover:text-text-primary">Stack</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{stack.technology}</span>
          </nav>

          <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            {stack.technology}
          </h1>
          <p className="mt-3 text-base text-text-secondary">
            Used in {projects.length} project{projects.length !== 1 ? "s" : ""}.
            {stack.skillPageSlug && (
              <> See the <Link href={`/skills/${stack.skillPageSlug}`} className="text-accent hover:underline">detailed skills page</Link>.</>
            )}
          </p>

          {projects.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-text-primary">Projects</h2>
              <div className="mt-4 space-y-3">
                {projects.map((project) => (
                  <Link
                    key={project!.slug}
                    href={`/projects/${project!.slug}`}
                    className="block rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-hover"
                  >
                    <h3 className="font-semibold text-text-primary">{project!.name}</h3>
                    <p className="mt-1 text-sm text-text-secondary line-clamp-2">{project!.summary}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {stack.postSlugs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-text-primary">Related Articles</h2>
              <div className="mt-4 space-y-3">
                {stack.postSlugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="block rounded-xl border border-border bg-surface p-4 text-sm font-medium text-text-primary transition-colors hover:border-border-hover hover:text-accent"
                  >
                    {slug.replace(/-/g, " ")}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
