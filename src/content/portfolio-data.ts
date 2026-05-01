export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

export type ProjectEntry = {
  slug: string;
  name: string;
  label: string;
  summary: string;
  role: string;
  challenge: string;
  architecture: string[];
  outcomes: string[];
  stack: string[];
  featured: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const profile = {
  name: "Sameera Roshan Dias",
  location: "Madiwela, Kotte, Sri Lanka",
  phone: "+94 76 1140 025",
  email: "sameeradias98@gmail.com",
  linkedin: "https://linkedin.com/in/sameera-dias-387943110",
  github: "https://github.com/sameeradias",
  title: "Software Engineer",
  heroLine:
    "I design and ship production SaaS and ERP systems that stay reliable under real business pressure.",
  summary:
    "Software Engineer with 3+ years of experience building multi-tenant platforms, cloud deployment pipelines, and cross-platform product experiences with .NET, Next.js, and React Native.",
  focus:
    "My strongest value is delivery ownership across architecture, implementation, testing, and release workflows.",
};

export const impactStats = [
  { label: "Years in Production Engineering", value: "3+" },
  { label: "Domain Modules Delivered", value: "18+" },
  { label: "Repositories with CI/CD", value: "10+" },
  { label: "Apps Containerized", value: "10+" },
];

export const experience: ExperienceEntry[] = [
  {
    company: "DevX Technologies (Pvt) Ltd",
    role: "Software Engineer",
    period: "Apr 2025 - Present",
    highlights: [
      "Architected and developed a multi-tenant SaaS ERP platform across 6 services, including React frontends, .NET APIs, shared contracts, and a proxy API gateway routing to tenant-specific PostgreSQL shards.",
      "Built 18+ domain-driven modules including Sales, Purchases, Inventory, Logistics, Payroll, Accounting, POS, and CRM using ASP.NET Core and EF Core.",
      "Implemented API versioning and mobile-focused v2 endpoint strategy for cross-platform client integration.",
      "Delivered appointment/time-slot workflows with SignalR real-time updates.",
      "Implemented JWT, OTP verification, password reset, and email verification security flows.",
      "Improved validation logic, maintained EF Core migrations, and resolved critical production issues across sales and stock workflows.",
      "Contributed to GitHub Actions, Docker, and AWS ECR delivery pipelines.",
    ],
  },
  {
    company: "Echonlabs (Pvt) Ltd",
    role: "Associate Software Engineer",
    period: "Mar 2024 - Apr 2025",
    location: "Battaramulla",
    highlights: [
      "Built and maintained SaaS applications with Angular, NestJS, and MongoDB.",
      "Improved payment integration reliability by strengthening transaction, security, and compliance flows.",
      "Optimized reporting queries and improved reporting performance by 50%.",
      "Built unit/integration tests with Jest and contributed to peer code reviews.",
      "Handled release workflows through GitLab CI/CD pipelines.",
    ],
  },
  {
    company: "Echonlabs (Pvt) Ltd",
    role: "Trainee Software Developer",
    period: "Feb 2023 - Mar 2024",
    location: "Battaramulla",
    highlights: [
      "Contributed to large-scale finance web applications using Angular, Node.js, and MongoDB.",
      "Researched and applied secure transaction patterns for financial operations.",
      "Collaborated with cross-functional teams to troubleshoot and resolve issues in active delivery cycles.",
      "Added unit/integration tests with Jest to reduce production bug risk.",
    ],
  },
  {
    company: "DevX Technologies (Pvt) Ltd",
    role: "Trainee Mobile Software Engineer",
    period: "Aug 2022 - Jan 2023",
    highlights: [
      "Developed Flutter applications with secure payment processing and API consumption.",
      "Implemented Firebase auth and real-time database features for better app security and responsiveness.",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    slug: "taxfriend-erp-ecosystem",
    name: "TaxFriend ERP Ecosystem",
    label: "Tax Operations Platform",
    summary:
      "Built a full-stack ecosystem for tax workflows with a dedicated mobile suite, appointment scheduling, and real-time advisor communication.",
    role: "Full-stack engineer across web, API, and mobile delivery.",
    challenge:
      "Needed a customer-friendly experience that combined tax preparation, scheduling, and secure communication in one product suite.",
    architecture: [
      "Built Next.js web interfaces and React Native mobile flows with a shared API contract mindset.",
      "Implemented appointment scheduling with support for in-person sessions and real-time updates.",
      "Integrated payment workflows and secure auth across product touchpoints.",
    ],
    outcomes: [
      "Unified multiple customer tax tasks in one coherent platform experience.",
      "Reduced coordination friction through integrated scheduling and live communication channels.",
    ],
    stack: ["Next.js", ".NET", "React Native", "PostgreSQL", "SignalR"],
    featured: true,
  },
  {
    slug: "saas-based-erp-platform",
    name: "SaaS-Based ERP Platform",
    label: "Multi-Tenant SaaS Architecture",
    summary:
      "Architected a 6-service multi-tenant ERP platform with tenant provisioning, billing controls, RBAC, and gateway-based shard routing.",
    role: "Backend and platform engineer with architecture ownership.",
    challenge:
      "Required strict tenant isolation, modular feature evolution, and predictable deployment across multiple environments.",
    architecture: [
      "Built a proxy gateway that routes requests to tenant-specific PostgreSQL shards.",
      "Designed domain event flows with shared contracts for cross-service module communication.",
      "Implemented admin operations for provisioning, module toggles, and subscription controls.",
    ],
    outcomes: [
      "Enabled scalable tenant onboarding and isolated data operations.",
      "Supported 18+ business domains with consistent module design and release patterns.",
    ],
    stack: ["Next.js 15", "Vite", "ASP.NET Core", "EF Core", "PostgreSQL", "Redux Toolkit", "Zustand"],
    featured: true,
  },
  {
    slug: "jaya-traders-erp-system",
    name: "Jaya Traders ERP System",
    label: "Trading ERP",
    summary:
      "Developed a comprehensive ERP with 20+ dashboard modules including POS billing, stock operations, logistics, accounting, and reporting.",
    role: "Full-stack engineer with domain workflow ownership.",
    challenge:
      "Needed to unify core trading operations, financial visibility, and branch-specific logistics into one maintainable system.",
    architecture: [
      "Built a Next.js dashboard with invoice template design and role-aware experiences.",
      "Implemented .NET services for invoicing, purchase flow, stock transfer/adjustment, and lot tracking.",
      "Delivered logistics operations for loading/unloading sheets and route tracking.",
    ],
    outcomes: [
      "Improved end-to-end operational visibility across inventory, finance, and route activity.",
      "Enabled faster day-to-day billing and stock decision making.",
    ],
    stack: ["Next.js", ".NET 8", "EF Core", "PostgreSQL", "Docker"],
    featured: true,
  },
  {
    slug: "wildflower-erp",
    name: "Wildflower ERP",
    label: "Retail/Gifting ERP",
    summary:
      "Built a full-stack ERP for retail and gifting workflows with a custom Giftboxes module, role-based dashboards, and organizational views.",
    role: "Full-stack engineer in web/API module delivery.",
    challenge:
      "Needed custom workflows unique to gifting operations while maintaining standard ERP controls.",
    architecture: [
      "Designed dashboard structures with role-based access and configurable widgets.",
      "Implemented backend services for invoice generation, barcode flows, and document drive operations.",
      "Extended module design to include custom gifting domain logic.",
    ],
    outcomes: [
      "Consolidated standard ERP and custom retail workflows in one interface.",
      "Improved team efficiency through clearer operation-level controls.",
    ],
    stack: ["Next.js", ".NET 8", "PostgreSQL", "Redux Toolkit"],
    featured: true,
  },
  {
    slug: "chatc-ai-chatbot",
    name: "ChatC AI Chatbot for WooCommerce",
    label: "AI Commerce Support",
    summary:
      "Developed an AI chatbot platform for WordPress/WooCommerce with product-aware responses powered by RAG embeddings.",
    role: "Backend and plugin integration engineer.",
    challenge:
      "Needed to provide context-aware support responses that map correctly to changing product catalogs.",
    architecture: [
      "Built .NET API integrations with OpenAI-compatible provider support.",
      "Created WordPress plugin UX with admin settings and floating chat widget.",
      "Implemented automated product embedding pipeline for retrieval context freshness.",
    ],
    outcomes: [
      "Enabled e-commerce teams to deploy smarter support automation with low integration friction.",
      "Improved response relevance by grounding assistant answers in product data.",
    ],
    stack: [".NET Web API", "WordPress (PHP)", "OpenAI API", "RAG"],
    featured: false,
  },
  {
    slug: "crm-builder",
    name: "CRM Builder",
    label: "Visual Workflow Builder",
    summary:
      "Built a drag-and-drop CRM builder with guided setup and flexible auth/provider integration.",
    role: "Frontend and platform workflow engineer.",
    challenge:
      "Needed to reduce setup complexity while supporting diverse authentication and API integration patterns.",
    architecture: [
      "Implemented dnd-kit powered page builder interactions.",
      "Designed a guided 4-step onboarding flow for app setup, auth, and dashboard structure.",
      "Enabled support for JWT, OAuth, custom providers, webhooks, and REST endpoint configuration.",
    ],
    outcomes: [
      "Lowered onboarding friction for teams building custom CRM workflows.",
      "Expanded compatibility for varied enterprise integration requirements.",
    ],
    stack: ["Next.js 16", "MongoDB", "Zustand", "dnd-kit", "Docker"],
    featured: false,
  },
  {
    slug: "my-lms",
    name: "My LMS",
    label: "Learning Platform",
    summary:
      "Architected a learning management platform with role-based dashboards, paid enrollment, and mixed grading workflows.",
    role: "Full-stack system architect and implementer.",
    challenge:
      "Needed to support different academic roles with consistent authoring, evaluation, and communication workflows.",
    architecture: [
      "Built role-specific dashboards for students, instructors, and admins.",
      "Implemented course authoring, quiz/assignment pipelines, and hybrid auto/manual grading.",
      "Designed invite and notification flows with email verification support.",
    ],
    outcomes: [
      "Delivered a flexible LMS core for structured learning operations.",
      "Improved assessment and enrollment workflow clarity for educators.",
    ],
    stack: ["TanStack", ".NET 10", "ASP.NET Identity", "PostgreSQL"],
    featured: false,
  },
];

export const infrastructureHighlights = [
  "Provisioned and managed AWS EC2 environments (dev, QA, production) for multiple SaaS and ERP applications.",
  "Configured Amazon ECR lifecycle management to control storage and keep deployment registries clean.",
  "Designed multi-environment GitHub Actions pipelines using self-hosted runners across 10+ repositories.",
  "Implemented branch-based deployment strategy: develop -> Dev, qa -> QA, main -> Production.",
  "Automated Docker image build/push and SSH-based server deployment flows.",
  "Built ARM-to-x64 image strategies for Apple Silicon development targeting Linux production servers.",
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "Java", "Python", "Dart"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "ASP.NET Core",
      "Entity Framework Core",
      "Next.js",
      "React",
      "React Native",
      "TanStack",
      "Node.js",
      "Flutter",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "DevOps & Delivery",
    items: ["GitHub Actions", "GitLab CI/CD", "Docker", "AWS (EC2/ECR/S3)", "Linux Server Deployments"],
  },
  {
    category: "Engineering Practices",
    items: [
      "Multi-tenant SaaS Architecture",
      "RESTful API Design",
      "RBAC and JWT Security",
      "Domain-Driven Module Design",
      "Unit and Integration Testing",
      "Agile/Scrum",
    ],
  },
];

export const education = [
  {
    title: "BSc in Applied Sciences (Computer Science, Physics, Chemistry)",
    institute: "Rajarata University of Sri Lanka",
    period: "2021 - 2024",
  },
  {
    title: "GCE A/L - Bio Science Stream (3 C passes)",
    institute: "Dharmasoka College, Ambalangoda",
    period: "2018",
  },
  {
    title: "GCE O/L (8 A passes, 1 B pass)",
    institute: "Dharmasoka College, Ambalangoda",
    period: "2014",
  },
];

export const leadership = [
  "Chairperson, IEEE Student Branch (2023 - 2024)",
  "Vice Chairperson, IEEE Student Branch (2022 - 2023)",
];

export const references = [
  {
    name: "Mr. Sampath Sandaruwan",
    role: "Associate Tech Lead, 99x",
    phone: "077 4471 293",
    email: "sampaths@99x.io",
  },
  {
    name: "Mr. Vishwajith Weerasinghe",
    role: "Senior Software Engineer, DevX Technologies",
    phone: "076 2646 098",
    email: "vishwajith@devxtechnologies.com",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const resumeHighlights = [
  "Designed and delivered multi-tenant ERP systems with 18+ domain modules.",
  "Implemented secure backend architecture with JWT/OTP, RBAC, and API versioning.",
  "Built cloud delivery pipelines on AWS using Docker, ECR, and GitHub Actions.",
  "Developed full-stack product experiences across web and mobile platforms.",
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
