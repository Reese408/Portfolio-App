'use client';

import { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import {
  GraduationCap,
  Award,
  Users,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Code2,
  Shield,
  Dumbbell,
  BookOpen,
  Calendar,
  Trophy
} from 'lucide-react';
import { Resume } from '@/lib/types/content';
import { miscMedia } from '@/lib/media';

interface AboutContentProps {
  aboutContent: string;
  resume: Resume;
}

export default function AboutContent({ aboutContent, resume }: AboutContentProps) {
  // Memoize expensive content parsing operations
  const { paragraphs } = useMemo(() => {
    const parsedSections = aboutContent.split('##').filter(s => s.trim());
    const parsedIntro = parsedSections[0]?.split('\n').filter(line => line.trim() && !line.startsWith('#')).join('\n') || '';
    const parsedParagraphs = parsedIntro.split('\n\n').map(p => p.replace(/\*\*(.*?)\*\*/g, '$1'));

    return {
      paragraphs: parsedParagraphs
    };
  }, [aboutContent]);

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(232,233,243)] via-[rgb(206,206,206)] to-[rgb(177,229,242)] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="animate-fade-in-up">
          {/* Hero Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Card className="mb-8 overflow-hidden border-2 border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm">
              <div className="h-32 bg-linear-to-br from-[rgb(177,229,242)]/30 to-[rgb(206,206,206)]/30 relative">
                <div className="absolute -bottom-12 left-8">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-xl">
                    <AvatarImage src={miscMedia.profilePic} alt={resume.name} />
                    <AvatarFallback className="text-3xl font-bold text-[rgb(39,38,53)] bg-linear-to-br from-[rgb(177,229,242)] to-[rgb(206,206,206)]">
                      {resume.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CardContent className="pt-16 pb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h1 className="text-4xl font-bold mb-2 text-[rgb(39,38,53)]">{resume.name}</h1>
                    <p className="text-xl text-blue-600 font-semibold mb-4">{resume.title}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-[rgb(39,38,53)]">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">{resume.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-500" />
                        <a href={`mailto:${resume.email}`} className="hover:text-blue-600 transition-colors font-medium">
                          {resume.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
                    >
                      <a href={resume.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
                    >
                      <a href={resume.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Me Section */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl text-[rgb(39,38,53)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-[rgb(39,38,53)] leading-relaxed space-y-4">
                  {paragraphs.map((paragraph, index) => (
                    <p key={`paragraph-${index}`} className="text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <Separator className="my-6 bg-blue-200" />

                {/* Skills Highlight */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border-2 border-blue-200">
                    <Code2 className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm font-semibold text-[rgb(39,38,53)]">Full-Stack Dev</p>
                  </div>
                  <div className="text-center p-4 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg border-2 border-purple-200">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <p className="text-sm font-semibold text-[rgb(39,38,53)]">CyberSecurity</p>
                  </div>
                  <div className="text-center p-4 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-lg border-2 border-orange-200">
                    <Dumbbell className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                    <p className="text-sm font-semibold text-[rgb(39,38,53)]">Student-Athlete</p>
                  </div>
                  <div className="text-center p-4 bg-linear-to-br from-green-500/20 to-teal-500/20 rounded-lg border-2 border-green-200">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-semibold text-[rgb(39,38,53)]">Lifelong Learner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Section */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Card className="border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl text-[rgb(39,38,53)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[rgb(177,229,242)] to-[rgb(206,206,206)] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[rgb(39,38,53)]" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resume.education.map((edu, index) => (
                  <div
                    key={`education-${edu.school}-${index}`}
                    className="group animate-slide-in-left"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <Card className="border-l-4 border-[rgb(177,229,242)] hover:shadow-lg transition-all duration-300 bg-white/50">
                      <CardHeader>
                        <CardTitle className="text-xl text-[rgb(39,38,53)] group-hover:text-[rgb(177,229,242)] transition-colors">
                          {edu.degree}
                          {edu.minor && (
                            <span className="text-base font-medium text-[rgb(39,38,53)]/70 ml-2">
                              (Minor: {edu.minor})
                            </span>
                          )}
                        </CardTitle>
                        <CardDescription className="text-[rgb(39,38,53)]/70">
                          <div className="flex flex-wrap gap-4 mt-2">
                            <span className="font-semibold">{edu.school}</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {edu.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {edu.startDate} - {edu.graduationDate}
                            </span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      {edu.relevantCoursework && (
                        <CardContent>
                          <p className="font-semibold text-sm mb-2 text-[rgb(39,38,53)]">Relevant Coursework:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantCoursework.map((course, courseIndex) => (
                              <Badge
                                key={`course-${course}-${courseIndex}`}
                                variant="secondary"
                                className="bg-[rgb(177,229,242)]/20 text-[rgb(39,38,53)]"
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Awards Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Card className="border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] transition-all duration-300 bg-white/90 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[rgb(39,38,53)] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[rgb(177,229,242)] to-[rgb(206,206,206)] flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-[rgb(39,38,53)]" />
                    </div>
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resume.awards.map((award, index) => (
                    <div
                      key={`award-${award.name}-${index}`}
                      className="border-l-4 border-[rgb(177,229,242)] pl-4 hover:bg-[rgb(177,229,242)]/5 p-3 rounded-r transition-colors animate-slide-in-left"
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-[rgb(177,229,242)] shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-[rgb(39,38,53)]">{award.name}</h3>
                          <p className="text-sm text-[rgb(39,38,53)]/60">
                            {award.issuer} • {award.date}
                          </p>
                          <p className="text-sm text-[rgb(39,38,53)]/70 mt-1">{award.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Leadership Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Card className="border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] transition-all duration-300 bg-white/90 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[rgb(39,38,53)] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[rgb(177,229,242)] to-[rgb(206,206,206)] flex items-center justify-center">
                      <Users className="w-5 h-5 text-[rgb(39,38,53)]" />
                    </div>
                    Leadership & Involvement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resume.leadership.map((leadership, index) => (
                    <div
                      key={`leadership-${leadership.role}-${index}`}
                      className="p-4 bg-linear-to-br from-[rgb(177,229,242)]/10 to-[rgb(206,206,206)]/10 rounded-lg hover:shadow-md transition-all animate-slide-in-left"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <h3 className="font-semibold text-[rgb(39,38,53)]">{leadership.role}</h3>
                      <p className="text-sm text-[rgb(39,38,53)]/60 mb-1">{leadership.organization}</p>
                      {leadership.startDate && leadership.endDate && (
                        <p className="text-xs text-[rgb(39,38,53)]/50 flex items-center gap-1 mb-2">
                          <Calendar className="w-3 h-3" />
                          {leadership.startDate} - {leadership.endDate}
                        </p>
                      )}
                      <p className="text-sm text-[rgb(39,38,53)]/70 mt-2">{leadership.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Card className="bg-linear-to-r from-[rgb(39,38,53)] to-[rgb(39,38,53)]/90 border-2 border-[rgb(177,229,242)]">
              <CardContent className="py-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Let's Connect!</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  I'm always open to new opportunities, collaborations, and conversations about technology, security, or wrestling!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/90"
                  >
                    <Link href="/contact">
                      <Mail className="w-5 h-5 mr-2" />
                      Get in Touch
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10"
                  >
                    <Link href="/projects">
                      <Code2 className="w-5 h-5 mr-2" />
                      View My Work
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
