import { cn } from '@/lib/utils';
import type { CodeBlockProps } from '@/types';

function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  return (
    <div className="rounded-lg border border-border bg-surface-base overflow-x-auto">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
        <span className="text-xs font-mono text-ink-muted">{language}</span>
      </div>
      <pre className="p-4 text-sm font-mono text-ink-secondary leading-relaxed overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export { CodeBlock };
