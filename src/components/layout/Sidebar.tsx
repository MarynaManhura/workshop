'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';
import { Layers } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r border-border bg-surface-base sticky top-0 h-screen flex flex-col overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-border">
        <div className="w-7 h-7 rounded flex items-center justify-center border border-peach/40 text-peach">
          <Layers size={14} />
        </div>
        <span className="font-display font-medium text-sm text-ink-primary tracking-tight">
          Workshop DS
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5">
        <p className="px-2 mb-2 text-xs font-body font-medium text-ink-muted uppercase tracking-wider">
          Components
        </p>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center px-2 py-1.5 rounded text-sm font-body transition-colors',
                isActive
                  ? 'text-peach bg-peach/8'
                  : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-subtle',
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-border">
        <p className="text-xs font-body text-ink-muted">v0.1.0</p>
      </div>
    </aside>
  );
}
