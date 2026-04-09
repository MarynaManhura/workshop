import { Input } from '@/components/ui/Input';
import { ShowcaseSection } from '@/components/showcase/ShowcaseSection';
import { CodeBlock } from '@/components/showcase/CodeBlock';

export default function InputPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-peach mb-2 tracking-wider uppercase">Component</p>
        <h1 className="font-display text-3xl font-medium text-ink-primary tracking-tight mb-3">
          Input
        </h1>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-lg">
          Text field for collecting user input. Supports labels, helper text, error states, and disabled states.
          Focus rings use the peach accent for consistent keyboard navigation feedback.
        </p>
      </div>

      {/* Base */}
      <ShowcaseSection title="Default">
        <div className="max-w-sm">
          <Input placeholder="Enter value..." />
        </div>
      </ShowcaseSection>

      {/* With label */}
      <ShowcaseSection title="With label">
        <div className="max-w-sm">
          <Input label="Email address" placeholder="you@example.com" type="email" />
        </div>
      </ShowcaseSection>

      {/* With helper text */}
      <ShowcaseSection title="With helper text">
        <div className="max-w-sm">
          <Input
            label="Username"
            placeholder="e.g. marina"
            helperText="Must be 3–20 characters, letters and numbers only."
          />
        </div>
      </ShowcaseSection>

      {/* Error state */}
      <ShowcaseSection title="Error state">
        <div className="flex flex-col gap-4 max-w-sm">
          <Input
            label="Email address"
            placeholder="you@example.com"
            error
            errorMessage="That email address is already in use."
            defaultValue="taken@example.com"
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            error
            errorMessage="Password must be at least 8 characters."
          />
        </div>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection title="Disabled">
        <div className="max-w-sm">
          <Input
            label="Read-only field"
            defaultValue="Not editable"
            disabled
            helperText="This field cannot be changed."
          />
        </div>
      </ShowcaseSection>

      {/* Input types */}
      <ShowcaseSection title="Input types">
        <div className="flex flex-col gap-4 max-w-sm">
          <Input label="Text" placeholder="Plain text" type="text" />
          <Input label="Password" placeholder="••••••••" type="password" />
          <Input label="Number" placeholder="0" type="number" />
          <Input label="Search" placeholder="Search..." type="search" />
        </div>
      </ShowcaseSection>

      {/* Code */}
      <ShowcaseSection title="Usage">
        <CodeBlock code={`import { Input } from '@/components/ui/Input';

// Bare input
<Input placeholder="Enter value..." />

// With label and helper text
<Input
  label="Username"
  placeholder="e.g. marina"
  helperText="3–20 characters."
/>

// Error state
<Input
  label="Email"
  error
  errorMessage="Already in use."
/>

// Disabled
<Input label="Field" defaultValue="Locked" disabled />`} />
      </ShowcaseSection>
    </div>
  );
}
