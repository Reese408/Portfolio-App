'use client';

import { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Project } from '@/lib/types/content';

// Extract static lookup objects outside component
const PROJECT_IMAGES: Record<string, string> = {
  'workout-app': '💪',
  'gaminghub': '🎮',
  'grace-on-going': '✝️',
  'cnc-construction': '🏗️',
};

const PROJECT_GRADIENTS: Record<string, string> = {
  'workout-app': 'from-blue-500/20 to-purple-500/20',
  'gaminghub': 'from-pink-500/20 to-red-500/20',
  'grace-on-going': 'from-green-500/20 to-teal-500/20',
  'cnc-construction': 'from-orange-500/20 to-yellow-500/20',
};

interface ProjectsFilterProps {
  projects: Project[];
}

export default function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [filter, setFilter] = useState<string>('all');

  // Memoize filter handlers to prevent recreation on every render
  const handleFilterAll = useCallback(() => setFilter('all'), []);
  const handleFilterCompleted = useCallback(() => setFilter('Completed'), []);
  const handleFilterInProgress = useCallback(() => setFilter('In Progress'), []);

  // Memoize filtered projects to prevent recalculation on every render
  const filteredProjects = useMemo(() => {
    return filter === 'all'
      ? projects
      : projects.filter(p => p.status === filter);
  }, [filter, projects]);

  // Memoize project descriptions to avoid string operations on every render
  const projectDescriptions = useMemo(() => {
    return projects.reduce((acc, project) => {
      const description = project.content
        .split('\n')
        .find(line => line.trim() && !line.startsWith('#'))
        ?.substring(0, 120) || 'Click to learn more about this project';
      acc[project.slug] = description;
      return acc;
    }, {} as Record<string, string>);
  }, [projects]);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
        <Button
          onClick={handleFilterAll}
          variant={filter === 'all' ? 'default' : 'outline'}
          className={filter === 'all' ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80 text-sm sm:text-base' : 'text-sm sm:text-base'}
        >
          All Projects
        </Button>
        <Button
          onClick={handleFilterCompleted}
          variant={filter === 'Completed' ? 'default' : 'outline'}
          className={filter === 'Completed' ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80 text-sm sm:text-base' : 'text-sm sm:text-base'}
        >
          Completed
        </Button>
        <Button
          onClick={handleFilterInProgress}
          variant={filter === 'In Progress' ? 'default' : 'outline'}
          className={filter === 'In Progress' ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80 text-sm sm:text-base' : 'text-sm sm:text-base'}
        >
          In Progress
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.slug}>
              <Card className="group overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm h-full">
                {/* Project Icon/Image Header */}
                <div className={`h-32 bg-linear-to-br ${PROJECT_GRADIENTS[project.slug] || 'from-[rgb(177,229,242)]/20 to-[rgb(206,206,206)]/20'} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[rgb(39,38,53)]/5 group-hover:bg-[rgb(39,38,53)]/10 transition-colors duration-200" />
                  <span className="text-7xl relative z-10 group-hover:scale-110 transition-transform duration-200">
                    {PROJECT_IMAGES[project.slug] || '📦'}
                  </span>
                  <Badge
                    className={`absolute top-4 right-4 ${
                      project.status === 'Completed'
                        ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)]'
                        : 'bg-[rgb(206,206,206)] text-[rgb(39,38,53)]'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-[rgb(39,38,53)] group-hover:text-[rgb(177,229,242)] transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[rgb(39,38,53)]/60">
                    {projectDescriptions[project.slug]}...
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={`${project.slug}-${tech}`}
                        variant="secondary"
                        className="bg-[rgb(177,229,242)]/20 text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/40 transition-colors duration-200"
                      >
                        <Code2 className="w-3 h-3 mr-1" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      View Details →
                    </Link>
                  </Button>
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-[rgb(39,38,53)]/60">
            No projects found in this category.
          </p>
        </div>
      )}
    </>
  );
}
