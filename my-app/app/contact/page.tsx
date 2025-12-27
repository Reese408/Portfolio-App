import { getResume } from '@/lib/content/loader';

export default function ContactPage() {
  const resume = getResume();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg">
          I'm always interested in hearing about new opportunities, projects, or just connecting
          with fellow developers. Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <a
                href={`mailto:${resume.email}`}
                className="text-primary hover:underline"
              >
                {resume.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Phone</p>
              <a href={`tel:${resume.phone}`} className="text-primary hover:underline">
                {resume.phone}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Location</p>
              <p>{resume.location}</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Connect Online</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground">GitHub</p>
              <a
                href={resume.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {resume.links.github.replace('https://', '')}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
              <a
                href={resume.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {resume.links.linkedin.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-accent/50">
        <h2 className="text-xl font-bold mb-4">Let's Work Together</h2>
        <p className="mb-4">
          I'm currently looking for internship and entry-level opportunities in:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Full-Stack Development</li>
          <li>CyberSecurity</li>
          <li>Cloud Engineering</li>
          <li>DevOps / DevSecOps</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Expected graduation: May 2027 from Ashland University
        </p>
      </div>
    </div>
  );
}
