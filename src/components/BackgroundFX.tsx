import { useMemo } from 'react';
import { motion } from 'framer-motion';

// Ambient, low-opacity background: a faint grid, three soft aurora blobs
// and a handful of drifting particles. Fixed + pointer-events-none so it
// never interferes with content or scroll.
export function BackgroundFX() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 2 + (i % 3),
        duration: 8 + (i % 5) * 2,
        delay: (i % 7) * 0.6,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 bg-aurora-1" />
      <div className="absolute inset-0 bg-aurora-2" />
      <div className="absolute inset-0 bg-aurora-3" />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-violet-soft/50"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -22, 0], opacity: [0.15, 0.55, 0.15] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />
    </div>
  );
}
