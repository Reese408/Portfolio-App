---
title: "Voice Up Athletics"
slug: "voice-up-athletics"
status: "Live"
demo: "https://voiceupathletics.com"
tech: ["C# / .NET 10", "ASP.NET Core Web API", "React", "Next.js", "Expo / React Native", "TypeScript", "Azure SQL", "Azure App Service", "Azure Static Web Apps", "Azure DevOps", "Microsoft Entra ID", "Entity Framework Core", "SignalR", "Hangfire", "Azure Communication Services", "Clean Architecture"]
image: "https://reeses-portfolio-media.s3.us-east-2.amazonaws.com/projects/VoiceUpAthletics/VUA-Image.png"
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
- Azure DevOps pipelines for build, test, and deploy to dev → QA → prod
- Environment-aware secrets and automated deployments

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

- Tools: Azure DevOps, Microsoft Entra ID, SignalR, Hangfire, Azure Communication Services, Playwright, Claude Code / AI-assisted development, GitHub Copilot
- Skills: C#, ASP.NET Core, Entity Framework Core, React, Next.js, TypeScript, Tailwind CSS, multi-tenant architecture, auth/authorization, real-time systems, privacy-first design
- Course: Senior Capstone (CS499) — real client project experience, architecture, deployment, and product launch

## Next / Still to Add

- Polished athlete engagement layer and campus feed content
- Advanced compliance analytics and dashboard filtering
- Expanded audit log and export capabilities
- Product walkthrough video and case study media

---

**Voice Up Athletics is done and live. Visit the product at https://voiceupathletics.com.**
