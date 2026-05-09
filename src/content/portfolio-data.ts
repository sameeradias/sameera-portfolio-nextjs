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
  problemDetail: string;
  decisions: string[];
  architecture: string[];
  outcomes: string[];
  metrics: string[];
  stack: string[];
  featured: boolean;
  githubUrl?: string;
  diagramUrl?: string;
};

export type SkillItem = {
  name: string;
  level: "production" | "familiar";
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
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
    "I build the backend architecture that SaaS products scale on — and the CI/CD pipelines that make every deployment boring.",
  summary:
    "Software Engineer with 3+ years of experience building multi-tenant platforms, cloud deployment pipelines, and cross-platform product experiences with .NET, Next.js, and React Native.",
  focus:
    "My strongest value is delivery ownership across architecture, implementation, testing, and release workflows.",
};

export const availability = {
  status: "Immediately available",
  preferences: "Remote-first or hybrid in Colombo area",
  looking: "Backend-heavy or full-stack roles where I own architecture decisions, ship production systems, and work with engineers who care about code quality.",
  notLooking: "Agency/body-shop placements, pure frontend roles, or teams without code review culture",
  culture: "Small-to-mid engineering teams with strong ownership culture and direct product impact",
  relocation: "Open to relocation for the right opportunity",
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
    slug: "saas-based-erp-platform",
    name: "SaaS-Based ERP Platform",
    label: "Multi-Tenant SaaS Architecture",
    summary:
      "Architected a 6-service multi-tenant ERP platform with tenant provisioning, billing controls, RBAC, and gateway-based shard routing serving multiple business tenants.",
    role: "Backend and platform engineer with architecture ownership across all 6 services.",
    challenge:
      "Required strict tenant isolation, modular feature evolution, and predictable deployment across multiple environments.",
    problemDetail:
      "The company needed to serve multiple business clients (trading, retail, services) from a single platform without data leakage between tenants, while allowing each tenant to enable/disable modules based on their subscription. The system needed to scale horizontally — adding new tenants without redeploying existing ones — and support branch-level access control within each tenant.",
    decisions: [
      "Chose subdomain-based tenant routing through a dedicated proxy API rather than shared-database multi-tenancy, ensuring complete data isolation per tenant with separate PostgreSQL databases.",
      "Designed a 3-tier architecture: Admin Portal (tenant management) → Proxy API (routing + provisioning relay) → Client API instances (business logic), keeping only the proxy internet-facing.",
      "Implemented a shared contracts NuGet package for cross-service event definitions, ensuring type-safe communication without tight coupling.",
      "Built a shard allocation system with capacity tracking — the proxy automatically assigns new tenants to the least-loaded Client API instance.",
      "Used EF Core with per-tenant connection strings resolved at runtime via middleware, avoiding the complexity of database-per-request patterns.",
    ],
    architecture: [
      "Built a proxy gateway that routes requests to tenant-specific PostgreSQL shards based on subdomain resolution.",
      "Designed domain event flows with shared contracts for cross-service module communication.",
      "Implemented admin operations for provisioning, module toggles, and subscription controls.",
      "Created a provisioning chain: Admin Portal → Proxy API (shard allocation) → Client API (user/role/permission seeding).",
      "Built branch-level RBAC with permission caching middleware for sub-100ms authorization checks.",
    ],
    outcomes: [
      "Enabled scalable tenant onboarding — new tenants provisioned in under 30 seconds with full isolation.",
      "Supported 18+ business domains with consistent module design and release patterns.",
      "Achieved zero cross-tenant data leakage through architectural isolation rather than application-level filtering.",
    ],
    metrics: [
      "6 independently deployable services across 3 server tiers",
      "18+ domain modules (Sales, Purchases, Stock, Accounting, Payroll, Logistics, CRM, POS, etc.)",
      "340+ EF Core migrations managed across the platform lifecycle",
      "31 API controller groups in the Client API alone",
      "Sub-30-second tenant provisioning with automated role/permission seeding",
    ],
    stack: ["ASP.NET Core", "EF Core", "PostgreSQL", "Next.js 15", "Vite", "Redux Toolkit", "SignalR", "Docker", "AWS ECR", "GitHub Actions"],
    featured: true,
    diagramUrl: "/diagrams/saas-erp-architecture.svg",
  },
  {
    slug: "taxfriend-erp-ecosystem",
    name: "TaxFriend ERP Ecosystem",
    label: "Tax Operations Platform",
    summary:
      "Built a full-stack ecosystem for tax workflows with a dedicated mobile suite, appointment scheduling, and real-time advisor communication serving Sri Lankan businesses.",
    role: "Full-stack engineer across web (Next.js 15), API (.NET 8), and mobile (Expo SDK 54) delivery.",
    challenge:
      "Needed a customer-friendly experience that combined tax preparation, scheduling, and secure communication in one product suite.",
    problemDetail:
      "Tax advisors needed a unified platform where clients could browse tax categories, book appointments (in-person or virtual), make payments, and communicate in real-time — while the back-office team managed 25+ operational modules. The mobile app needed to work in Sinhala, Tamil, and English with offline-capable auth.",
    decisions: [
      "Split API into v1 (full ERP for web) and v2 (subset for mobile) to avoid bloating the mobile client with unused endpoints.",
      "Used Redux Saga in the mobile app for complex async flows (appointment booking → payment → confirmation) while keeping the web app on simpler React Context + TanStack Query.",
      "Implemented SignalR for real-time appointment workflow updates rather than polling, reducing server load and improving UX.",
      "Chose PayHere SDK for mobile payments (Sri Lankan market) with server-side reconciliation via background jobs.",
    ],
    architecture: [
      "Built Next.js 15 web interfaces (25+ dashboard modules) and Expo SDK 54 mobile flows with a shared API contract.",
      "Implemented appointment scheduling with time-slot management, escalation background jobs, and real-time SignalR updates.",
      "Integrated PayHere payment workflows with server-side reconciliation and receipt generation.",
      "Built i18n support across 3 languages (English, Sinhala, Tamil) with RTL-aware layouts.",
    ],
    outcomes: [
      "Unified multiple customer tax tasks in one coherent platform experience across web and mobile.",
      "Reduced coordination friction through integrated scheduling and live communication channels.",
      "Enabled trilingual access for Sri Lankan market with proper Sinhala/Tamil font rendering in PDFs.",
    ],
    metrics: [
      "3 client applications (Next.js web, .NET API, Expo mobile) sharing one backend",
      "25+ dashboard modules in the web back-office",
      "12 Redux slices in the mobile app managing complex async workflows",
      "5 background services (email, push, appointment escalation, payment reconciliation, system validation)",
      "37 API service modules in the backend",
    ],
    stack: ["Next.js 15", ".NET 8", "Expo SDK 54", "React Native", "PostgreSQL", "SignalR", "Redux Saga", "PayHere"],
    featured: true,
    diagramUrl: "/diagrams/taxfriend-architecture.svg",
  },
  {
    slug: "jaya-traders-erp-system",
    name: "Jaya Traders ERP System",
    label: "Trading ERP",
    summary:
      "Developed a comprehensive ERP with 20+ dashboard modules including POS billing, stock operations, logistics, accounting, and reporting for a multi-branch trading company.",
    role: "Full-stack engineer with domain workflow ownership across sales, stock, and logistics.",
    challenge:
      "Needed to unify core trading operations, financial visibility, and branch-specific logistics into one maintainable system.",
    problemDetail:
      "A multi-branch trading company was running operations on spreadsheets and disconnected tools. They needed real-time stock visibility across branches, automated inter-branch transfers, lot tracking for perishables, and a POS system that worked offline-capable with thermal printer support — all while generating Sinhala-language invoices.",
    decisions: [
      "Implemented lot-number tracking at the stock level to support FIFO for perishable goods, with automatic lot assignment during sales.",
      "Built a custom invoice template designer (drag-and-drop) so the business could create their own invoice layouts without developer involvement.",
      "Designed loading/unloading sheet workflows for logistics with route-based tracking and driver assignment.",
      "Used QuestPDF with Sinhala font support (NotoSansSinhala) for generating bilingual invoices and reports.",
    ],
    architecture: [
      "Built a Next.js dashboard with invoice template design and role-aware experiences across 20+ modules.",
      "Implemented .NET services for invoicing, purchase flow, stock transfer/adjustment, and lot tracking.",
      "Delivered logistics operations for loading/unloading sheets and route tracking with driver assignment.",
      "Built automated stock transfer jobs for inter-branch replenishment based on configurable thresholds.",
    ],
    outcomes: [
      "Improved end-to-end operational visibility across inventory, finance, and route activity.",
      "Enabled faster day-to-day billing with POS mode and thermal printer integration.",
      "Eliminated manual stock reconciliation through automated lot tracking and transfer workflows.",
    ],
    metrics: [
      "20+ operational modules covering the full trading workflow",
      "Multi-branch stock visibility with automated inter-branch transfers",
      "Bilingual invoice generation (English + Sinhala) with custom template designer",
      "11 report types including profit/loss, stock valuation, and sales analytics",
    ],
    stack: ["Next.js", ".NET 8", "EF Core", "PostgreSQL", "QuestPDF", "Docker", "GitHub Actions"],
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
    problemDetail:
      "A retail gifting business needed standard ERP capabilities (inventory, sales, invoicing) plus custom workflows for gift box assembly — combining multiple products into configurable gift packages with custom pricing, seasonal themes, and corporate bulk ordering.",
    decisions: [
      "Extended the standard product model with a 'Giftbox' composite type that references child products with quantity and position metadata.",
      "Built role-based dashboard widgets so managers see revenue metrics while warehouse staff see pending assembly orders.",
      "Implemented a document drive for storing product photography and marketing assets linked to inventory items.",
    ],
    architecture: [
      "Designed dashboard structures with role-based access and configurable widgets.",
      "Implemented backend services for invoice generation, barcode flows, and document drive operations.",
      "Extended module design to include custom gifting domain logic with composite product assembly.",
    ],
    outcomes: [
      "Consolidated standard ERP and custom retail workflows in one interface.",
      "Improved team efficiency through clearer operation-level controls and role-specific views.",
    ],
    metrics: [
      "Custom giftbox assembly workflow with composite product management",
      "Role-based dashboards with configurable widget layouts",
      "Integrated document drive for product asset management",
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
    problemDetail:
      "E-commerce stores needed automated customer support that could answer product-specific questions accurately. Generic chatbots hallucinated product details. The solution needed to stay current as products were added/removed without manual retraining.",
    decisions: [
      "Implemented a RAG pipeline that automatically re-embeds product data on WooCommerce webhook events (product created/updated/deleted).",
      "Used Qdrant vector database for semantic search over product embeddings, with fallback to keyword search.",
      "Built the WordPress plugin with a floating widget that required zero frontend framework dependencies.",
    ],
    architecture: [
      "Built .NET API integrations with OpenAI-compatible provider support and Qdrant vector storage.",
      "Created WordPress plugin UX with admin settings and floating chat widget.",
      "Implemented automated product embedding pipeline triggered by WooCommerce webhooks for real-time catalog freshness.",
    ],
    outcomes: [
      "Enabled e-commerce teams to deploy smarter support automation with low integration friction.",
      "Improved response relevance by grounding assistant answers in current product data via RAG.",
    ],
    metrics: [
      "Automated product embedding pipeline with webhook-triggered updates",
      "Zero-dependency floating chat widget for WordPress",
      "Support for multiple OpenAI-compatible LLM providers",
    ],
    stack: [".NET Web API", "WordPress (PHP)", "OpenAI API", "Qdrant", "RAG"],
    featured: false,
    githubUrl: "https://github.com/sameeradias",
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
    problemDetail:
      "Teams building internal CRM tools were spending weeks on boilerplate — auth setup, dashboard layouts, API connections. They needed a visual builder that could scaffold a working CRM in hours, not weeks.",
    decisions: [
      "Used dnd-kit for drag-and-drop interactions over alternatives like react-beautiful-dnd due to better accessibility and touch support.",
      "Designed a 4-step guided onboarding that progressively reveals complexity rather than overwhelming users upfront.",
      "Built a provider abstraction layer supporting JWT, OAuth, custom providers, webhooks, and REST endpoints.",
    ],
    architecture: [
      "Implemented dnd-kit powered page builder interactions with real-time preview.",
      "Designed a guided 4-step onboarding flow for app setup, auth, and dashboard structure.",
      "Enabled support for JWT, OAuth, custom providers, webhooks, and REST endpoint configuration.",
    ],
    outcomes: [
      "Lowered onboarding friction for teams building custom CRM workflows.",
      "Expanded compatibility for varied enterprise integration requirements.",
    ],
    metrics: [
      "4-step guided setup reducing CRM scaffold time from weeks to hours",
      "Support for 5 auth provider types (JWT, OAuth, custom, webhooks, REST)",
      "Drag-and-drop page builder with live preview",
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
    problemDetail:
      "An educational institution needed a platform where instructors could author courses with mixed content types (video, text, quizzes, assignments), students could enroll and track progress, and admins could manage the entire lifecycle — with support for both auto-graded quizzes and manually-graded assignments.",
    decisions: [
      "Built a hybrid grading system that auto-grades multiple-choice quizzes immediately while queuing essay/assignment submissions for manual instructor review.",
      "Used TanStack Router for type-safe routing with role-based route guards at the framework level.",
      "Implemented ASP.NET Identity for user management with custom role claims for fine-grained access control.",
    ],
    architecture: [
      "Built role-specific dashboards for students, instructors, and admins with different data views.",
      "Implemented course authoring, quiz/assignment pipelines, and hybrid auto/manual grading.",
      "Designed invite and notification flows with email verification support.",
    ],
    outcomes: [
      "Delivered a flexible LMS core for structured learning operations.",
      "Improved assessment and enrollment workflow clarity for educators.",
    ],
    metrics: [
      "3 role-specific dashboard experiences (student, instructor, admin)",
      "Hybrid grading system with auto-grade + manual review queue",
      "Course authoring with mixed content types and progress tracking",
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
    items: [
      { name: "C#", level: "production" },
      { name: "TypeScript", level: "production" },
      { name: "JavaScript", level: "production" },
      { name: "Java", level: "familiar" },
      { name: "Python", level: "familiar" },
      { name: "Dart", level: "familiar" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "ASP.NET Core", level: "production" },
      { name: "Entity Framework Core", level: "production" },
      { name: "Next.js", level: "production" },
      { name: "React", level: "production" },
      { name: "React Native / Expo", level: "production" },
      { name: "TanStack", level: "production" },
      { name: "Node.js", level: "familiar" },
      { name: "Flutter", level: "familiar" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: "production" },
      { name: "MongoDB", level: "production" },
      { name: "Redis", level: "familiar" },
      { name: "Firebase", level: "familiar" },
    ],
  },
  {
    category: "DevOps & Delivery",
    items: [
      { name: "GitHub Actions", level: "production" },
      { name: "Docker", level: "production" },
      { name: "AWS (EC2/ECR/S3)", level: "production" },
      { name: "Linux Server Deployments", level: "production" },
      { name: "GitLab CI/CD", level: "familiar" },
      { name: "Nginx", level: "familiar" },
    ],
  },
  {
    category: "Engineering Practices",
    items: [
      { name: "Multi-tenant SaaS Architecture", level: "production" },
      { name: "RESTful API Design", level: "production" },
      { name: "RBAC and JWT Security", level: "production" },
      { name: "Domain-Driven Module Design", level: "production" },
      { name: "Unit and Integration Testing", level: "production" },
      { name: "Agile/Scrum", level: "production" },
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
