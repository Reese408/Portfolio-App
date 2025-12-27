import { getSkills, getAllSkillDetails } from '@/lib/content/loader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const skillIcons: { [key: string]: string } = {
  javascript: '⚡',
  typescript: '🔷',
  python: '🐍',
  java: '☕',
  sql: '🗄️',
  html: '🌐',
  react: '⚛️',
  nextjs: '▲',
  redux: '🔄',
  nodejs: '🟢',
  express: '🚂',
  django: '🎸',
  socketio: '🔌',
  postgresql: '🐘',
  mongodb: '🍃',
  sqlite: '💾',
  docker: '🐳',
  git: '📦',
  linux: '🐧',
  aws: '☁️',
};

export default function SkillPage() {
  const skillsData = getSkills();
  const skillDetails = getAllSkillDetails();

  // Create a map of skill names to slugs
  const skillSlugMap = skillDetails.reduce((acc, skill) => {
    acc[skill.name.toLowerCase()] = skill.slug;
    return acc;
  }, {} as Record<string, string>);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/80';
      case 'Intermediate':
        return 'bg-[rgb(206,206,206)] text-[rgb(39,38,53)] hover:bg-[rgb(206,206,206)]/80';
      default:
        return 'bg-[rgb(166,166,168)] text-white hover:bg-[rgb(166,166,168)]/80';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(232,233,243)] to-[rgb(206,206,206)] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-[rgb(39,38,53)]">Technical Skills</h1>
          <p className="text-xl text-[rgb(39,38,53)]/70">
            My technical expertise and proficiency levels
          </p>
        </div>

        <Tabs defaultValue={skillsData.categories[0]?.name} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/50 backdrop-blur-sm">
            {skillsData.categories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="data-[state=active]:bg-[rgb(177,229,242)] data-[state=active]:text-[rgb(39,38,53)]"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillsData.categories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[rgb(177,229,242)]/20 hover:border-[rgb(177,229,242)] bg-white/80 backdrop-blur-sm"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                            {skillIcons[skill.icon?.toLowerCase() || ''] || '💡'}
                          </span>
                          <div>
                            <CardTitle className="text-xl text-[rgb(39,38,53)]">
                              {skill.name}
                            </CardTitle>
                            <Badge className={`mt-1 ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {skill.yearsOfExperience && (
                        <p className="text-sm text-[rgb(39,38,53)]/60 mb-2">
                          📅 {skill.yearsOfExperience}{' '}
                          {skill.yearsOfExperience === 1 ? 'year' : 'years'} experience
                        </p>
                      )}
                      {skill.certifications && skill.certifications.length > 0 && (
                        <div className="space-y-1 mb-4">
                          <p className="text-xs font-semibold text-[rgb(39,38,53)]/80">
                            Certifications:
                          </p>
                          {skill.certifications.map((cert, certIndex) => (
                            <p key={certIndex} className="text-xs text-[rgb(39,38,53)]/60">
                              🏆 {cert}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Learn More Button - Only show if detail page exists */}
                      {skillSlugMap[skill.name.toLowerCase()] && (
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20 mt-4"
                        >
                          <Link href={`/skills/${skillSlugMap[skill.name.toLowerCase()]}`}>
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Soft Skills Section */}
        {skillsData.softSkills && skillsData.softSkills.length > 0 && (
          <Card className="mt-12 bg-gradient-to-r from-[rgb(177,229,242)]/20 to-[rgb(206,206,206)]/20 border-2 border-[rgb(177,229,242)]">
            <CardHeader>
              <CardTitle className="text-3xl text-[rgb(39,38,53)]">Soft Skills</CardTitle>
              <CardDescription className="text-[rgb(39,38,53)]/70">
                Essential professional competencies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skillsData.softSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-base bg-white hover:bg-[rgb(177,229,242)] hover:text-[rgb(39,38,53)] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
