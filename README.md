# loginPage — React Login / Signup UI

A small React + Vite project demonstrating a simple Login and Signup UI with client-side routing and Tailwind CSS styling.

## Demo
- Routes: `/` (Login) and `/signup` (Signup).
- Responsive, modern UI using Tailwind utility classes.

## Features
- Clean Login and Signup forms with Tailwind styling
- Client-side routing using `react-router-dom`
- Minimal Vite setup for fast dev feedback

## Tech stack
- React
- Vite
- Tailwind CSS
- react-router-dom

## Project structure (important files)
- `src/main.jsx` — application entry, wraps app in `BrowserRouter`
- `src/App.jsx` — routes defined (`/` -> `Login`, `/signup` -> `Signup`)
- `src/Login.jsx` — login form UI
- `src/Signup.jsx` — signup form UI
- `src/index.css` — Tailwind import and global styles

## Setup & Run

Prerequisites: Node.js (16+) and npm/yarn.

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open the app at `http://localhost:5173` (Vite default) and navigate between Login and Signup.

Build for production:

```bash
npm run build
npm run preview
```

## Notes
- Tailwind is imported in `src/index.css` (`@import "tailwindcss"`). Make sure Tailwind is configured in the project (`tailwind.config.js` and PostCSS config) if you extend utilities.
- Forms are UI-only; no authentication logic or backend is included. Add form handlers and API integration as needed.

## Customize
- Change colors, spacing, and form layout by editing `src/Login.jsx` and `src/Signup.jsx`.
- Add client-side validation or connect to an auth API for a complete flow.

## Contributing
PRs and issues welcome — this is intended as a small starter UI.

## License
MIT

## Author
Your Name
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
