import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  agentRules: false,
  async redirects() {
    return [
      { source: "/clubs", destination: "/", permanent: false },
      {
        source: "/clubs/education",
        destination: "/clubs/intellectual",
        permanent: false,
      },
      {
        source: "/clubs/education/:path*",
        destination: "/clubs/intellectual/:path*",
        permanent: false,
      },
      {
        source: "/clubs/media",
        destination: "/clubs/leisure",
        permanent: false,
      },
      {
        source: "/clubs/media/:path*",
        destination: "/clubs/leisure/:path*",
        permanent: false,
      },
      {
        source: "/clubs/recreation",
        destination: "/clubs/leisure",
        permanent: false,
      },
      {
        source: "/clubs/recreation/:path*",
        destination: "/clubs/leisure/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
