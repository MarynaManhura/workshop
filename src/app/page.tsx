import Link from 'next/link';
import { ArrowRight, Layers, Palette, Type, Zap } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Design Tokens',
    description: 'Consistent color scales, typography, and spacing across all components.',
  },
  {
    icon: Layers,
    title: 'Component Library',
    description: 'Atomic, composable components built with accessibility in mind.',
  },
  {
    icon: Type,
    title: 'Typography System',
    description: 'Three-font system: Space Grotesk, Inter, and JetBrains Mono.',
  },
  {
    icon: Zap,
    title: 'Dark-first',
    description: 'Engineered for dark interfaces with a precise surface and ink token scale.',
  },
];

const components = [
  { label: 'Button', href: '/components/button', desc: 'Actions and triggers' },
  { label: 'Input', href: '/components/input', desc: 'Form fields' },
  { label: 'Badge', href: '/components/badge', desc: 'Labels and tags' },
  { label: 'Card', href: '/components/card', desc: 'Content containers' },
  { label: 'Alert', href: '/components/alert', desc: 'Feedback messages' },
  { label: 'Avatar', href: '/components/avatar', desc: 'User representation' },
  { label: 'Toggle', href: '/components/toggle', desc: 'Boolean controls' },
];

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      {/* Hero */}
      <div className="mb-16">
        <p className="font-mono text-xs text-peach mb-4 tracking-wider uppercase">
          Design System
        </p>
        <h1 className="font-display text-4xl font-medium text-ink-primary tracking-tight mb-4">
          Workshop DS
        </h1>
        <p className="font-body text-base text-ink-secondary max-w-xl leading-relaxed">
          A component reference built with Next.js, Tailwind CSS, and TypeScript.
          Clean, intentional, engineered for dark interfaces.
        </p>
      </div>

      {/* Token swatches */}
      <div className="mb-16">
        <h2 className="font-display text-sm font-medium text-ink-muted uppercase tracking-wider mb-6">
          Color tokens
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { name: 'surface-base', hex: '#0a0a0b' },
            { name: 'surface-raised', hex: '#141416' },
            { name: 'surface-overlay', hex: '#1e1e22' },
            { name: 'surface-subtle', hex: '#1a1a1e' },
          ].map((s) => (
            <div key={s.name} className="flex flex-col gap-2">
              <div
                className="h-10 rounded border border-border"
                style={{ backgroundColor: s.hex }}
              />
              <p className="font-mono text-xs text-ink-muted">{s.name}</p>
              <p className="font-mono text-xs text-ink-muted/60">{s.hex}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mt-3">
          {[
            { name: 'peach', hex: '#FFB088' },
            { name: 'lavender', hex: '#B4A0E5' },
            { name: 'error', hex: '#EF4444' },
            { name: 'success', hex: '#22C55E' },
          ].map((s) => (
            <div key={s.name} className="flex flex-col gap-2">
              <div
                className="h-10 rounded border border-border"
                style={{ backgroundColor: s.hex }}
              />
              <p className="font-mono text-xs text-ink-muted">{s.name}</p>
              <p className="font-mono text-xs text-ink-muted/60">{s.hex}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="font-display text-sm font-medium text-ink-muted uppercase tracking-wider mb-6">
          Principles
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-surface-raised p-5"
              >
                <div className="w-8 h-8 rounded border border-peach/30 flex items-center justify-center text-peach mb-4">
                  <Icon size={16} />
                </div>
                <h3 className="font-display text-sm font-medium text-ink-primary mb-1.5 tracking-tight">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-ink-secondary leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Component index */}
      <div>
        <h2 className="font-display text-sm font-medium text-ink-muted uppercase tracking-wider mb-6">
          Components
        </h2>
        <div className="rounded-xl border border-border overflow-hidden">
          {components.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              className={`flex items-center justify-between px-5 py-4 transition-colors hover:bg-surface-subtle group ${
                i !== 0 ? 'border-t border-border' : ''
              }`}
            >
              <div>
                <p className="font-body text-sm font-medium text-ink-primary group-hover:text-peach transition-colors">
                  {c.label}
                </p>
                <p className="font-body text-xs text-ink-muted mt-0.5">{c.desc}</p>
              </div>
              <ArrowRight size={14} className="text-ink-muted group-hover:text-peach transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
