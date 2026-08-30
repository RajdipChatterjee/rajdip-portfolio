import { GrayTag } from "../ui/GrayTag";

export function Hero() {
  const heroSkills = ["C#", "ASP.NET Core", "React", "TypeScript", "MongoDB"];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 24px",
        paddingTop: "56px",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Status badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "48px",
          padding: "6px 12px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "6px",
          width: "fit-content",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#22c55e",
            boxShadow: "0 0 6px rgba(34,197,94,0.6)",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#888",
            letterSpacing: "0.04em",
          }}
        >
          Building software · Open to opportunities
        </span>
      </div>

      {/* Main heading */}
      <h1
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(52px, 7vw, 88px)",
          fontWeight: 600,
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
          color: "#ededed",
          margin: "0 0 24px 0",
          maxWidth: "700px",
        }}
      >
        Software
        <br />
        Engineer
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(18px, 2.5vw, 24px)",
          fontWeight: 300,
          color: "#666",
          margin: "0 0 16px 0",
          maxWidth: "560px",
          letterSpacing: "-0.01em",
          lineHeight: 1.4,
        }}
      >
        Building production-oriented software systems.
      </p>

      {/* Body text */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
          color: "#555",
          margin: "0 0 32px 0",
          maxWidth: "480px",
          lineHeight: 1.7,
        }}
      >
        Full-stack engineer focused on backend systems, scalable APIs, and
        reliable software. Currently at Capsitech IT Services.
      </p>

      {/* Tech line */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "48px",
        }}
      >
        {heroSkills.map((t) => (
          <GrayTag key={t}>{t}</GrayTag>
        ))}
      </div>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <a
          href="#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 20px",
            background: "#ededed",
            color: "#080808",
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            textDecoration: "none",
            borderRadius: "6px",
            letterSpacing: "0.01em",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View Projects
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8M6 2l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="https://github.com/rajdipchatterjee"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 20px",
            background: "transparent",
            color: "#888",
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            textDecoration: "none",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.1)",
            letterSpacing: "0.01em",
            transition: "color 0.15s, border-color 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ededed";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#888";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href="#resume"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 20px",
            background: "transparent",
            color: "#888",
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            textDecoration: "none",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.1)",
            letterSpacing: "0.01em",
            transition: "color 0.15s, border-color 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ededed";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#888";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          Resume ↗
        </a>
      </div>
    </section>
  );
}

export default Hero;
