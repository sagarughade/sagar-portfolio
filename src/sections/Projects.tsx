import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { revealContainer, viewportOnce } from '../hooks/useScrollReveal';

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Systems built to actually run in production."
          description="Backend platforms, integrations and AI/voice systems — the kind of work this stack is meant for."
        />

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
