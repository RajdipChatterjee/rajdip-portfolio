import { roles } from "../../data/experience";
import { Divider } from "../ui/Divider";
import { GrayTag } from "../ui/GrayTag";

export function Experience() {
  return (
    <section
      id="experience"
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
              Experience
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
              Work history
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
              {roles.map((role) => (
                <div
                  key={role.title}
                  style={{
                    padding: "28px 28px",
                    background: "#0a0a0a",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0f0f0f")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0a0a0a")}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "24px",
                      marginBottom: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#ededed",
                          margin: "0 0 4px 0",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {role.title}
                      </h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#666", margin: 0 }}>
                        {role.company}
                      </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "11px",
                          color: "#444",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {role.period}
                      </span>
                      <GrayTag>{role.type}</GrayTag>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {role.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: "#333", fontSize: "13px", lineHeight: "20px", flexShrink: 0 }}>—</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#666", lineHeight: 1.6 }}>
                          {h}
                        </span>
                      </div>
                    ))}
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

export default Experience;
