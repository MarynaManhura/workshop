# AGENTS.md

## Pre-Work Checklist
- Confirm Figma MCP is connected and up to date
- Review accessibility requirements and target WCAG level
- Align on Next.js version and project structure
- Define tone of voice and content principles
- Establish LLM usage boundaries and validation steps

---

## Figma MCP Connection & Source of Truth
- Figma MCP is the **single source of truth** for all design decisions
- All layout, spacing, color, typography, and component states must be derived from Figma MCP
- No “design by code” without corresponding Figma references
- Any design change must be updated in Figma MCP before implementation
- Developers should reference component names and variants exactly as defined in Figma
  - Example:
    - `Button / Primary / Hover`
    - `Card / Default / Mobile`
- Screenshots or local design edits are not acceptable substitutes for MCP data

---

## Accessibility Standards
- Target **WCAG 2.1 AA** compliance at minimum
- Ensure semantic HTML usage (nav, main, section, article, footer)
- All interactive elements must be keyboard-accessible
- Maintain sufficient color contrast (minimum 4.5:1 for body text)
- Use proper ARIA roles only when native semantics are insufficient
- Provide accessible names for all inputs, buttons, and controls
- Support reduced motion preferences
  - Example:
    - Respect `prefers-reduced-motion` in animations
- Test accessibility during development, not post-hoc

---

## Code Rules (Next.js)
- Use the App Router (`/app`) structure
- Prefer Server Components by default; use Client Components only when required
- Keep components small, composable, and single-responsibility
- Use TypeScript strictly (no `any`)
- Follow consistent file and folder naming conventions
- Avoid inline styles; use design-system-aligned styling
- Optimize for performance:
  - Image optimization via `next/image`
  - Lazy loading where appropriate
- Keep logic separate from presentation when possible
- Ensure all routes, metadata, and SEO tags are explicitly defined

---

## Tone of Voice Guidelines
- Clear, concise, and confident
- Neutral and professional with subtle warmth
- Avoid marketing jargon or exaggerated claims
- Prefer plain language over buzzwords
- Write for designers and builders, not end-users
- Be instructional, not prescriptive
  - Example:
    - “Use this component when…” instead of “You must…”

---

## LLM Checklist
- Always reference Figma MCP before generating UI-related code
- Do not invent components, styles, or layouts not present in Figma MCP
- Validate accessibility requirements in generated output
- Follow Next.js and TypeScript rules strictly
- Avoid assumptions; ask for clarification when context is missing
- Generate code that is readable, maintainable, and documented
- Review output for:
  - Accessibility
  - Consistency with design system
  - Performance implications
- Clearly state uncertainties or missing information

---

## Notes on Ambiguities or Conflicts
- If Figma MCP and existing code conflict, **Figma MCP wins**
- If accessibility requirements conflict with design aesthetics, **accessibility wins**
- If LLM-generated suggestions conflict with documented rules, **this document wins**
- Any unresolved ambiguity should be documented and escalated before implementation
- Temporary deviations must be explicitly noted and revisited

---