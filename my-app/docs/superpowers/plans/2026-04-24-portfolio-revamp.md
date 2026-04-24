# Portfolio Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the multi-page Next.js portfolio into a single-page scrolling app matching the Base44 design, with a separate `/about` page and individual `/projects/[slug]` detail pages.

**Architecture:** The home page (`app/page.tsx`) becomes one long scrollable page composed of six section components (Hero, Skills, Projects, Experience, Achievements, Contact). Each section component lives in `components/home/`. Skills data moves from markdown files to a static `lib/data/skills.ts`. Nav links become anchor tags; only About navigates to a separate route.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS v4, Geist font, devicons CDN for skill logos, existing content loader for projects/experience/certs/resume.

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `lib/types/content.ts` | Modify | Add `SkillEntry`, `SkillCategory` types |
| `lib/data/skills.ts` | Create | Static skills data with devicon logos |
| `lib/media.ts` | Modify | Add `projectImages` slug→URL map |
| `app/globals.css` | Modify | Background to `#F1F5F9`, add smooth-scroll |
| `components/header/Navigation.tsx` | Rewrite | White nav, anchor links, new design |
| `components/home/HeroSection.tsx` | Create | Typewriter, two-col hero, social links |
| `components/home/SkillsSection.tsx` | Create | Category tabs + icon grid + hover popover |
| `components/home/ProjectsSection.tsx` | Create | 3-col card grid with S3 images |
| `components/home/ExperienceSection.tsx` | Create | Timeline layout |
| `components/home/AchievementsSection.tsx` | Create | Awards + completed certs grid |
| `components/home/ContactSection.tsx` | Create | Two-col contact layout |
| `app/page.tsx` | Rewrite | Assembles all section components |
| `app/about/page.tsx` | Rewrite | Photo + 4 personal category cards |
| `app/projects/[slug]/page.tsx` | Modify | New design system + fix back link |
| `app/skills/page.tsx` | Delete | No longer needed |
| `app/skills/[slug]/page.tsx` | Delete | No longer needed |
| `app/experience/page.tsx` | Delete | Experience is now a home section |
| `app/experience/[slug]/page.tsx` | Delete | No longer needed |
| `app/certs/page.tsx` | Delete | Certs are now in Achievements |
| `app/certs/[slug]/page.tsx` | Delete | No longer needed |
| `app/projects/page.tsx` | Delete | Projects are now a home section |
| `app/contact/page.tsx` | Delete | Contact is now a home section |
| `components/projects/ProjectsFilter.tsx` | Delete | Replaced by ProjectsSection |
| `components/about/AboutContent.tsx` | Delete | Replaced by new about page |
| `components/contact/ContactContent.tsx` | Delete | Replaced by ContactSection |

---

## Task 1: Foundation — types, globals, media

**Files:**
- Modify: `lib/types/content.ts`
- Modify: `app/globals.css`
- Modify: `lib/media.ts`

- [ ] **Step 1: Add SkillEntry and SkillCategory types to `lib/types/content.ts`**

Append to the end of the file (after the existing `ExperienceMetadata` interface):

```typescript
// New Skills Data Types (replaces markdown-based skills)
export interface SkillEntry {
  name: string;
  logo: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: SkillEntry[];
}
```

- [ ] **Step 2: Update `app/globals.css` — set flat background and smooth scroll**

Find the `:root` block (starts around line 60 in the file) and locate `--background`. Change the body background and add smooth scroll. Add this block after the `@theme inline` block and before `:root`:

```css
html {
  scroll-behavior: smooth;
}

body {
  background-color: #F1F5F9;
}
```

- [ ] **Step 3: Add `projectImages` map to `lib/media.ts`**

Append this export at the end of `lib/media.ts`:

