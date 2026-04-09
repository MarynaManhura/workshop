'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { InputProps } from '@/types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, errorMessage, className, disabled, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-body font-medium text-ink-primary mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          disabled={disabled}
          className={cn(
            'w-full bg-surface-raised border rounded',
            'text-ink-primary font-body text-sm px-3 py-2',
            'placeholder:text-ink-muted',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base',
            'disabled:opacity-40 disabled:cursor-not-allowed',
            error ? 'border-error' : 'border-border',
            className,
          )}
          {...props}
        />
        {error && errorMessage && (
          <p className="text-xs text-error mt-1.5 font-body">{errorMessage}</p>
        )}
        {!error && helperText && (
          <p className="text-xs text-ink-muted mt-1.5 font-body">{helperText}</p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
