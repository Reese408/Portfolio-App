# Portfolio Content Management Guide

This guide explains how to add and manage content for your portfolio website.

## 📁 Content Structure

```
content/
├── skills/           # Skill detail pages (markdown)
├── projects/         # Project detail pages (markdown)
├── experience/       # Experience detail pages (markdown)
├── certs/           # Certification data (JSON only - no detail pages yet)
└── profile/         # About page and resume data
```

## 🎯 Adding New Skills

1. **Create a new markdown file** in `content/skills/`
   - Filename: `skillname.md` (lowercase, no spaces)
   - Example: `typescript.md`, `docker.md`, `aws.md`

2. **Use the template** at `content/skills/TEMPLATE-skill.md`

3. **Required frontmatter fields**:
   ```yaml
   ---
   name: Skill Name
   slug: skill-slug
   level: Advanced
   icon: 💻
   yearsOfExperience: 3
   category: Languages
   color: from-blue-500/20 to-cyan-500/20
   ---
   ```

4. **The skill will automatically**:
   - Appear on the `/skills` page if you add it to `content/skills/skills.json`
   - Create a detail page at `/skills/[slug]`
   - Show a "Learn More" button on the skills grid

### Skill Categories
- Languages
- Frontend
- Backend
- DevOps & Tools
- Database
- Concepts & Expertise

### Icons
Use any emoji! Common examples:
- ⚡ JavaScript
- 🔷 TypeScript
- 🐍 Python
- ⚛️ React
- 🟢 Node.js
- 🐳 Docker
- ☁️ AWS

## 📊 Adding New Projects

1. **Create a new markdown file** in `content/projects/`
   - Filename: `project-name.md`
   - Example: `todo-app.md`, `api-server.md`

2. **Use the template** at `content/projects/TEMPLATE-project.md`

3. **Required frontmatter fields**:
   ```yaml
   ---
   title: Project Title
   slug: project-slug
   status: Completed
   tech:
     - React
     - Node.js
   github: https://github.com/user/repo
   demo: https://demo-url.com
   featured: true
   order: 1
   ---
   ```

4. **The project will automatically**:
   - Appear on the `/projects` page
   - Create a detail page at `/projects/[slug]`
   - Show on homepage if `featured: true`

### Project Icons
Add to `app/projects/page.tsx` and `app/projects/[slug]/page.tsx`:
```typescript
const projectImages: { [key: string]: string } = {
  'your-project-slug': '💻',  // Add your emoji here
};
```

## 💼 Adding New Experience

1. **Create a new markdown file** in `content/experience/`
   - Filename should match company name: `company-name.md`
   - Example: `techr2.md`, `google.md`

2. **Use the template** at `content/experience/TEMPLATE-experience.md`

3. **Required frontmatter fields**:
   ```yaml
   ---
   title: Job Title
   company: Company Name
   location: City, State
   startDate: June 2023
   endDate: August 2023
   type: internship
   ---
   ```

4. **The experience will automatically**:
   - Create a detail page at `/experience/[slug]`
   - Slug is auto-generated from company name (lowercase, dashes)

5. **Also update** `content/profile/resume.json`:
   - Add entry to the `experience` array

### Experience Icons
Add to `app/experience/page.tsx` and `app/experience/[slug]/page.tsx`:
```typescript
const companyIcons: { [key: string]: string } = {
  'company-slug': '🏢',  // Add your emoji here
};

const companyColors: { [key: string]: string } = {
  'company-slug': 'from-blue-500/20 to-cyan-500/20',
};
```

## 🏆 Adding New Certifications

1. **Edit** `content/certs/certs.json`

2. **Add a new entry**:
   ```json
   {
     "name": "Certification Name",
     "issuer": "Issuing Organization",
     "date": "December 2024",
     "status": "Completed",
     "credentialId": "ABC123XYZ",
     "credentialUrl": "https://credential-url.com",
     "expiryDate": "December 2027",
     "logo": "udemy",
     "description": "Detailed description of what the certification covers and what you learned."
   }
   ```

3. **Certification will automatically**:
   - Appear on `/certs` page
   - Create detail page at `/certs/[slug]`
   - Slug is auto-generated from name

### Cert Icons
Add to `app/certs/page.tsx` and `app/certs/[slug]/page.tsx`:
```typescript
const certIcons: { [key: string]: string } = {
  'issuer-name': '🎓',  // Add icon
};

const certGradients: { [key: string]: string } = {
  'issuer-name': 'from-red-500/20 to-pink-500/20',
};
```

## ✏️ Editing About Page

Edit `content/profile/about.md` with markdown content.

## 📝 Editing Resume Data

Edit `content/profile/resume.json` to update:
- Personal info (name, email, phone, location)
- Education
- Experience highlights
- Leadership roles
- Awards

## 🎨 Color Palette

Your custom frosted blue palette:
- Ghost White: `rgb(232,233,243)` - Light backgrounds
- Silver: `rgb(206,206,206)` - Secondary elements
- Pale Slate: `rgb(166,166,168)` - Muted text
- Shadow Grey: `rgb(39,38,53)` - Dark text/backgrounds
- Frosted Blue: `rgb(177,229,242)` - PRIMARY accent color ⭐

## 🚀 Quick Checklist for New Content

### For Skills:
- [ ] Create `content/skills/skillname.md`
- [ ] Add to `content/skills/skills.json` if you want it on the grid
- [ ] Add icon to `app/skills/page.tsx` if needed
- [ ] Fill out template with your experience

### For Projects:
- [ ] Create `content/projects/projectname.md`
- [ ] Add icon to `projectImages` in project pages
- [ ] Add gradient to `projectGradients` if desired
- [ ] Set `featured: true` if you want it on homepage
- [ ] Fill out template with details

### For Experience:
- [ ] Create `content/experience/company-name.md`
- [ ] Update `content/profile/resume.json` experience array
- [ ] Add icon to `companyIcons`
- [ ] Add gradient to `companyColors`
- [ ] Fill out template with your experience

### For Certs:
- [ ] Add to `content/certs/certs.json`
- [ ] Add icon to `certIcons` if needed
- [ ] Add gradient to `certGradients` if needed

## 📚 Markdown Tips

- Use `#` for main headings
- Use `##` for sections
- Use `###` for subsections
- Code blocks: \`\`\`language
- Bold: `**text**`
- Italic: `*text*`
- Links: `[text](url)`
- Lists: `- item` or `1. item`

## 🔄 After Adding Content

1. Save your files
2. The Next.js dev server will auto-reload
3. Navigate to the new page (e.g., `/skills/typescript`)
4. Check that everything displays correctly

## 📞 Need Help?

- Templates are in each content folder with `TEMPLATE-` prefix
- Existing content (JavaScript, Python, React skills) serve as examples
- All detail pages use markdown rendering
- Frontmatter (between `---`) must be valid YAML

---

**Remember**: You can always add more content later. Start with the templates and expand as needed!
