'use client';

import { cn } from '@/lib/utils';
import type { ToggleProps } from '@/types';

function Toggle({ checked = false, onChange, disabled, label, className }: ToggleProps) {
  return (
    <label
      className={cn(
        'inline-flex items-center gap-3 cursor-pointer',
        disabled && 'opacity-40 cursor-not-allowed',
        className,
      )}
    >
      <button
        role="switch"
        type="button"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          'relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach',
          'focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base',
          'disabled:cursor-not-allowed',
          checked
            ? 'border-peach bg-peach/15'
            : 'border-border bg-transparent',
        )}
      >
        <span
          className={cn(
            'inline-block h-3 w-3 rounded-full transition-all',
            checked ? 'translate-x-4 bg-peach' : 'translate-x-1 bg-ink-muted',
          )}
        />
      </button>
      {label && (
        <span className="font-body text-sm text-ink-secondary">{label}</span>
      )}
    </label>
  );
}

export { Toggle };
