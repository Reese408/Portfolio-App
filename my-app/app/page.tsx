import { getResume, getFeaturedProjects, getCertifications } from '@/lib/content/loader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Mail, Download, ArrowRight, Code2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { miscMedia } from '@/lib/media';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative">
          <div className="text-center mb-16">
            {/* Profile Picture */}
            <div className="mb-8 flex justify-center">
              <Avatar className="w-32 h-32 border-4 border-[rgb(177,229,242)] shadow-2xl">
                <AvatarImage src={miscMedia.profilePic} alt={resume.name} />
                <AvatarFallback className="text-4xl font-bold text-[rgb(39,38,53)] bg-linear-to-br from-[rgb(177,229,242)] to-[rgb(206,206,206)]">
                  {resume.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Profile Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-[rgb(177,229,242)] mb-6">
              <span className="w-2 h-2 bg-[rgb(177,229,242)] rounded-full animate-pulse" />
              <span className="text-sm text-[rgb(39,38,53)] font-medium">Open to opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[rgb(39,38,53)]">
              Hi, I'm <span className="text-[rgb(39,38,53)]">{resume.name.split(' ')[0]}</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[rgb(39,38,53)]/80 mb-4">{resume.title}</p>
            <p className="text-base sm:text-lg text-[rgb(39,38,53)]/60 max-w-2xl mx-auto mb-8 leading-relaxed px-4">
              {resume.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12 px-4">
              <Button
                asChild
                size="lg"
                className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80 text-base sm:text-lg px-6 sm:px-8"
              >
                <Link href="/projects">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View My Work
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20 text-base sm:text-lg px-6 sm:px-8"
              >
                <Link href="/contact">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[rgb(39,38,53)] hover:bg-[rgb(39,38,53)]/10 text-base sm:text-lg px-6 sm:px-8"
              >
                <a href={miscMedia.resume} download>
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
                <a href={resume.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:bg-[rgb(177,229,242)]/20 hover:scale-110 transition-all"
              >
                <a href={resume.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:bg-[rgb(177,229,242)]/20 hover:scale-110 transition-all"
              >
                <a href={`mailto:${resume.email}`} aria-label="Email">
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
      <section className="py-12 sm:py-16 md:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(39,38,53)] mb-4">Featured Projects</h2>
            <p className="text-base sm:text-lg text-[rgb(39,38,53)]/60">Check out my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
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
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(39,38,53)] mb-4">Recognition & Awards</h2>
            <p className="text-base sm:text-lg text-[rgb(39,38,53)]/60">Honored for academic and athletic excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
      <section className="py-12 sm:py-16 md:py-20 bg-linear-to-r from-[rgb(39,38,53)] to-[rgb(39,38,53)]/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Let's Work Together</h2>
          <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8">
            I'm actively seeking internship and entry-level opportunities in Full-Stack Development,
            CyberSecurity, and Cloud Engineering.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/90 text-base sm:text-lg px-6 sm:px-8"
            >
              <Link href="/contact">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Contact Me
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8"
            >
              <a href={miscMedia.resume} download>
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
