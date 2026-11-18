import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Retired pages. Permanent redirects keep their links and rankings pointed
  // somewhere useful.
  async redirects() {
    return [
      { source: '/top-marketing-agencies', destination: '/articles', permanent: true },
    ];
  },
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [],
  },
};

export default nextConfig;
