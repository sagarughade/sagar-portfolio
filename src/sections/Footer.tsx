import { SocialLinks } from '../components/SocialLinks';

export function Footer() {
  return (
    <footer className="relative border-t border-line py-10">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-ink">Sagar Ughade</p>
          <p className="text-xs text-ink-faint">Software Developer</p>
        </div>

        <SocialLinks iconSize={16} />

        <p className="text-xs text-ink-faint">© 2026 Sagar Ughade. All rights reserved.</p>
      </div>
    </footer>
  );
}
