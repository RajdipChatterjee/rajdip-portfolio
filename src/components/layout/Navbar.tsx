import { useState } from "react";
import { navLinks } from "../../data/navigation";

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "56px",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        background: scrolled
          ? "rgba(8,8,8,0.92)"
          : "rgba(8,8,8,0.0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#ededed",
            letterSpacing: "0.04em",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Rajdip Chatterjee
        </a>

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#888",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "none",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "20px",
                  height: "1px",
                  background: "#888",
                  transition: "transform 0.2s",
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "56px",
            left: 0,
            right: 0,
            background: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#888",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
