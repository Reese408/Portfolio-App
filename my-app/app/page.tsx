import { getResume, getFeaturedProjects, getCertifications } from '@/lib/content/loader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Github, Linkedin, Mail, Download, ArrowRight, Code2, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Home() {
  const resume = getResume();
  const featuredProjects = getFeaturedProjects();
  const { certifications } = getCertifications();
  const activeCerts = certifications.filter(c => c.status === 'Completed');

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(232,233,243)] via-[rgb(206,206,206)] to-[rgb(177,229,242)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[rgb(39,38,53)]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 py-24 relative">
          <div className="text-center mb-16">
            {/* Profile Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-[rgb(177,229,242)] mb-6">
              <span className="w-2 h-2 bg-[rgb(177,229,242)] rounded-full animate-pulse" />
              <span className="text-sm text-[rgb(39,38,53)] font-medium">Open to opportunities</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[rgb(39,38,53)]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-[rgb(177,229,242)] to-[rgb(206,206,206)]">{resume.name.split(' ')[0]}</span>
            </h1>
            <p className="text-3xl font-semibold text-[rgb(39,38,53)]/80 mb-4">{resume.title}</p>
            <p className="text-lg text-[rgb(39,38,53)]/60 max-w-2xl mx-auto mb-8 leading-relaxed">
              {resume.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80 text-lg px-8"
              >
                <Link href="/projects">
                  <Code2 className="w-5 h-5 mr-2" />
                  View My Work
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20 text-lg px-8"
              >
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[rgb(39,38,53)] hover:bg-[rgb(39,38,53)]/10 text-lg px-8"
              >
                <a href="/Resume_10_13.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:bg-[rgb(177,229,242)]/20 hover:scale-110 transition-all"
              >
                <a href={resume.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:bg-[rgb(177,229,242)]/20 hover:scale-110 transition-all"
              >
                <a href={resume.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:bg-[rgb(177,229,242)]/20 hover:scale-110 transition-all"
              >
                <a href={`mailto:${resume.email}`}>
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Code2, value: featuredProjects.length, label: 'Projects', color: 'from-blue-500/20 to-cyan-500/20' },
              { icon: Briefcase, value: resume.experience.length, label: 'Internships', color: 'from-purple-500/20 to-pink-500/20' },
              { icon: GraduationCap, value: activeCerts.length, label: 'Certifications', color: 'from-orange-500/20 to-yellow-500/20' },
              { icon: Award, value: resume.awards.length, label: 'Awards', color: 'from-green-500/20 to-teal-500/20' },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] hover:-translate-y-1 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 rounded-full bg-linear-to-br ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className="w-6 h-6 text-[rgb(39,38,53)]" />
                  </div>
                  <div className="text-4xl font-bold text-[rgb(39,38,53)] mb-1">{stat.value}</div>
                  <p className="text-sm text-[rgb(39,38,53)]/60">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[rgb(39,38,53)] mb-4">Featured Projects</h2>
            <p className="text-lg text-[rgb(39,38,53)]/60">Check out my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredProjects.slice(0, 4).map((project) => (
              <Card
                key={project.slug}
                className="group overflow-hidden border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white/90"
              >
                <div className="h-2 bg-linear-to-r from-[rgb(177,229,242)] to-[rgb(206,206,206)]" />
                <CardHeader>
                  <CardTitle className="text-2xl text-[rgb(39,38,53)] group-hover:text-[rgb(177,229,242)] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.substring(0, 120)}...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-[rgb(177,229,242)]/20 text-[rgb(39,38,53)]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      View Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Awards Highlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[rgb(39,38,53)] mb-4">Recognition & Awards</h2>
            <p className="text-lg text-[rgb(39,38,53)]/60">Honored for academic and athletic excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resume.awards.map((award, index) => (
              <Card
                key={index}
                className="border-l-4 border-[rgb(177,229,242)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/80"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-[rgb(177,229,242)] to-[rgb(206,206,206)] flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-[rgb(39,38,53)]" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-[rgb(39,38,53)]">{award.name}</CardTitle>
                      <CardDescription className="text-[rgb(39,38,53)]/60">
                        {award.issuer} • {award.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[rgb(39,38,53)]/70">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-[rgb(39,38,53)] to-[rgb(39,38,53)]/90">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-white/80 mb-8">
            I'm actively seeking internship and entry-level opportunities in Full-Stack Development,
            CyberSecurity, and Cloud Engineering.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/90 text-lg px-8"
            >
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
            >
              <a href="/Resume_10_13.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
