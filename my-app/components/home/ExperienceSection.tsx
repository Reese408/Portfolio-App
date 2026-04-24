import { Calendar } from 'lucide-react';
import { ExperienceDetail } from '@/lib/types/content';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2">
      {children}
    </p>
  );
}

interface ExperienceSectionProps {
  experiences: ExperienceDetail[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-4xl font-bold text-slate-900">Professional Journey</h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-slate-200" style={{ left: '55%' }} />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const highlights = exp.content
                .split('\n')
                .filter(l => l.trim().startsWith('-'))
                .map(l => l.replace(/^-\s*/, '').trim())
                .slice(0, 5);

              return (
                <div key={i} className="relative lg:grid lg:grid-cols-[55%_auto] lg:gap-8">
                  {/* Card */}
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2 text-sky-500 text-sm font-medium mb-3">
                      <Calendar size={14} />
                      {exp.startDate} – {exp.endDate}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.company}</h3>
                    <p className="text-slate-500 text-sm mb-4">{exp.title}</p>

                    {highlights.length > 0 && (
                      <ul className="space-y-1.5 mb-4">
                        {highlights.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map(skill => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-md font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex items-start pt-8 pl-4">
                    <div className="w-3 h-3 rounded-full bg-sky-400 border-2 border-white shadow-md shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
