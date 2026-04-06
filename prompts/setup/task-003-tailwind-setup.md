# Task 003: Tailwind CSS Setup for Frontend

This task details the integration and configuration of Tailwind CSS into the Nexora frontend project (Vite, React, TypeScript). This will enable rapid, utility-first UI development aligned with our design principles.

---

## Instructions

1.  **Install Tailwind CSS and Peer Dependencies:**
    *   Navigate to the `frontend/app/` directory: `cd frontend/app`
    *   Install Tailwind CSS, PostCSS, and Autoprefixer:
        ```bash
        npm install -D tailwindcss postcss autoprefixer
        ```

2.  **Initialize Tailwind CSS Configuration:**
    *   Generate the `tailwind.config.cjs` and `postcss.config.cjs` files:
        ```bash
        npx tailwindcss init -p
        ```

3.  **Configure `tailwind.config.cjs`:**
    *   Open `tailwind.config.cjs` and update the `content` section to include all your React component files (e.g., `.html`, `.js`, `.jsx`, `.ts`, `.tsx`). This tells Tailwind where to scan for classes.
        ```javascript
        // tailwind.config.cjs
        module.exports = {
          content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
            extend: {
              // Custom colors (soft, healthcare-friendly)
              colors: {
                primary: '#4CAF50', // Example: a calming green
                secondary: '#B2DFDB', // Example: a subtle blue-green
                neutral: '#F5F5F5', // Example: a light grey
                accent: '#FFC107', // Example: a soft yellow for highlights
                // ... add more custom colors as per docs/design/color-palette.md
              },
              // Custom typography, spacing, etc. can be extended here
            },
          },
          plugins: [],
        }
        ```
    *   **Action Required:** Populate the `theme.extend.colors` section with the specific color palette decisions from `docs/design/color-palette.md` (which you'll fill in next, or have done conceptually).

4.  **Add Tailwind Directives to CSS:**
    *   Create a new CSS file (e.g., `src/styles/tailwind.css` or `src/index.css` if you prefer).
    *   Add the `@tailwind` directives to this file:
        ```css
        /* src/styles/tailwind.css */
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
    *   Ensure this CSS file is imported into your `src/main.tsx` (or `src/App.tsx`).
        ```typescript
        // src/main.tsx
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './App.tsx';
        import './styles/tailwind.css'; // Import your Tailwind CSS file
        // ...
        ```

5.  **Initial Git Commit:**
    *   After successful setup, commit the changes: `git add . && git commit -m "feat(frontend): Integrate Tailwind CSS"`

---

## Verification

*   Run `npm run dev` in `frontend/app/`.
*   Add a simple component (e.g., a `div` with `className="text-red-500 p-4"`) in `App.tsx` and verify that Tailwind classes are applied correctly in the browser.
*   Ensure that the custom colors defined in `tailwind.config.cjs` are available and working.

---

This task provides the frontend with a powerful and flexible styling system for building UI components quickly and consistently.
