/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#08090D',
          soft: '#0D0F16',
          surface: '#12141C',
          raised: '#171A24',
        },
        ink: {
          DEFAULT: '#E9EBF1',
          muted: '#9298AB',
          faint: '#5C6377',
        },
        line: {
          DEFAULT: 'rgba(233,235,241,0.08)',
          strong: 'rgba(233,235,241,0.16)',
        },
        violet: {
          DEFAULT: '#7C5CFC',
          soft: '#9B82FF',
        },
        azure: {
          DEFAULT: '#4C8EFF',
        },
        cyan: {
          DEFAULT: '#22D3EE',
        },
        signal: {
          DEFAULT: '#3DDC97',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(233,235,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(233,235,241,0.05) 1px, transparent 1px)',
        'aurora-1':
          'radial-gradient(circle at 30% 20%, rgba(124,92,252,0.35), transparent 55%)',
        'aurora-2':
          'radial-gradient(circle at 75% 65%, rgba(34,211,238,0.22), transparent 55%)',
        'aurora-3':
          'radial-gradient(circle at 50% 100%, rgba(76,142,255,0.18), transparent 60%)',
        'text-gradient': 'linear-gradient(90deg, #9B82FF 0%, #4C8EFF 55%, #22D3EE 100%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(233,235,241,0.06), 0 20px 60px -20px rgba(76,92,252,0.35)',
        'glow-sm': '0 0 0 1px rgba(233,235,241,0.06), 0 8px 24px -8px rgba(76,92,252,0.25)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
