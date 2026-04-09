'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

const variantStyles = {
  primary: cn(
    'border-[1.5px] border-peach text-peach bg-transparent',
    'hover:bg-peach/10 hover:border-peach-dim',
  ),
  secondary: cn(
    'border-[1.5px] border-border text-ink-secondary bg-transparent',
    'hover:border-ink-muted hover:text-ink-primary',
  ),
  ghost: cn(
    'border-[1.5px] border-transparent text-ink-muted bg-transparent',
    'hover:text-ink-primary hover:border-border',
  ),
};

const sizeStyles = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-5 py-2.5',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-body font-medium rounded',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach',
          'focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base',
          'disabled:opacity-35 disabled:cursor-not-allowed',
          'transition-colors',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
