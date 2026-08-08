import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { social } from '../data/social';
import { revealUp, viewportOnce } from '../hooks/useScrollReveal';

const channels = [
  { icon: Mail, label: 'Email', value: social.email, href: `mailto:${social.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: social.linkedin },
  { icon: Github, label: 'GitHub', value: 'GitHub Profile', href: social.github },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="Have a project, opportunity or idea? Let's talk."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-surface flex items-center gap-4 p-5 transition-colors duration-300 hover:border-violet-soft/40"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-base-raised text-violet-soft">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-ink-faint">{label}</p>
                  <p className="text-sm font-medium text-ink">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
