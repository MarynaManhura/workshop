import { cn } from '@/lib/utils';
import type { BadgeProps } from '@/types';

const variantStyles = {
  default: 'border-border text-ink-secondary',
  success: 'border-success/40 text-success',
  warning: 'border-warning/40 text-warning',
  error: 'border-error/40 text-error',
  lavender: 'border-lavender/40 text-lavender',
};

function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'font-body text-xs font-medium',
        'px-2 py-0.5 rounded',
        'border bg-transparent',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
