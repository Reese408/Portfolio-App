import { getSkills } from '@/lib/content/loader';

export default function SkillPage() {
  const skillsData = getSkills();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Technical Skills</h1>

      <div className="space-y-12">
        {skillsData.categories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        skill.level === 'Advanced'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : skill.level === 'Intermediate'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  {skill.yearsOfExperience && (
                    <p className="text-sm text-muted-foreground">
                      {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'}
                    </p>
                  )}
                  {skill.certifications && skill.certifications.length > 0 && (
                    <div className="mt-2">
                      <p className="text-xs text-muted-foreground">Certifications:</p>
                      <ul className="text-xs mt-1">
                        {skill.certifications.map((cert, certIndex) => (
                          <li key={certIndex} className="text-muted-foreground">
                            • {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {skillsData.softSkills && skillsData.softSkills.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Soft Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skillsData.softSkills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-accent rounded-lg text-center text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}