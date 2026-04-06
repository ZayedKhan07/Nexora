# Task 002: Frontend Project Setup (Vite, React, TypeScript)

This task outlines the initial setup of the Nexora frontend application using Vite, React, and TypeScript. The goal is to create a clean, configured project boilerplate ready for component development.

---

## Instructions

1.  **Initialize New Project:**
    *   Navigate to the `frontend/app/` directory: `cd frontend/app`
    *   Run the Vite initialization command to create a new React (TypeScript) project:
        ```bash
        npm create vite@latest . -- --template react-ts
        ```
        (Note: the `.` indicates to create the project in the current directory, `frontend/app/`)

2.  **Install Dependencies:**
    *   Install core project dependencies:
        ```bash
        npm install
        ```
    *   Install React Router DOM for routing:
        ```bash
        npm install react-router-dom@6
        npm install -D @types/react-router-dom@6
        ```
    *   Install Zustand for state management:
        ```bash
        npm install zustand
        ```
    *   Install essential development dependencies for linting and formatting:
        ```bash
        npm install -D eslint prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-react-hooks
        ```

3.  **Configure ESLint and Prettier:**
    *   Create an `.eslintrc.cjs` file in `frontend/app/` and configure it for React, TypeScript, and Prettier integration.
    *   Create a `.prettierrc.cjs` file in `frontend/app/` for consistent code formatting.
    *   Add lint and format scripts to `package.json`.

4.  **Update `tsconfig.json`:**
    *   Review and adjust `tsconfig.json` for any specific project needs, ensuring `paths` are configured if necessary for absolute imports (e.g., `@/components`).

5.  **Clean Up Boilerplate:**
    *   Remove Vite's default `src/App.css` and `src/index.css` (we'll use Tailwind).
    *   Remove `src/assets/react.svg` and `src/assets/typescript.svg`.
    *   Modify `src/App.tsx` and `src/main.tsx` to reflect a minimal starting point without Vite's default content.
    *   Update `public/vite.svg` if desired, or remove it.

6.  **Create Basic Project Structure:**
    *   Create the following empty directories inside `src/`:
        ```
        src/
        ├── assets/
        ├── components/
        ├── layouts/
        ├── pages/
        ├── hooks/
        ├── services/
        ├── store/
        ├── types/
        ├── utils/
        └── styles/ # For global CSS, Tailwind directives
        ```

7.  **Initial Git Commit:**
    *   After successful setup, commit the changes: `git add . && git commit -m "feat(frontend): Initialize Vite React TypeScript project"`

---

## Verification

*   Run `npm run dev` in `frontend/app/` to ensure the development server starts without errors.
*   Run `npm run lint` and `npm run format` (after adding scripts) to verify linting and formatting work.

---

This task establishes the essential development environment for the Nexora frontend.
