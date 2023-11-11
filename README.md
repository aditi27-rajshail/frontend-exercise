# Frontend Excerise

This project is a React application built with TypeScript. It transforms the provided Figma mockup into interactive, responsive, and modular React components.

## Getting Started

### Prerequisites

[Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/<aditi27-rajshail>/frontend-exercise.git
   ```

2. Navigate into the project directory:

   ```
   cd frontend-exercise
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

4. Run the application:
   ```
   npm run dev
   ```

## Runing Tests

```
npm run test
```

## Check Tests Coverage

```
npm run coverage
```

## Technology Stack

- [React](https://reactjs.org/) - The web framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe Javascript extension
- [Vite](https://vitejs.dev/) - Frontend build tool that significantly improves the frontend development experience
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Phosphor Icons](https://phosphoricons.com/) - Icons library
- [Vitest](https://vitest.dev/), [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/) - Dev dependencies for Testing Utilities

## Features

- Matches with the figma mock provided.
- Reusable component architecture with extensible design.
- Responsive design optimized for mobile and desktop viewing.
- Clear separation of logic and presentation layers.
- Well-organized folder structure with descriptive commenting.
- Static data maintained in constants
- Adherence to ARIA standards and web accessibility [Lighthouse Snapshot Audit Report](https://github.com/aditi27-rajshail/frontend-exercise/blob/Lighthouse-AuditReport.pdf)

## Bonus Points Accheived

- Smooth CSS transitions for button interactions and hover effects for imporoved user experience
- Comprehensive unit test coverage with Vitest, achieving 98% coverage.

## Project Structure

Below is an overview of the project's file structure, highlighting the organization of key directories and files:

```
[src]
    ├── App.css                 # Global css classes
    ├── App.tsx                 # Main application component.
    ├── [assets]                # Static files for icons
    ├── [components]            # Reusable UI components.
        ├── [Accordion]
            ├── Accordion.tsx
            └── AccordionDetails.tsx
        ├── Alert.tsx
        ├── AsideContainer.tsx
        ├── Button.tsx
        └── ProgressBar.tsx
    ├── [constants]              # Static data and for test mockup
        └── index.ts
    ├── [logic]                  # Business logic and other actions
        └── actionBtnHandlers.ts # Logic for Button clicks of Accordion Details
    ├── main.tsx
    ├── [pages]
        └── Home.tsx             # Main navigation page
    ├── types.ts                 # Global TypeScript type definitions.
    └── [__tests__]              # Unit Tests and snapshot
        ├── Accordion.test.tsx
        ├── AccordionDetails.test.tsx
        ├── App.test.tsx
        ├── AsideContainer.test.tsx
        ├── Home.test.tsx
        └── [__snapshots__]
            ├── Accordion.test.tsx.snap
            ├── AccordionDetails.test.tsx.snap
            └── AsideContainer.test.tsx.snap
tailwind.config.js               # Tailwind CSS configuration

```

## Assumptions

- The code is written from the design perspective; logic may vary with actual requirements or API integration.
- Mobile-first responsive layout, with the aside section positioned below the main content on mobile devices.
- Phosphor icons were manually downloaded and used as assets were not provided in the Figma file.

## Acknowledgement

- Credit goes to the original design provided in the Figma mockup.
