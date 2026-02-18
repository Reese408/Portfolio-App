---
title: "Workout App"
slug: "workout-app"
status: "In Progress"
tech: ["Next.js", "Prisma", "React", "PostgreSQL", "TypeScript", "AWS S3"]
github: "https://github.com/Reese408/WorkoutApp-3"
demo: ""
video: "workoutApp"
featured: true
order: 1
---

# Workout App

A modern, full-stack workout tracking application designed for fitness enthusiasts to manage their training effectively. What started as a BetterAuth practice project evolved into a production-grade application with enterprise-level authentication, comprehensive workout tracking, and advanced analytics capabilities.

## Project Overview

WorkoutApp-3 is a comprehensive fitness tracking platform that empowers users to create custom workout routines, track their progress over time, and analyze their performance with detailed metrics. The application combines robust security features with an intuitive user experience to help users achieve their fitness goals.

## Key Features

### Workout Management
- **Custom Routine Builder** - Create and organize personalized workout routines tailored to individual goals
- **Exercise Library** - Searchable database of exercises with detailed information
- **Real-Time Workout Execution** - Interactive workout sessions with built-in timers and progress tracking
- **Superset Support** - Advanced circuit training capabilities for efficient workouts
- **Public Workout Sharing** - Share workout routines via SEO-friendly URLs with the community

### Progress Tracking & Analytics
- **Complete Workout History** - Comprehensive logging of all workout sessions
- **Personal Record Calculations** - Automatic 1RM calculations using the Epley formula
- **Volume Metrics** - Track sets, reps, weight, and duration across all exercises
- **Weekly Activity Monitoring** - Visual representation of training frequency and consistency
- **Post-Workout Analytics** - Detailed insights and statistics after each session

### Security & Authentication
- **Enterprise-Level Auth** - Powered by Better Auth with multiple authentication methods
- **Email/Password Login** - Traditional authentication with secure password hashing using bcryptjs
- **OAuth Integration** - Social login support for Google and GitHub
- **Two-Factor Authentication** - TOTP-based 2FA with backup codes for account security
- **Email Verification** - Automated email verification using Resend
- **Secure Session Management** - HTTP-only cookies with automatic expiry and CSRF protection
- **Privacy Protection** - Generic error messages to prevent email enumeration attacks

## Technical Stack

### Frontend
- **Next.js 16.0.10** - Latest App Router with server-side rendering for optimal performance
- **React 19.2.1** - Modern React with concurrent features
- **TypeScript 5.x** - Full type safety throughout the application
- **Tailwind CSS 4.x** - Utility-first CSS framework for responsive design
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Consistent icon system
- **Framer Motion** - Smooth animations and transitions
- **next-themes** - Dark/light/system theme support

### Backend
- **PostgreSQL 15** - Robust relational database running in Docker
- **Prisma 5.22.0** - Type-safe ORM with optimized queries
- **Better Auth 1.4.7** - Modern authentication library
- **Resend 6.6.0** - Reliable transactional email service
- **Zod 4.1.13** - Runtime validation and type inference
- **AWS S3** - Scalable object storage with presigned URLs for secure access

### Data & State Management
- **TanStack Query 5.90.12** - Powerful async state management with caching
- **TanStack Query DevTools** - Development tools for debugging queries
- **Server Actions** - Next.js server actions for mutations and data updates

### DevOps & Tooling
- **Docker & Docker Compose** - Containerization for consistent development environments
- **GitHub Actions** - Automated CI/CD pipeline
- **ESLint 9** - Code quality and consistency enforcement
- **Dependabot** - Automated dependency updates

## Database Architecture

The application uses a comprehensive database schema optimized for performance and data integrity:

**Authentication Models:**
- User, Account, Session management
- TwoFactor authentication with backup codes

**Workout Models:**
- Exercise library with categories and metadata
- WorkoutRoutine for custom training programs
- WorkoutLog for session tracking
- SetLog for detailed exercise performance
- PersonalRecord for tracking PRs and achievements
- PublicWorkout for community sharing

All relationships include cascade deletes and optimized indexing for fast queries.

## Development Highlights

### Security-First Approach
Implemented comprehensive security measures including input validation via Zod schemas, bcrypt password hashing, CSRF protection, rate limiting, and complete TypeScript type safety to prevent vulnerabilities.

### Performance Optimization
Leveraged Next.js server-side rendering, TanStack Query caching strategies, and optimized database queries with Prisma to ensure fast page loads and smooth user interactions.

### User Experience
Designed an intuitive interface with real-time feedback, smooth animations via Framer Motion, and responsive design that works seamlessly across all devices.

### AWS Integration
Implemented AWS S3 integration with presigned URLs for secure media storage and retrieval, enabling users to attach photos and videos to their workout logs.

## Current Status

The project is actively in development with ongoing work on:
- Enhanced analytics and data visualization features
- Mobile app companion development
- Social features for workout sharing and community engagement
- Advanced exercise form guides with video demonstrations
- AI-powered workout recommendations based on user history
- Integration with wearable fitness devices

## Technical Challenges Solved

### Authentication Complexity
Successfully implemented a multi-layered authentication system combining traditional credentials, OAuth providers, and two-factor authentication while maintaining security best practices.

### Data Relationships
Designed and optimized complex database relationships between users, routines, exercises, and logs while maintaining data integrity and query performance.

### Real-Time Updates
Implemented efficient state management using TanStack Query to provide real-time updates during workout sessions without overwhelming the server with requests.

## Impact

Building a comprehensive fitness tracking platform that helps users stay accountable to their goals, track meaningful progress over time, and optimize their training through data-driven insights. The application serves as both a practical fitness tool and a showcase of modern full-stack development practices.
