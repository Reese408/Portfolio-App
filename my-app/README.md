# Portfolio Application

A personal portfolio application built with **Next.js** to showcase my skills, projects, certifications, and experience.

Live site: https://reeseredman.com

---

## Tech Stack

### Frontend
- Next.js (App Router) — Static Site Generation (SSG)
- React
- TypeScript
- Tailwind CSS
- Framer Motion

### Hosting & Infrastructure
- **Vercel** — Hosting, CDN, HTTPS, deployments
- **AWS S3** — Media asset storage (images, videos, resume PDF)
- **AWS Route 53** — Custom domain DNS

---

## Infrastructure History

This site was originally deployed on a full AWS stack for approximately one month to gain hands-on experience with cloud infrastructure:

- **S3** — Private static file hosting
- **CloudFront** — Global CDN with Origin Access Control (OAC)
- **ACM** — TLS/HTTPS certificate management
- **Route 53** — Custom domain DNS
- **WAF** — Layer 7 web application firewall (monitor mode)
- **CloudWatch** — Monitoring and cache metrics

After validating that architecture, the site was migrated to **Vercel for cost optimization**. AWS WAF alone accounted for the majority of monthly costs, which was unnecessary for a static portfolio with no authentication, no backend APIs, and no sensitive data. Vercel provides CDN, HTTPS, and DDoS protection out of the box at no cost for this use case.

**What remains on AWS:**
- Route 53 for DNS management
- S3 for media assets (publicly readable bucket serving images, videos, and documents)

---

## Architecture

```
User Browser
  → Vercel Edge Network (CDN + HTTPS)
  → Static Next.js Site

Media Assets
  → AWS S3 (us-east-2)
```

---

## Project Structure

```
my-app/
├── app/          # Next.js App Router pages
├── components/   # Reusable UI components
├── content/      # Markdown & JSON content files
├── lib/          # Utilities, content loader, media config
├── public/       # Static assets
└── next.config.ts
```

All content is loaded from local files at build time. No database or external APIs.

---

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

---

## Author

Reese Redman
Computer Science & Cybersecurity
Full-Stack | Cloud | DevOps

https://reeseredman.com
https://github.com/Reese408
