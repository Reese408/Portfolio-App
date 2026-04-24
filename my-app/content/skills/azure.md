---
name: Azure
slug: azure
level: Intermediate-Advanced
icon: 🌩️
yearsOfExperience: 1
category: DevOps & Tools
color: from-blue-500/20 to-sky-400/20
---

# Azure (Microsoft Azure)

Azure is the cloud platform powering Voice Up Athletics, my senior capstone project built for an actual company. I deploy the ASP.NET Core backend to Azure App Service, host the Next.js frontend on Azure Static Web Apps, and use Azure SQL as the production database — all wired together with Azure DevOps CI/CD pipelines. I'm also actively studying for the AZ-900 Azure Fundamentals certification to formalize my cloud knowledge.

## Expertise Areas

### Compute & Hosting
- **Azure App Service** - Deploying and managing ASP.NET Core Web APIs
- **Azure Static Web Apps** - Hosting Next.js frontends with global CDN
- **Deployment Slots** - Staging environments and swap deployments
- **WEBSITE_RUN_FROM_PACKAGE** - Package-based deployment for App Service
- **Scaling** - Manual and auto-scaling configuration

### Database
- **Azure SQL** - Managed relational database for production workloads
- **Connection Strings** - Secure configuration via App Settings
- **Firewall Rules** - Restricting database access by IP and service
- **Backups & Recovery** - Point-in-time restore configuration

### Identity & Security
- **Microsoft Entra ID (Azure AD)** - Enterprise identity provider for OAuth 2.0 / OIDC
- **App Registrations** - Configuring client applications and API permissions
- **JWT Validation** - ASP.NET Core middleware validating Entra-issued tokens
- **Role & Claim Management** - Defining and assigning app roles in Entra

### Configuration & Secrets
- **App Settings** - Environment variables managed in the Azure portal
- **Managed Identities** - Passwordless access to Azure resources
- **Key Vault** (learning) - Centralized secret management

## Projects Using Azure

### Voice Up Athletics — Senior Capstone (Real Client)
**Technologies**: Azure App Service, Azure Static Web Apps, Azure SQL, Microsoft Entra ID
Running the full production infrastructure on Azure for a real company:
- ASP.NET Core API deployed to Azure App Service via Azure DevOps pipelines
- Next.js frontend on Azure Static Web Apps with automatic CDN distribution
- Azure SQL as the multi-tenant production database
- Microsoft Entra ID handling all authentication — JWT tokens validated server-side
- App Settings managing all environment secrets — no credentials in source control
- [View Project →](/projects/voice-up-athletics)

## Certifications & Learning

### Currently Studying
**Ultimate AWS Certified Solutions Architect Associate 2026** (Udemy)
Studying cloud architecture fundamentals that apply across both AWS and Azure, reinforcing core concepts like compute, storage, networking, and security at scale.

## Why I Love Azure

Azure's tight integration with the Microsoft ecosystem makes it the natural home for .NET applications. Entra ID for enterprise auth, Azure SQL for managed databases, App Service for zero-infrastructure deployment — everything just works together. The portal is approachable and the documentation is thorough. Building a real production system on Azure has given me confidence in deploying and operating cloud applications.

## Current Focus

- Azure Key Vault for secrets management
- Azure Monitor and Application Insights for observability
- Azure Container Apps for future containerized deployments
- AZ-900 Azure Fundamentals certification
- Azure API Management for API gateway patterns
