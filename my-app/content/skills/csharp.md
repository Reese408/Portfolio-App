---
name: C#
slug: csharp
level: Intermediate-Advanced
icon: 🎯
yearsOfExperience: 1
category: Languages
color: from-purple-500/20 to-violet-500/20
---

# C#

C# is the primary language powering my capstone project, Voice Up Athletics — a production multi-tenant SaaS platform I'm actively building for an actual company as part of my senior class. Picking up C# meant diving headfirst into a statically-typed, object-oriented language in a real enterprise context, and it's quickly become one of my most impressive additions to the stack.

## Expertise Areas

### Object-Oriented Design
- **Classes & Interfaces** - Structuring domain models with clear contracts
- **Inheritance & Polymorphism** - Building extensible entity hierarchies
- **Dependency Injection** - Constructor injection and IoC containers in .NET
- **Generics** - Writing reusable, type-safe components
- **LINQ** - Querying collections and databases with expressive syntax

### ASP.NET Core Integration
- **Controllers & Routing** - RESTful API endpoint design
- **Middleware** - Custom request pipeline components for auth and logging
- **Model Binding & Validation** - Data annotations and FluentValidation
- **Async/Await** - Non-blocking I/O throughout the request pipeline
- **Configuration & Secrets** - Environment-based config management

### Entity Framework Core
- **Code-First Migrations** - Database schema management from C# models
- **DbContext & DbSets** - Data access layer abstraction
- **Relationships** - One-to-many, many-to-many with navigation properties
- **Query Optimization** - Eager vs. lazy loading, projection queries

## Projects Using C#

### Voice Up Athletics — Senior Capstone (Real Client)
**Technologies**: C#, .NET 10, ASP.NET Core Web API, Entity Framework Core, Azure SQL
Built the entire backend in C# as part of my senior capstone project, developed for an actual company launching a SaaS product for university athletics departments:
- Designed Clean Architecture with Core, Infrastructure, and API layers
- Implemented multi-tenant data scoping so every EF Core query is automatically filtered by tenant
- Built role-based authorization (Athlete, Admin, SuperAdmin) enforced at the middleware layer
- Integrated Microsoft Entra ID (Azure AD) for enterprise-grade authentication — JWT claims drive tenant resolution and role enforcement
- [View Project →](/projects/voice-up-athletics)

## Coursework Applications

### Ultimate ASP.NET Core Web API Development Guide (Udemy — Trevoir Williams)
- Building production-ready REST APIs end to end
- Clean Architecture patterns, dependency injection, EF Core
- JWT authentication and role-based authorization in .NET
- Deploying to Azure App Service

## Why I Love C#

Coming from a JavaScript/TypeScript and Python background, C# immediately felt like a serious upgrade for backend systems. The type safety is stricter and more expressive than TypeScript, the tooling in Visual Studio and Rider is outstanding, and the language features like LINQ, pattern matching, and records make complex business logic genuinely readable. Building an enterprise multi-tenant API in C# has shown me exactly why it's the go-to language for large-scale backend systems.

## Current Focus

- Clean Architecture and domain-driven design in .NET
- Advanced EF Core — query optimization and raw SQL
- Background services with `IHostedService`
- Unit and integration testing with xUnit
- Expanding into SignalR for real-time features
