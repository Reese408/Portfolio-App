import { Award, Certification } from '@/lib/types/content';

const MEDIA_BASE =
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL || 'https://reeses-portfolio-media.s3.us-east-2.amazonaws.com'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2 text-center">
      {children}
    </p>
  );
}

interface AchievementsSectionProps {
  awards: Award[];
  certifications: Certification[];
}

export default function AchievementsSection({ awards, certifications }: AchievementsSectionProps) {
  const completedCerts = certifications.filter(c => c.status === 'Completed');

  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Milestones &amp; Victories</SectionLabel>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            My <span className="text-sky-500">Achievements</span>
          </h2>
          <p className="text-slate-500">
            From code to competition — every achievement tells a story of dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Awards */}
          {awards.map((award, i) => (
            <div
              key={`award-${i}`}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">🏆</span>
                {award.date && (
                  <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                    {award.date}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{award.name}</h3>
              <p className="text-sky-500 text-sm font-medium mb-3">{award.issuer}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}

          {/* Completed certifications */}
          {completedCerts.map((cert, i) => (
            <div
              key={`cert-${i}`}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300"
            >
              {/* Certificate Image */}
              {cert.images && cert.images.length > 0 ? (
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  <img
                    src={`${MEDIA_BASE}/certs/${cert.images[0]}`}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-sky-50 to-slate-100 flex items-center justify-center">
                  <span className="text-4xl">🎓</span>
                </div>
              )}
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div />
                  {cert.date && (
                    <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                      {cert.date}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1 leading-tight">{cert.name}</h3>
                <p className="text-sky-500 text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
