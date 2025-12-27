import { getCertifications, getCertBySlug } from '@/lib/content/loader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Calendar, Award, ExternalLink, CheckCircle2, Clock, AlertCircle, Code2, Lightbulb } from 'lucide-react';

export async function generateStaticParams() {
  const { certifications } = getCertifications();
  return certifications.map((cert) => ({
    slug: cert.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
  }));
}

const certIcons: { [key: string]: string } = {
  'harvard': '🎓',
  'udemy': '📚',
  'aws': '☁️',
};

const certGradients: { [key: string]: string } = {
  'harvard': 'from-red-500/20 to-pink-500/20',
  'udemy': 'from-purple-500/20 to-blue-500/20',
  'aws': 'from-orange-500/20 to-yellow-500/20',
};

export default async function CertDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cert = getCertBySlug(slug);

  if (!cert) {
    notFound();
  }

  const StatusIcon = cert.status === 'Completed' ? CheckCircle2 : cert.status === 'In Progress' ? Clock : AlertCircle;

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(232,233,243)] to-[rgb(206,206,206)] py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back Button */}
        <Button
          asChild
          variant="outline"
          className="mb-8 border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
        >
          <Link href="/certs">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Certifications
          </Link>
        </Button>

        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden border-2 border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm">
          <div className={`h-48 bg-linear-to-br ${certGradients[cert.logo || ''] || 'from-[rgb(177,229,242)]/30 to-[rgb(206,206,206)]/30'} flex items-center justify-center relative`}>
            <div className="absolute inset-0 bg-[rgb(39,38,53)]/5" />
            <span className="text-9xl relative z-10">{certIcons[cert.logo || ''] || '🏆'}</span>
            <Badge
              className={`absolute top-6 right-6 text-base px-4 py-2 ${
                cert.status === 'Completed'
                  ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)]'
                  : cert.status === 'In Progress'
                  ? 'bg-[rgb(206,206,206)] text-[rgb(39,38,53)]'
                  : 'bg-[rgb(166,166,168)] text-white'
              }`}
            >
              <StatusIcon className="w-4 h-4 mr-1 inline" />
              {cert.status}
            </Badge>
          </div>

          <CardContent className="p-8">
            <h1 className="text-5xl font-bold mb-2 text-[rgb(39,38,53)]">{cert.name}</h1>
            <p className="text-2xl font-semibold text-[rgb(177,229,242)] mb-6">{cert.issuer}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {cert.date && (
                <div className="flex items-center gap-2 text-[rgb(39,38,53)]/70">
                  <Calendar className="w-5 h-5 text-[rgb(177,229,242)]" />
                  <div>
                    <p className="text-xs font-medium text-[rgb(39,38,53)]/50">Date Earned</p>
                    <p className="font-medium">{cert.date}</p>
                  </div>
                </div>
              )}
              {cert.credentialId && (
                <div className="flex items-center gap-2 text-[rgb(39,38,53)]/70">
                  <Award className="w-5 h-5 text-[rgb(177,229,242)]" />
                  <div>
                    <p className="text-xs font-medium text-[rgb(39,38,53)]/50">Credential ID</p>
                    <p className="font-medium font-mono text-sm">{cert.credentialId}</p>
                  </div>
                </div>
              )}
              {cert.expiryDate && (
                <div className="flex items-center gap-2 text-[rgb(39,38,53)]/70">
                  <Calendar className="w-5 h-5 text-[rgb(177,229,242)]" />
                  <div>
                    <p className="text-xs font-medium text-[rgb(39,38,53)]/50">Valid Until</p>
                    <p className="font-medium">{cert.expiryDate}</p>
                  </div>
                </div>
              )}
            </div>

            {cert.credentialUrl && (
              <div className="pt-4 border-t border-[rgb(177,229,242)]/30">
                <Button
                  asChild
                  className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80"
                >
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Credential
                  </a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Description */}
        <Card className="mb-8 p-8 bg-white/90 backdrop-blur-sm border-2 border-[rgb(177,229,242)]/20">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl text-[rgb(39,38,53)]">About This Certification</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[rgb(39,38,53)]/80 leading-relaxed text-lg">
              {cert.description}
            </p>
          </CardContent>
        </Card>

        {/* What I Learned */}
        {cert.whatLearned && cert.whatLearned.length > 0 && (
          <Card className="mb-8 p-8 bg-linear-to-br from-[rgb(177,229,242)]/10 to-[rgb(206,206,206)]/10 border-2 border-[rgb(177,229,242)]">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl text-[rgb(39,38,53)] flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-[rgb(177,229,242)]" />
                What I Learned
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3">
                {cert.whatLearned.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[rgb(177,229,242)] mt-0.5 flex-shrink-0" />
                    <span className="text-[rgb(39,38,53)]/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Images */}
        {cert.images && cert.images.length > 0 && (
          <Card className="mb-8 p-8 bg-white/90 backdrop-blur-sm border-2 border-[rgb(177,229,242)]/20">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl text-[rgb(39,38,53)]">Certification Images</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-4">
                {cert.images.map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden border-2 border-[rgb(177,229,242)]/30">
                    <Image
                      src={`/certs/${image}`}
                      alt={`${cert.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Related Skills */}
        {cert.skills && cert.skills.length > 0 && (
          <Card className="mb-8 p-8 bg-linear-to-br from-[rgb(177,229,242)]/10 to-[rgb(206,206,206)]/10 border-2 border-[rgb(177,229,242)]">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl text-[rgb(39,38,53)] flex items-center gap-2">
                <Code2 className="w-6 h-6" />
                Skills Gained from This Certification
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-wrap gap-3">
                {cert.skills.map((skillSlug) => (
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

        {/* Skills & Projects Connection */}
        <Card className="mb-8 p-8 bg-linear-to-br from-[rgb(177,229,242)]/10 to-[rgb(206,206,206)]/10 border-2 border-[rgb(177,229,242)]">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl text-[rgb(39,38,53)]">Explore More</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-[rgb(177,229,242)] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[rgb(39,38,53)] mb-2">All Skills</h3>
                  <p className="text-sm text-[rgb(39,38,53)]/70 mb-4">
                    See all technical skills in my toolkit
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
                  >
                    <Link href="/skills">View Skills →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[rgb(177,229,242)] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[rgb(39,38,53)] mb-2">Applied in Projects</h3>
                  <p className="text-sm text-[rgb(39,38,53)]/70 mb-4">
                    Check out projects where I've applied these learnings
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
                  >
                    <Link href="/projects">View Projects →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-linear-to-r from-[rgb(39,38,53)] to-[rgb(39,38,53)]/90 border-2 border-[rgb(177,229,242)]">
          <CardContent className="py-8 text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-[rgb(177,229,242)]" />
            <h2 className="text-2xl font-bold text-white mb-4">Continuous Learning</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              I'm always expanding my knowledge and skills. Check out my other certifications and ongoing learning journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/90"
              >
                <Link href="/certs">
                  <Award className="w-5 h-5 mr-2" />
                  All Certifications
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
  );
}
