You are an expert developer working on a Next.js 14+ project with TypeScript and Tailwind CSS. This project follows a strict design-first workflow where Figma is the single source of truth.

Project Structure:
- app/ for Next.js App Router pages
- components/layout/ for structural components (Header, Footer, Container)
- components/sections/ for page sections (Hero, Features, CTA)
- components/ui/ for reusable UI components (Button, Input, Card)
- lib/ for utilities, constants, and types
- public/ for static assets

Component Rules:
Always create components with TypeScript interfaces for props.
Use function components with explicit return types.
Export components as default exports.
Name files in PascalCase for components, camelCase for utilities.
Keep components small and focused on a single responsibility.
Document components with JSDoc comments referencing Figma frames.

Styling Rules:
Use only Tailwind utility classes for styling.
Never use inline styles or arbitrary values.
Follow mobile-first responsive design.
Start with mobile styles, then add md: and lg: breakpoints.
Use design tokens from Figma mapped to CSS variables.
Maintain consistent spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64.
Use the cn() utility for conditional classes.

Figma Integration:
Always check Figma before implementing any UI.
Copy exact values for spacing, typography, and colors from Figma.
Use Figma Dev Mode for accurate specifications.
Document Figma frame names in component comments.
Export images at 2x for retina displays.
Name components in code exactly as they appear in Figma.

TypeScript Requirements:
Never use the 'any' type.
Define explicit interfaces for all component props.
Use proper return types for all functions.
Mark optional props with the ? operator.
Create reusable type utilities in lib/types.
Enable strict mode in tsconfig.json.

Performance Guidelines:
Always use Next.js Image component for images.
Implement lazy loading for below-fold content.
Use dynamic imports for heavy components.
Keep initial bundle size under 200KB.
Add priority prop to above-fold images.
Use proper font loading with next/font.

Code Quality Standards:
No console.log statements in production code.
Handle all error cases gracefully.
Add accessibility attributes (ARIA labels, roles).
Use semantic HTML elements.
Follow proper heading hierarchy.
Ensure keyboard navigation works.

Data Management:
Keep static data in lib/constants as const assertions.
Use React Hook Form for form handling.
Validate forms with Zod schemas.
Store form configurations in lib/forms.

Git Workflow:
Use conventional commit messages (feat:, fix:, docs:, style:, refactor:).
Create feature branches with descriptive names.
Keep pull requests focused and small.
Include screenshots for UI changes.

Testing Priorities:
Test critical user paths first.
Focus on reusable UI components.
Cover complex business logic.
Include edge cases and error states.

When Creating Components:
1. Ask for the Figma design reference
2. Check if similar components exist
3. Follow the component hierarchy
4. Include all responsive breakpoints
5. Add interactive states (hover, active, disabled)
6. Include proper TypeScript types
7. Add accessibility attributes
8. Document with comments

When Modifying Code:
1. Understand current implementation
2. Check Figma for design updates
3. Identify potential breaking changes
4. Maintain backward compatibility
5. Update documentation

DO NOT:
Use inline styles
Create arbitrary Tailwind values
Import CSS files except globals.css
Use console.log in production
Create components without TypeScript
Ignore Figma designs
Use deprecated Next.js patterns
Skip responsive testing
Use !important in CSS
Create deeply nested components

ALWAYS:
Check Figma first before implementing
Use TypeScript strictly
Follow mobile-first approach
Test on actual devices
Optimize all images
Use semantic HTML
Add ARIA labels
Comment complex logic
Keep components focused
Match Figma exactly

Remember: Figma is the source of truth. Every pixel matters. Performance impacts user experience. Accessibility is not optional.