```typescript
/* =========================
   Project Card Images
========================= */
export const projectImages: Record<string, string> = {
  // Add S3 image URLs here when uploaded
  // 'voice-up-athletics': `${MEDIA_BASE}/projects/voice-up-athletics/cover.jpg`,
  // 'suds-on-wheels-usa': `${MEDIA_BASE}/projects/suds-on-wheels-usa/cover.jpg`,
  // 'grace-on-going': `${MEDIA_BASE}/projects/grace-on-going/cover.jpg`,
  // 'cnc-construction': `${MEDIA_BASE}/projects/cnc-construction/cover.jpg`,
  // 'gaminghub': `${MEDIA_BASE}/projects/gaminghub/cover.jpg`,
  // 'workout-app': `${MEDIA_BASE}/projects/workout-app/cover.jpg`,
};
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
cd my-app && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add lib/types/content.ts app/globals.css lib/media.ts
git commit -m "feat: foundation types, global styles, and project images map"
```

---

## Task 2: Skills data file

**Files:**
- Create: `lib/data/skills.ts`

- [ ] **Step 1: Create `lib/data/skills.ts`**

```typescript
import { SkillCategory } from '@/lib/types/content';

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        description: 'High-level, dynamic scripting language used for web interactivity, server-side development, and building full-stack applications.',
      },
      {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        description: 'A strongly-typed superset of JavaScript that enhances code quality, maintainability, and developer productivity.',
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        description: 'Versatile language used for scripting, automation, data analysis, and backend development.',
      },
      {
        name: 'Java',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        description: 'Object-oriented language widely used for enterprise applications and system design.',
      },
      {
        name: 'C#',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        description: 'Modern, object-oriented language used for .NET applications and enterprise software.',
      },
      {
        name: 'SQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
        description: 'Standard language for managing and querying relational databases like PostgreSQL, MySQL, and SQL Server.',
      },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        description: 'A JavaScript library for building fast, component-based user interfaces and single-page applications.',
      },
      {
        name: 'Next.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        description: 'A React framework with server-side rendering, static generation, and API routes for production-grade apps.',
      },
      {
        name: 'Tailwind CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        description: 'A utility-first CSS framework for rapidly building custom, responsive designs without leaving your HTML.',
      },
      {
        name: 'HTML/CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        description: 'The foundational technologies for structuring and styling web content and user interfaces.',
      },
    ],
  },
  {
    name: 'Backend',
    skills: [
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        description: 'A JavaScript runtime for building scalable server-side applications and REST APIs.',
      },
      {
        name: '.NET / ASP.NET',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
        description: "Microsoft's framework for building web APIs, microservices, and enterprise-grade backend applications.",
      },
      {
        name: 'Django',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
        description: 'A high-level Python web framework that promotes rapid development and clean, pragmatic design.',
      },
      {
        name: 'Express.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        description: 'A minimal and flexible Node.js web application framework for building REST APIs and web services.',
      },
      {
        name: 'Prisma',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
        description: 'A next-generation ORM for Node.js and TypeScript with type-safe database access and migrations.',
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        description: 'A powerful open-source relational database known for reliability, feature robustness, and performance.',
      },
      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        description: 'A document-oriented NoSQL database designed for scalability and developer agility.',
      },
      {
        name: 'Azure SQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
        description: 'A fully managed cloud relational database built on SQL Server with built-in AI and security features.',
      },
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      {
        name: 'AWS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        description: "Amazon's cloud platform offering compute, storage, networking, and 200+ managed services.",
      },
      {
        name: 'Azure',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
        description: "Microsoft's cloud computing platform for compute, analytics, storage, and networking.",
      },
      {
        name: 'GCP',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
        description: "Google's cloud platform for infrastructure, data analytics, machine learning, and application services.",
      },
      {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        description: 'A platform for building, shipping, and running applications in lightweight, portable containers.',
      },
      {
        name: 'GitHub Actions',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        description: 'CI/CD automation for building, testing, and deploying code directly from GitHub repositories.',
      },
      {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        description: 'Distributed version control system for tracking changes, collaboration, and release management.',
      },
      {
        name: 'Linux',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        description: 'Open-source OS used for server administration, automation scripting, and cloud deployments.',
      },
      {
        name: 'Cloudflare',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg',
        description: 'A global CDN and security platform providing DDoS protection, DNS, and edge computing services.',
      },
    ],
  },
];

export const SOFT_SKILLS = [
  'Critical Thinking',
  'Adaptability',
  'Collaboration',
  'Initiative',
  'Communication',
  'Analytical Thinking',
  'Time Management',
  'Attention to Detail',
  'Problem Solving',
];
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/data/skills.ts
git commit -m "feat: add static skills data with devicon logos"
```

