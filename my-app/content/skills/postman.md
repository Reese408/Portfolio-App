---
name: Postman
slug: postman
level: Intermediate
icon: 📮
yearsOfExperience: 1
category: DevOps & Tools
color: from-orange-500/20 to-amber-400/20
---

# Postman

Postman is my go-to tool for designing, testing, and documenting APIs — it's been essential throughout the development of Voice Up Athletics, where I use it daily to test every endpoint across different roles and tenant contexts before the frontend ever makes a call. It's also invaluable for debugging auth flows with Microsoft Entra ID tokens.

## Expertise Areas

### API Testing
- **Request Collections** - Organizing endpoints by resource and feature
- **Environment Variables** - Switching between dev, staging, and production base URLs
- **Pre-request Scripts** - Automating token injection before each request
- **Test Scripts** - Writing assertions to validate response status, body, and headers
- **Automated Test Runs** - Running full collection suites with the Collection Runner

### Authentication Flows
- **Bearer Token Auth** - Testing JWT-protected endpoints
- **OAuth 2.0 Flows** - Acquiring tokens from Microsoft Entra ID directly in Postman
- **Role Testing** - Maintaining separate environments per role (Athlete, Admin, SuperAdmin)
- **Token Refresh** - Scripting automatic token refresh in pre-request scripts

### API Documentation
- **Collection Documentation** - Annotating requests with descriptions and examples
- **Example Responses** - Saving expected response bodies for documentation
- **Sharing Collections** - Exporting and sharing collections across team members

### Debugging & Development
- **Request Inspection** - Examining headers, body, and cookies on every request
- **Response Validation** - Checking status codes, response times, and body structure
- **Mock Servers** - Simulating API responses before backend implementation

## Projects Using Postman

### Voice Up Athletics — Senior Capstone (Real Client)
**Technologies**: Postman, ASP.NET Core Web API, Microsoft Entra ID, Azure
Used Postman as the primary API development and testing tool throughout the VUA build:
- Maintained a full collection covering every endpoint — auth, user management, athletes, reporting
- Separate environments for local dev, Azure staging, and production with variable base URLs
- Pre-request scripts automatically acquire Entra ID tokens via the OAuth 2.0 device flow
- Role-specific test runs validate that Athlete, Admin, and SuperAdmin endpoints are properly isolated
- Automated assertions catch auth regressions and broken response contracts immediately
- [View Project →](/projects/voice-up-athletics)

## Why I Love Postman

Before I had a frontend ready, Postman was my entire interface to the API. Being able to fire off requests, inspect every header and claim, and run full test suites against role-based endpoints made building the backend dramatically faster. The OAuth 2.0 integration with Entra ID means I can test the exact same auth flow the real clients use without writing a line of frontend code. It's become a permanent fixture in my development workflow.

## Current Focus

- Writing full test suites with automated assertions
- Newman (Postman CLI) for running collections in CI pipelines
- Contract testing to catch breaking API changes early
- API documentation publishing via Postman workspaces
