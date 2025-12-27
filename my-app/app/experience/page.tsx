import { getResume, getAllExperience } from '@/lib/content/loader';

export default function ExperiencePage() {
  const resume = getResume();
  const experienceDetails = getAllExperience();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>

      <div className="space-y-8">
        {resume.experience.map((exp, index) => (
          <div key={index} className="border-l-4 border-primary pl-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">{exp.title}</h2>
              <p className="text-lg text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground">
                {exp.location} | {exp.startDate} - {exp.endDate}
              </p>
            </div>

            <ul className="space-y-2">
              {exp.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex} className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span className="text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {experienceDetails.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Detailed Experience</h2>
          <div className="space-y-6">
            {experienceDetails.map((detail, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">
                  {detail.title} at {detail.company}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: detail.content }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
