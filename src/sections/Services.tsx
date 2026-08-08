import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { services } from '../data/services';
import { revealContainer, revealUp, viewportOnce } from '../hooks/useScrollReveal';

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I Do" title="Where I spend most of my time." />

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.index}
              variants={revealUp}
              whileHover={{ y: -4 }}
              className="card-surface flex flex-col gap-4 p-6 transition-colors duration-300 hover:border-violet-soft/40"
            >
              <span className="font-mono text-sm text-ink-faint">{service.index}</span>
              <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
