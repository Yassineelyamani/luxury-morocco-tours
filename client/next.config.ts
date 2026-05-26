import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["storage.googleapis.com"],
    unoptimized: true,
  },

  trailingSlash: true,
  distDir: "out",

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
