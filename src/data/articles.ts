import { Article } from "../types";

export const articles: Article[] = [
  {
    title: "How I designed tenant isolation in TaskPilot",
    preview: "Comparing shared-schema vs schema-per-tenant strategies and why I chose the discriminator field approach.",
    date: "Coming soon",
  },
  {
    title: "Handling concurrent task updates",
    preview: "Optimistic locking, conflict detection, and what to do when two users edit the same record simultaneously.",
    date: "Coming soon",
  },
  {
    title: "Designing reliable background jobs",
    preview: "Idempotency, retry policies, dead-letter queues, and observability in async job processing.",
    date: "Coming soon",
  },
];
