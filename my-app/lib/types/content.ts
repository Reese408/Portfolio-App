// Profile Types
export interface Resume {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  links: {
    github: string;
    linkedin: string;
  };
  summary: string;
  education: Education[];
  experience: Experience[];
  leadership: Leadership[];
  awards: Award[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  graduationDate: string;
  relevantCoursework?: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Leadership {
  role: string;
  organization: string;
  startDate?: string;
  endDate?: string;
  description: string;
}

export interface Award {
  name: string;
  issuer: string;
  date: string;
  description: string;
}

// Skills Types
export interface SkillsData {
  categories: SkillCategory[];
  softSkills: string[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string;
  yearsOfExperience?: number;
  certifications?: string[];
  slug?: string;
}

// Skill Detail Types (for markdown files)
export interface SkillDetail {
  name: string;
  slug: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string;
  yearsOfExperience?: number;
  category: string;
  color?: string;
  content: string; // Markdown content
  metadata: SkillMetadata;
}

export interface SkillMetadata {
  name: string;
  slug: string;
  level: string;
  icon?: string;
  yearsOfExperience?: number;
  category: string;
  color?: string;
}

// Certifications Types
export interface CertificationsData {
  certifications: Certification[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  credentialId?: string;
  credentialUrl?: string;
  expiryDate?: string;
  logo?: string;
  description: string;
  whatLearned?: string[];
  skills?: string[]; // Skill slugs to link back to
  images?: string[]; // Image filenames in /public/certs/
}

// Project Types
export interface Project {
  title: string;
  slug: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  order: number;
  video?: string; // Video filename in /public/projects/
  skills?: string[]; // Skill slugs to link back to
  content: string; // Markdown content
  metadata: ProjectMetadata;
}

export interface ProjectMetadata {
  title: string;
  slug: string;
  status: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  order: number;
  video?: string; // Video filename in /public/projects/
  skills?: string[]; // Skill slugs to link back to
}

// Experience Detail Types (for markdown files)
export interface ExperienceDetail {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'internship' | 'full-time' | 'part-time' | 'contract';
  skills?: string[]; // Skill slugs to link back to
  content: string; // Markdown content
  metadata: ExperienceMetadata;
}

export interface ExperienceMetadata {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  skills?: string[]; // Skill slugs to link back to
}
