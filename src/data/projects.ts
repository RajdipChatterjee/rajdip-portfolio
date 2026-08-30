import { FeaturedProjectData, Project } from "../types";

export const featuredProject: FeaturedProjectData = {
  name: "TaskPilot",
  subtitle: "Multi-tenant SaaS platform",
  description:
    "Production-oriented task and organization management platform built with multi-tenancy as a first-class design constraint. Supports isolated tenant workspaces, role-based access control, and background job processing.",
  overviewItems: [
    "Multi-tenant workspace isolation at the data layer",
    "JWT authentication with refresh token rotation",
    "Background job queue for async task processing",
    "Role-based access control per organization",
    "RESTful API with consistent error handling",
  ],
  architectureItems: [
    "ASP.NET Core 8 minimal API with vertical slice architecture",
    "MongoDB with tenant-scoped collections strategy",
    "Redis for session caching and rate-limit counters",
    "React + TypeScript SPA with TanStack Query",
    "Docker Compose for local dev, CI/CD via GitHub Actions",
  ],
  tags: ["ASP.NET Core", "C#", "React", "TypeScript", "MongoDB"],
  demoUrl: "#",
  githubUrl: "https://github.com/rajdipchatterjee/taskpilot",
};

export const projects: Project[] = [
  {
    name: "TaskPilot",
    problem: "Multi-tenant task management platform with per-org isolation",
    tags: ["ASP.NET Core", "React", "MongoDB"],
    github: "https://github.com/rajdipchatterjee/taskpilot",
    demo: "#",
    featured: true,
  },
  {
    name: "API Gateway",
    problem: "Lightweight reverse proxy with rate limiting and auth middleware",
    tags: ["C#", "ASP.NET Core", "Redis"],
    github: "#",
    demo: null,
    featured: false,
  },
  {
    name: "Job Scheduler",
    problem: "Background job processing system with retry and dead-letter queues",
    tags: ["C#", "Hangfire", "PostgreSQL"],
    github: "#",
    demo: null,
    featured: false,
  },
];
