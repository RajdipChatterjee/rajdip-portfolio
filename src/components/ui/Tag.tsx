import React from "react";

export const ACCENT = "#3b8cf8";

interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "11px",
        color: ACCENT,
        background: "rgba(59,140,248,0.08)",
        border: "1px solid rgba(59,140,248,0.18)",
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

export default Tag;
