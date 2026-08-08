import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, User, Code2, FolderGit2, Mail, Download, Search } from 'lucide-react';
import { social } from '../data/social';

interface CommandItem {
  id: string;
  label: string;
  hint: string;
  icon: typeof Home;
  action: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: 'home',
        label: 'Go to Home',
        hint: 'section',
        icon: Home,
        action: () => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'about',
        label: 'Go to About',
        hint: 'section',
        icon: User,
        action: () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'skills',
        label: 'Go to Skills',
        hint: 'section',
        icon: Code2,
        action: () => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'projects',
        label: 'Go to Projects',
        hint: 'section',
        icon: FolderGit2,
        action: () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'contact',
        label: 'Contact Me',
        hint: 'section',
        icon: Mail,
        action: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'resume',
        label: 'Download Resume',
        hint: 'file',
        icon: Download,
        action: () => window.open(social.resume, '_blank'),
      },
    ],
    []
  );

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const run = (action: () => void) => {
    action();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 px-4 pt-28 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-line-strong bg-base-soft shadow-glow"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
              <Search size={16} className="text-ink-faint" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command..."
                className="w-full bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink-faint">
                ESC
              </kbd>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-ink-faint">No matching commands.</p>
              )}
              {filtered.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={() => run(cmd.action)}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-ink-muted transition-colors hover:bg-base-raised hover:text-ink"
                >
                  <cmd.icon size={16} className="text-violet-soft" />
                  {cmd.label}
                  <span className="ml-auto font-mono text-[10px] text-ink-faint">{cmd.hint}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
