import { motion } from 'framer-motion';
import { Server, Plug, Mic, Cloud } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { revealContainer, revealUp, viewportOnce } from '../hooks/useScrollReveal';

const focusAreas = [
  { icon: Server, label: 'Web Applications', desc: 'Backend-heavy applications built for correctness and scale.' },
  { icon: Plug, label: 'APIs & Integrations', desc: 'REST APIs and third-party, CRM and telephony integrations.' },
  { icon: Mic, label: 'AI / Voice Systems', desc: 'Voice AI and conversational systems on telephony infrastructure.' },
  { icon: Cloud, label: 'Database & Cloud', desc: 'MySQL schema design and Azure-hosted services.' },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Turning complex problems into simple solutions."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5 text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            <p>
              I'm Sagar Ughade, a software developer who works across the stack but spends most of
              my time on the backend — designing APIs, structuring databases and building the
              services that hold a product together.
            </p>
            <p>
              My day-to-day involves Laravel and Node.js applications, REST API design, and
              connecting systems together — CRMs, telephony providers and third-party platforms —
              so they work as one. Lately, a good part of that has been AI and voice AI systems:
              real-time voice pipelines, conversational agents and the infrastructure that keeps
              them reliable.
            </p>
            <p>
              I care about writing code that's easy to reason about months later, and about
              building dashboards and business applications that people actually rely on — not
              just demos. Cloud platforms like Azure and tools like Git, GitHub and Postman are
              part of how I ship that work day to day.
            </p>
          </motion.div>

          <motion.div
            variants={revealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4"
          >
            {focusAreas.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={revealUp}
                whileHover={{ y: -4 }}
                className="card-surface flex flex-col gap-3 p-5 transition-colors duration-300 hover:border-violet-soft/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-base-raised text-violet-soft">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-sm font-semibold text-ink">{label}</h3>
                <p className="text-xs leading-relaxed text-ink-faint">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
