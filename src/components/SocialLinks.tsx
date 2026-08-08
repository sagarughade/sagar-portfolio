import { Github, Linkedin, Mail } from 'lucide-react';
import { social } from '../data/social';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className = '', iconSize = 18 }: SocialLinksProps) {
  const links = [
    { href: social.github, label: 'GitHub', icon: Github },
    { href: social.linkedin, label: 'LinkedIn', icon: Linkedin },
    { href: `mailto:${social.email}`, label: 'Email', icon: Mail },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-muted transition-colors duration-300 hover:border-violet-soft/60 hover:text-ink"
        >
          <Icon size={iconSize} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
