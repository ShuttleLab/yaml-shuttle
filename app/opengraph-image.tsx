import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "YAML Shuttle - Format, validate, convert and highlight YAML";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #f0fdfa 0%, #5eead4 50%, #0d9488 100%)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 160, marginBottom: 24 }}>📄</div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: "#134e4a",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          YAML Shuttle
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#115e59",
            maxWidth: 900,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Format · Validate · Convert · Highlight YAML
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 28,
            color: "#115e59",
            opacity: 0.7,
          }}
        >
          yaml.shuttlelab.org
        </div>
      </div>
    ),
    { ...size }
  );
}
