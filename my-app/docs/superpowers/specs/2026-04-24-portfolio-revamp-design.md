# Portfolio Revamp — Design Spec
**Date:** 2026-04-24
**Status:** Approved

## Overview

Revamp the existing Next.js portfolio from a multi-page app into a single-page scrolling layout modeled after the Base44 design at `https://reeses-creative-space.base44.app`. The home page becomes one long scrollable page with anchor sections. A separate `/about` page covers personal background, hobbies, and identity beyond the resume.

---

## Routing & Architecture

### Keep
- `/` — rebuilt as single scrolling page
- `/about` — redesigned standalone page
- `/projects/[slug]` — individual project detail pages (still linked from project cards)

### Delete
- `/skills` and `/skills/[slug]`
- `/experience` and `/experience/[slug]`
- `/certs` and `/certs/[slug]`

### Nav behavior
- Logo ("Reese Redman") links to `/`
- Nav links are anchor tags: `#skills`, `#projects`, `#experience`, `#achievements`, `#contact`
- `About` navigates to `/about`
- `Resume` is a download link (existing behavior)
- Smooth scroll on all anchor links

---

## Visual Design System

| Token | Value |
|---|---|
| Background | Flat light gray `#F1F5F9` |
| Cards | White, `rounded-2xl`, subtle `border border-slate-100` |
| Primary accent | Sky blue `#0EA5E9` |
| Section labels | `text-xs font-semibold tracking-widest text-sky-500 uppercase` |
| Body text | Near-black `#0F172A` |
| Font | Geist Sans (already installed) |
| Nav | White/translucent bar, sticky top |

**Reusable section header pattern:**
```
SECTION_LABEL   ← small blue all-caps
Big Bold Title  ← large black heading
Optional subtitle ← muted gray
```

**Animations:**
- Typewriter effect on hero title cycling through roles
- Smooth scroll anchor navigation
- `hover:-translate-y-1 transition-all duration-300` on all cards
- Scroll-down chevron on hero

---

## Home Page Sections

### 1. Hero (`#hero`)
- Layout: two-column, text left / photo right
- Left:
  - `OPEN TO OPPORTUNITIES` pill badge with pulsing green dot
  - Typewriter title cycling: "DevSecOps Engineer" → "Full Stack Developer" → "Cloud Architect"
  - `Hi, I'm Reese Redman` with name in sky blue
  - Two bio paragraphs from `resume.json` summary
  - Two CTA buttons: `View My Work` (solid blue → `#projects`) + `Get In Touch` (outline → `#contact`)
  - Social icon row: Email, LinkedIn, GitHub
  - Scroll-down chevron
- Right:
  - Large rounded photo card (profile pic from S3)
  - `Available` badge top-right corner of card (green dot)

### 2. Skills (`#skills`)
- Section label: `SKILLS`
- Heading: `Technical Toolkit`
- Layout: left category sidebar + right icon grid
- Data source: new static file `lib/data/skills.ts` (replaces markdown files)
- Categories: Languages, Frontend, Backend, Database, DevOps & Cloud
- Each skill: devicon CDN logo + name; hovering a skill icon shows a small popover card below it with the description text
- Soft Skills pills at bottom (from `resume.json`)
- Markdown skill files (`content/skills/`) are deprecated and not used

### 3. Projects (`#projects`)
- Section label: `PORTFOLIO`
- Heading: `High-Impact Projects`
- Subtitle: `A selection of digital solutions built with focus on scalability, performance, and exceptional user experience.`
- Layout: 3-column card grid
- Each card:
  - Image from S3 bucket (user will add; use styled placeholder gradient until populated)
  - `LIVE` badge overlay top-left (green pill) if project has `liveUrl`
  - Project title (bold)
  - Description (2–3 lines, clamped)
  - Tech stack badges (up to 4, `+N` if more)
  - `Live Demo` button (outline blue, links to `liveUrl`)
  - `Source` button (outline gray, links to `github`)
  - Card links to `/projects/[slug]` for full detail
