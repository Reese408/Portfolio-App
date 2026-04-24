---
title: "SudsOnWheels USA"
slug: "suds-on-wheels-usa"
status: "Live"
demo: "https://sudsonwheelsusa.com"
tech: ["Next.js 16+", "React", "TypeScript", "Tailwind CSS v4", "shadcn/ui", "Supabase", "Resend", "Cloudflare Turnstile", "Upstash Redis", "Google Maps API", "Google Calendar API", "Vercel", "GitHub Actions", "Zod", "React Hook Form"]
github: "https://github.com/sudsonwheelsusa/sudsonwheels-website"
featured: true
order: 2
---

# SudsOnWheels USA

A marketing-first website with admin CMS for a mobile power washing business in Ashland, Ohio.

**Live marketing site with a secure Supabase admin CMS**

Built for a mobile power washing business in Ashland, Ohio, this site is a marketing-first lead generator with a hidden admin dashboard for managing leads, services, gallery content, and video embeds. I also set up the GitHub organization and CI/CD workflow so the client can bring future developers into the repo cleanly.

## Business Overview

This is not an e-commerce or booking app. SudsOnWheels is a local service business with a strong emphasis on phone, text, and form-based leads. The owner manages residential and commercial service marketing while growing a fleet washing contract with Valley Transportation.

- Service area: Ashland, Mansfield, Wooster, Loudonville, and surrounding North Central Ohio towns
- Primary CTAs: call, text, and "Get a Free Quote"
- No customer accounts, no online payments, no self-service booking
- Admin CMS is hidden behind Supabase Auth for a single business user

## Tech Stack

### Frontend
- Next.js 16+ App Router with `src/` directory and `@/*` import alias
- Tailwind CSS v4 with shadcn/ui
- React Hook Form + Zod + `@hookform/resolvers`
- `next-sitemap` for `/sitemap.xml` and `/robots.txt`
- `schema-dts` for LocalBusiness JSON-LD

### Backend / Hosting
- Supabase Postgres with row-level security and secure storage
- Supabase Storage for gallery assets
- Supabase Realtime for admin lead notifications
- Server-side Supabase service role key only in route handlers
- Migrations in `supabase/migrations/`
- Vercel deploys from `main` to production and `dev` to staging
- GitHub Actions CI on every push/PR to `dev` or `main`

### Email & Automation
- Resend transactional emails for lead alerts and confirmations
- React Email templates for consistent business messaging
- Automated email workflows for every lead submission
- DKIM and verified outbound domain setup in Squarespace DNS

### Security
- Cloudflare Turnstile on quote submissions
- Upstash Redis rate limiting on public lead endpoints
- CSP headers enforced in `next.config.ts`
- Google Maps API key restricted by referrer, API scope, and quota
- Google Calendar integration to speed owner scheduling and location planning

## Application Architecture

### Public Pages
- `/` — Homepage with services, trust signals, and quote CTAs
- `/services` — Service overview
- `/services/house-washing` — Service detail
- `/services/driveway-cleaning` — Service detail
- `/services/deck-restoration` — Service detail
- `/services/commercial-fleet` — Service detail
- `/services/[service]/[city]` — Local SEO landing pages
- `/gallery` — Before/after photo gallery
- `/about` — Business story
- `/service-area` — Coverage map and city list
- `/contact` — Quote request form with Turnstile protection

Admin routes are excluded from sitemap and protected by Supabase Auth.

## SEO & Local Visibility

- LocalBusiness JSON-LD on key pages
- NAP consistency across site and business listings
- City landing pages written for local relevance
- `next-sitemap` excludes admin routes
- Google Search Console for crawl monitoring
- Service-area schema for pressure washing coverage

## Operations & Enablement

- GitHub organization and repo setup: `sudsonwheelsusa/sudsonwheels-website`
- Contributor-ready repo structure for future developers
- Google Workspace configured for business email and service accounts
- Google Business Profile claimed for local visibility
- Vercel preview URLs for feature branches and production deploys from `main`

## Launch & Operations

- Domain: `sudsonwheelsusa.com`
- DNS managed through Squarespace Domains
- Vercel production deploy at `https://sudsonwheelsusa.com`
- Google Workspace business email and admin collaboration on external services
- Google Business Profile claimed as a pressure washing service-area business

---

**Live site:** [sudsonwheelsusa.com](https://sudsonwheelsusa.com) | **Repo:** [github.com/sudsonwheelsusa/sudsonwheels-website](https://github.com/sudsonwheelsusa/sudsonwheels-website)