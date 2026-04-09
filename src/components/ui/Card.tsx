import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface-raised border border-border rounded-xl p-6',
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardHeader({ children, className }: CardProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

function CardTitle({ children, className }: CardProps) {
  return (
    <h3 className={cn('font-display text-base font-medium text-ink-primary tracking-tight', className)}>
      {children}
    </h3>
  );
}

function CardDescription({ children, className }: CardProps) {
  return (
    <p className={cn('font-body text-sm text-ink-secondary mt-1', className)}>
      {children}
    </p>
  );
}

function CardContent({ children, className }: CardProps) {
  return (
    <div className={cn('font-body text-sm text-ink-secondary', className)}>
      {children}
    </div>
  );
}

function CardFooter({ children, className }: CardProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-border flex items-center gap-3', className)}>
      {children}
    </div>
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