---

## Task 3: Navigation rebuild

**Files:**
- Rewrite: `components/header/Navigation.tsx`

- [ ] **Step 1: Rewrite `components/header/Navigation.tsx`**

```tsx
'use client';
import Link from 'next/link';
import { useState, useCallback, memo } from 'react';
import { Menu, X } from 'lucide-react';
import { miscMedia } from '@/lib/media';

const ANCHOR_LINKS = [
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#achievements', label: 'Achievements' },
  { href: '/#contact', label: 'Contact' },
] as const;

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-slate-900 hover:text-sky-500 transition-colors"
        >
          Reese Redman
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors">
            About
          </Link>
          {ANCHOR_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={miscMedia.resume}
            download
            className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-slate-600 hover:text-sky-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
          <Link
            href="/about"
            onClick={closeMenu}
            className="block text-sm font-medium text-slate-700 hover:text-sky-500 py-2"
          >
            About
          </Link>
          {ANCHOR_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block text-sm font-medium text-slate-700 hover:text-sky-500 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={miscMedia.resume}
            download
            onClick={closeMenu}
            className="block text-center px-4 py-2 bg-sky-500 text-white rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default memo(NavigationBar);
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/header/Navigation.tsx
git commit -m "feat: rebuild nav with white design and anchor links"
```

---

## Task 4: Hero section

**Files:**
- Create: `components/home/HeroSection.tsx`

- [ ] **Step 1: Create `components/home/HeroSection.tsx`**

```tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, ChevronDown } from 'lucide-react';
import { Resume } from '@/lib/types/content';
import { miscMedia } from '@/lib/media';

const ROLES = ['DevSecOps Engineer', 'Full Stack Developer', 'Cloud Architect'];

function TypewriterText() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex(r => (r + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-sky-500">|</span>
    </span>
  );
}

interface HeroSectionProps {
  resume: Resume;
}

export default function HeroSection({ resume }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-600 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to Opportunities
            </div>

            {/* Typewriter title */}
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
              <TypewriterText />
            </h1>

            {/* Name */}
            <p className="text-2xl font-semibold text-slate-800">
              Hi, I&apos;m <span className="text-sky-500">{resume.name}</span>
            </p>

            {/* Bio */}
            <p className="text-base text-slate-500 leading-relaxed max-w-lg">
              {resume.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/#projects"
                className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors"
              >
                View My Work
              </a>
              <a
                href="/#contact"
                className="px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-sky-300 hover:text-sky-500 transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={`mailto:${resume.email}`}
                aria-label="Email"
                className="p-2 text-slate-400 hover:text-sky-500 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href={resume.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-slate-400 hover:text-sky-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={resume.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-slate-400 hover:text-sky-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — photo card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden bg-slate-100 shadow-2xl">
                <img
                  src={miscMedia.profilePic}
                  alt={resume.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Available badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-md text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Available
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a href="/#skills" className="text-slate-300 hover:text-sky-400 transition-colors animate-bounce">
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/HeroSection.tsx
git commit -m "feat: add HeroSection with typewriter effect and two-column layout"
```

---

## Task 5: Skills section

**Files:**
- Create: `components/home/SkillsSection.tsx`

- [ ] **Step 1: Create `components/home/SkillsSection.tsx`**

