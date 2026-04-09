'use client';

import { useState } from 'react';
import { Toggle } from '@/components/ui/Toggle';
import { ShowcaseSection } from '@/components/showcase/ShowcaseSection';
import { CodeBlock } from '@/components/showcase/CodeBlock';

function ToggleDemo() {
  const [states, setStates] = useState({
    a: false,
    b: true,
    c: false,
    d: true,
  });

  return (
    <div className="flex flex-col gap-4">
      <Toggle
        checked={states.a}
        onChange={(v) => setStates((s) => ({ ...s, a: v }))}
        label="Dark mode"
      />
      <Toggle
        checked={states.b}
        onChange={(v) => setStates((s) => ({ ...s, b: v }))}
        label="Email notifications"
      />
      <Toggle
        checked={states.c}
        onChange={(v) => setStates((s) => ({ ...s, c: v }))}
        label="Auto-save"
      />
      <Toggle
        checked={states.d}
        onChange={(v) => setStates((s) => ({ ...s, d: v }))}
        label="Beta features"
      />
    </div>
  );
}

export default function TogglePage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-peach mb-2 tracking-wider uppercase">Component</p>
        <h1 className="font-display text-3xl font-medium text-ink-primary tracking-tight mb-3">
          Toggle
        </h1>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-lg">
          A boolean control for switching settings on or off. Uses the peach accent when active.
          Prefer Toggle over a checkbox for settings that take immediate effect.
        </p>
      </div>

      {/* Interactive */}
      <ShowcaseSection title="Interactive demo">
        <ToggleDemo />
      </ShowcaseSection>

      {/* States */}
      <ShowcaseSection title="States">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <div>
              <p className="font-mono text-xs text-ink-muted mb-2">Off</p>
              <Toggle checked={false} label="Option" />
            </div>
            <div>
              <p className="font-mono text-xs text-ink-muted mb-2">On</p>
              <Toggle checked={true} label="Option" />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <p className="font-mono text-xs text-ink-muted mb-2">Disabled off</p>
              <Toggle checked={false} disabled label="Option" />
            </div>
            <div>
              <p className="font-mono text-xs text-ink-muted mb-2">Disabled on</p>
              <Toggle checked={true} disabled label="Option" />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Without label */}
      <ShowcaseSection title="Without label">
        <div className="flex gap-3">
          <Toggle checked={false} />
          <Toggle checked={true} />
        </div>
      </ShowcaseSection>

      {/* Code */}
      <ShowcaseSection title="Usage">
        <CodeBlock code={`'use client';
import { useState } from 'react';
import { Toggle } from '@/components/ui/Toggle';

function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Toggle
      checked={enabled}
      onChange={setEnabled}
      label="Dark mode"
    />
  );
}

// Disabled state
<Toggle checked={true} disabled label="Locked option" />`} />
      </ShowcaseSection>
    </div>
  );
}
