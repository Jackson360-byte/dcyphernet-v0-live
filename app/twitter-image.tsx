import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "DCYPHERNET - Digital Solutions & AI Business Automation"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
        position: "relative",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, #2E0F4F 0%, #0a0a0a 50%, #0a0a0a 100%)",
        }}
      />

      {/* Gradient orb */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(75,30,120,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          height: "100%",
          position: "relative",
        }}
      >
        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#4B1E78",
            }}
          />
          <span style={{ color: "#a1a1aa", fontSize: "18px" }}>Digital Solutions & AI Automation</span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ fontSize: "72px", fontWeight: "bold", color: "#ffffff" }}>Get Connected and</span>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ fontSize: "72px", fontWeight: "bold", color: "#ffffff" }}>Take Your</span>
            <span style={{ fontSize: "72px", fontWeight: "bold", color: "#4B1E78" }}>Business</span>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ fontSize: "72px", fontWeight: "bold", color: "#ffffff" }}>Success</span>
            <span style={{ fontSize: "72px", fontWeight: "bold", color: "#4B1E78" }}>Further.</span>
          </div>
        </div>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            maxWidth: "600px",
            marginTop: "32px",
            lineHeight: 1.5,
          }}
        >
          AI automation, strategic design, and cutting-edge technology for ambitious businesses.
        </p>

        {/* Logo/Brand */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "rgba(75,30,120,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "24px", fontWeight: "bold", color: "#ffffff" }}>D</span>
          </div>
          <span style={{ fontSize: "28px", fontWeight: "bold", color: "#ffffff" }}>DCYPHERNET</span>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
