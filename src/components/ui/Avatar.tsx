import { cn } from '@/lib/utils';
import type { AvatarProps } from '@/types';

const sizeStyles = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-12 h-12 text-base',
};

function Avatar({ src, alt, initials, size = 'md', className }: AvatarProps) {
  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-full',
        'border border-border bg-surface-overlay shrink-0 overflow-hidden',
        sizeStyles[size],
        className,
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt ?? ''} className="w-full h-full object-cover" />
      ) : (
        <span className="font-body font-medium text-ink-secondary select-none uppercase">
          {initials?.slice(0, 2) ?? '?'}
        </span>
      )}
    </div>
  );
}

export { Avatar };
