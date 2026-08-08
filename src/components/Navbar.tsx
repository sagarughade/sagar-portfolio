import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import { navLinks } from '../data/nav';
import { social } from '../data/social';
import { SocialLinks } from './SocialLinks';
import { Button } from './Button';

interface NavbarProps {
  onOpenPalette: () => void;
}

export function Navbar({ onOpenPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container-px mx-auto max-w-6xl">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'border border-line bg-base-soft/80 shadow-glow-sm backdrop-blur-xl'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <a href="#home" className="font-display text-xl font-semibold tracking-tight text-ink">
            SAGAR<span className="text-violet-soft">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={onOpenPalette}
              className="flex items-center gap-2 rounded-full border border-line px-3 py-2 text-xs text-ink-faint transition-colors hover:border-violet-soft/60 hover:text-ink-muted"
              aria-label="Open command palette"
            >
              <Command size={14} />
              <span className="font-mono">K</span>
            </button>
            <SocialLinks />
            <Button as="a" href={social.resume} download variant="secondary" className="!px-5 !py-2.5 text-sm">
              Resume
            </Button>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="container-px mx-auto mt-2 max-w-6xl md:hidden"
          >
            <div className="flex flex-col gap-1 rounded-2xl border border-line bg-base-soft/95 p-4 backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-ink-muted transition-colors hover:bg-base-raised hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-line pt-4">
                <SocialLinks />
                <Button as="a" href={social.resume} download variant="secondary" className="!px-5 !py-2.5 text-sm">
                  Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
