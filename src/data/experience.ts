import { CurrentlyStatus, ExperienceRole } from "../types";

export const currentlyRole: CurrentlyStatus = {
  title: "Assistant System Engineer",
  company: "Capsitech IT Services",
  period: "Jun 2025 — Present",
  statusText: "Building software",
};

export const roles: ExperienceRole[] = [
  {
    company: "Capsitech IT Services",
    title: "Assistant System Engineer",
    period: "Jun 2025 — Present",
    type: "Full-time",
    highlights: [
      "Architecting and shipping full-stack features in ASP.NET Core and React",
      "Designing RESTful APIs consumed by internal and external clients",
      "Contributing to system design decisions and code reviews",
    ],
  },
  {
    company: "Capsitech IT Services",
    title: "Full Stack Developer Intern",
    period: "Jan 2025 — Jun 2025",
    type: "Internship",
    highlights: [
      "Built task management modules with multi-tenant data isolation",
      "Implemented authentication flows with JWT and refresh tokens",
      "Worked on background job processing with retry and error handling",
    ],
  },
];
