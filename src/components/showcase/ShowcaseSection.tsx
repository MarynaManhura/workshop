import { cn } from '@/lib/utils';
import type { ShowcaseSectionProps } from '@/types';

function ShowcaseSection({ title, children, className }: ShowcaseSectionProps) {
  return (
    <section className={cn('mb-10', className)}>
      <h2 className="font-display text-sm font-medium text-ink-muted uppercase tracking-wider mb-4">
        {title}
      </h2>
      <div className="rounded-xl border border-border bg-surface-raised p-6">
        {children}
      </div>
    </section>
  );
}

function ShowcaseRow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {children}
    </div>
  );
}

export { ShowcaseSection, ShowcaseRow };
