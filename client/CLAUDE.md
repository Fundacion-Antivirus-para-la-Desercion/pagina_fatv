# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Setup

**Install dependencies:**
```bash
npm install
```

**Start development server:**
```bash
npm run dev
```
Runs the Vite dev server with HMR on `http://localhost:5173`. The translation extraction script runs automatically before starting.

**Build for production:**
```bash
npm run build
```
Creates optimized production build in `/dist`. Automatically runs translation extraction.

**Lint code:**
```bash
npm run lint
```
Runs ESLint with zero-warnings policy on all `.js` and `.jsx` files.

**Preview production build locally:**
```bash
npm run preview
```

**Deploy to Firebase:**
```bash
npm run deploy
```
Deploys the `/dist` directory to Firebase Hosting.

## Project Structure

- **`/src/views`** — Top-level page components (one per route). Most significant work happens here.
- **`/src/components`** — Reusable UI components and layout infrastructure:
  - `Header`, `Footer`, `Layout` — Main layout components
  - `News`, `NewsDetail` — News functionality with page-flip component (`page-flip` library)
  - `modal`, `carousel`, `motion` — UI utilities with animations
  - `i18n` — i18next configuration and setup
  - `ContextData`, `writeEffect` — Page sections with animations/counters
- **`/src/Services`** — Route components for service pages (ApoyoAcademico, Repositorio, etc.)
- **`/src/projects`** — Route components for project pages (Universidades, Bootcamps, etc.)
- **`/src/hooks`** — Custom React hooks
- **`/src/locales`** — Source translation JSON files (Spanish and English)
- **`/public/locales`** — Generated translation files (auto-generated, not committed)
- **`/src/assets`** — Images, custom fonts (impact, renogare, myriad-pro)

## Internationalization (i18n)

The app uses **i18next** with lazy-loaded JSON translation files. Configuration: `/src/components/i18n/i18n.js`.

**Supported languages:** Spanish (es, default) and English (en). Language detection uses localStorage → querystring → cookie.

**Translation workflow:**
1. Add/modify translation keys in `/src/locales/{lang}.json` (source of truth)
2. Generated translations live in `/public/locales/{lang}/translation.json`
3. Run `npm run extract-translations` to merge source files with generated ones — this script prefers source values, fills in missing keys from generated, and writes to public
4. Translation files are loaded lazily at runtime from `/public/locales/{{lng}}/{{ns}}.json`

**Usage in components:**
```jsx
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();
  return <h1>{t('home.title')}</h1>;
};
```

## Styling

**Tailwind CSS** is the primary styling framework. Extended theme: `/src/tailwindcss.config.js`.

**Custom color palette:**
- Base: `blue-base` (#32526E), `dark-blue` (#222D56), `primary-yellow` (#FFBA08), `dark-yellow` (#FAA307)
- Brand colors: `brand-blue`, `brand-red`, `brand-teal`, `brand-purple` (each with 50/100/200/300/400 variants)
- Special: `blue-links`, `btn-back`, `btn`

**Custom fonts:**
- `impact` — Used for large headings and titles
- `renogare`, `myriad-pro` — Additional fonts for specific contexts

**Custom animations** (defined in config):
- `scroll`, `fade-in`, `slide-up`, `coin-spin`
- `spin-slower` (25s animation)

**CSS files:** Individual components may have `.css` or `.module.css` files alongside their `.jsx` files. Prefer Tailwind utility classes; use CSS files only for complex layouts or keyframe animations.

## Key Dependencies & Integrations

**UI & Animation:**
- `framer-motion` — Advanced animations and transitions
- `page-flip` — Page-flipping effect used in NewsDetail component
- `react-slick`, `slick-carousel` — Carousel/slider components
- `swiper` — Alternative carousel library
- `react-player` — Video player component
- `react-icons` — Icon library
- `react-modal` — Modal dialogs
- `@tsparticles/react` — Particle effects

**Payments:**
- `@stripe/stripe-js`, `stripe` — Stripe payment integration (configured with public key in `.env`)

**Data & Communication:**
- `axios` — HTTP client
- `emailjs-com` — Email service integration

**Firebase:**
- `firebase` — Firebase SDK for hosting/backend services
- Deployment config: `/firebase.json`, `.firebaserc`

**Environment:**
- `.env` file contains `VITE_WOMPI_PUBLIC_KEY` (Wompi payment provider key)
- Vite exposes vars prefixed with `VITE_` as `import.meta.env.VITE_*`

## Routing

Routes defined in `/src/App.jsx` using react-router-dom. All routes are nested under a `<Layout>` component that provides Header/Footer.

Key routes:
- `/` — Home
- `/News` — News listing
- `/news/detail` — NewsDetail with page-flip
- `/DonationPay` — Donation payment
- `/social-intervention`, `/fundacion`, `/consultorias` — Organization pages
- `/ApoyoAcademico`, `/Repositorio`, `/AcompañamientoOrientacion` — Services
- Service routes commented out in App.jsx

## Code Patterns

**Components:**
- Functional components with hooks preferred
- State: Use `useState` for local state, context (via `ContextData.jsx`) for global state
- Side effects: `useEffect` for data fetching and DOM manipulation
- i18n: Always import and use `useTranslation` hook

**Naming:**
- Components: PascalCase (e.g., `NewsDetail.jsx`)
- Files: Match component name
- CSS classes: kebab-case (e.g., `.context-data-title`)

**Performance:**
- Use Tailwind utilities instead of writing CSS
- For animations, prefer `framer-motion` or Tailwind animation utilities
- Lazy load route components if not already imported at top level

**Testing:**
- No test framework currently configured. Linting via ESLint is the primary quality check.
- Pre-commit hook enforces zero-warnings lint policy.

## Deployment

**Firebase Hosting** via `npm run deploy`:
- Builds the app, outputs to `/dist`
- Deploys `/dist` to Firebase
- See `.firebaserc` for project ID

## Common Tasks

**Add a new page:**
1. Create component in `/src/views` or `/src/components`
2. Add route in `/src/App.jsx` nested under `<Layout>`
3. Use `useTranslation()` for text, Tailwind for styling

**Add translations:**
1. Add keys to `/src/locales/es.json` and `/src/locales/en.json`
2. Use `t('path.to.key')` in components
3. Translation merging happens automatically on dev/build

**Integrate a new library:**
1. Add to `package.json` dependencies
2. Ensure it's compatible with React 18 and Vite
3. Update any relevant config files (tailwind, vite, etc.)

**Fix linting errors:**
```bash
npm run lint
```
Errors must be fixed; warnings must not exceed zero. ESLint config: `.eslintrc.cjs`.
