'use client';
import Link from "next/link";
import { useState, useCallback, memo } from "react";
import { Menu, X } from "lucide-react";

// Extract navLinks outside component to prevent recreation on every render
const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/certs", label: "Certifications" },
  { href: "/experience", label: "Experience" },
] as const;

function NavigationBar(){
    const [isOpen, setIsOpen] = useState(false);

    // Memoize toggle handler to prevent recreation on every render
    const toggleMenu = useCallback(() => {
      setIsOpen(prev => !prev);
    }, []);

    // Memoize close handler to prevent recreation on every render
    const closeMenu = useCallback(() => {
      setIsOpen(false);
    }, []);

    return(
      <div>
        <nav className="bg-[rgb(39,38,53)] border-b border-[rgb(60,59,74)] shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="text-[rgb(177,229,242)] text-xl font-bold tracking-tight shrink-0">
                <Link href="/" className="hover:text-[rgb(206,206,206)] transition-colors duration-200">
                  Reese Redman
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[rgb(232,233,243)] hover:text-[rgb(177,229,242)] transition-colors duration-200 font-medium whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-[rgb(177,229,242)] text-[rgb(39,38,53)] rounded-lg hover:bg-[rgb(206,206,206)] transition-all duration-200 font-medium whitespace-nowrap"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-[rgb(232,233,243)] hover:text-[rgb(177,229,242)] transition-colors duration-200 p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-[rgb(60,59,74)] pt-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-[rgb(232,233,243)] hover:text-[rgb(177,229,242)] transition-colors duration-200 font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-4 py-2 bg-[rgb(177,229,242)] text-[rgb(39,38,53)] rounded-lg hover:bg-[rgb(206,206,206)] transition-all duration-200 font-medium"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    );
}

// Export memoized version to prevent unnecessary re-renders
export default memo(NavigationBar);