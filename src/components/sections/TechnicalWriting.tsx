import { articles } from "../../data/articles";
import { Divider } from "../ui/Divider";

export function TechnicalWriting() {
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
              Writing
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
              Engineering notes
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
              Technical writeups on architecture, tradeoffs, and lessons from production systems.
            </p>
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
              {articles.map((article) => (
                <a
                  key={article.title}
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "24px",
                    padding: "24px",
                    background: "#0a0a0a",
                    textDecoration: "none",
                    transition: "background 0.15s",
                    flexWrap: "wrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0f0f0f")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0a0a0a")}
                >
                  <div style={{ flex: 1, minWidth: "220px" }}>
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#ccc",
                        margin: "0 0 6px 0",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {article.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        color: "#555",
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {article.preview}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: "#333",
                      letterSpacing: "0.04em",
                      flexShrink: 0,
                      paddingTop: "2px",
                    }}
                  >
                    {article.date}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalWriting;
