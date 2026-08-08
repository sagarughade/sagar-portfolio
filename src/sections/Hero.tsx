import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageSquare } from 'lucide-react';
import { Button } from '../components/Button';
import { StatusBadge } from '../components/StatusBadge';
import { social } from '../data/social';

const codeLines = [
  { indent: 0, text: 'const developer = {' },
  { indent: 1, text: 'name: "Sagar Ughade",' },
  { indent: 1, text: 'role: "Software Developer",' },
  { indent: 1, text: 'stack: ["Laravel", "Node.js", "React"],' },
  { indent: 1, text: 'passion: "Building useful systems",' },
  { indent: 0, text: '};' },
];

const badges = [
  { label: 'Laravel', className: 'left-[-8%] top-[8%]', delay: 0 },
  { label: 'Node.js', className: 'right-[-10%] top-[18%]', delay: 0.6 },
  { label: 'React', className: 'left-[-12%] top-[52%]', delay: 1.2 },
  { label: 'TypeScript', className: 'right-[-8%] top-[58%]', delay: 1.8 },
  { label: 'MySQL', className: 'left-[2%] bottom-[-6%]', delay: 2.4 },
  { label: 'Azure', className: 'right-[4%] bottom-[-8%]', delay: 3.0 },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="container-px mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-7"
        >
          <span className="eyebrow rounded-full border border-line px-3.5 py-1.5">
            Software Developer
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Building scalable systems,
            <br />
            <span className="text-gradient">one line of code at a time.</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            I build modern web applications, APIs, integrations and AI-powered experiences using
            Laravel, Node.js, React and cloud technologies.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button as="a" href="#projects" icon={<ArrowRight size={16} />}>
              View My Work
            </Button>
            <Button as="a" href="#contact" variant="secondary" icon={<MessageSquare size={16} />}>
              Let's Connect
            </Button>
          </div>

          <a
            href={social.resume}
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <Download size={15} />
            Download Resume
          </a>

          <div className="pt-4">
            <StatusBadge label="Currently building AI-powered voice systems" />
          </div>
        </motion.div>

        {/* Right: signature terminal element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          {badges.map((b) => (
            <motion.div
              key={b.label}
              className={`absolute z-10 hidden rounded-full border border-line bg-base-soft/90 px-3.5 py-2 font-mono text-xs text-ink-muted shadow-glow-sm backdrop-blur-md sm:block ${b.className}`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              {b.label}
            </motion.div>
          ))}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-2xl border border-line-strong bg-base-soft/90 shadow-glow backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-[11px] text-ink-faint">developer.ts</span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-7 sm:text-sm">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.18 }}
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                >
                  <CodeLine text={line.text} />
                </motion.div>
              ))}
              <motion.span
                className="mt-1 inline-block h-4 w-2 bg-violet-soft align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.9, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CodeLine({ text }: { text: string }) {
  const parts = text.split(/("(?:[^"\\]|\\.)*")/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('"') ? (
          <span key={i} className="text-cyan">
            {part}
          </span>
        ) : (
          <span key={i} className="text-ink-muted">
            {part}
          </span>
        )
      )}
    </>
  );
}
