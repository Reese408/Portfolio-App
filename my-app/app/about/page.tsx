import Link from 'next/link';
import { ArrowLeft, GraduationCap, Trophy, Users, Heart } from 'lucide-react';
import { getResume } from '@/lib/content/loader';
import { miscMedia } from '@/lib/media';

const ABOUT_CARDS = [
  {
    icon: GraduationCap,
    title: 'Education',
    content: 'Bachelor of Science in Computer Science with a minor in Cyber Security at Ashland University. Expected graduation December 2026. Relevant coursework includes AI & Machine Learning, System Design, Operating Systems, Linux Security, and Database Management.',
  },
  {
    icon: Trophy,
    title: 'Wrestling',
    content: 'Competing as a student-athlete on the Ashland University wrestling team. Wrestling has sharpened my discipline, resilience under pressure, and ability to stay focused when it matters — traits I bring directly into how I approach software engineering.',
  },
  {
    icon: Users,
    title: 'Leadership & Faith',
    content: 'Serving as a Huddle Leader in a campus Bible Study, where I lead discussions, mentor peers, and help build community. I also contribute to the ACM Web Development Team, collaborating on real projects with fellow CS students.',
  },
  {
    icon: Heart,
    title: 'Personal Interests',
    content: "Outside of code and competition, I enjoy building things — whether that's side projects, workflows, or understanding how systems work at a deeper level. I'm driven by curiosity and motivated by the challenge of turning ideas into real, useful products.",
  },
];

export default function AboutPage() {
  const resume = getResume();

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-sky-500 transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-sky-500 uppercase mb-2">
            About Me
          </p>
          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-1">
            The person behind the{' '}
            <span className="text-sky-500 underline decoration-sky-300 underline-offset-4">
              code
            </span>
          </h1>
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Photo */}
          <div className="w-full max-w-sm mx-auto lg:mx-0">
            <div className="rounded-3xl overflow-hidden bg-slate-100 shadow-xl aspect-[3/4]">
              <img
                src={miscMedia.profilePic}
                alt={resume.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_CARDS.map(({ icon: Icon, title, content }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                    <Icon size={16} className="text-sky-500" />
                  </div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

