import type { Config } from 'tailwindcss';

function withOpacity(variable: string) {
  return `rgb(var(${variable}) / <alpha-value>)`;
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        'surface-base': withOpacity('--color-surface-base'),
        'surface-raised': withOpacity('--color-surface-raised'),
        'surface-overlay': withOpacity('--color-surface-overlay'),
        'surface-subtle': withOpacity('--color-surface-subtle'),
        'ink-primary': withOpacity('--color-ink-primary'),
        'ink-secondary': withOpacity('--color-ink-secondary'),
        'ink-muted': withOpacity('--color-ink-muted'),
        border: withOpacity('--color-border'),
        peach: withOpacity('--color-peach'),
        'peach-dim': withOpacity('--color-peach-dim'),
        lavender: withOpacity('--color-lavender'),
        'lavender-dim': withOpacity('--color-lavender-dim'),
        error: withOpacity('--color-error'),
        'error-dim': withOpacity('--color-error-dim'),
        success: withOpacity('--color-success'),
        'success-dim': withOpacity('--color-success-dim'),
        warning: withOpacity('--color-warning'),
        'warning-dim': withOpacity('--color-warning-dim'),
      },
    },
  },
  plugins: [],
};

export default config;
