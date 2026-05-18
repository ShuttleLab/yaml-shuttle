import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YAML Shuttle - YAML 格式化与校验工具",
    short_name: "YAML Shuttle",
    description: "Format, validate, convert and highlight YAML — fast, safe, privacy-first",
    start_url: "/",
    display: "standalone",
    background_color: "#f0fdfa",
    theme_color: "#0d9488",
    orientation: "any",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
