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
  // Featured projects: voice-up-athletics, grace-on-going, suds-on-wheels-usa
  const featuredProjects = projects.filter(p => 
    ['voice-up-athletics', 'grace-on-going', 'suds-on-wheels-usa'].includes(p.slug)
  );

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
          {featuredProjects.map(project => {
            const imageUrl = projectImages[project.slug];
            const isLive = project.status === 'Live';

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

        {/* See all projects button */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors"
          >
            See All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
