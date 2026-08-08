import { motion } from 'framer-motion';
import type { SkillGroup } from '../data/skills';
import { revealUp, viewportOnce } from '../hooks/useScrollReveal';

export function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={{ y: -4 }}
      className="card-surface group flex h-full flex-col gap-5 p-6 transition-colors duration-300 hover:border-violet-soft/40"
    >
      <div className="flex items-start justify-between">
        <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
        <span className="font-mono text-xs text-ink-faint">{group.skills.length} skills</span>
      </div>
      <p className="text-sm leading-relaxed text-ink-muted">{group.description}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors duration-200 group-hover:border-line-strong"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
