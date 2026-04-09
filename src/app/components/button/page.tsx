import { Download, Plus, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ShowcaseSection, ShowcaseRow } from '@/components/showcase/ShowcaseSection';
import { CodeBlock } from '@/components/showcase/CodeBlock';

export default function ButtonPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-peach mb-2 tracking-wider uppercase">Component</p>
        <h1 className="font-display text-3xl font-medium text-ink-primary tracking-tight mb-3">
          Button
        </h1>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-lg">
          Triggers an action or event. Always rendered as a stroke/outline — never filled.
          Use <code className="font-mono text-xs text-peach">primary</code> for the main action,{' '}
          <code className="font-mono text-xs text-peach">secondary</code> for supporting actions, and{' '}
          <code className="font-mono text-xs text-peach">ghost</code> for low-emphasis controls.
        </p>
      </div>

      {/* Variants */}
      <ShowcaseSection title="Variants">
        <ShowcaseRow>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </ShowcaseRow>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes">
        <ShowcaseRow className="items-end">
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-xs text-ink-muted">sm</p>
            <Button size="sm">Small</Button>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-xs text-ink-muted">md</p>
            <Button size="md">Medium</Button>
          </div>
        </ShowcaseRow>
      </ShowcaseSection>

      {/* With icons */}
      <ShowcaseSection title="With icons">
        <ShowcaseRow>
          <Button variant="primary">
            <Plus size={14} /> New item
          </Button>
          <Button variant="secondary">
            <Download size={14} /> Export
          </Button>
          <Button variant="ghost">
            <Send size={14} /> Send
          </Button>
        </ShowcaseRow>
      </ShowcaseSection>

      {/* States */}
      <ShowcaseSection title="States — disabled">
        <ShowcaseRow>
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="ghost" disabled>Ghost</Button>
        </ShowcaseRow>
      </ShowcaseSection>

      {/* All combos */}
      <ShowcaseSection title="All variants × sizes">
        <div className="flex flex-col gap-4">
          {(['primary', 'secondary', 'ghost'] as const).map((v) => (
            <ShowcaseRow key={v}>
              <Button variant={v} size="sm">{v} sm</Button>
              <Button variant={v} size="md">{v} md</Button>
            </ShowcaseRow>
          ))}
        </div>
      </ShowcaseSection>

      {/* Code */}
      <ShowcaseSection title="Usage">
        <CodeBlock code={`import { Button } from '@/components/ui/Button';

// Primary (default)
<Button variant="primary">Save changes</Button>

// Secondary
<Button variant="secondary">Cancel</Button>

// Ghost
<Button variant="ghost">Learn more</Button>

// Small size
<Button variant="primary" size="sm">Add</Button>

// Disabled
<Button variant="primary" disabled>Processing...</Button>

// With icon (Lucide only)
import { Plus } from 'lucide-react';
<Button variant="primary">
  <Plus size={14} /> New item
</Button>`} />
      </ShowcaseSection>
    </div>
  );
}