- All projects displayed in the grid (no artificial limit); no separate archive page needed since the section is on the home page
- Data source: existing `content/projects/*.md` markdown files (unchanged)

### 4. Experience (`#experience`)
- Section label: `EXPERIENCE`
- Heading: `Professional Journey`
- Layout: timeline — cards left-aligned, vertical line + dots on right
- Each entry:
  - Calendar icon + date range in sky blue
  - Company name (bold)
  - Role title (muted gray)
  - Summary paragraph
  - Bullet point achievements (sky blue dots)
  - Tech/skill tag pills
- Data source: existing `content/experience/*.md` markdown files (unchanged)

### 5. Achievements (`#achievements`)
- Section label: `MILESTONES & VICTORIES`
- Heading: `My Achievements` (with "Achievements" in sky blue)
- Subtitle: `From code to competition — every achievement tells a story of dedication.`
- Layout: 2–3 column card grid
- Sources combined:
  - Awards from `resume.json` → `awards[]`
  - Completed certifications from `content/certs/certs.json`
- Each card:
  - Emoji or icon (trophy for awards, badge/shield for certs)
  - Date badge top-right (gray pill)
  - Name (bold)
  - Issuer in sky blue
  - Description text

### 6. Contact (`#contact`)
- Section label: `CONTACT`
- Heading: `Let's Connect`
- Subtitle: `I'm always interested in hearing about new opportunities, projects, or just connecting with fellow developers.`
- Layout: two-column
- Left column — contact info cards (each with blue icon, label, value):
  - Email
  - Phone
  - Location
  - GitHub (with external link arrow)
  - LinkedIn (with external link arrow)
- Right column — opportunity card:
  - `Looking for opportunities in` with pills: Full-Stack Development, CyberSecurity, Cloud Engineering, DevOps / DevSecOps
  - Expected graduation: May 2027 from Ashland University
  - `Send Me an Email` button (solid sky blue, `mailto:`)
  - `Download Resume` button (outline gray)

---

## About Page (`/about`)

- Back to Home link top-left
- Section label: `ABOUT ME`
- Heading: `The person behind the` `code` (with "code" in sky blue + blue underline)
- Layout: photo left, category cards right (2 cards × 2 rows)
- Photo: same profile pic as hero, large rounded card
- Category cards (user fills in content — placeholder text on build):
  1. **Education** — CS & CyberSecurity at Ashland University, GPA, expected graduation
  2. **Wrestling** — weight class, record, what the sport has taught
  3. **Leadership & Faith** — Huddle Leader role, Bible Study, mentoring
  4. **Personal Interests** — hobbies, what drives you outside tech
- Each card: blue icon, bold title, paragraph text

---

## Data Layer Changes

| Source | Change |
|---|---|
| `content/skills/*.md` | Deprecated — replaced by `lib/data/skills.ts` |
| `content/projects/*.md` | Unchanged |
| `content/experience/*.md` | Unchanged |
| `content/certs/certs.json` | Unchanged — rendered in Achievements |
| `content/profile/resume.json` | Unchanged — awards, contact, social links |
| `lib/data/skills.ts` | New file — categorized skills with devicon logos and descriptions |

---

## Files to Delete

- `app/skills/page.tsx`
- `app/skills/[slug]/page.tsx`
- `app/experience/page.tsx`
- `app/experience/[slug]/page.tsx`
- `app/certs/page.tsx`
- `app/certs/[slug]/page.tsx`
- `components/projects/ProjectsFilter.tsx` (replaced by inline section)

## Files to Create / Heavily Rewrite

- `app/page.tsx` — full rewrite as single-page
- `app/about/page.tsx` — rewrite
- `components/header/header.tsx` — update nav to anchor links
- `lib/data/skills.ts` — new static skills data file
- `components/home/HeroSection.tsx` — new
- `components/home/SkillsSection.tsx` — new
- `components/home/ProjectsSection.tsx` — new
- `components/home/ExperienceSection.tsx` — new
- `components/home/AchievementsSection.tsx` — new
- `components/home/ContactSection.tsx` — new
