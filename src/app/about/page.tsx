import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { profile, availability } from "@/content/portfolio-data";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.summary.slice(0, 150)}`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            {profile.name}
          </h1>

          <div className="mt-8 grid gap-8 md:grid-cols-[200px_1fr]">
            <Image
              src="/sameera-dias.jpeg"
              alt={profile.name}
              width={200}
              height={200}
              className="rounded-2xl border border-border object-cover"
            />
            <div>
              <p className="text-lg leading-relaxed text-text-secondary">{profile.summary}</p>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">{profile.focus}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-text-muted">Location</h2>
              <p className="mt-2 text-text-primary">{profile.location}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-text-muted">Availability</h2>
              <p className="mt-2 text-text-primary">{availability.status}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-text-muted">Preference</h2>
              <p className="mt-2 text-text-primary">{availability.preferences}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-text-muted">Looking For</h2>
              <p className="mt-2 text-sm text-text-primary">{availability.looking}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-text-primary">Core Expertise</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/skills/dotnet-developer-sri-lanka" className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20">.NET & ASP.NET Core</Link>
              <Link href="/skills/nextjs-engineer-sri-lanka" className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20">Next.js & React</Link>
              <Link href="/skills/postgresql-optimization" className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20">PostgreSQL</Link>
              <Link href="/skills/aws-docker-devops" className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20">AWS & Docker</Link>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-border-hover">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-border-hover">LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]">Get in Touch</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
