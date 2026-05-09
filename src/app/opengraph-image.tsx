import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sameera Roshan Dias | Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #141419 50%, #1c1c24 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#6366f1",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#f0f0f3",
            marginTop: 16,
            lineHeight: 1.1,
          }}
        >
          Sameera Roshan Dias
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#a0a0b0",
            marginTop: 24,
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          Building production-grade SaaS platforms and ERP systems with .NET, Next.js, React Native, and AWS.
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          {[".NET", "Next.js", "React Native", "PostgreSQL", "AWS", "Docker"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border: "1px solid #2a2a35",
                color: "#6b6b7b",
                fontSize: 16,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
