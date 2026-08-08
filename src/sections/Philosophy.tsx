import { motion } from 'framer-motion';
import { revealUp, viewportOnce } from '../hooks/useScrollReveal';

const backgroundLines = [
  'if (system.reliable && system.maintainable) return ship();',
  'export function refactor(code: Legacy): Maintainable {}',
  'const uptime = monitor(service).track();',
  'await db.transaction(async (trx) => { ... });',
  'class Integration extends Provider implements Sync {}',
  'const response = await api.post("/v1/calls", payload);',
];

export function Philosophy() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-6 opacity-[0.06]"
        aria-hidden="true"
      >
        {Array.from({ length: 6 }).map((_, row) => (
          <motion.div
            key={row}
            className="whitespace-nowrap font-mono text-sm"
            animate={{ x: row % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
            transition={{ duration: 40 + row * 6, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 4 })
              .map(() => backgroundLines[row % backgroundLines.length])
              .join('    ')}
          </motion.div>
        ))}
      </div>

      <div className="container-px relative mx-auto max-w-4xl text-center">
        <motion.span
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="eyebrow"
        >
          Developer Philosophy
        </motion.span>

        <motion.blockquote
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-4xl"
        >
          "Good software isn't just about making things work.
          <br className="hidden sm:block" />
          It's about making them{' '}
          <span className="text-gradient">reliable, maintainable and useful.</span>"
        </motion.blockquote>
      </div>
    </section>
  );
}
