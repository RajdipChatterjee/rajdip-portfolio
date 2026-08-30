import React from "react";

interface GrayTagProps {
  children: React.ReactNode;
}

export function GrayTag({ children }: GrayTagProps) {
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "11px",
        color: "#888",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "4px",
        padding: "2px 8px",
        letterSpacing: "0.02em",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

export default GrayTag;
