---
title: "Grace, OnGoing"
slug: "grace-on-going"
status: "Live"
tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Shopify", "GraphQL", "Zustand", "React Query", "AWS S3", "Vercel"]
github: "https://github.com/Reese408/GOGE-Commerce.git"
demo: "https://graceongoing.com"
featured: true
order: 3
---

# Grace, Ongoing

A headless e-commerce storefront for a Christian apparel brand, built with Next.js 16 and Shopify's Storefront API.

**Live Site:** [graceongoing.com](https://graceongoing.com)

## Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4 with dark mode support
- **State:** Zustand (cart) + React Query (API caching)
- **Backend:** Shopify Storefront API (GraphQL), Resend (email)
- **Infrastructure:** Vercel, AWS S3

## Key Features

### E-Commerce
- Full product catalog with variant selection, real-time inventory, and persistent cart
- Fuzzy search powered by Fuse.js
- Shopify-hosted checkout with automatic redirect

### Performance
- React Server Components for fast initial loads and SEO
- ISR with 60-second revalidation for product data
- Native CSS animations (removed Framer Motion, reduced INP by 84%)
- Optimized images via Next.js with AVIF/WebP formats

### Developer Experience
- Strict TypeScript throughout
- Structured data (JSON-LD) for product SEO
- Dynamic sitemap generation
- Content Security Policy headers

## Performance Results

| Metric | Improvement |
|--------|-------------|
| INP (Shop page) | 2552ms → 400ms (84% reduction) |
| Bundle size | Removed 3.3MB from critical path |
| Lighthouse Performance | 95+ |

## System Design

### Hosting & Deployment
- Vercel for hosting with automatic CI/CD from GitHub pushes
- Vercel Analytics and Speed Insights for Web Vitals monitoring
- Squarespace domain with DNS pointed to Vercel

### Media Storage
- AWS S3 bucket for product images and videos
- Next.js Image component optimizes S3 assets on-the-fly (AVIF/WebP conversion, responsive sizing)
- Cloudflare in front of S3 for CDN caching and reduced latency

### Email Infrastructure
- Resend handles transactional emails from the contact form
- Email forwarding configured so `support@graceongoing.com` routes to business inbox
- Server-side API route keeps credentials secure

### Shopify Integration
- Headless setup: Shopify manages inventory, payments, and fulfillment—Next.js handles the storefront
- GraphQL queries fetch products, variants, pricing, and real-time stock levels
- Cart state lives client-side (Zustand + localStorage); checkout redirects to Shopify's hosted checkout
- No Shopify theme code—full control over UI/UX while Shopify handles the hard parts

## Technical Highlights

### Performance Optimization
Achieved an 84% reduction in INP (Interaction to Next Paint) by replacing Framer Motion with native CSS animations. This removed 3.3MB from the critical rendering path and improved the Shop page INP from 2552ms to 400ms, resulting in a significantly more responsive user experience.

### Headless Architecture
Implemented a fully headless e-commerce solution that separates the frontend from Shopify's backend. This architecture provides complete control over the user interface while leveraging Shopify's robust e-commerce infrastructure for inventory management, payments, and order fulfillment.

### Intelligent Caching Strategy
Utilized ISR (Incremental Static Regeneration) with 60-second revalidation intervals to balance fresh product data with optimal performance. Combined with React Query for client-side API caching, ensuring users see up-to-date information without sacrificing speed.

### Modern Image Optimization
Leveraged Next.js Image component to automatically convert and serve images in modern formats (AVIF/WebP) with responsive sizing. S3-hosted assets are optimized on-the-fly and cached via Cloudflare CDN for minimal latency globally.

## Impact

Built a production e-commerce platform that combines faith-based messaging with modern web performance. The site handles real-world traffic while maintaining 95+ Lighthouse scores, demonstrating that excellent UX and fast load times are achievable even with complex e-commerce functionality.

---

**[View Live Site](https://www.graceongoing.com)** | **[GitHub Repository](https://github.com/Reese408/GOGE-Commerce.git)**
