import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: "/landing-page",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing-page",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
