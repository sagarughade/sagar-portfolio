import { motion } from 'framer-motion';
import type { ExperienceItem } from '../data/experience';
import { revealUp, viewportOnce } from '../hooks/useScrollReveal';

export function TimelineItem({ item, isLast }: { item: ExperienceItem; isLast: boolean }) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative flex gap-6 sm:gap-10"
    >
      <div className="flex flex-col items-center">
        <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-text-gradient shadow-glow-sm" />
        {!isLast && <span className="w-px flex-1 bg-line" />}
      </div>

      <div className="card-surface mb-10 flex-1 p-6 sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-ink">{item.role}</h3>
          <span className="font-mono text-xs text-ink-faint">{item.duration}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-violet-soft">{item.company}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.description}</p>

        <ul className="mt-4 flex flex-col gap-2">
          {item.responsibilities.map((r, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
