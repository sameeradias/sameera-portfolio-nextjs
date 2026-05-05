import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sameeradias.vercel.app",
          },
        ],
        destination: "https://sameeradias.site/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
