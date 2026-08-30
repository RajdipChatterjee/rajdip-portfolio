import { CaseStudy } from "../types";

export const caseStudies: CaseStudy[] = [
  {
    title: "Authentication & Authorization",
    desc: "JWT lifecycle, refresh token rotation, and middleware-based auth guards in ASP.NET Core.",
  },
  {
    title: "Multi-Tenancy",
    desc: "Data isolation strategies: schema-per-tenant vs shared-schema with discriminator fields.",
  },
  {
    title: "Concurrency",
    desc: "Optimistic locking, conflict detection, and resolution for concurrent task updates.",
  },
  {
    title: "Background Processing",
    desc: "Reliable job queues with retry policies, dead-letter handling, and idempotency guarantees.",
  },
  {
    title: "Caching",
    desc: "Redis-backed cache invalidation patterns and cache-aside vs write-through trade-offs.",
  },
  {
    title: "Database Indexing",
    desc: "Query analysis, compound indexes, and performance profiling in MongoDB.",
  },
  {
    title: "Rate Limiting",
    desc: "Token bucket and sliding window algorithms with per-tenant and per-user policies.",
  },
  {
    title: "Observability",
    desc: "Structured logging, distributed tracing, and alerting thresholds for production systems.",
  },
];
