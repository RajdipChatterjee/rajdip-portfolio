import { capabilities } from "../../data/capabilities";
import { Divider } from "../ui/Divider";

export function Engineering() {
  return (
    <section
      id="engineering"
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
              Engineering
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
              Technical capabilities
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {capabilities.map((cap) => (
                <div
                  key={cap.area}
                  style={{
                    padding: "24px",
                    background: "#0a0a0a",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0f0f0f")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0a0a0a")}
                >
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#ededed",
                      marginBottom: "12px",
                    }}
                  >
                    {cap.area}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    {cap.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "11px",
                          color: "#555",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item}
                      </span>
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

export default Engineering;
