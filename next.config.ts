import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "docs",
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
