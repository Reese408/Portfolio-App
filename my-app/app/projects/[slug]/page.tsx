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
