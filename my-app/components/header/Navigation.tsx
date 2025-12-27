'use client';
import Link from "next/link";

export default function NavigationBar(){
    return(
      <div>
        <nav className="bg-[rgb(39,38,53)] border-b border-[rgb(60,59,74)] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-[rgb(177,229,242)] text-xl font-bold tracking-tight">
                <Link href="/" className="hover:text-[rgb(206,206,206)] transition-colors duration-200">
                  Reese Redman
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link
                  href="/about"
                  className="text-[rgb(232,233,243)] hover:text-[rgb(177,229,242)] transition-colors duration-200 font-medium"
                >
                  About
                </Link>
                <Link
                  href="/skills"
                  className="text-[rgb(232,233,243)] hover:text-[rgb(177,229,242)] transition-colors duration-200 font-medium"
                >
                  Skills
                </Link>
                <Link
                  href="/projects"
                  className="text-[rgb(232,233,243)] hover:text-[rgb(177,229,242)] transition-colors duration-200 font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/certs"
                  className="text-[rgb(232,233,243)] hover:text-[rgb(177,229,242)] transition-colors duration-200 font-medium"
                >
                  Certifications
                </Link>
                <Link
                  href="/experience"
                  className="text-[rgb(232,233,243)] hover:text-[rgb(177,229,242)] transition-colors duration-200 font-medium"
                >
                  Experience
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-[rgb(177,229,242)] text-[rgb(39,38,53)] rounded-lg hover:bg-[rgb(206,206,206)] transition-all duration-200 font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}