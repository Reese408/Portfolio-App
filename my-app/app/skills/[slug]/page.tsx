import { getAllSkillDetails, getSkillBySlug } from '@/lib/content/loader';
import { Markdown } from '@/components/ui/markdown';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Code2, Award, Briefcase, GraduationCap, Clock } from 'lucide-react';

export async function generateStaticParams() {
  const skills = getAllSkillDetails();
  return skills.map((skill) => ({
    slug: skill.slug,
  }));
}

const levelColors = {
  'Beginner': 'bg-green-500/20 text-green-700 border-green-500/30',
  'Intermediate': 'bg-blue-500/20 text-blue-700 border-blue-500/30',
  'Advanced': 'bg-purple-500/20 text-purple-700 border-purple-500/30',
  'Expert': 'bg-orange-500/20 text-orange-700 border-orange-500/30',
};

export default async function SkillDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
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
          <Link href="/skills">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Skills
          </Link>
        </Button>

        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden border-2 border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm">
          <div className={`h-48 bg-linear-to-br ${skill.color || 'from-[rgb(177,229,242)]/30 to-[rgb(206,206,206)]/30'} flex items-center justify-center relative`}>
            <span className="text-9xl">{skill.icon || '💻'}</span>
          </div>

          <CardContent className="p-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h1 className="text-5xl font-bold text-[rgb(39,38,53)]">{skill.name}</h1>
              <Badge
                className={`text-base px-4 py-2 border-2 ${levelColors[skill.level]}`}
              >
                {skill.level}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-6 mb-6">
              {skill.yearsOfExperience && (
                <div className="flex items-center gap-2 text-[rgb(39,38,53)]/70">
                  <Clock className="w-5 h-5 text-[rgb(177,229,242)]" />
                  <span className="font-medium">{skill.yearsOfExperience} years of experience</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-[rgb(39,38,53)]/70">
                <Code2 className="w-5 h-5 text-[rgb(177,229,242)]" />
                <span className="font-medium">{skill.category}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex gap-4 pt-4 border-t border-[rgb(177,229,242)]/30">
              <Button
                asChild
                className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80"
              >
                <Link href="/projects">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Related Projects
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
              >
                <Link href="/certs">
                  <Award className="w-4 h-4 mr-2" />
                  Certifications
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Content */}
        <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[rgb(177,229,242)]/20">
          <Markdown content={skill.content} />
        </Card>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <Card className="bg-linear-to-r from-[rgb(39,38,53)] to-[rgb(39,38,53)]/90 border-2 border-[rgb(177,229,242)]">
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold text-white mb-4">See This Skill in Action</h2>
              <p className="text-white/80 mb-6">
                Check out my projects where I've applied {skill.name}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/90"
              >
                <Link href="/projects">
                  <Code2 className="w-5 h-5 mr-2" />
                  View Projects
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
