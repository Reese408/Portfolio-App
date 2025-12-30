# 🌐 Portfolio Application — AWS + Next.js Static Deployment

This project is a **production-ready personal portfolio application** designed to showcase my **skills, projects, certifications, and experience** while demonstrating real-world **cloud infrastructure, security, and deployment practices**.

Rather than using a managed platform like Vercel, this portfolio was intentionally built and deployed using **core AWS services** to demonstrate hands-on knowledge of **cloud architecture, CDN caching, security controls, and cost-efficient hosting**.

---

## 🚀 Live Site
🔗 https://reeseredman.com

---

## 🎯 Project Goals

- Build a **clean, fast, static portfolio** with modern web tooling
- Deploy using **AWS-native infrastructure**
- Secure the application using **best practices**
- Ensure **low cost, high performance, and scalability**
- Demonstrate **DevOps & Cloud fundamentals** in a real project

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router) — Static Site Generation (SSG)
- React
- TypeScript
- Modern CSS
- Static export (`output: export`)

### Cloud & Infrastructure
- Amazon S3 — Private static file storage
- Amazon CloudFront — Global CDN, caching, HTTPS, DDoS protection
- AWS Route 53 — Custom domain & DNS
- AWS Certificate Manager (ACM) — TLS/HTTPS certificates
- CloudFront Origin Access Control (OAC) — Secure private S3 access
- AWS CloudWatch — Monitoring and cache metrics
- AWS WAF (monitor mode) — Layer 7 protection

---

## 🏗️ Architecture

User Browser  
→ CloudFront (CDN + HTTPS + Cache)  
→ Private S3 Bucket (Static Files)

---

## 📁 Project Structure

```
my-app/
├── app/
├── lib/
├── public/
├── out/
├── next.config.ts
└── README.md
```

The application is statically exported using:

```
npm run build
```

---

## ☁️ AWS Deployment Breakdown

### Amazon S3
- Stores static build artifacts
- Block Public Access enabled
- Objects served only via CloudFront
- REST endpoint (not S3 website hosting)

### CloudFront
- Global edge caching
- HTTPS enforced
- Origin Access Control (OAC)
- SPA routing support via 403/404 → index.html

### Route 53
- Custom domain routing
- Alias records to CloudFront
- IPv4 + IPv6 support

### Security
- HTTPS enforced
- Private S3 bucket
- WAF enabled (monitor mode)
- No exposed secrets or backend

---

## 💸 Cost Optimization

- Aggressive CDN caching
- Minimal S3 origin requests
- No server-side compute
- Scales automatically
- Extremely low operational cost

---

## 🧠 What This Project Demonstrates

- Real AWS infrastructure experience
- CDN caching strategies
- Secure static deployments
- DNS & TLS configuration
- Practical cloud debugging
- Production-grade architecture decisions

---

## 📄 Resume Summary

Deployed a production static portfolio application using AWS S3, CloudFront, Route 53, and ACM with private bucket access via CloudFront Origin Access Control (OAC), HTTPS enforcement, global CDN caching, and CloudWatch monitoring for cost-efficient and secure hosting.

---

## 👤 Author

Reese Redman  
Computer Science & Cybersecurity  
Full-Stack • Cloud • DevOps  

https://reeseredman.com  
https://github.com/Reese408