```tsx
'use client';
import { useState } from 'react';
import { SKILLS_DATA, SOFT_SKILLS } from '@/lib/data/skills';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2">
      {children}
    </p>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(SKILLS_DATA[0].name);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeSkills = SKILLS_DATA.find(c => c.name === activeCategory)?.skills ?? [];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-4xl font-bold text-slate-900">Technical Toolkit</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category sidebar */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-48 shrink-0 pb-2 lg:pb-0">
            {SKILLS_DATA.map(category => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.name
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="flex-1 bg-white rounded-2xl border border-slate-100 p-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">{activeCategory}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {activeSkills.map(skill => (
                <div
                  key={skill.name}
                  className="relative flex flex-col items-center gap-2 cursor-default group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-50 group-hover:bg-sky-50 transition-colors p-2">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-600 text-center leading-tight">
                    {skill.name}
                  </span>

                  {/* Hover popover */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-slate-900 text-white text-xs rounded-xl p-3 shadow-xl z-10 pointer-events-none">
                      <p className="font-semibold mb-1">{skill.name}</p>
                      <p className="text-slate-300 leading-relaxed">{skill.description}</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-10">
          <h3 className="text-sm font-semibold text-slate-500 mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map(skill => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full border border-slate-200 text-sm text-slate-600 bg-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/SkillsSection.tsx
git commit -m "feat: add SkillsSection with category tabs and hover popovers"
```

---

## Task 6: Projects section

**Files:**
- Create: `components/home/ProjectsSection.tsx`

- [ ] **Step 1: Create `components/home/ProjectsSection.tsx`**

```tsx
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/types/content';
import { projectImages } from '@/lib/media';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2">
      {children}
    </p>
  );
}

interface ProjectsProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">High-Impact Projects</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A selection of digital solutions built with a focus on scalability, performance, and exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => {
            const imageUrl = projectImages[project.slug];
            const isLive = project.status === 'Live' || project.status === 'Completed';

            return (
              <div
                key={project.slug}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col"
              >
                {/* Image */}
                <Link href={`/projects/${project.slug}`} className="block relative h-48 bg-gradient-to-br from-sky-100 to-slate-100 overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-sky-100 via-slate-100 to-slate-200 flex items-center justify-center">
                      <span className="text-slate-300 text-5xl font-bold">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  {isLive && (
                    <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      LIVE
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="font-bold text-slate-900 text-lg mb-2 hover:text-sky-500 transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
                    {project.content.split('\n').find(l => l.trim() && !l.startsWith('#'))?.substring(0, 130) ?? ''}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-400 text-xs rounded-md">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-auto">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-sky-200 text-sky-600 rounded-lg text-xs font-semibold hover:bg-sky-50 transition-colors"
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors"
                      >
                        <Github size={12} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/ProjectsSection.tsx
git commit -m "feat: add ProjectsSection with 3-col grid and S3 image support"
```

---

## Task 7: Experience section

**Files:**
- Create: `components/home/ExperienceSection.tsx`

- [ ] **Step 1: Create `components/home/ExperienceSection.tsx`**

```tsx
import { Calendar } from 'lucide-react';
import { ExperienceDetail } from '@/lib/types/content';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2">
      {children}
    </p>
  );
}

interface ExperienceSectionProps {
  experiences: ExperienceDetail[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-4xl font-bold text-slate-900">Professional Journey</h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-slate-200 translate-x-0" style={{ left: '55%' }} />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const highlights = exp.content
                .split('\n')
                .filter(l => l.trim().startsWith('-'))
                .map(l => l.replace(/^-\s*/, '').trim())
                .slice(0, 5);

              return (
                <div key={i} className="relative lg:grid lg:grid-cols-[55%_auto] lg:gap-8">
                  {/* Card */}
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2 text-sky-500 text-sm font-medium mb-3">
                      <Calendar size={14} />
                      {exp.startDate} – {exp.endDate}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.company}</h3>
                    <p className="text-slate-500 text-sm mb-4">{exp.title}</p>

                    {highlights.length > 0 && (
                      <ul className="space-y-1.5 mb-4">
                        {highlights.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map(skill => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-md font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex items-start pt-8 pl-4">
                    <div className="w-3 h-3 rounded-full bg-sky-400 border-2 border-white shadow-md shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/ExperienceSection.tsx
git commit -m "feat: add ExperienceSection with timeline layout"
```

---

