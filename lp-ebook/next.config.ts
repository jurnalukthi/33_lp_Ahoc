import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lp-ebook',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
