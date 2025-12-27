import { getResume, getFeaturedProjects, getCertifications } from '@/lib/content/loader';
import Link from 'next/link';

export default function Home() {
  const resume = getResume();
  const featuredProjects = getFeaturedProjects();
  const { certifications } = getCertifications();
  const activeCerts = certifications.filter(c => c.status === 'Completed');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{resume.name}</h1>
          <p className="text-2xl text-muted-foreground mb-6">{resume.title}</p>
          <p className="text-lg max-w-3xl mx-auto mb-8">{resume.summary}</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition"
            >
              Get In Touch
            </Link>
            <a
              href={resume.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-accent/50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary">{featuredProjects.length}</h3>
              <p className="text-muted-foreground">Featured Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">{resume.experience.length}</h3>
              <p className="text-muted-foreground">Internships</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">{activeCerts.length}</h3>
              <p className="text-muted-foreground">Certifications</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">{resume.awards.length}</h3>
              <p className="text-muted-foreground">Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featuredProjects.slice(0, 4).map((project) => (
            <div
              key={project.slug}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.slice(0, 4).map((tech, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-accent rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.substring(0, 120)}...
              </p>
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/projects"
            className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition inline-block"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Recent Experience */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            {resume.experience.slice(0, 2).map((exp, index) => (
              <div key={index} className="bg-background border rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company} | {exp.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <ul className="space-y-1">
                  {exp.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/experience"
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition inline-block"
            >
              View All Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Recent Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resume.awards.map((award, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 py-4">
              <h3 className="font-bold text-lg">{award.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {award.issuer} | {award.date}
              </p>
              <p className="text-sm">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-lg mb-8 opacity-90">
            I'm actively seeking internship and entry-level opportunities in Full-Stack Development,
            CyberSecurity, and Cloud Engineering.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-background text-foreground rounded-lg hover:bg-background/90 transition"
            >
              Contact Me
            </Link>
            <a
              href="/Resume_10_13.pdf"
              download
              className="px-6 py-3 border border-primary-foreground/20 rounded-lg hover:bg-primary-foreground/10 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
