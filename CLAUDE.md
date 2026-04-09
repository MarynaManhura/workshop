# Workshop Design System

> Read this entire file before writing any UI code.

---

## What this project is

A **design system and component library** showcase site.
This is a browsable reference where each component is displayed with all its variants, states, and usage examples.

Stack: **Next.js (App Router) + Tailwind CSS + TypeScript**.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              ← root layout, fonts, global providers
│   ├── page.tsx                ← design system home / index
│   └── components/
│       └── [slug]/page.tsx     ← individual component showcase pages
├── components/
│   ├── ui/                     ← atomic UI components (Button, Input)
│   ├── layout/                 ← layout primitives (Container, Header)
│   └── showcase/               ← showcase-specific wrappers & helpers
├── hooks/                      ← custom React hooks
├── lib/
│   ├── utils.ts                ← cn() and general helpers
│   └── constants.ts            ← shared constants & enums
├── styles/
│   └── globals.css             ← all CSS custom properties (tokens)
└── types/
    └── index.ts                ← shared TypeScript types & interfaces
```

---

## Showcase page conventions

- Every component has its own route: `/components/button`, `/components/input`.
- Each showcase page **must** include:
  - component name (h1)
  - short description (what it does, when to use)
  - all variants side-by-side
  - all interactive states (hover, focus, active, disabled)
  - a code snippet showing correct usage
- Use consistent layout: sidebar + content area
- All previews rendered on `surface-raised` backgrounds
- Group related variants under clear section titles

---

## Non-negotiable rules

### Colors

- NEVER use `#000`, `#fff`, or hardcoded hex values
- ALL colors come from tokens defined in `globals.css`
- When you need a new shade, create a token — never inline a hex

#### Surface scale (backgrounds)

| Token             | Value     | Usage                        |
|-------------------|-----------|------------------------------|
| `surface-base`    | `#0a0a0b` | Page background              |
| `surface-raised`  | `#141416` | Cards, inputs, elevated areas|
| `surface-overlay` | `#1e1e22` | Modals, dropdowns, popovers  |
| `surface-subtle`  | `#1a1a1e` | Hover states, skeleton loaders|

#### Text scale (ink)

| Token          | Value     | Usage                          |
|----------------|-----------|--------------------------------|
| `ink-primary`  | `#f0f0f2` | Headings, primary text         |
| `ink-secondary`| `#a1a1aa` | Body text, descriptions        |
| `ink-muted`    | `#63636e` | Placeholders, helper text, hints|

#### Border

| Token    | Value     | Usage                 |
|----------|-----------|-----------------------|
| `border` | `#27272a` | All borders & dividers|

---

### Accent system

Primary accent — **peach**:

```css
--color-peach: #FFB088;
--color-peach-dim: #F09868;
```

Secondary accent — **lavender**:

```css
--color-lavender: #B4A0E5;
--color-lavender-dim: #9B82D8;
```

Use `peach` for: primary actions, active states, focus rings, links.
Use `lavender` for: secondary highlights, alternative accents.

---

### Status colors

```css
--color-error: #EF4444;
--color-error-dim: #DC2626;
--color-success: #22C55E;
--color-success-dim: #16A34A;
--color-warning: #F59E0B;
--color-warning-dim: #D97706;
```

---

## Typography

### Fonts

| Token          | Font                | Usage                                 |
|----------------|---------------------|---------------------------------------|
| `font-display` | Space Grotesk       | Headings, section titles              |
| `font-body`    | Inter                | Body text, UI labels                  |
| `font-mono`    | JetBrains Mono       | Code, technical labels                |

### Font loading (layout.tsx)

```tsx
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
```

### Rules

- Headings → `font-display tracking-tight`
- Body/UI → `font-body`
- Code → `font-mono`

### Restrictions

- Never use display font in body text
- Never use bold in body paragraphs (use font-medium max)

---

## Components — General rules

- Always use `cn()` from `lib/utils.ts` — never string concatenation
- No external UI libraries (no shadcn, no Radix, no Headless UI)
- Icons: **Lucide React** only
- All interactive components must support `disabled` state
- All form components must support `error` state
- Use `forwardRef` for components that need refs

---

## Component patterns

### Button

**Style: stroke/outline only — never filled.**

Two sizes: `sm` and `md`. No large size.
Three variants: `primary`, `secondary`, `ghost`.

