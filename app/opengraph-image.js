import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = "Chidozie Onyejelem Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#a1a1a1",
          }}
        >
          {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {site.fullName}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 16 }}>
            <div style={{ fontSize: 40, color: "#a1a1a1", lineHeight: 1.2 }}>
              {site.tagline.field}
            </div>
            <div style={{ fontSize: 40, color: "#a1a1a1", lineHeight: 1.2 }}>
              {site.tagline.role}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1a1" }}>
          chidozieportfolio.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
