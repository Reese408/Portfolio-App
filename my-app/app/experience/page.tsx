import { getResume } from '@/lib/content/loader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const companyIcons: { [key: string]: string } = {
  'Techr2': '🔒',
  'CNC Construction': '🏗️',
};

const companyColors: { [key: string]: string } = {
  'Techr2': 'from-blue-500/20 to-cyan-500/20',
  'CNC Construction': 'from-orange-500/20 to-amber-500/20',
};

export default function ExperiencePage() {
  const resume = getResume();

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(232,233,243)] to-[rgb(206,206,206)] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-[rgb(39,38,53)]">Work Experience</h1>
          <p className="text-xl text-[rgb(39,38,53)]/70">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="space-y-8">
          {resume.experience.map((exp, index) => {
            const slug = exp.company.toLowerCase().replace(/\s+/g, '-');
            return (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm"
            >
              {/* Company Header with Icon */}
              <div className={`h-24 bg-linear-to-br ${companyColors[exp.company] || 'from-[rgb(177,229,242)]/20 to-[rgb(206,206,206)]/20'} flex items-center px-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[rgb(39,38,53)]/5 group-hover:bg-[rgb(39,38,53)]/10 transition-colors" />
                <div className="flex items-center gap-4 relative z-10">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {companyIcons[exp.company] || '💼'}
                  </span>
                  <div>
                    <h2 className="text-3xl font-bold text-[rgb(39,38,53)] group-hover:text-[rgb(177,229,242)] transition-colors">
                      {exp.title}
                    </h2>
                    <p className="text-lg text-[rgb(39,38,53)]/70 font-semibold">{exp.company}</p>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex flex-wrap gap-4 text-sm text-[rgb(39,38,53)]/60">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[rgb(177,229,242)]" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[rgb(177,229,242)]" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[rgb(177,229,242)]" />
                    <span>Internship</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <h3 className="text-lg font-semibold mb-4 text-[rgb(39,38,53)]">Key Achievements:</h3>
                <ul className="space-y-3 mb-6">
                  {exp.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3 group/item">
                      <CheckCircle2 className="w-5 h-5 text-[rgb(177,229,242)] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-[rgb(39,38,53)]/80 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                  {exp.highlights.length > 3 && (
                    <li className="text-sm text-[rgb(39,38,53)]/60 italic ml-8">
                      + {exp.highlights.length - 3} more achievement{exp.highlights.length - 3 !== 1 ? 's' : ''}
                    </li>
                  )}
                </ul>

                <Button
                  asChild
                  variant="default"
                  className="w-full bg-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/80 text-[rgb(39,38,53)]"
                >
                  <Link href={`/experience/${slug}`}>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View Full Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* Leadership Section */}
        {resume.leadership && resume.leadership.length > 0 && (
          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-[rgb(39,38,53)]">Leadership & Involvement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resume.leadership.map((leadership, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-[rgb(177,229,242)] to-[rgb(206,206,206)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">👥</span>
                    </div>
                    <CardTitle className="text-xl text-[rgb(39,38,53)]">{leadership.role}</CardTitle>
                    <CardDescription className="text-[rgb(39,38,53)]/60">
                      {leadership.organization}
                    </CardDescription>
                    {leadership.startDate && leadership.endDate && (
                      <p className="text-xs text-[rgb(39,38,53)]/50 flex items-center gap-1 mt-2">
                        <Calendar className="w-3 h-3" />
                        {leadership.startDate} - {leadership.endDate}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[rgb(39,38,53)]/70">{leadership.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
