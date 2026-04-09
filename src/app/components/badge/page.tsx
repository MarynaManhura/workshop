import { CheckCircle2, AlertCircle, Clock, Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { ShowcaseSection, ShowcaseRow } from '@/components/showcase/ShowcaseSection';
import { CodeBlock } from '@/components/showcase/CodeBlock';

export default function BadgePage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-peach mb-2 tracking-wider uppercase">Component</p>
        <h1 className="font-display text-3xl font-medium text-ink-primary tracking-tight mb-3">
          Badge
        </h1>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-lg">
          Small labels for status, categories, or metadata. Use semantic variants to communicate
          state at a glance. Borders follow the accent color at reduced opacity.
        </p>
      </div>

      {/* Variants */}
      <ShowcaseSection title="Variants">
        <ShowcaseRow>
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="lavender">Lavender</Badge>
        </ShowcaseRow>
      </ShowcaseSection>

      {/* With icons */}
      <ShowcaseSection title="With icons">
        <ShowcaseRow>
          <Badge variant="success">
            <CheckCircle2 size={10} /> Deployed
          </Badge>
          <Badge variant="error">
            <AlertCircle size={10} /> Failed
          </Badge>
          <Badge variant="warning">
            <Clock size={10} /> Pending
          </Badge>
          <Badge variant="lavender">
            <Star size={10} /> Featured
          </Badge>
          <Badge variant="default">
            v2.1.0
          </Badge>
        </ShowcaseRow>
      </ShowcaseSection>

      {/* In context */}
      <ShowcaseSection title="In context">
        <div className="flex flex-col gap-3">
          {[
            { label: 'Production deploy', badge: <Badge variant="success"><CheckCircle2 size={10} /> Live</Badge> },
            { label: 'Staging deploy', badge: <Badge variant="warning"><Clock size={10} /> Building</Badge> },
            { label: 'Feature branch', badge: <Badge variant="error"><AlertCircle size={10} /> Failed</Badge> },
            { label: 'Component library', badge: <Badge variant="lavender">v0.1.0</Badge> },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <span className="font-body text-sm text-ink-secondary">{row.label}</span>
              {row.badge}
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* Code */}
      <ShowcaseSection title="Usage">
        <CodeBlock code={`import { Badge } from '@/components/ui/Badge';
import { CheckCircle2 } from 'lucide-react';

// Variants
<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="lavender">Lavender</Badge>

// With icon
<Badge variant="success">
  <CheckCircle2 size={10} /> Deployed
</Badge>`} />
      </ShowcaseSection>
    </div>
  );
}
