import { getAboutContent, getResume } from '@/lib/content/loader';
import Link from 'next/link';

export default function AboutMePage() {
  const aboutContent = getAboutContent();
  const resume = getResume();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{resume.name}</h1>
        <p className="text-xl text-muted-foreground mb-4">{resume.title}</p>
        <div className="flex gap-4 text-sm">
          <span>{resume.location}</span>
          <a href={`mailto:${resume.email}`} className="hover:underline">
            {resume.email}
          </a>
        </div>
      </div>

      <div className="mb-12">
        <div className="text-foreground leading-relaxed whitespace-pre-line">
          {aboutContent}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        {resume.education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-muted-foreground">
              {edu.school} | {edu.location}
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              {edu.startDate} - {edu.graduationDate}
            </p>
            {edu.relevantCoursework && (
              <div className="mt-2">
                <p className="font-medium text-sm mb-1">Relevant Coursework:</p>
                <p className="text-sm text-muted-foreground">
                  {edu.relevantCoursework.join(', ')}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Awards & Recognition</h2>
        <div className="space-y-4">
          {resume.awards.map((award, index) => (
            <div key={index} className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold">{award.name}</h3>
              <p className="text-sm text-muted-foreground">
                {award.issuer} | {award.date}
              </p>
              <p className="text-sm mt-1">{award.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Leadership</h2>
        <div className="space-y-4">
          {resume.leadership.map((leadership, index) => (
            <div key={index}>
              <h3 className="font-semibold">{leadership.role}</h3>
              <p className="text-sm text-muted-foreground">{leadership.organization}</p>
              {leadership.startDate && leadership.endDate && (
                <p className="text-xs text-muted-foreground">
                  {leadership.startDate} - {leadership.endDate}
                </p>
              )}
              <p className="text-sm mt-1">{leadership.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Back to Home
        </Link>
        <a
          href={resume.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-border rounded-md hover:bg-accent"
        >
          GitHub
        </a>
        <a
          href={resume.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-border rounded-md hover:bg-accent"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}