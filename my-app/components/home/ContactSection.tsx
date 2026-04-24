import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Resume } from '@/lib/types/content';
import { miscMedia } from '@/lib/media';

const OPPORTUNITY_PILLS = [
  'Full-Stack Development',
  'CyberSecurity',
  'Cloud Engineering',
  'DevOps / DevSecOps',
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2">
      {children}
    </p>
  );
}

interface ContactSectionProps {
  resume: Resume;
}

export default function ContactSection({ resume }: ContactSectionProps) {
  const education = resume.education[0];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Let&apos;s Connect</h2>
          <p className="text-slate-500 max-w-xl">
            I&apos;m always interested in hearing about new opportunities, projects, or just connecting with fellow developers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — contact info */}
          <div className="space-y-3">
            {[
              { icon: Mail, label: 'Email', value: resume.email, href: `mailto:${resume.email}` },
              { icon: Phone, label: 'Phone', value: resume.phone, href: `tel:${resume.phone}` },
              { icon: MapPin, label: 'Location', value: resume.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 px-5 py-4"
              >
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-sky-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{label}</p>
                  {href ? (
                    <a href={href} className="text-slate-700 font-medium text-sm hover:text-sky-500 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-700 font-medium text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* GitHub */}
            <a
              href={resume.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 px-5 py-4 hover:border-sky-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-400 font-medium">GitHub</p>
                <p className="text-slate-700 font-medium text-sm">Reese408</p>
              </div>
              <ExternalLink size={14} className="text-slate-300 group-hover:text-sky-400 transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={resume.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl border border-slate-100 px-5 py-4 hover:border-sky-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
                <p className="text-slate-700 font-medium text-sm">robert-redman</p>
              </div>
              <ExternalLink size={14} className="text-slate-300 group-hover:text-sky-400 transition-colors" />
            </a>
          </div>

          {/* Right — opportunity card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Looking for opportunities in</h3>
              <div className="flex flex-wrap gap-2">
                {OPPORTUNITY_PILLS.map(pill => (
                  <span
                    key={pill}
                    className="px-3 py-1.5 bg-sky-50 text-sky-600 text-sm rounded-full border border-sky-100 font-medium"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {education && (
              <p className="text-sm text-slate-500">
                Expected graduation:{' '}
                <span className="font-semibold text-slate-700">{education.graduationDate}</span>
                {' '}from {education.school}
              </p>
            )}

            <div className="flex flex-col gap-3 mt-auto">
              <a
                href={`mailto:${resume.email}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition-colors"
              >
                <Mail size={16} />
                Send Me an Email
              </a>
              <a
                href={miscMedia.resume}
                download
                className="flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-16">
          © {new Date().getFullYear()} Reese Redman. Built with passion.
        </p>
      </div>
    </section>
  );
}
