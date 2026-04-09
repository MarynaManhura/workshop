import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AlertProps } from '@/types';

const variantConfig = {
  info: {
    icon: Info,
    containerClass: 'border-lavender/40 bg-lavender/5',
    iconClass: 'text-lavender',
    titleClass: 'text-lavender',
  },
  success: {
    icon: CheckCircle2,
    containerClass: 'border-success/40 bg-success/5',
    iconClass: 'text-success',
    titleClass: 'text-success',
  },
  warning: {
    icon: TriangleAlert,
    containerClass: 'border-warning/40 bg-warning/5',
    iconClass: 'text-warning',
    titleClass: 'text-warning',
  },
  error: {
    icon: AlertCircle,
    containerClass: 'border-error/40 bg-error/5',
    iconClass: 'text-error',
    titleClass: 'text-error',
  },
};

function Alert({ variant = 'info', title, children, className }: AlertProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div
      role="alert"
      className={cn(
        'flex gap-3 rounded-lg border p-4',
        config.containerClass,
        className,
      )}
    >
      <Icon size={18} className={cn('mt-0.5 shrink-0', config.iconClass)} />
      <div className="flex-1">
        {title && (
          <p className={cn('font-body font-medium text-sm mb-1', config.titleClass)}>
            {title}
          </p>
        )}
        <div className="font-body text-sm text-ink-secondary">{children}</div>
      </div>
    </div>
  );
}

export { Alert };
