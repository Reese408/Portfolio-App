import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  Resume,
  SkillsData,
  CertificationsData,
  Project,
  ProjectMetadata,
  ExperienceDetail,
  ExperienceMetadata,
} from '@/lib/types/content';

const contentDirectory = path.join(process.cwd(), 'content');

// Profile loaders
export function getResume(): Resume {
  const filePath = path.join(contentDirectory, 'profile', 'resume.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getAboutContent(): string {
  const filePath = path.join(contentDirectory, 'profile', 'about.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  return content;
}

// Skills loader
export function getSkills(): SkillsData {
  const filePath = path.join(contentDirectory, 'skills', 'skills.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Certifications loader
export function getCertifications(): CertificationsData {
  const filePath = path.join(contentDirectory, 'certs', 'certs.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Projects loaders
export function getAllProjects(): Project[] {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const filePath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        title: data.title,
        slug,
        status: data.status,
        tech: data.tech || [],
        github: data.github,
        demo: data.demo,
        featured: data.featured || false,
        order: data.order || 999,
        content,
        metadata: data as ProjectMetadata,
      } as Project;
    });

  // Sort by order
  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const filePath = path.join(contentDirectory, 'projects', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      slug,
      status: data.status,
      tech: data.tech || [],
      github: data.github,
      demo: data.demo,
      featured: data.featured || false,
      order: data.order || 999,
      content,
      metadata: data as ProjectMetadata,
    } as Project;
  } catch (error) {
    return null;
  }
}

export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.featured);
}

// Experience loaders
export function getAllExperience(): ExperienceDetail[] {
  const experienceDirectory = path.join(contentDirectory, 'experience');
  const fileNames = fs.readdirSync(experienceDirectory);

  const experiences = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(experienceDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        title: data.title,
        company: data.company,
        location: data.location,
        startDate: data.startDate,
        endDate: data.endDate,
        type: data.type,
        content,
        metadata: data as ExperienceMetadata,
      } as ExperienceDetail;
    });

  return experiences;
}

export function getExperienceByCompany(company: string): ExperienceDetail | null {
  try {
    const slug = company.toLowerCase().replace(/\s+/g, '-');
    const filePath = path.join(contentDirectory, 'experience', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      company: data.company,
      location: data.location,
      startDate: data.startDate,
      endDate: data.endDate,
      type: data.type,
      content,
      metadata: data as ExperienceMetadata,
    } as ExperienceDetail;
  } catch (error) {
    return null;
  }
}
