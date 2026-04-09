import { Alert } from '@/components/ui/Alert';
import { ShowcaseSection } from '@/components/showcase/ShowcaseSection';
import { CodeBlock } from '@/components/showcase/CodeBlock';

export default function AlertPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-peach mb-2 tracking-wider uppercase">Component</p>
        <h1 className="font-display text-3xl font-medium text-ink-primary tracking-tight mb-3">
          Alert
        </h1>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-lg">
          Communicates feedback, status, or important information. Each variant has a semantic
          meaning — use the correct one to match the message intent.
        </p>
      </div>

      {/* All variants */}
      <ShowcaseSection title="Variants">
        <div className="flex flex-col gap-3">
          <Alert variant="info" title="Information">
            Your changes are saved automatically every 30 seconds.
          </Alert>
          <Alert variant="success" title="Deployed successfully">
            The latest build is now live at your production URL.
          </Alert>
          <Alert variant="warning" title="API rate limit">
            You&apos;re approaching your monthly API quota. Upgrade to avoid interruptions.
          </Alert>
          <Alert variant="error" title="Build failed">
            There were 3 TypeScript errors. Check the build log for details.
          </Alert>
        </div>
      </ShowcaseSection>

      {/* Without title */}
      <ShowcaseSection title="Without title">
        <div className="flex flex-col gap-3">
          <Alert variant="info">
            This feature is currently in beta. Expect some rough edges.
          </Alert>
          <Alert variant="warning">
            Unsaved changes will be lost if you navigate away.
          </Alert>
        </div>
      </ShowcaseSection>

      {/* In context */}
      <ShowcaseSection title="In a form context">
        <div className="max-w-sm flex flex-col gap-4">
          <Alert variant="error" title="Submission failed">
            Please fix the errors below before submitting.
          </Alert>
          <Alert variant="success">
            Your profile has been updated.
          </Alert>
        </div>
      </ShowcaseSection>

      {/* Code */}
      <ShowcaseSection title="Usage">
        <CodeBlock code={`import { Alert } from '@/components/ui/Alert';

// With title
<Alert variant="info" title="Information">
  Your changes are saved automatically.
</Alert>

// Without title
<Alert variant="warning">
  Unsaved changes will be lost.
</Alert>

// Variants: 'info' | 'success' | 'warning' | 'error'`} />
      </ShowcaseSection>
    </div>
  );
}
