---
title: "Voice Up Athletics"
slug: "voice-up-athletics"
status: "In Progress"
tech: ["C# / .NET 10", "ASP.NET Core Web API", "React", "Next.js", "Expo / React Native", "TypeScript", "Azure SQL", "Azure App Service", "Azure Static Web Apps", "Azure DevOps", "Microsoft Entra ID", "Entity Framework Core", "Clean Architecture"]
featured: true
order: 1
---

# Voice Up Athletics

**Senior Capstone Project — Built for a Real Company**

A production multi-tenant SaaS platform developed as my senior capstone project and actively built for an actual client launching a real product. Voice Up Athletics gives universities a centralized system to manage athletes, reporting, and administrative oversight — engineered from day one with enterprise security, Azure cloud infrastructure, and full CI/CD automation.

## Tech Stack

- **Backend:** ASP.NET Core Web API (.NET 10), Entity Framework Core, Clean Architecture
- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS
- **Mobile:** Expo / React Native — shares the same backend API as the web client
- **Auth:** Microsoft Entra ID (Azure AD) — JWT validation, role-based authorization
- **Database:** Azure SQL with tenant-scoped data and relational integrity
- **Infrastructure:** Azure App Service, Azure Static Web Apps, Azure DevOps CI/CD

## Architecture

### Clean Architecture (Backend)

The backend is organized into three discrete layers to enforce separation of concerns:

| Layer | Responsibility |
|-------|---------------|
| **Core** | Domain entities, business rules, interfaces |
| **Infrastructure** | EF Core, data access, external service integrations |
| **API** | Controllers, middleware, dependency injection, JWT validation |

### Multi-Tenant Design

Every entity inherits from a shared `Tenant` base, ensuring all data is scoped at the database level. Tenant resolution is driven by the **Entra Tenant ID** extracted from the validated JWT — no cross-tenant data leakage is possible by design.

### Role-Based Authorization

Three distinct roles with scoped access at both the API middleware and data layer:

- **Athlete** — Access to their own profile and performance data
- **Admin** — Manages athletes within a single university
- **SuperAdmin** — Cross-tenant oversight across multiple universities

## Key Features

### Authentication & Identity
- Microsoft Entra ID (Azure AD) as the identity provider for both web and mobile clients
- JWT validation handled in ASP.NET Core middleware
- Password reset and user management flows
- Athlete IDs formatted as `athlete-xxxx` (role-specific ID scheme)

### Administration
- University admins manage their own athletes with full CRUD operations
- SuperAdmins can view and administer multiple universities from a single interface
- Strict privilege separation — admin actions are scoped to their tenant only

### Reporting System
- Role-scoped reporting with data filtered per tenant and user role
- Designed for extensibility to support additional report types

### DevOps & Deployment
- Azure DevOps CI/CD pipelines for automated build, test, and deployment
- Azure App Service for backend with `WEBSITE_RUN_FROM_PACKAGE` deployment model
- Azure Static Web Apps for the Next.js frontend
- Environment secrets managed through Azure App Configuration — no credentials in source

## Technical Highlights

### Enterprise Multi-Tenancy
Built true data isolation at the infrastructure level rather than relying on application-layer filtering. Every EF Core query is tenant-scoped, making cross-tenant data exposure impossible regardless of application code paths.

### Microsoft Entra ID Integration
Implemented full OAuth 2.0 / OIDC flows with Microsoft Entra ID. The backend validates JWTs issued by Entra, extracts claims (including the tenant ID and role), and enforces authorization at the middleware layer before any controller logic runs.

### Shared API for Web & Mobile
A single ASP.NET Core Web API serves both the Next.js web client and the Expo React Native mobile app. Consistent auth, consistent data contracts — no duplicated backend logic.

### CI/CD with Azure DevOps
Automated pipelines handle builds and deployments to Azure on every merge. This ensures the production environment is always in sync with main and eliminates manual deployment steps.

---

**Senior Capstone Project — Actively developed for a real client | In Production on Azure**
