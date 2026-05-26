import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com', 'images.unsplash.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
