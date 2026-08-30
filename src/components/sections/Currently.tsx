import { currentlyRole } from "../../data/experience";
import { Divider } from "../ui/Divider";

export function Currently() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px",
        width: "100%",
      }}
    >
      <Divider />
      <div
        style={{
          paddingTop: "64px",
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
            Currently
          </span>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 6px rgba(34,197,94,0.5)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: "#22c55e",
                    letterSpacing: "0.04em",
                  }}
                >
                  {currentlyRole.statusText}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#ededed",
                  margin: "0 0 4px 0",
                  letterSpacing: "-0.01em",
                }}
              >
                {currentlyRole.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  color: "#666",
                  margin: "0",
                }}
              >
                {currentlyRole.company}
              </p>
            </div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#444",
                letterSpacing: "0.02em",
                paddingTop: "4px",
              }}
            >
              {currentlyRole.period}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Currently;
