import { projects } from "../../data/projects";
import { Divider } from "../ui/Divider";
import { Tag, ACCENT } from "../ui/Tag";
import { GrayTag } from "../ui/GrayTag";

export function SelectedWork() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px 96px",
        width: "100%",
      }}
    >
      <Divider />
      <div style={{ paddingTop: "64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#444",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Selected Work
            </span>
          </div>
          <div>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 500,
                color: "#ededed",
                margin: "0 0 40px 0",
                letterSpacing: "-0.02em",
              }}
            >
              Projects
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    padding: "20px 24px",
                    background: "#0a0a0a",
                    transition: "background 0.15s",
                    flexWrap: "wrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0f0f0f")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0a0a0a")}
                >
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "#ccc",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {project.name}
                      </span>
                      {project.featured && <Tag>Featured</Tag>}
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#555", margin: 0 }}>
                      {project.problem}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", flexShrink: 0 }}>
                    {project.tags.map((t) => (
                      <GrayTag key={t}>{t}</GrayTag>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        color: "#555",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                    >
                      GitHub ↗
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "12px",
                          color: ACCENT,
                          textDecoration: "none",
                          opacity: 0.8,
                          transition: "opacity 0.15s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