## Task 8: Achievements section

**Files:**
- Create: `components/home/AchievementsSection.tsx`

- [ ] **Step 1: Create `components/home/AchievementsSection.tsx`**

```tsx
import { Award, Certification } from '@/lib/types/content';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2 text-center">
      {children}
    </p>
  );
}

interface AchievementsSectionProps {
  awards: Award[];
  certifications: Certification[];
}

export default function AchievementsSection({ awards, certifications }: AchievementsSectionProps) {
  const completedCerts = certifications.filter(c => c.status === 'Completed');

  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Milestones &amp; Victories</SectionLabel>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            My <span className="text-sky-500">Achievements</span>
          </h2>
          <p className="text-slate-500">
            From code to competition — every achievement tells a story of dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Awards */}
          {awards.map((award, i) => (
            <div
              key={`award-${i}`}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">🏆</span>
                {award.date && (
                  <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                    {award.date}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{award.name}</h3>
              <p className="text-sky-500 text-sm font-medium mb-3">{award.issuer}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}

          {/* Completed certifications */}
          {completedCerts.map((cert, i) => (
            <div
              key={`cert-${i}`}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">🎓</span>
                {cert.date && (
                  <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                    {cert.date}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1 leading-tight">{cert.name}</h3>
              <p className="text-sky-500 text-sm font-medium mb-3">{cert.issuer}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/AchievementsSection.tsx
git commit -m "feat: add AchievementsSection combining awards and completed certs"
```

---

## Task 9: Contact section

**Files:**
- Create: `components/home/ContactSection.tsx`

- [ ] **Step 1: Create `components/home/ContactSection.tsx`**

```tsx
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Resume } from '@/lib/types/content';
import { miscMedia } from '@/lib/media';

const OPPORTUNITY_PILLS = [
  'Full-Stack Development',
  'CyberSecurity',
  'Cloud Engineering',
  'DevOps / DevSecOps',
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2">
      {children}
    </p>
  );
}

interface ContactSectionProps {
  resume: Resume;
}

export default function ContactSection({ resume }: ContactSectionProps) {
  const education = resume.education[0];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Let&apos;s Connect</h2>
          <p className="text-slate-500 max-w-xl">
            I&apos;m always interested in hearing about new opportunities, projects, or just connecting with fellow developers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — contact info */}
          <div className="space-y-3">
            {[
              { icon: Mail, label: 'Email', value: resume.email, href: `mailto:${resume.email}`, external: false },
              { icon: Phone, label: 'Phone', value: resume.phone, href: `tel:${resume.phone}`, external: false },
              { icon: MapPin, label: 'Location', value: resume.location, href: null, external: false },
            ].map(({ icon: Icon, label, value, href, external }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 px-5 py-4"
              >
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-sky-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{label}</p>
                  {href ? (
                    <a href={href} className="text-slate-700 font-medium text-sm hover:text-sky-500 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-700 font-medium text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* GitHub */}
            <a
              href={resume.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 px-5 py-4 hover:border-sky-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-400 font-medium">GitHub</p>
                <p className="text-slate-700 font-medium text-sm">Reese408</p>
              </div>
              <ExternalLink size={14} className="text-slate-300 group-hover:text-sky-400 transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={resume.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 px-5 py-4 hover:border-sky-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
                <p className="text-slate-700 font-medium text-sm">robert-redman</p>
              </div>
              <ExternalLink size={14} className="text-slate-300 group-hover:text-sky-400 transition-colors" />
            </a>
          </div>

          {/* Right — opportunity card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Looking for opportunities in</h3>
              <div className="flex flex-wrap gap-2">
                {OPPORTUNITY_PILLS.map(pill => (
                  <span
                    key={pill}
                    className="px-3 py-1.5 bg-sky-50 text-sky-600 text-sm rounded-full border border-sky-100 font-medium"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {education && (
              <p className="text-sm text-slate-500">
                Expected graduation:{' '}
                <span className="font-semibold text-slate-700">{education.graduationDate}</span>
                {' '}from {education.school}
              </p>
            )}

            <div className="flex flex-col gap-3 mt-auto">
              <a
                href={`mailto:${resume.email}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition-colors"
              >
                <Mail size={16} />
                Send Me an Email
              </a>
              <a
                href={miscMedia.resume}
                download
                className="flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-16">
          © {new Date().getFullYear()} Reese Redman. Built with passion.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/ContactSection.tsx
