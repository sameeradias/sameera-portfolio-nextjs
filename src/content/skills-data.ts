export type SkillPageFAQ = { question: string; answer: string };

export type SkillPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  intro: string;
  experience: string[];
  patterns: string[];
  relatedProjectSlugs: string[];
  faq: SkillPageFAQ[];
};

export const skillPages: SkillPage[] = [
  {
    slug: "dotnet-developer-sri-lanka",
    title: ".NET Development",
    metaTitle: ".NET Developer Sri Lanka | ASP.NET Core Backend Engineer",
    description:
      "Sameera Roshan Dias — .NET developer in Sri Lanka with 3+ years building production ASP.NET Core APIs, multi-tenant SaaS platforms, and ERP systems.",
    keywords: [".NET developer Sri Lanka", "ASP.NET Core engineer", ".NET SaaS developer", "C# backend developer"],
    intro:
      "I build production .NET systems that serve real businesses — multi-tenant SaaS platforms, ERP modules, and RESTful APIs handling complex domain logic across sales, inventory, payroll, and accounting workflows.",
    experience: [
      "3+ years building ASP.NET Core APIs in production environments",
      "18+ domain-driven modules across ERP and SaaS platforms",
      "Multi-tenant architecture with per-tenant PostgreSQL shard routing",
      "JWT/OTP authentication, RBAC with branch-level permission caching",
      "API versioning strategies for web and mobile client separation",
      "340+ EF Core migrations managed across platform lifecycle",
      "SignalR real-time features for appointment and notification workflows",
    ],
    patterns: [
      "Domain-Driven Design with modular service boundaries",
      "Repository + Unit of Work patterns with EF Core",
      "Middleware-based tenant resolution and connection string routing",
      "Background services for email, push notifications, and reconciliation",
      "Shared contracts via NuGet packages for cross-service communication",
      "QuestPDF for bilingual document generation (English + Sinhala)",
    ],
    relatedProjectSlugs: ["saas-based-erp-platform", "taxfriend-erp-ecosystem", "jaya-traders-erp-system"],
    faq: [
      {
        question: "What .NET technologies do you work with?",
        answer:
          "I work primarily with ASP.NET Core 8+, Entity Framework Core, SignalR, and background services. I build RESTful APIs with clean architecture patterns, JWT authentication, and PostgreSQL databases.",
      },
      {
        question: "Do you have experience with multi-tenant .NET applications?",
        answer:
          "Yes — I architected a 6-service multi-tenant ERP platform with subdomain-based tenant routing, per-tenant PostgreSQL databases, and a proxy API gateway handling shard allocation and provisioning.",
      },
      {
        question: "Can you build SaaS platforms with .NET?",
        answer:
          "Absolutely. I've built and maintained multi-tenant SaaS systems with subscription controls, module toggles, tenant provisioning, and branch-level RBAC — all on ASP.NET Core with EF Core and PostgreSQL.",
      },
    ],
  },
  {
    slug: "nextjs-engineer-sri-lanka",
    title: "Next.js Engineering",
    metaTitle: "Next.js Engineer Sri Lanka | React & Full-Stack Developer",
    description:
      "Sameera Roshan Dias — Next.js engineer in Sri Lanka building production dashboards, portfolio sites, and full-stack applications with React, TypeScript, and Tailwind CSS.",
    keywords: ["Next.js engineer Sri Lanka", "React developer Sri Lanka", "full-stack Next.js developer", "TypeScript frontend engineer"],
    intro:
      "I build production Next.js applications — from 25+ module ERP dashboards to SEO-optimized portfolio sites. I use the App Router, server components, and TypeScript for type-safe, performant web experiences.",
    experience: [
      "Next.js 15/16 with App Router and server components in production",
      "25+ dashboard modules for ERP back-office applications",
      "SEO-optimized static sites with structured data and OG images",
      "Redux Toolkit and TanStack Query for complex state management",
      "Tailwind CSS v4 for responsive, accessible UI systems",
      "Role-based dashboard experiences with configurable widgets",
    ],
    patterns: [
      "App Router with dynamic routes and generateStaticParams",
      "Server components for data fetching, client components for interactivity",
      "Metadata API for per-page SEO with JSON-LD structured data",
      "Framer Motion for scroll-triggered animations",
      "next/font for zero-layout-shift typography",
      "next/image for optimized responsive images",
    ],
    relatedProjectSlugs: ["saas-based-erp-platform", "taxfriend-erp-ecosystem", "jaya-traders-erp-system", "wildflower-erp"],
    faq: [
      {
        question: "Which version of Next.js do you use?",
        answer:
          "I work with Next.js 15 and 16 using the App Router, server components, and TypeScript. I follow the latest patterns including metadata API, route handlers, and server actions.",
      },
      {
        question: "Do you build full-stack applications with Next.js?",
        answer:
          "Yes — I build full-stack applications where Next.js handles the frontend and connects to .NET or Node.js APIs. I also use Next.js route handlers for lightweight API endpoints.",
      },
      {
        question: "Can you optimize Next.js sites for SEO?",
        answer:
          "Absolutely. I implement structured data (JSON-LD), dynamic OG images, sitemaps, RSS feeds, semantic HTML, and performance optimization for Core Web Vitals.",
      },
    ],
  },
  {
    slug: "postgresql-optimization",
    title: "PostgreSQL & Database Engineering",
    metaTitle: "PostgreSQL Optimization | Database Engineering & Performance",
    description:
      "Sameera Roshan Dias — PostgreSQL expertise including multi-tenant shard routing, EF Core migrations, query optimization, and relational database modeling for SaaS platforms.",
    keywords: ["PostgreSQL optimization", "database engineering", "EF Core PostgreSQL", "multi-tenant database design"],
    intro:
      "I design and optimize PostgreSQL databases for multi-tenant SaaS platforms — from schema design and migration management to shard routing and query performance tuning.",
    experience: [
      "PostgreSQL as primary database across all production systems",
      "Multi-tenant shard routing with per-tenant database isolation",
      "340+ EF Core migrations managed across platform lifecycle",
      "Lot-number tracking and FIFO inventory management schemas",
      "Reporting query optimization with 50% performance improvement",
      "Connection string resolution at runtime via middleware",
    ],
    patterns: [
      "Per-tenant database isolation for complete data separation",
      "Shard allocation with capacity tracking for horizontal scaling",
      "EF Core code-first migrations with careful rollback strategies",
      "Indexed queries for high-traffic reporting endpoints",
      "Relational modeling for complex domain workflows (sales, inventory, accounting)",
      "Background jobs for data reconciliation and integrity checks",
    ],
    relatedProjectSlugs: ["saas-based-erp-platform", "jaya-traders-erp-system", "taxfriend-erp-ecosystem"],
    faq: [
      {
        question: "How do you handle multi-tenant databases?",
        answer:
          "I use per-tenant PostgreSQL databases with a proxy API that resolves the correct connection string based on subdomain. This provides complete data isolation without application-level filtering.",
      },
      {
        question: "What's your approach to database migrations?",
        answer:
          "I use EF Core code-first migrations with careful versioning. I've managed 340+ migrations across a platform lifecycle, including schema changes that required data transformation scripts.",
      },
      {
        question: "How do you optimize PostgreSQL query performance?",
        answer:
          "I focus on proper indexing, query analysis with EXPLAIN, avoiding N+1 patterns in EF Core, and denormalization where reporting performance demands it. I achieved 50% improvement on reporting queries at a previous role.",
      },
    ],
  },
  {
    slug: "aws-docker-devops",
    title: "AWS, Docker & DevOps",
    metaTitle: "AWS Docker DevOps Engineer | CI/CD & Cloud Deployment",
    description:
      "Sameera Roshan Dias — DevOps expertise with AWS EC2/ECR/S3, Docker containerization, GitHub Actions CI/CD, and multi-environment deployment pipelines.",
    keywords: ["AWS DevOps engineer", "Docker deployment", "GitHub Actions CI/CD", "cloud deployment Sri Lanka"],
    intro:
      "I own the full delivery pipeline — from Dockerizing .NET APIs to deploying on AWS with automated CI/CD. I build multi-environment workflows that make deployments predictable and boring.",
    experience: [
      "AWS EC2 environments (dev, QA, production) for multiple applications",
      "Amazon ECR lifecycle management for container registry hygiene",
      "GitHub Actions pipelines with self-hosted runners across 10+ repos",
      "Branch-based deployment: develop → Dev, qa → QA, main → Production",
      "Docker multi-stage builds for optimized production images",
      "ARM-to-x64 cross-compilation for Apple Silicon → Linux production",
    ],
    patterns: [
      "Multi-stage Dockerfiles for minimal production images",
      "GitHub Actions with environment-specific secrets and approvals",
      "SSH-based deployment with health checks and rollback",
      "ECR lifecycle policies for storage cost control",
      "Self-hosted runners on macOS ARM64 for faster builds",
      "Docker Compose for local development parity",
    ],
    relatedProjectSlugs: ["saas-based-erp-platform", "taxfriend-erp-ecosystem", "jaya-traders-erp-system"],
    faq: [
      {
        question: "Which AWS services do you work with?",
        answer:
          "I primarily work with EC2 for compute, ECR for container registry, S3 for storage, and manage multi-environment deployments across dev, QA, and production.",
      },
      {
        question: "How do you structure CI/CD pipelines?",
        answer:
          "I use GitHub Actions with branch-based triggers: develop deploys to Dev, qa to QA, main to Production. Each pipeline builds Docker images, pushes to ECR, and deploys via SSH with health checks.",
      },
      {
        question: "Do you containerize applications?",
        answer:
          "Yes — I Dockerize all production applications using multi-stage builds. I handle ARM-to-x64 cross-compilation for teams developing on Apple Silicon targeting Linux production servers.",
      },
    ],
  },
];

export function getSkillPageBySlug(slug: string): SkillPage | undefined {
  return skillPages.find((p) => p.slug === slug);
}
