import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Uses",
  description: "Tools, hardware, and software I use for software engineering — development environment, deployment stack, and productivity tools.",
  alternates: { canonical: "/uses" },
};

const uses = [
  {
    category: "Development",
    items: [
      { name: "VS Code", note: "Primary editor with Vim keybindings" },
      { name: "JetBrains Rider", note: "For .NET/C# projects" },
      { name: "iTerm2 + Zsh", note: "Terminal with Oh My Zsh" },
      { name: "Docker Desktop", note: "Local containerized development" },
      { name: "Postman", note: "API testing and documentation" },
      { name: "pgAdmin / DBeaver", note: "Database management" },
    ],
  },
  {
    category: "Languages & Frameworks",
    items: [
      { name: "C# / .NET 8", note: "Backend APIs and services" },
      { name: "TypeScript", note: "Frontend and full-stack" },
      { name: "Next.js 16", note: "Web applications" },
      { name: "React Native / Expo", note: "Mobile apps" },
      { name: "Tailwind CSS v4", note: "Styling" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "AWS EC2 / ECR / S3", note: "Cloud hosting and storage" },
      { name: "GitHub Actions", note: "CI/CD pipelines" },
      { name: "Docker", note: "Containerization" },
      { name: "Nginx", note: "Reverse proxy" },
      { name: "Vercel", note: "Frontend deployments" },
    ],
  },
  {
    category: "Hardware",
    items: [
      { name: "MacBook Pro M3", note: "Primary development machine" },
      { name: "27\" External Monitor", note: "Extended workspace" },
    ],
  },
  {
    category: "Productivity",
    items: [
      { name: "Notion", note: "Documentation and planning" },
      { name: "Figma", note: "UI design reference" },
      { name: "Slack / Discord", note: "Team communication" },
      { name: "Git + GitHub", note: "Version control" },
    ],
  },
];

export default function UsesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Uses</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Tools & Setup
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            Hardware, software, and services I use for software engineering and development.
          </p>

          <div className="mt-10 space-y-10">
            {uses.map((group) => (
              <div key={group.category}>
                <h2 className="text-lg font-bold text-text-primary">{group.category}</h2>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-3 rounded-lg border border-border bg-surface px-4 py-3">
                      <span className="font-medium text-text-primary">{item.name}</span>
                      <span className="text-sm text-text-muted">— {item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
