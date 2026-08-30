import { useState } from "react";
import { featuredProject } from "../../data/projects";
import { Divider } from "../ui/Divider";
import { Tag, ACCENT } from "../ui/Tag";
import { SystemDiagram } from "../projects/SystemDiagram";

export function FeaturedProject() {
  const [activeTab, setActiveTab] = useState<"overview" | "arch">("overview");

  return (
    <section
      id="projects"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px 96px",
        width: "100%",
      }}
    >
      <Divider />
      <div style={{ paddingTop: "64px" }}>
        {/* Section label */}
        <div style={{ marginBottom: "40px" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "#444",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Featured Project
          </span>
        </div>

        {/* Main card */}
        <div
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Top bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 28px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "rgba(59,140,248,0.1)",
                  border: "1px solid rgba(59,140,248,0.2)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" stroke={ACCENT} strokeWidth="1.2" />
                  <rect x="9" y="2" width="5" height="5" rx="1" stroke={ACCENT} strokeWidth="1.2" />
                  <rect x="2" y="9" width="5" height="5" rx="1" stroke={ACCENT} strokeWidth="1.2" />
                  <rect x="9" y="9" width="5" height="5" rx="1" stroke={ACCENT} strokeWidth="1.2" />
                </svg>
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#ededed",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {featuredProject.name}
                </h2>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: "#555",
                    margin: 0,
                    letterSpacing: "0.02em",
                  }}
                >
                  {featuredProject.subtitle}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <a
                href={featuredProject.demoUrl}
                style={{
                  padding: "7px 14px",
                  background: "rgba(59,140,248,0.1)",
                  border: "1px solid rgba(59,140,248,0.2)",
                  borderRadius: "6px",
                  color: ACCENT,
                  fontSize: "12px",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(59,140,248,0.18)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(59,140,248,0.1)")}
              >
                Live Demo ↗
              </a>
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "7px 14px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "6px",
                  color: "#888",
                  fontSize: "12px",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Content area */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "360px",
            }}
          >
            {/* Left: description */}
            <div
              style={{
                padding: "32px 28px",
                borderRight: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "#777",
                  lineHeight: 1.75,
                  margin: "0 0 32px 0",
                }}
              >
                {featuredProject.description}
              </p>

              {/* Tabs */}
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "20px",
                  padding: "3px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "7px",
                  width: "fit-content",
                }}
              >
                {(["overview", "arch"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: "5px 14px",
                      borderRadius: "5px",
                      border: "none",
                      background: activeTab === tab ? "rgba(255,255,255,0.07)" : "transparent",
                      color: activeTab === tab ? "#ededed" : "#555",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {tab === "overview" ? "Overview" : "Architecture"}
                  </button>
                ))}
              </div>

              {activeTab === "overview" ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {featuredProject.overviewItems.map((item) => (
                    <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: ACCENT, fontSize: "14px", lineHeight: "22px", flexShrink: 0 }}>—</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#666", lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {featuredProject.architectureItems.map((item) => (
                    <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "#444", fontSize: "14px", lineHeight: "22px", flexShrink: 0 }}>›</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#666", lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "28px" }}>
                {featuredProject.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>

            {/* Right: system diagram */}
            <div style={{ padding: "32px 28px", position: "relative" }}>
              <SystemDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
