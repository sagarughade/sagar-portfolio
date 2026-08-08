import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

interface LinkProps extends BaseProps {
  as: 'a';
  href: string;
  target?: string;
  rel?: string;
  download?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-text-gradient text-base font-semibold shadow-glow-sm hover:shadow-glow',
  secondary:
    'bg-transparent border border-line-strong text-ink hover:border-violet-soft/60 hover:bg-base-raised/60',
  ghost: 'bg-transparent text-ink-muted hover:text-ink',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none';

export function Button(props: ButtonProps | LinkProps) {
  const { children, variant = 'primary', icon, className = '' } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (props.as === 'a') {
    const { href, target, rel, download } = props;
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  const { type = 'button', onClick, disabled } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {icon}
    </motion.button>
  );
}
