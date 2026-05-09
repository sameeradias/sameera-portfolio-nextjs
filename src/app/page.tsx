import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { profile } from "@/content/portfolio-data";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  telephone: profile.phone,
  address: profile.location,
  url: "https://sameeradias.site",
  sameAs: [profile.linkedin, profile.github],
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
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
    </>
  );
}
