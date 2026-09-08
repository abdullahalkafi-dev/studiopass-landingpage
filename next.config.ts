import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: "/landing-page",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
