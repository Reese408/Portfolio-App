---
name: .NET / ASP.NET Core
slug: dotnet
level: Advanced
icon: 🔮
yearsOfExperience: 1
category: Backend
color: from-purple-600/20 to-indigo-500/20
---

# .NET / ASP.NET Core

ASP.NET Core is the backbone of Voice Up Athletics, the multi-tenant SaaS platform I'm building for an actual company as my senior capstone. It's a high-performance, cross-platform framework and working with it at this scale has given me a real appreciation for enterprise-grade backend architecture — dependency injection, middleware pipelines, JWT auth, and cloud deployment are all things I do daily with this stack.

## Expertise Areas

### Web API Development
- **RESTful Controllers** - Attribute routing, versioning, status codes
- **Minimal APIs** - Lightweight endpoint handlers for simple routes
- **Middleware Pipeline** - Custom middleware for auth, logging, error handling
- **Filters** - Action filters for cross-cutting concerns
- **Response Formatting** - JSON serialization, content negotiation

### Authentication & Authorization
- **JWT Bearer Tokens** - Validating tokens issued by Microsoft Entra ID
- **Policy-Based Auth** - Custom authorization policies and requirements
- **Role-Based Access Control** - Scoping endpoints by role (Athlete, Admin, SuperAdmin)
- **Claims Transformation** - Extracting tenant and role from JWT claims

### Dependency Injection & Architecture
- **Service Registration** - Scoped, transient, and singleton lifetimes
- **Clean Architecture** - Separation of Core, Infrastructure, and API layers
- **Repository Pattern** - Abstracting data access behind interfaces
- **Configuration** - `IOptions<T>` pattern, environment-based settings

### Entity Framework Core
- **Code-First Modeling** - Database schema from C# entity classes
- **Migrations** - Versioned schema changes and rollbacks
- **Querying** - LINQ queries, projections, includes
- **Multi-Tenant Scoping** - Global query filters for tenant isolation

## Projects Using .NET / ASP.NET Core

### Voice Up Athletics — Senior Capstone (Real Client)
**Technologies**: .NET 10, ASP.NET Core Web API, EF Core, Azure SQL, Microsoft Entra ID
The entire backend is an ASP.NET Core Web API, designed from scratch with enterprise patterns in mind:
- Clean Architecture with strict layer boundaries — domain logic never touches infrastructure
- Multi-tenant middleware resolves the active tenant from Entra JWT claims on every request
- EF Core global query filters guarantee tenant data isolation at the database layer
- Deployed to Azure App Service via Azure DevOps CI/CD pipelines
- Single API serves both the Next.js web client and Expo React Native mobile app
- [View Project →](/projects/voice-up-athletics)

## Coursework Applications

### Ultimate ASP.NET Core Web API Development Guide (Udemy — Trevoir Williams)
- End-to-end API development with ASP.NET Core
- Clean Architecture, EF Core, FluentValidation
- JWT auth, refresh tokens, and role-based authorization
- Azure App Service deployment and configuration

## Why I Love .NET / ASP.NET Core

ASP.NET Core surprised me with how clean and opinionated it is compared to Node/Express. The built-in DI container, middleware pipeline, and configuration system give you a solid production-grade foundation without stitching together a dozen packages. Working on an actual enterprise project has shown me why .NET dominates in large organizations — the tooling, the performance, and the architecture patterns it encourages all scale beautifully.

## Current Focus

- Advanced middleware and filter pipelines
- Background jobs with `IHostedService` and Hangfire
- gRPC services alongside REST
- Integration testing with `WebApplicationFactory`
- SignalR for real-time features in VUA
