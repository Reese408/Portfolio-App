import { getAllProjects, getProjectBySlug } from '@/lib/content/loader';
import { Markdown } from '@/components/ui/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground hover:text-primary mb-6 inline-block"
      >
        ← Back to Projects
      </Link>

      <div className="mb-6">
        <div className="flex items-start justify-between mb-3">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <span
            className={`text-sm px-3 py-1 rounded ${
              project.status === 'Completed'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
            }`}
          >
            {project.status}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span key={index} className="text-sm px-3 py-1 bg-accent rounded font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mb-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border rounded-md hover:bg-accent"
            >
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="mt-8">
        <Markdown content={project.content} />
      </div>
    </div>
  );
}
