import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sameera Roshan Dias | Software Engineer | .NET • Next.js • AWS",
    template: "%s | Sameera Roshan Dias",
  },
  description:
    "Portfolio of Sameera Roshan Dias — Software Engineer building SaaS, ERP, and scalable full-stack applications with .NET, Next.js, PostgreSQL, AWS, and Docker.",
  authors: [{ name: "Sameera Roshan Dias" }],
  creator: "Sameera Roshan Dias",
  keywords: [
    "Sameera Roshan Dias",
    "Sameera Dias Software Engineer",
    "Software Engineer Sri Lanka",
    ".NET Developer Sri Lanka",
    "Full Stack Engineer Sri Lanka",
    "Next.js",
    "React Native",
    "SaaS",
    "ERP",
    "PostgreSQL",
    "AWS",
    "Docker",
  ],
  openGraph: {
    title: "Sameera Roshan Dias | Software Engineer",
    description:
      "Portfolio and resume of Sameera Roshan Dias, Software Engineer focused on SaaS, ERP systems, and cloud deployment.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameera Roshan Dias | Software Engineer",
    description:
      "Portfolio and resume showcasing SaaS and ERP engineering work with .NET, Next.js, and AWS.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
