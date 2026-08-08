import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';
import { skillGroups } from '../data/skills';
import { revealContainer, viewportOnce } from '../hooks/useScrollReveal';

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built around backend systems and integrations."
          description="Grouped by where each tool actually shows up in the work — from interfaces down to infrastructure."
        />

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
