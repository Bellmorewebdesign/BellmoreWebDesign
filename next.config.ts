import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit real directory index files (work/index.html, contact/index.html, ...)
  // so static hosts (nginx, GitHub Pages, Cloudflare) serve directory URLs
  // directly. Without this, /work/ maps to a folder with no index.html and
  // nginx returns 403, and /work redirects to http:// (mixed-content blocked).
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: "docs",
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
