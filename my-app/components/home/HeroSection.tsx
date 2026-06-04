'use client';
import { useState, useEffect } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { Resume } from '@/lib/types/content';
import { miscMedia } from '@/lib/media';

const ROLES = ['DevSecOps Engineer', 'Full Stack Developer', 'Cloud Architect'];

function TypewriterText() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex(r => (r + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-sky-500">|</span>
    </span>
  );
}

interface HeroSectionProps {
  resume: Resume;
}

export default function HeroSection({ resume }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="space-y-6">
            {/* Typewriter title */}
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
              <TypewriterText />
            </h1>

            {/* Name */}
            <p className="text-2xl font-semibold text-slate-800">
              Hi, I&apos;m <span className="text-sky-500">{resume.name}</span>
            </p>

            {/* Bio */}
            <p className="text-base text-slate-500 leading-relaxed max-w-lg">
              {resume.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/#projects"
                className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors"
              >
                View My Work
              </a>
              <a
                href="/#contact"
                className="px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-sky-300 hover:text-sky-500 transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={`mailto:${resume.email}`}
                aria-label="Email"
                className="p-2 text-slate-400 hover:text-sky-500 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href={resume.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-slate-400 hover:text-sky-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={resume.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-slate-400 hover:text-sky-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — photo card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden bg-slate-100 shadow-2xl">
                <img
                  src={miscMedia.profilePic}
                  alt={resume.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a href="/#skills" className="text-slate-300 hover:text-sky-400 transition-colors animate-bounce">
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
