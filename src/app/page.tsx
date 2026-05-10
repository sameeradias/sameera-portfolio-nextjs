import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { profile } from "@/content/portfolio-data";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  telephone: profile.phone,
  address: { "@type": "PostalAddress", addressLocality: "Kotte", addressCountry: "LK" },
  url: "https://sameeradias.site",
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [".NET", "ASP.NET Core", "Next.js", "React", "React Native", "PostgreSQL", "AWS", "Docker", "TypeScript", "CI/CD"],
  worksFor: { "@type": "Organization", name: "DevX Technologies" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Rajarata University of Sri Lanka" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sameera Roshan Dias | Software Engineer",
  url: "https://sameeradias.site",
  description:
    "Portfolio of Sameera Roshan Dias — Software Engineer building production SaaS and ERP systems with .NET, Next.js, React Native, and AWS.",
};

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />

        {/* Latest Articles */}
        <section className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Blog</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary">Latest Articles</h2>
            </div>
            <Link href="/blog" className="text-sm font-medium text-accent hover:underline">View all →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-border-hover"
              >
                <time className="text-xs text-text-muted">{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                <h3 className="mt-2 font-bold text-text-primary group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                <p className="mt-2 text-sm text-text-secondary line-clamp-2">{post.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
    </>
  );
}
