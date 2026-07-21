import type { NextConfig } from "next";

// Static export → Cloudflare Workers Static Assets (matches nav/pdf/image-shuttle).
// `next build` prerenders every route to static HTML in ./out, served as pure
// static assets with zero Worker rendering — no per-request CPU cost, no 1101
// CPU-limit errors on the free tier. Security headers live in public/_headers
// (next.config `headers()` is unsupported under output:export).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
