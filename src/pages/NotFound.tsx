import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { BackgroundFX } from '../components/BackgroundFX';

export function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6">
      <BackgroundFX />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 text-center"
      >
        <span className="font-mono text-sm text-violet-soft">error/404</span>
        <h1 className="font-display text-6xl font-semibold text-ink sm:text-7xl">
          404<span className="text-gradient">.</span>
        </h1>
        <p className="max-w-sm text-ink-muted">
          This route doesn't resolve to anything — the page you're looking for has moved or never
          existed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-text-gradient px-6 py-3 text-sm font-semibold text-base shadow-glow-sm transition-shadow hover:shadow-glow"
        >
          Back to home
          <Home size={16} />
        </Link>
      </motion.div>
    </div>
  );
}
