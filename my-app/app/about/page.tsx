import { getAboutContent, getResume } from '@/lib/content/loader';
import AboutContent from '@/components/about/AboutContent';

export default function AboutMePage() {
  const aboutContent = getAboutContent();
  const resume = getResume();

  return <AboutContent aboutContent={aboutContent} resume={resume} />;
}
