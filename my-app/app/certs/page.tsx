import { getCertifications } from '@/lib/content/loader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Calendar, ExternalLink, CheckCircle2, Clock } from 'lucide-react';

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

export default function CertificationsPage() {
  const { certifications } = getCertifications();

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(232,233,243)] to-[rgb(206,206,206)] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-[rgb(39,38,53)]">Certifications & Courses</h1>
          <p className="text-xl text-[rgb(39,38,53)]/70">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm"
            >
              {/* Certificate Header */}
              <div className={`h-32 bg-linear-to-br ${certGradients[cert.logo || ''] || 'from-[rgb(177,229,242)]/20 to-[rgb(206,206,206)]/20'} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[rgb(39,38,53)]/5 group-hover:bg-[rgb(39,38,53)]/10 transition-colors" />
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {certIcons[cert.logo || ''] || '🏆'}
                </span>
                <Badge
                  className={`absolute top-4 right-4 ${
                    cert.status === 'Completed'
                      ? 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)]'
                      : cert.status === 'In Progress'
                      ? 'bg-[rgb(206,206,206)] text-[rgb(39,38,53)]'
                      : 'bg-[rgb(166,166,168)] text-white'
                  }`}
                >
                  {cert.status === 'Completed' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                  {cert.status === 'In Progress' && <Clock className="w-3 h-3 mr-1" />}
                  {cert.status}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-[rgb(39,38,53)] group-hover:text-[rgb(177,229,242)] transition-colors">
                  {cert.name}
                </CardTitle>
                <CardDescription className="text-[rgb(39,38,53)]/60 font-semibold">
                  {cert.issuer}
                </CardDescription>
                {cert.date && (
                  <p className="text-sm text-[rgb(39,38,53)]/50 flex items-center gap-1 mt-2">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </p>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-[rgb(39,38,53)]/70 leading-relaxed">
                  {cert.description}
                </p>

                {cert.credentialUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
                  >
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Credential
                    </a>
                  </Button>
                )}

                {cert.credentialId && (
                  <p className="text-xs text-[rgb(39,38,53)]/40 text-center">
                    Credential ID: {cert.credentialId}
                  </p>
                )}

                {cert.expiryDate && (
                  <p className="text-xs text-[rgb(39,38,53)]/50 flex items-center gap-1 justify-center">
                    <Award className="w-3 h-3" />
                    Valid until: {cert.expiryDate}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <Card className="mt-12 bg-linear-to-r from-[rgb(177,229,242)]/30 to-[rgb(206,206,206)]/30 border-2 border-[rgb(177,229,242)]">
          <CardContent className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-[rgb(39,38,53)] mb-2">
                  {certifications.filter(c => c.status === 'Completed').length}
                </div>
                <p className="text-[rgb(39,38,53)]/60">Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[rgb(39,38,53)] mb-2">
                  {certifications.filter(c => c.status === 'In Progress').length}
                </div>
                <p className="text-[rgb(39,38,53)]/60">In Progress</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[rgb(39,38,53)] mb-2">
                  {certifications.length}
                </div>
                <p className="text-[rgb(39,38,53)]/60">Total Certifications</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
