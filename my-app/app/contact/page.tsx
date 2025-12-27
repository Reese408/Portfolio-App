import { getResume } from '@/lib/content/loader';
import ContactContent from '@/components/contact/ContactContent';

export default function ContactPage() {
  const resume = getResume();

  return <ContactContent resume={resume} />;
}
