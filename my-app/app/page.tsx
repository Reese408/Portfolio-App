import HeroSection from '@/components/home/HeroSection';
import SkillsSection from '@/components/home/SkillsSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import ContactSection from '@/components/home/ContactSection';
import { getResume, getAllProjects, getAllExperience, getCertifications } from '@/lib/content/loader';

export default function Home() {
  const resume = getResume();
  const projects = getAllProjects();
  const experiences = getAllExperience();
  const { certifications } = getCertifications();

  return (
    <div className="bg-[#F1F5F9]">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection resume={resume} />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection projects={projects} />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <ExperienceSection experiences={experiences} />
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <AchievementsSection awards={resume.awards} certifications={certifications} />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection resume={resume} />
      </section>
    </div>
  );
}
