import { CapabilityGroup } from "../types";

export const capabilities: CapabilityGroup[] = [
  {
    area: "Backend",
    items: ["ASP.NET Core", "REST APIs", "C#", "Middleware", "Auth flows"],
  },
  {
    area: "Frontend",
    items: ["React", "TypeScript", "TanStack Query", "Vite", "Component design"],
  },
  {
    area: "Data",
    items: ["MongoDB", "SQL", "Redis", "Schema design", "Indexing"],
  },
  {
    area: "Infrastructure",
    items: ["Docker", "CI/CD", "GitHub Actions", "Cloud basics", "Nginx"],
  },
  {
    area: "Core CS",
    items: ["DSA", "OOP", "DBMS", "OS concepts", "Networks"],
  },
];
