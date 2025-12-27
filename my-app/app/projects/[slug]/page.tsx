import { getAllProjects, getProjectBySlug } from '@/lib/content/loader';
import { Markdown } from '@/components/ui/markdown';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const projectImages: { [key: string]: string } = {
  'workout-app': '💪',
  'gaminghub': '🎮',
  'marie-simulator': '💻',
  'cnc-construction': '🏗️',
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(232,233,243)] to-[rgb(206,206,206)] py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back Button */}
        <Button
          asChild
          variant="outline"
          className="mb-8 border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
        >
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden border-2 border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm">
          <div className="h-48 bg-linear-to-br from-[rgb(177,229,242)]/30 to-[rgb(206,206,206)]/30 flex items-center justify-center relative">
            <span className="text-9xl">{projectImages[project.slug] || '📦'}</span>
            <Badge
              className={`absolute top-6 right-6 text-base px-4 py-2 ${
                project.status === 'Completed'
                  ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)]'
                  : 'bg-[rgb(206,206,206)] text-[rgb(39,38,53)]'
              }`}
            >
              {project.status}
            </Badge>
          </div>

          <div className="p-8">
            <h1 className="text-5xl font-bold mb-4 text-[rgb(39,38,53)]">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-[rgb(177,229,242)]/20 text-[rgb(39,38,53)] px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <Button
                  asChild
                  className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button
                  asChild
                  variant="outline"
                  className="border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Content */}
        <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[rgb(177,229,242)]/20">
          <Markdown content={project.content} />
        </Card>
      </div>
    </div>
  );
}
