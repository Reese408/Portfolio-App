'use client';
import { useState } from 'react';
import { SKILLS_DATA, SOFT_SKILLS } from '@/lib/data/skills';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2">
      {children}
    </p>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(SKILLS_DATA[0].name);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeSkills = SKILLS_DATA.find(c => c.name === activeCategory)?.skills ?? [];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-4xl font-bold text-slate-900">Technical Toolkit</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category sidebar */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-48 shrink-0 pb-2 lg:pb-0">
            {SKILLS_DATA.map(category => (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.name
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="flex-1 bg-white rounded-2xl border border-slate-100 p-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">{activeCategory}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {activeSkills.map(skill => (
                <div
                  key={skill.name}
                  className="relative flex flex-col items-center gap-2 cursor-default group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-50 group-hover:bg-sky-50 transition-colors p-2">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-600 text-center leading-tight">
                    {skill.name}
                  </span>

                  {/* Hover popover */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-slate-900 text-white text-xs rounded-xl p-3 shadow-xl z-10 pointer-events-none">
                      <p className="font-semibold mb-1">{skill.name}</p>
                      <p className="text-slate-300 leading-relaxed">{skill.description}</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-10">
          <h3 className="text-sm font-semibold text-slate-500 mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map(skill => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full border border-slate-200 text-sm text-slate-600 bg-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
