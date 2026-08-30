import { ACCENT } from "../ui/Tag";

export function SystemDiagram() {
  const box = (label: string, sublabel: string, x: number, y: number, accent = false) => (
    <g key={label}>
      <rect
        x={x}
        y={y}
        width={120}
        height={48}
        rx={6}
        fill={accent ? "rgba(59,140,248,0.08)" : "rgba(255,255,255,0.03)"}
        stroke={accent ? "rgba(59,140,248,0.25)" : "rgba(255,255,255,0.08)"}
        strokeWidth={1}
      />
      <text
        x={x + 60}
        y={y + 18}
        textAnchor="middle"
        fill={accent ? ACCENT : "#888"}
        fontSize={11}
        fontFamily="JetBrains Mono, monospace"
        fontWeight={500}
      >
        {label}
      </text>
      <text
        x={x + 60}
        y={y + 33}
        textAnchor="middle"
        fill="#444"
        fontSize={9.5}
        fontFamily="JetBrains Mono, monospace"
      >
        {sublabel}
      </text>
    </g>
  );

  const arrow = (x1: number, y1: number, x2: number, y2: number) => (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="rgba(255,255,255,0.1)"
      strokeWidth={1}
      strokeDasharray="3,3"
      markerEnd="url(#arrowhead)"
    />
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ marginBottom: "12px" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "#333",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          System Architecture
        </span>
      </div>
      <svg viewBox="0 0 380 280" width="100%" style={{ maxHeight: "260px" }}>
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="rgba(255,255,255,0.15)" />
          </marker>
        </defs>

        {/* Client layer */}
        {box("React SPA", "TypeScript / TanStack", 10, 10, false)}
        {box("Mobile Client", "REST Consumer", 140, 10, false)}

        {/* API Gateway */}
        {box("ASP.NET Core API", "Auth · Rate Limit", 75, 90, true)}

        {/* Services */}
        {box("Task Service", "CQRS handlers", 10, 170, false)}
        {box("Auth Service", "JWT + Refresh", 140, 170, false)}
        {box("Job Queue", "Hangfire", 270, 170, false)}

        {/* Data */}
        {box("MongoDB", "Tenant-scoped", 10, 250, false)}
        {box("Redis", "Cache · Sessions", 140, 250, false)}

        {/* Arrows */}
        {arrow(70, 58, 115, 90)}
        {arrow(200, 58, 155, 90)}
        {arrow(110, 138, 60, 170)}
        {arrow(155, 138, 180, 170)}
        {arrow(195, 138, 300, 170)}
        {arrow(60, 218, 60, 250)}
        {arrow(180, 218, 180, 250)}

        {/* Tenant isolation badge */}
        <rect
          x={270}
          y={90}
          width={100}
          height={34}
          rx={5}
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={1}
          strokeDasharray="3,3"
        />
        <text
          x={320}
          y={105}
          textAnchor="middle"
          fill="#333"
          fontSize={9}
          fontFamily="JetBrains Mono, monospace"
        >
          Tenant Isolation
        </text>
        <text
          x={320}
          y={118}
          textAnchor="middle"
          fill="#2a2a2a"
          fontSize={9}
          fontFamily="JetBrains Mono, monospace"
        >
          per-org scoping
        </text>
      </svg>
    </div>
  );
}

export default SystemDiagram;
