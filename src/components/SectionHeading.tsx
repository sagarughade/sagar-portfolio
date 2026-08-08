import { motion } from 'framer-motion';
import { revealUp, viewportOnce } from '../hooks/useScrollReveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] text-ink">
        {title}
      </h2>
      {description && (
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
