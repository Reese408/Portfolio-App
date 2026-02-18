---
name: Azure DevOps
slug: azure-devops
level: Intermediate
icon: 🚀
yearsOfExperience: 1
category: DevOps & Tools
color: from-blue-600/20 to-cyan-500/20
---

# Azure DevOps

Azure DevOps is the CI/CD backbone of Voice Up Athletics, my senior capstone project built for a real company. I use it to automate builds and deployments for both the ASP.NET Core API and the Next.js frontend — every push to main triggers a pipeline that builds, tests, and deploys to Azure automatically. No manual deployments, no drift between environments.

## Expertise Areas

### CI/CD Pipelines
- **YAML Pipelines** - Declarative pipeline definitions checked into source control
- **Build Pipelines** - Automated compilation, testing, and artifact packaging
- **Release Pipelines** - Deploying artifacts to Azure App Service and Static Web Apps
- **Triggers** - Branch-based and PR-based pipeline execution
- **Pipeline Variables** - Managing secrets and environment-specific config

### Deployment Patterns
- **Azure App Service Deployments** - Deploying .NET API packages to App Service
- **Azure Static Web Apps** - Automated Next.js frontend deployments
- **Environment Gates** - Approval steps before production deployments
- **Rollback Strategies** - Reverting to previous deployment slots

### Source Control & Collaboration
- **Azure Repos** - Git repositories hosted in Azure DevOps
- **Branch Policies** - Requiring PR reviews and passing builds before merge
- **Pull Request Workflows** - Code review and CI validation on every PR
- **Work Items** - Linking commits and PRs to tracked tasks

### Boards & Project Tracking
- **Backlogs** - Managing and prioritizing development work
- **Sprints** - Iterative development planning
- **Work Item Linking** - Connecting code changes to requirements

## Projects Using Azure DevOps

### Voice Up Athletics — Senior Capstone (Real Client)
**Technologies**: Azure DevOps, Azure App Service, Azure Static Web Apps, .NET 10, Next.js
Full CI/CD automation for a production SaaS platform:
- YAML pipelines for both the ASP.NET Core API and Next.js frontend
- Automated builds trigger on every push to main — no manual steps
- ASP.NET Core API deployed to Azure App Service via `WEBSITE_RUN_FROM_PACKAGE`
- Next.js frontend deployed to Azure Static Web Apps with automatic CDN propagation
- Branch policies enforce that builds must pass before merging to main
- Environment secrets managed as pipeline variables — never committed to source
- [View Project →](/projects/voice-up-athletics)

## Why I Love Azure DevOps

Coming from GitHub Actions, Azure DevOps felt like a natural step up for an enterprise project. The integration with Azure resources is seamless — pipelines can deploy directly to App Service, Static Web Apps, and more without complex scripting. Having pipelines, repos, and boards all in one place keeps the entire project lifecycle in sync. Automating deployments meant I could focus entirely on code quality rather than worrying about manual releases.

## Current Focus

- Multi-stage pipelines with approval gates
- Parallel job execution for faster CI
- Infrastructure as Code with Azure DevOps + Bicep
- Test result publishing and code coverage reporting
- Environment-specific variable groups for staging vs. production
