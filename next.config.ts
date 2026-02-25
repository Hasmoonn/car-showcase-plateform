import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['cdn.imagin.studio']
  }
};

export default nextConfig;
