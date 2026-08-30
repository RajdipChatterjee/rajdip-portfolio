import { footerLinks } from "../../data/navigation";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#ededed",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "4px",
            }}
          >
            Rajdip Chatterjee
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "#444",
              letterSpacing: "0.04em",
            }}
          >
            Software Engineer
          </div>
        </div>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#444",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
