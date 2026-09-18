import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  agentRules: false,
  async redirects() {
    return [{ source: "/clubs", destination: "/", permanent: false }];
  },
};

export default nextConfig;
