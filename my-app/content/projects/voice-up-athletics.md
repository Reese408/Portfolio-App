---
title: "Voice Up Athletics"
slug: "voice-up-athletics"
status: "Live"
demo: "https://voiceupathletics.com"
tech: ["C#", ".NET 10", "ASP.NET Core Web API", "React", "Next.js", "Expo / React Native", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Azure SQL", "Azure Blob Storage", "Azure App Service", "Azure Static Web Apps", "Azure Front Door", "Azure DevOps", "Azure Communication Services", "Microsoft Entra ID", "Entity Framework Core", "SignalR", "Hangfire", "Playwright", "Clean Architecture", "JWT", "Zod"]
image: "https://reeses-portfolio-media.s3.us-east-2.amazonaws.com/projects/VoiceUpAthletics/VUA-Image.png"
video: "https://reeses-portfolio-media.s3.us-east-2.amazonaws.com/projects/VoiceUpAthletics/VUA-DEMO.mp4"
featured: true
order: 1
---

# Voice Up Athletics

A production-ready anonymous reporting platform for university athletics departments, built as my senior capstone project.

**Live Senior Capstone Product — Built for a Real Client**

Voice Up Athletics is a production-ready, multi-tenant anonymous reporting and compliance platform built as my senior capstone project. The live product is deployed at https://voiceupathletics.com and serves as a real application for a university athletics client.

## Overview

Voice Up Athletics gives universities a privacy-first platform for anonymous athlete reporting, secure case management, and compliance workflows. The product is designed around FERPA-adjacent anonymity guarantees: athlete identity is never exposed by default, and any disclosure path is governed, auditable, and emergency-safe.

- Anonymous reporting with randomly assigned aliases
- Case lifecycle management (New → Under Review → Escalated → Resolved / Closed)
- Legal hold preservation without blocking authorized case work
- Real-time SignalR chat for athlete and staff communication
- Compliance analytics, CSV exports, and tenant-scoped dashboards
- Multi-tenant SaaS with strict data isolation per university

## What I Built

### Backend
- ASP.NET Core 10 Web API with clean 3-layer architecture (Core / Infrastructure / API)
- Entity Framework Core 10, Azure SQL, soft delete, and tenant-global query filters
- Microsoft Entra ID / JWT authentication and role-based authorization
- SignalR for real-time case messaging and staff chat
- Hangfire for scheduled jobs, escalation expiry, and background processing
- Azure Communication Services for email digest notifications

### Frontend
- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, shadcn/ui v4
- Protected routes, server actions, streaming, and optimized authenticated pages
- Shared API contract across web and mobile clients

### Infrastructure & DevOps
- Azure Static Web Apps for the frontend
- Azure App Service for the API
- Azure SQL and Azure Blob Storage for data and media
- Azure DevOps multi-stage pipelines (Dev → QA → Prod) with environment gates
- Environment-aware secrets and automated deployments via pipeline variable groups
- Azure Front Door configured as the global CDN layer for performance and routing

## Development Lifecycle — Azure DevOps Pipelines

The project follows a structured three-environment promotion model managed entirely through Azure DevOps.

### Environments

| Environment | Purpose |
|-------------|---------|
| **Dev** | Active feature development; deploys on every push to `develop` |
| **QA** | Integration and regression testing; requires passing build gate before promotion |
| **Prod** | Live environment at voiceupathletics.com; requires manual approval gate before release |

### Pipeline Design
- YAML-defined multi-stage pipelines with distinct build, test, and deploy stages per environment
- Pipeline variable groups store environment-specific secrets (connection strings, Entra client IDs, app config) — no secrets in source control
- Build artifacts are promoted between stages rather than rebuilt, ensuring what is tested in QA is exactly what ships to prod
- Automated Playwright E2E tests run against the QA environment before the prod gate opens
- Rollback is handled by re-deploying the previous validated artifact

This model gave the team confidence to deploy frequently while protecting the live client environment from untested changes.

## Architecture

### Clean Architecture (Backend)

The backend is organized into three discrete layers to enforce separation of concerns:

| Layer | Responsibility |
|-------|---------------|
| **Core** | Domain entities, business rules, interfaces |
| **Infrastructure** | EF Core, data access, external service integrations |
| **API** | Controllers, middleware, dependency injection, JWT validation |

### Multi-Tenant Design

Every entity is tenant-scoped with a shared `Tenant` base and EF Core global query filters. Tenant resolution is driven by the validated JWT claims and middleware order ensures tenant context is established before any user data is loaded.

### Role-Based Authorization

Three distinct roles are enforced at both the API middleware and data layer:

- **Athlete** — Access to athlete-specific report and profile data
- **Compliance Staff** — Scoped access within the university tenant
- **SuperAdmin** — Cross-tenant oversight and administrative control

## Key Features

### Privacy-First Reporting
- Anonymous athlete reporting bound to a permanent alias
- Case records never expose real identity by default
- Disclosure only through a governed workflow with audit history

### Case Lifecycle & Legal Hold
- Finite state machine managing report status transitions
- Legal hold preserves records, blocks deletion, and allows authorized review
- Separation of legal hold rules from identity disclosure logic

### Real-Time Collaboration
- SignalR-powered chat for real-time, secure staff and athlete communication
- Cache invalidation strategy across server actions, TanStack Query, and output caching
- Tenant-safe real-time updates with no cross-tenant bleed

### Compliance & Analytics
- Tenant-scoped dashboards for case counts, severity, SLA, and escalation trends
- CSV export and audit-logged data export flows
- Access controls layered by role and tenant

## Status

- Live product deployed at https://voiceupathletics.com
- Production-ready senior capstone app with real client usage
- Playwright E2E coverage for anonymity, tenant isolation, auth, and report lifecycle
- Ongoing enhancements and roadmap items are actively tracked

## Contributors

- Reese Redman — full-stack developer, architect, and product lead
- Lukas Schreck - Cloud, DevOps and Database Orchestration
- Jason Formani - Mobile With Expo
- Voice Up Athletics founding team — product strategy and domain guidance
- Client stakeholders — compliance requirements, early adoption feedback, and validation

## Tools, Skills, and Courses

**Languages:** C#, TypeScript, JavaScript, SQL, YAML

**Frameworks & Libraries:** ASP.NET Core 10, Entity Framework Core 10, Next.js 16, React 19, Expo / React Native, Tailwind CSS, shadcn/ui v4, TanStack Query, SignalR, Hangfire, Zod

**Cloud & Infrastructure:** Azure App Service, Azure Static Web Apps, Azure SQL, Azure Blob Storage, Azure Front Door, Azure Communication Services, Microsoft Entra ID

**DevOps & Tooling:** Azure DevOps (YAML pipelines, variable groups, environment gates), Playwright (E2E testing), Claude Code / AI-assisted development, GitHub Copilot

**Architecture Patterns:** Clean Architecture (3-layer), Multi-tenant SaaS, Role-based authorization, Finite state machine (case lifecycle), Privacy-first design, Real-time messaging

**Course:** Senior Capstone (CS499) — real client project experience, architecture, deployment, and product launch

## Roadmap — University Scale-Out

When Voice Up Athletics is certified to sell to universities, the infrastructure is designed to scale per-institution using Azure Front Door as the global CDN and routing layer.

### Azure Front Door — CDN & University Subdomains

Azure Front Door sits in front of all origins and handles:

- **Global CDN** — Static assets and cacheable API responses are served from edge nodes worldwide, reducing latency for university users regardless of region
- **University Subdomains** — Each certified university receives a dedicated subdomain (e.g., `stateuniversity.voiceupathletics.com`, `northwestern.voiceupathletics.com`) routed through Front Door rules
- **Tenant Routing** — Front Door custom rules extract the subdomain prefix and forward requests to the correct App Service origin with the tenant identifier in the header, keeping a single API deployment serving all universities cleanly
- **TLS Termination** — Managed certificates per subdomain via Front Door, eliminating per-university cert management overhead
- **WAF Policy** — Front Door WAF rules provide a shared security baseline across all university endpoints

This approach means onboarding a new university is a DNS record + Front Door routing rule change, not a new deployment.

## Next / Still to Add

- Certification and onboarding flow for new universities
- Azure Front Door subdomain provisioning automation per university tenant
- Polished athlete engagement layer and campus feed content
- Advanced compliance analytics and dashboard filtering
- Expanded audit log and export capabilities
- Product walkthrough video and case study media

---

**Voice Up Athletics is done and live. Visit the product at https://voiceupathletics.com.**
