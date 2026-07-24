import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // এই লাইনটা যোগ করো
  },
};

export default nextConfig;