import { getAllExperience, getExperienceByCompany } from '@/lib/content/loader';
import { Markdown } from '@/components/ui/markdown';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Briefcase, ExternalLink, Code2 } from 'lucide-react';

export async function generateStaticParams() {
  const experiences = getAllExperience();
  return experiences.map((exp) => ({
    slug: exp.company.toLowerCase().replace(/\s+/g, '-'),
  }));
}

const companyIcons: { [key: string]: string } = {
  'techr2': '🔒',
  'cnc-construction': '🏗️',
};

const companyColors: { [key: string]: string } = {
  'techr2': 'from-blue-500/20 to-cyan-500/20',
  'cnc-construction': 'from-orange-500/20 to-amber-500/20',
};

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = getExperienceByCompany(slug);

  if (!experience) {
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
          <Link href="/experience">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Experience
          </Link>
        </Button>

        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden border-2 border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm">
          <div className={`h-48 bg-linear-to-br ${companyColors[slug] || 'from-[rgb(177,229,242)]/30 to-[rgb(206,206,206)]/30'} flex items-center justify-center relative`}>
            <div className="absolute inset-0 bg-[rgb(39,38,53)]/5" />
            <span className="text-9xl relative z-10">{companyIcons[slug] || '💼'}</span>
            <Badge
              className="absolute top-6 right-6 text-base px-4 py-2 bg-[rgb(177,229,242)] text-[rgb(39,38,53)]"
            >
              {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
            </Badge>
          </div>

          <CardContent className="p-8">
            <h1 className="text-5xl font-bold mb-2 text-[rgb(39,38,53)]">{experience.title}</h1>
            <p className="text-2xl font-semibold text-[rgb(177,229,242)] mb-6">{experience.company}</p>

            <div className="flex flex-wrap gap-6 mb-6 text-[rgb(39,38,53)]/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[rgb(177,229,242)]" />
                <span className="font-medium">{experience.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[rgb(177,229,242)]" />
                <span className="font-medium">{experience.startDate} - {experience.endDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[rgb(177,229,242)]" />
                <span className="font-medium capitalize">{experience.type}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content */}
        <Card className="mb-8 p-8 bg-white/90 backdrop-blur-sm border-2 border-[rgb(177,229,242)]/20">
          <Markdown content={experience.content} />
        </Card>

        {/* Related Skills */}
        {experience.skills && experience.skills.length > 0 && (
          <Card className="mb-8 p-8 bg-linear-to-br from-[rgb(177,229,242)]/10 to-[rgb(206,206,206)]/10 border-2 border-[rgb(177,229,242)]">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl text-[rgb(39,38,53)] flex items-center gap-2">
                <Code2 className="w-6 h-6" />
                Skills Used in This Role
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skillSlug) => (
                  <Button
                    key={skillSlug}
                    asChild
                    variant="outline"
                    className="border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
                  >
                    <Link href={`/skills/${skillSlug}`}>
                      <Code2 className="w-4 h-4 mr-2" />
                      {skillSlug.charAt(0).toUpperCase() + skillSlug.slice(1).replace(/-/g, ' ')}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <Card className="bg-linear-to-r from-[rgb(39,38,53)] to-[rgb(39,38,53)]/90 border-2 border-[rgb(177,229,242)]">
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h2>
              <p className="text-white/80 mb-6">
                Check out my projects and skills to see what I can bring to your team
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/90"
                >
                  <Link href="/projects">
                    <Briefcase className="w-5 h-5 mr-2" />
                    View Projects
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  <Link href="/skills">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Skills
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
