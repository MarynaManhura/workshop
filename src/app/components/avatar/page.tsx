import { Avatar } from '@/components/ui/Avatar';
import { ShowcaseSection, ShowcaseRow } from '@/components/showcase/ShowcaseSection';
import { CodeBlock } from '@/components/showcase/CodeBlock';

export default function AvatarPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-peach mb-2 tracking-wider uppercase">Component</p>
        <h1 className="font-display text-3xl font-medium text-ink-primary tracking-tight mb-3">
          Avatar
        </h1>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-lg">
          Represents a user or entity. Falls back gracefully from image to initials to a
          question mark placeholder when no data is provided.
        </p>
      </div>

      {/* Sizes */}
      <ShowcaseSection title="Sizes">
        <ShowcaseRow className="items-end">
          <div className="flex flex-col items-center gap-2">
            <Avatar initials="SM" size="sm" />
            <p className="font-mono text-xs text-ink-muted">sm</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar initials="MD" size="md" />
            <p className="font-mono text-xs text-ink-muted">md</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar initials="LG" size="lg" />
            <p className="font-mono text-xs text-ink-muted">lg</p>
          </div>
        </ShowcaseRow>
      </ShowcaseSection>

      {/* Initials */}
      <ShowcaseSection title="Initials fallback">
        <ShowcaseRow>
          <Avatar initials="MM" size="md" />
          <Avatar initials="JD" size="md" />
          <Avatar initials="AB" size="md" />
          <Avatar initials="TK" size="md" />
          <Avatar initials="?" size="md" />
        </ShowcaseRow>
      </ShowcaseSection>

      {/* Avatar stack */}
      <ShowcaseSection title="Avatar stack">
        <div className="flex items-center">
          {['MM', 'JD', 'AB', 'TK'].map((initials, i) => (
            <Avatar
              key={initials}
              initials={initials}
              size="md"
              className={i !== 0 ? '-ml-2' : ''}
            />
          ))}
          <div className="w-9 h-9 -ml-2 rounded-full border border-border bg-surface-overlay flex items-center justify-center">
            <span className="font-mono text-xs text-ink-muted">+8</span>
          </div>
        </div>
      </ShowcaseSection>

      {/* In a list */}
      <ShowcaseSection title="In a user list">
        <div className="flex flex-col gap-0">
          {[
            { initials: 'MM', name: 'Marina Mangura', role: 'Design Engineer' },
            { initials: 'JD', name: 'John Doe', role: 'Frontend Dev' },
            { initials: 'AB', name: 'Alice Brown', role: 'Product Designer' },
          ].map((user, i) => (
            <div
              key={user.name}
              className={`flex items-center gap-3 py-3 ${i !== 0 ? 'border-t border-border' : ''}`}
            >
              <Avatar initials={user.initials} size="md" />
              <div>
                <p className="font-body text-sm font-medium text-ink-primary">{user.name}</p>
                <p className="font-body text-xs text-ink-muted">{user.role}</p>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* Code */}
      <ShowcaseSection title="Usage">
        <CodeBlock code={`import { Avatar } from '@/components/ui/Avatar';

// With initials
<Avatar initials="MM" size="md" />

// Sizes: 'sm' | 'md' | 'lg'
<Avatar initials="AB" size="sm" />
<Avatar initials="AB" size="lg" />

// With image src
<Avatar
  src="/avatar.jpg"
  alt="Jane Doe"
  size="md"
/>`} />
      </ShowcaseSection>
    </div>
  );
}
