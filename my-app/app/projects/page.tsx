import { getAllProjects } from '@/lib/content/loader';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <span
                className={`text-xs px-2 py-1 rounded whitespace-nowrap ${
                  project.status === 'Completed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-accent rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {project.content.split('\n')[0].replace(/^#\s+/, '')}
            </p>

            <div className="flex gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                View Details →
              </Link>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
