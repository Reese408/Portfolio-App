'use client';
import Link from 'next/link';
import { useState, useCallback, memo } from 'react';
import { Menu, X } from 'lucide-react';
import { miscMedia } from '@/lib/media';

const ANCHOR_LINKS = [
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#achievements', label: 'Achievements' },
  { href: '/#contact', label: 'Contact' },
] as const;

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header className="bg-slate-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-slate-900 hover:text-sky-500 transition-colors"
        >
          Reese Redman
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors">
            About
          </Link>
          {ANCHOR_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={miscMedia.resume}
            download
            className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          className="lg:hidden p-2 text-slate-600 hover:text-sky-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
          <Link
            href="/about"
            onClick={closeMenu}
            className="block text-sm font-medium text-slate-700 hover:text-sky-500 py-2"
          >
            About
          </Link>
          {ANCHOR_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block text-sm font-medium text-slate-700 hover:text-sky-500 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={miscMedia.resume}
            download
            onClick={closeMenu}
            className="block text-center px-4 py-2 bg-sky-500 text-white rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default memo(NavigationBar);
