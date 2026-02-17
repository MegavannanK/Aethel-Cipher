import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Required for static site generation
  images: {
    unoptimized: true, // Required as GitHub Pages doesn't support Next.js Image Optimization
  },
};

export default nextConfig;
