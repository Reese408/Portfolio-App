'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Project } from '@/lib/types/content';
import { motion, AnimatePresence } from 'framer-motion';

const projectImages: { [key: string]: string } = {
  'workout-app': '💪',
  'gaminghub': '🎮',
  'marie-simulator': '💻',
  'cnc-construction': '🏗️',
};

const projectGradients: { [key: string]: string } = {
  'workout-app': 'from-blue-500/20 to-purple-500/20',
  'gaminghub': 'from-pink-500/20 to-red-500/20',
  'marie-simulator': 'from-green-500/20 to-teal-500/20',
  'cnc-construction': 'from-orange-500/20 to-yellow-500/20',
};

interface ProjectsFilterProps {
  projects: Project[];
}

export default function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.status === filter);

  return (
    <>
      {/* Filter Buttons */}
      <motion.div
        className="flex justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          onClick={() => setFilter('all')}
          variant={filter === 'all' ? 'default' : 'outline'}
          className={filter === 'all' ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80' : ''}
        >
          All Projects
        </Button>
        <Button
          onClick={() => setFilter('Completed')}
          variant={filter === 'Completed' ? 'default' : 'outline'}
          className={filter === 'Completed' ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80' : ''}
        >
          Completed
        </Button>
        <Button
          onClick={() => setFilter('In Progress')}
          variant={filter === 'In Progress' ? 'default' : 'outline'}
          className={filter === 'In Progress' ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80' : ''}
        >
          In Progress
        </Button>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm h-full">
                {/* Project Icon/Image Header */}
                <motion.div
                  className={`h-32 bg-linear-to-br ${projectGradients[project.slug] || 'from-[rgb(177,229,242)]/20 to-[rgb(206,206,206)]/20'} flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-[rgb(39,38,53)]/5 group-hover:bg-[rgb(39,38,53)]/10 transition-colors" />
                  <motion.span
                    className="text-7xl relative z-10"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {projectImages[project.slug] || '📦'}
                  </motion.span>
                  <Badge
                    className={`absolute top-4 right-4 ${
                      project.status === 'Completed'
                        ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)]'
                        : 'bg-[rgb(206,206,206)] text-[rgb(39,38,53)]'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </motion.div>

                <CardHeader>
                  <CardTitle className="text-2xl text-[rgb(39,38,53)] group-hover:text-[rgb(177,229,242)] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[rgb(39,38,53)]/60">
                    {project.content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.substring(0, 120) || 'Click to learn more about this project'}...
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-[rgb(177,229,242)]/20 text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/40 transition-colors"
                        >
                          <Code2 className="w-3 h-3 mr-1" />
                          {tech}
                        </Badge>
                      </motion.div>
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-[rgb(39,38,53)]/60">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </>
  );
}
