import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { revealUp, viewportOnce } from '../hooks/useScrollReveal';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="card-surface group relative flex flex-col gap-6 overflow-hidden p-7"
    >
      <div className="pointer-events-none absolute inset-0 bg-aurora-2 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />

      <div className="relative flex items-start justify-between">
        <span className="font-mono text-sm text-violet-soft">{project.index}</span>
        <div className="flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-muted hover:border-violet-soft/60 hover:text-ink"
          >
            <Github size={15} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} live demo`}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-muted hover:border-violet-soft/60 hover:text-ink"
          >
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="relative flex flex-col gap-3">
        <h3 className="font-display text-2xl font-semibold text-ink">{project.name}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <p className="max-h-0 overflow-hidden text-sm leading-relaxed text-ink-faint opacity-0 transition-all duration-500 ease-out group-hover:max-h-32 group-hover:pt-1 group-hover:opacity-100">
          {project.detail}
        </p>
      </div>

      <div className="relative mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-base-raised px-3 py-1 font-mono text-[11px] text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative flex gap-3 pt-1">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full border border-line-strong py-2.5 text-center text-xs font-medium text-ink transition-colors hover:border-violet-soft/60"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-text-gradient py-2.5 text-center text-xs font-semibold text-base"
        >
          Live Demo
        </a>
      </div>
    </motion.article>
  );
}
