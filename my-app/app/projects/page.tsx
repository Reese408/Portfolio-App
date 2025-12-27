import { getAllProjects } from '@/lib/content/loader';
import ProjectsFilter from '@/components/projects/ProjectsFilter';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(232,233,243)] to-[rgb(206,206,206)] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-[rgb(39,38,53)]">My Projects</h1>
          <p className="text-xl text-[rgb(39,38,53)]/70 mb-6">
            Showcasing my development work and technical expertise
          </p>
        </div>

        {/* Filter and Projects - Client Component */}
        <ProjectsFilter projects={projects} />
      </div>
    </div>
  );
}
