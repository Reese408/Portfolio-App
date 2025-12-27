import { getCertifications } from '@/lib/content/loader';

export default function CertificationsPage() {
  const { certifications } = getCertifications();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Certifications & Courses</h1>

      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{cert.name}</h2>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded whitespace-nowrap ${
                  cert.status === 'Completed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : cert.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                }`}
              >
                {cert.status}
              </span>
            </div>

            <p className="text-sm mb-4">{cert.description}</p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {cert.date && <span>{cert.date}</span>}
              {cert.credentialUrl && (
                <>
                  <span>•</span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View Credential
                  </a>
                </>
              )}
              {cert.credentialId && (
                <>
                  <span>•</span>
                  <span>ID: {cert.credentialId}</span>
                </>
              )}
            </div>

            {cert.expiryDate && (
              <p className="text-xs text-muted-foreground mt-2">
                Expires: {cert.expiryDate}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
