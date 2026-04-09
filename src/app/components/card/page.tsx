import { ArrowRight, MoreHorizontal } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { ShowcaseSection } from '@/components/showcase/ShowcaseSection';
import { CodeBlock } from '@/components/showcase/CodeBlock';

export default function CardPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-peach mb-2 tracking-wider uppercase">Component</p>
        <h1 className="font-display text-3xl font-medium text-ink-primary tracking-tight mb-3">
          Card
        </h1>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-lg">
          A surface container for grouping related content. Cards sit on{' '}
          <code className="font-mono text-xs text-peach">surface-raised</code> with a{' '}
          <code className="font-mono text-xs text-peach">rounded-xl</code> border radius.
        </p>
      </div>

      {/* Simple */}
      <ShowcaseSection title="Simple card">
        <div className="max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>A short description of the card content.</CardDescription>
            </CardHeader>
            <CardContent>
              Some body content goes here. Keep it concise and relevant to the card purpose.
            </CardContent>
          </Card>
        </div>
      </ShowcaseSection>

      {/* With footer */}
      <ShowcaseSection title="With footer actions">
        <div className="max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle>Deploy preview</CardTitle>
              <CardDescription>Branch: feature/new-tokens</CardDescription>
            </CardHeader>
            <CardContent>
              Your preview is ready. Click the link to view the deployed site.
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="sm">
                View preview <ArrowRight size={12} />
              </Button>
              <Button variant="ghost" size="sm">Dismiss</Button>
            </CardFooter>
          </Card>
        </div>
      </ShowcaseSection>

      {/* Profile card */}
      <ShowcaseSection title="Profile card">
        <div className="max-w-sm">
          <Card>
            <div className="flex items-start justify-between mb-4">
              <Avatar initials="MM" size="lg" />
              <Button variant="ghost" size="sm">
                <MoreHorizontal size={14} />
              </Button>
            </div>
            <CardTitle>Marina Mangura</CardTitle>
            <CardDescription>Design Engineer</CardDescription>
            <div className="flex gap-2 mt-4">
              <Badge variant="lavender">Design</Badge>
              <Badge variant="default">TypeScript</Badge>
            </div>
          </Card>
        </div>
      </ShowcaseSection>

      {/* Grid */}
      <ShowcaseSection title="Card grid">
        <div className="grid grid-cols-2 gap-4">
          {['Components', 'Tokens', 'Patterns', 'Icons'].map((label) => (
            <Card key={label} className="cursor-pointer hover:border-peach/40 transition-colors group">
              <CardContent>
                <p className="font-body text-sm font-medium text-ink-primary group-hover:text-peach transition-colors">
                  {label}
                </p>
                <p className="font-body text-xs text-ink-muted mt-1">Explore {label.toLowerCase()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ShowcaseSection>

      {/* Code */}
      <ShowcaseSection title="Usage">
        <CodeBlock code={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardContent>Body content here.</CardContent>
  <CardFooter>
    <Button variant="primary" size="sm">Action</Button>
  </CardFooter>
</Card>`} />
      </ShowcaseSection>
    </div>
  );
}