```tsx
// Primary — peach stroke
<button className={cn(
  "inline-flex items-center justify-center gap-2",
  "font-body font-medium text-sm rounded",
  "border-[1.5px] border-peach text-peach bg-transparent",
  "hover:bg-peach/10 hover:border-peach-dim",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base",
  "disabled:opacity-35 disabled:cursor-not-allowed",
  "transition-colors",
  // md (default)
  "px-5 py-2.5",
)}>

// Secondary — neutral stroke
<button className={cn(
  "inline-flex items-center justify-center gap-2",
  "font-body font-medium text-sm rounded",
  "border-[1.5px] border-border text-ink-secondary bg-transparent",
  "hover:border-ink-muted hover:text-ink-primary",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base",
  "disabled:opacity-35 disabled:cursor-not-allowed",
  "transition-colors",
  "px-5 py-2.5",
)}>

// Ghost — no border
<button className={cn(
  "inline-flex items-center justify-center gap-2",
  "font-body text-sm rounded",
  "border-[1.5px] border-transparent text-ink-muted bg-transparent",
  "hover:text-ink-primary hover:border-border",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base",
  "disabled:opacity-35 disabled:cursor-not-allowed",
  "transition-colors",
  "px-5 py-2.5",
)}>
```

Size modifiers:

```tsx
// sm
"text-xs px-3 py-1.5"
// md (default)
"text-sm px-5 py-2.5"
```

**Critical**: buttons are NEVER filled with color. Always transparent background with stroke border.

---

### Input

```tsx
<input className={cn(
  "w-full bg-surface-raised border border-border rounded",
  "text-ink-primary font-body text-sm px-3 py-2",
  "placeholder:text-ink-muted",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base",
  "disabled:opacity-40 disabled:cursor-not-allowed",
)} />
```

Input with label, helper text, and error state:

```tsx
<div className="w-full">
  <label className="block text-sm font-body font-medium text-ink-primary mb-1.5">
    Label
  </label>
  <input className={cn(
    "w-full bg-surface-raised border rounded",
    "text-ink-primary font-body text-sm px-3 py-2",
    "placeholder:text-ink-muted",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base",
    "disabled:opacity-40 disabled:cursor-not-allowed",
    error ? "border-error" : "border-border",
  )} />
  {error && <p className="text-xs text-error mt-1.5">{errorMessage}</p>}
  {!error && helperText && <p className="text-xs text-ink-muted mt-1.5">{helperText}</p>}
</div>
```

---

## Forms

### Base input styles

```
bg-surface-raised border border-border rounded text-ink-primary font-body text-sm
```

### Focus ring (all form elements)

```
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-peach
focus-visible:ring-offset-2
focus-visible:ring-offset-surface-base
```

### Error state

- `border-error` instead of `border-border`
- `text-error` for error message
- Error message: `text-xs text-error mt-1.5`

### Disabled state

```
opacity-40 cursor-not-allowed
```

### Labels

```
text-sm font-body font-medium text-ink-primary mb-1.5
```

### Helper text

```
text-xs font-body text-ink-muted mt-1.5
```

---

## Borders & Radius

| Element           | Radius              |
|-------------------|---------------------|
| Inputs, buttons   | `rounded` (6px)     |
| Cards             | `rounded-xl` (16px) |
| Dropdowns         | `rounded-lg` (8px)  |

- Default border: `border-border` (1px)
- Button border: `border-[1.5px]`
- Use `shadow-lg shadow-black/40` for floating elements

---

## Spacing scale

| Token  | Size  | Usage                          |
|--------|-------|--------------------------------|
| `gap-1`  | 4px   | Inline icon + text             |
| `gap-2`  | 8px   | Tight groups                   |
| `gap-3`  | 12px  | Form fields, button groups     |
| `gap-6`  | 24px  | Section elements               |
| `gap-8`  | 32px  | Major sections                 |
| `py-16`  | 64px  | Section padding (mobile)       |
| `py-24`  | 96px  | Section padding (desktop)      |

---

## Accessibility

- All interactive elements must have visible focus rings (peach ring)
- Use semantic HTML: `<button>` for actions, `<a>` for navigation
- Form inputs need associated `<label>` elements
- Minimum touch target: 36×36px for interactive elements

---

## File naming conventions

- Components: `PascalCase.tsx` — `Button.tsx`, `Input.tsx`
- Hooks: `camelCase.ts` with `use` prefix
- Utils: `camelCase.ts` — `utils.ts`
- Types: `PascalCase` exports — `ButtonProps`, `InputProps`
- Showcase pages: `kebab-case` route — `/components/button`, `/components/input`

---

## Design philosophy

- Use **spacing** for structure
- Use **color** for hierarchy
- Avoid decoration

The system must feel: **clean, intentional, engineered, modern.**
