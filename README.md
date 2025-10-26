# Next.js Counter App

A simple, responsive, and accessible counter component built with Next.js (App Router). Features increment, decrement (with zero floor), and reset buttons with icons and tooltips. Styled with Tailwind CSS for a clean, lightweight UI with glassmorphism effects.

## Features
- **Core Functionality**: Increment/decrement count (never below 0), reset to initial value.
- **UI/UX**: Icon-based buttons (Plus, Minus, Reset), native tooltips, hover effects/gradients, and keyboard accessibility (Enter/Space).
- **Responsive**: Mobile-first—buttons stack on small screens, scales fonts and padding.
- **Lightweight**: Minimal dependencies; uses Tailwind for utilities.
- **Accessible**: ARIA labels, focus rings, semantic HTML.
- **E2E Testing**: Cypress-ready for button interactions, tooltips, and responsiveness.

## Tech Stack
- Next.js (14+ with App Router)
- TypeScript
- Tailwind CSS
- Cypress (for E2E tests)
- React (18+)

## Installation
1. Create the project:
   ```
   npx create-next-app@latest counter-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
   cd counter-app
   ```

2. Install additional dependencies:
   ```
   npm install clsx tailwind-merge  # For cn utility
   npm install --save-dev cypress   # For E2E tests
   ```

3. Add scripts to `package.json` (under `"scripts"`):
   ```json
   {
     "cypress": "cypress open",
     "cypress:run": "cypress run"
   }
   ```

4. Replace/add files:
   - `src/app/layout.tsx` (root layout with gradient bg)
   - `src/app/page.tsx` (renders Counter)
   - `src/app/globals.css` (Tailwind imports)
   - `src/components/ui/Button.tsx` (shared button primitive)
   - `src/components/ui/icons/PlusIcon.tsx`, `MinusIcon.tsx`, `ResetIcon.tsx` (icon components)
   - `src/components/Counter/Counter.tsx` (main component)
   - `src/lib/utils.ts` (cn function)
   - `src/types/index.ts` (CounterProps)
   - `tailwind.config.ts` (extend colors for variants)
   - `cypress.config.ts` (Cypress config at root)
   - `cypress/support/commands.ts` (custom commands)
   - `cypress/e2e/counter.cy.ts` (E2E tests)

5. Start the dev server:
   ```
   npm run dev
   ```
   - Opens at `http://localhost:3000`.

6. Run tests (optional):
   ```
   npm run cypress  # Opens Cypress GUI
   # Or: npm run cypress:run  # Headless
   ```

7. Build for production:
   ```
   npm run build
   npm run start
   ```

## Usage
- The counter is rendered on the home page by default.
- Props for `<Counter>`:
  - `initialCount` (number, default: 0): Starting value.

Example (in `src/app/page.tsx`):
```tsx
import Counter from '@/components/Counter/Counter';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Next.js Counter</h1>
      <Counter initialCount={0} />
    </main>
  );
}
```

## Project Structure
```
counter-app/
├── cypress/                 # E2E tests
│   ├── config.ts            # Cypress config
│   ├── support/commands.ts  # Custom Cypress commands
│   └── e2e/counter.cy.ts    # Test specs
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Tailwind globals
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── ui/              # UI primitives
│   │   │   ├── Button.tsx   # Shared button
│   │   │   └── icons/       # Icon components (PlusIcon.tsx, etc.)
│   │   └── Counter/         # Feature component
│   │       └── Counter.tsx  # Main counter
│   ├── lib/utils.ts         # cn utility
│   └── types/index.ts       # TypeScript types
├── tailwind.config.ts       # Tailwind config (colors)
├── tsconfig.json            # TypeScript config
└── package.json
```

## Customization
- **Icons**: Edit SVGs in `src/components/ui/icons/`.
- **Styles**: Update Tailwind classes in `Counter.tsx` or extend `tailwind.config.ts` for colors.
- **Add Text to Buttons**: Pass `children` to `<Button>` (hidden on mobile via `sr-only`).
- **Testing**: Extend `counter.cy.ts` for new features.

## Development
- Hot-reload enabled—edit and see changes live.
- ESLint & Prettier: Run `npm run lint` for checks.
- TypeScript: Strict mode enabled for type safety.

## License
MIT License—feel free to use, modify, and distribute.