git commit -m "feat: add ContactSection with two-col layout and opportunity pills"
```

---

## Task 10: Assemble home page

**Files:**
- Rewrite: `app/page.tsx`

- [ ] **Step 1: Rewrite `app/page.tsx`**

```tsx
import { getResume, getAllProjects, getCertifications, getAllExperience } from '@/lib/content/loader';
import HeroSection from '@/components/home/HeroSection';
import SkillsSection from '@/components/home/SkillsSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  const resume = getResume();
  const projects = getAllProjects();
  const { certifications } = getCertifications();
  const experiences = getAllExperience();

  return (
    <main className="min-h-screen bg-[#F1F5F9]">
      <HeroSection resume={resume} />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <AchievementsSection awards={resume.awards} certifications={certifications} />
      <ContactSection resume={resume} />
    </main>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Start dev server and visually verify the home page loads with all sections**

```bash
npm run dev
```

Open http://localhost:3000. Check that all six sections render and the nav anchor links scroll correctly.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble single-page home with all sections"
```

---

## Task 11: About page

**Files:**
- Rewrite: `app/about/page.tsx`

- [ ] **Step 1: Rewrite `app/about/page.tsx`**

```tsx
import Link from 'next/link';
import { ArrowLeft, GraduationCap, Trophy, Users, Heart } from 'lucide-react';
import { getResume } from '@/lib/content/loader';
import { miscMedia } from '@/lib/media';

const ABOUT_CARDS = [
  {
    icon: GraduationCap,
    title: 'Education',
    content: 'Bachelor of Science in Computer Science with a minor in Cyber Security at Ashland University. Expected graduation December 2026. Relevant coursework includes AI & Machine Learning, System Design, Operating Systems, Linux Security, and Database Management.',
  },
  {
    icon: Trophy,
    title: 'Wrestling',
    content: 'Competing as a student-athlete on the Ashland University wrestling team. Wrestling has sharpened my discipline, resilience under pressure, and ability to stay focused when it matters — traits I bring directly into how I approach software engineering.',
  },
  {
    icon: Users,
    title: 'Leadership & Faith',
    content: 'Serving as a Huddle Leader in a campus Bible Study, where I lead discussions, mentor peers, and help build community. I also contribute to the ACM Web Development Team, collaborating on real projects with fellow CS students.',
  },
  {
    icon: Heart,
    title: 'Personal Interests',
    content: 'Outside of code and competition, I enjoy building things — whether that\'s side projects, workflows, or understanding how systems work at a deeper level. I\'m driven by curiosity and motivated by the challenge of turning ideas into real, useful products.',
  },
];

export default function AboutPage() {
  const resume = getResume();

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-sky-500 transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2">
            About Me
          </p>
          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-1">
            The person behind the{' '}
            <span className="text-sky-500 underline decoration-sky-300 underline-offset-4">
              code
            </span>
          </h1>
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Photo */}
          <div className="w-full max-w-sm mx-auto lg:mx-0">
            <div className="rounded-3xl overflow-hidden bg-slate-100 shadow-xl aspect-[3/4]">
              <img
                src={miscMedia.profilePic}
                alt={resume.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_CARDS.map(({ icon: Icon, title, content }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                    <Icon size={16} className="text-sky-500" />
                  </div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Check the About page in the browser**

Open http://localhost:3000/about. Verify photo displays, 4 cards render, back link works.

- [ ] **Step 4: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: rewrite About page with photo and personal category cards"
```

---

## Task 12: Update project detail page

**Files:**
- Modify: `app/projects/[slug]/page.tsx`

- [ ] **Step 1: Update the back button and restyle `app/projects/[slug]/page.tsx`**

Replace the entire file contents:

```tsx
import { getAllProjects, getProjectBySlug } from '@/lib/content/loader';
import { Markdown } from '@/components/ui/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projectImages } from '@/lib/media';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map(project => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const imageUrl = projectImages[project.slug];
  const isLive = project.status === 'Live' || project.status === 'Completed';

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-sky-500 transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Hero card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 mb-8">
          <div className="relative h-64 bg-gradient-to-br from-sky-100 to-slate-100">
            {imageUrl ? (
              <img src={imageUrl} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl font-bold text-slate-200">{project.title.charAt(0)}</span>
              </div>
            )}
            {isLive && (
              <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 text-green-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                LIVE
              </span>
            )}
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-700 transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-xl text-sm font-semibold hover:bg-sky-600 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Markdown content */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
          <Markdown content={project.content} />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Check a project detail page in the browser**

Open http://localhost:3000/projects/voice-up-athletics. Verify the new design renders and the back link returns to `/#projects`.

- [ ] **Step 4: Commit**

```bash
git add app/projects/[slug]/page.tsx
git commit -m "feat: update project detail page to new design system"
```

---

## Task 13: Delete old pages and unused components

**Files to delete:**
- `app/skills/page.tsx`
- `app/skills/[slug]/page.tsx`
- `app/experience/page.tsx`
- `app/experience/[slug]/page.tsx`
- `app/certs/page.tsx`
- `app/certs/[slug]/page.tsx`
- `app/projects/page.tsx`
- `app/contact/page.tsx`
- `components/projects/ProjectsFilter.tsx`
- `components/about/AboutContent.tsx`
- `components/contact/ContactContent.tsx`

- [ ] **Step 1: Delete the old route pages**

```bash
rm app/skills/page.tsx
rm -rf app/skills/[slug]
rmdir app/skills
rm app/experience/page.tsx
rm -rf "app/experience/[slug]"
rmdir app/experience
rm app/certs/page.tsx
rm -rf "app/certs/[slug]"
rmdir app/certs
rm app/projects/page.tsx
rm app/contact/page.tsx
```

- [ ] **Step 2: Delete old unused components**

```bash
rm components/projects/ProjectsFilter.tsx
rm components/about/AboutContent.tsx
rm components/contact/ContactContent.tsx
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors. If there are import errors pointing to deleted files, track down the importer and remove the import.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove old multi-page routes and unused components"
```

---

## Task 14: Final build verification

- [ ] **Step 1: Run full production build**

```bash
npm run build
```

Expected: build completes with no errors. Warnings about `img` vs `next/image` are acceptable.

- [ ] **Step 2: Check for any 404s in the running dev server**

Start dev server with `npm run dev` and verify:
- http://localhost:3000 — home page, all sections visible, smooth scroll works
- http://localhost:3000/about — photo + 4 cards
- http://localhost:3000/projects/voice-up-athletics — project detail renders
- http://localhost:3000/projects/suds-on-wheels-usa — project detail renders
- Nav anchor links scroll to correct sections

- [ ] **Step 3: Commit if any final fixes were needed**

```bash
git add -A
git commit -m "fix: final build fixes and polish"
```

---

## Self-Review Checklist

**Spec coverage:**
- [x] Single-page home with Hero, Skills, Projects, Experience, Achievements, Contact sections
- [x] Separate /about page with photo + 4 personal cards
- [x] /projects/[slug] kept and updated
- [x] Skills moved to static `lib/data/skills.ts` with devicon logos
- [x] Category tabs in Skills section
- [x] Hover popover on skill icons
- [x] Soft skills pills
- [x] Project cards with S3 image or gradient fallback
- [x] LIVE badge on live/completed projects
- [x] Timeline layout for Experience
- [x] Awards + completed certs combined in Achievements
- [x] Two-col Contact with opportunity pills
- [x] Typewriter effect on hero
- [x] Anchor link nav
- [x] Old routes deleted
- [x] Design tokens: `#F1F5F9` background, sky-500 accent, white cards, Geist font
