# Rajdip Chatterjee — Engineering Portfolio

Personal engineering portfolio showcasing my software engineering work, projects, technical interests, and ongoing learning.

🌐 **Live:** [https://rajdipchatterjee.github.io/rajdip-portfolio/](https://rajdipchatterjee.github.io/rajdip-portfolio/)

## About

I’m a Software Engineer focused on building reliable, maintainable web applications and backend systems.

My primary technical interests include:

* Backend engineering
* Full-stack development
* Distributed systems
* System design
* Data structures & algorithms
* Production software engineering

## Featured Project

### TaskPilot

A production-oriented multi-tenant SaaS task management platform.

**Stack:** C#, ASP.NET Core, React, TypeScript, MongoDB

The project is being developed with an emphasis on real-world engineering concerns such as authentication, authorization, multi-tenancy, background processing, API design, security, testing, observability, and scalability.

## Tech Stack

**Languages**

* C#
* TypeScript
* JavaScript
* SQL

**Backend**

* ASP.NET Core
* REST APIs

**Frontend**

* React

**Database**

* MongoDB

**Tools & Infrastructure**

* Git
* Docker
* CI/CD
* GitHub Actions

## Portfolio Architecture

The portfolio itself is built as a static React application.

```text
React + TypeScript
        │
        ▼
      Vite
        │
        ▼
    Static Build
        │
        ▼
 GitHub Actions
        │
        ▼
 GitHub Pages
```

There is no backend or database required to run the portfolio.

## Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Deployment

The portfolio is deployed through GitHub Pages.

Changes pushed to the `main` branch are automatically built and deployed through GitHub Actions.

## Repository Structure

```text
src/
├── components/
├── data/
├── pages/
├── styles/
├── App.tsx
└── main.tsx

public/
.github/
└── workflows/
```

The application is intentionally kept simple and maintainable, with reusable UI components and static portfolio content separated from presentation logic.

## Philosophy

This portfolio is intended to be more than a collection of screenshots and technology names.

The goal is to use it as a record of **real engineering work**:

* projects that solve meaningful problems
* measurable performance improvements
* production deployments
* open-source contributions
* technical experimentation
* engineering decisions and trade-offs

Claims and metrics are added only when they can be backed by actual implementation or evidence.

---

**Built with React, TypeScript, Vite, and GitHub Pages.**
