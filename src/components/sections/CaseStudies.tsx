import { caseStudies } from "../../data/caseStudies";
import { Divider } from "../ui/Divider";

export function CaseStudies() {
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
              Case Studies
            </span>
          </div>
          <div>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 500,
                color: "#ededed",
                margin: "0 0 8px 0",
                letterSpacing: "-0.02em",
              }}
            >
              Engineering deep-dives
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#555",
                margin: "0 0 36px 0",
                lineHeight: 1.6,
              }}
            >
              Detailed technical writeups on production engineering problems.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {caseStudies.map((cs) => (
                <a
                  key={cs.title}
                  href="#"
                  style={{
                    display: "block",
                    padding: "24px",
                    background: "#0a0a0a",
                    textDecoration: "none",
                    transition: "background 0.15s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0f0f0f";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#0a0a0a";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#ccc",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {cs.title}
                    </span>
                    <span style={{ color: "#333", fontSize: "14px", flexShrink: 0, marginLeft: "8px" }}>
                      →
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      color: "#555",
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {cs.desc}
                  </p>
                  <div style={{ marginTop: "14px" }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        color: "#333",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      Coming soon
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
