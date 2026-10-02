# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Setup

**Requirements:** Node `^20.19.0` or `>=22.12.0` (required by Vite 8).

**Install dependencies:**
```bash
npm install
```

**Start development server:**
```bash
npm run dev
```
Runs the Vite dev server with HMR on `http://localhost:5173`. It uses `--host`, so the server is also reachable from the local network. The translation extraction script runs automatically before starting.

**Build for production:**
```bash
npm run build
```
Creates optimized production build in `/dist`. Automatically runs translation extraction and SEO generation (`public/sitemap.xml`, `public/robots.txt`) first.

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
npm run build
npm run deploy
```
`deploy` only runs `firebase deploy`; it does **not** build. Always run `npm run build` first so `/dist` is up to date. The `firebase` command comes from the Firebase CLI (`firebase-tools`) installed globally on the machine — it is not a project dependency.

## Project Structure

- **`/src/views`** — Top-level page components (one per route). Most significant work happens here.
- **`/src/components`** — Reusable UI components and layout infrastructure:
  - `Header`, `Footer`, `Layout` — Main layout components
  - `layout/LangLayout` — Syncs the i18next language with the URL prefix (`/es`, `/en`)
  - `routing/LocalizedLink` — Link by logical route key instead of literal path
  - `News` — News listing; the detail page lives in `/src/views/NewsDetail` (book-style carousel in `components/BookCarousel.jsx`, built with `framer-motion`)
  - `modal`, `carousel`, `motion` — UI utilities with animations
  - `i18n` — i18next configuration and setup
  - `ContextData` (statistics section with animated counters), `writeEffect` (typewriter effects)
  - `seo/SeoHead` — Per-page `<head>` tags via `react-helmet-async`
- **`/src/routes`** — Route configuration (see Routing)
- **`/src/hooks`** — Custom React hooks (`useRoute`, `useImageByLanguage`)
- **`/src/locales`** — Source translation JSON files (Spanish and English)
- **`/public/locales`** — Generated translation files (committed to the repo)
- **`/src/assets`** — Images, custom fonts (impact, renogare, myriad-pro)
- **`/scripts`** — Build-time Node scripts: `mergeTranslations.cjs`, `generateSEO.js`

## Internationalization (i18n)

The app uses **i18next** with lazy-loaded JSON translation files. Configuration: `/src/components/i18n/i18n.js`.

**Supported languages:** Spanish (es, default) and English (en). The URL is the source of truth: language detection order is path (`/es/...`, `/en/...`) → localStorage → querystring → cookie. localStorage is only used to decide where `/` redirects.

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

**Tailwind CSS** (v3) is the primary styling framework. Extended theme: `/tailwind.config.js` (project root of `client/`).

**Custom color palette:**
- Base: `blue-base` (#32526E), `dark-blue` (#222D56), `primary-yellow` (#FFBA08), `dark-yellow` (#FAA307), `primary-purple` (#7C76B5)
- Brand colors: `brand-blue`, `brand-red`, `brand-teal`, `brand-purple` (each with 50/100/200/300/400 variants)
- Special: `blue-links`, `btn-back`, `btn`

**Custom fonts:**
- `impact` — Used for large headings and titles
- `renogare`, `myriad-pro` — Additional fonts for specific contexts

**Custom animations** (defined in config):
- `scroll`, `fade-in`, `slide-up`, `coin-spin`
- `spin-slower` (25s animation)

**CSS files:** Individual components may have `.css` or `.module.css` files alongside their `.jsx` files. Prefer Tailwind utility classes; use CSS files only for complex layouts or keyframe animations.

**Arbitrary values must include units** (`mx-[700px]`, not `mx-[700]`). Vite 8 minifies CSS with Lightning CSS, which turns unitless lengths into `px`, so a typo that browsers used to ignore becomes a real style.

## Key Dependencies & Integrations

**UI & Animation:**
- `framer-motion` — Animations, transitions and the news book carousel
- `swiper` — Carousel/slider components (v14)
- `react-icons`, `@iconify/react`, `boxicons` — Icon libraries
- `@tsparticles/react`, `@tsparticles/slim`, `@tsparticles/engine` — Particle effects

**Routing & SEO:**
- `react-router-dom` (v7, declarative mode) — Client-side routing
- `react-helmet-async` — Per-page meta tags
- `sitemap` — Used by `scripts/generateSEO.js` at build time

**i18n:**
- `i18next`, `react-i18next`, `i18next-browser-languagedetector`, `i18next-http-backend`

**Payments:**
- Wompi — donation checkout widget loaded from `https://checkout.wompi.co/widget.js` in `DonationPay.jsx` (no npm package; public key in `.env`)

**Email:**
- `@emailjs/browser` — Contact and ProVocación forms send email via EmailJS (`emailjs.send(service, template, params, { publicKey })`)

**Firebase:**
- Firebase Hosting only. Deployment config: `/firebase.json`, `.firebaserc`. No Firebase SDK is installed.

**Environment:**
- `.env` file contains `VITE_WOMPI_PUBLIC_KEY` (Wompi payment provider key)
- Vite exposes vars prefixed with `VITE_` as `import.meta.env.VITE_*`

## Routing

Routes are generated in `/src/App.jsx` from two files in `/src/routes`:

- **`routes.config.js`** — Single source of truth: `LANGUAGES`, `DEFAULT_LANGUAGE` and `SLUGS_PAGES` (logical key → slug per language, e.g. `foundation: { es: "fundacion", en: "foundation" }`). Must stay free of JSX and Vite-specific imports because `scripts/generateSEO.js` reads it in plain Node.
- **`routes.pages.jsx`** — Maps each logical key to its page component (`PAGES`).
- **`routeHelpers.js`** — `buildPath(key, lang)`, `getPageFromURL(pathname)`, `getDefaultLanguage()`.

Behavior:
- `/` redirects to `/{lang}` using the language stored in localStorage (default `es`).
- Each language registers only its own slugs under `<LangLayout>`: `/es/fundacion` works, `/es/foundation` is a 404 (avoids duplicate content for search engines).
- Unknown paths render `NotFound`.
- Old URLs (`/News`, `/DonationPay`, `/fundacion`, …) are redirected with 301s in `firebase.json`.

Navigation in components:
- Links: `<LocalizedLink routeKey="foundation">` instead of `<Link to="/...">`
- Programmatic: `const { to, pathForLang } = useRoute();` then `navigate(to("newsDetail"), { state })`
- All paths are absolute (built by `buildPath`).

## Code Patterns

**Components:**
- Functional components with hooks preferred
- State: Use `useState` for local state; there is no global state/context provider
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
- No pre-commit hook runs the linter; run `npm run lint` manually before committing.

## Deployment

**Firebase Hosting:**
1. `npm run build` — outputs to `/dist`
2. `npm run deploy` — uploads `/dist` to Firebase Hosting (does not build)
- See `.firebaserc` for project ID and `firebase.json` for headers, 301 redirects and the SPA rewrite.

## Common Tasks

**Add a new page:**
1. Create component in `/src/views`
2. Add its slugs to `SLUGS_PAGES` in `/src/routes/routes.config.js` (one per language)
3. Map the key to the component in `PAGES` in `/src/routes/routes.pages.jsx`
4. Link to it with `<LocalizedLink routeKey="...">`; the sitemap picks it up automatically on the next build
5. Use `useTranslation()` for text, Tailwind for styling

**Add translations:**
1. Add keys to `/src/locales/es.json` and `/src/locales/en.json`
2. Use `t('path.to.key')` in components
3. Translation merging happens automatically on dev/build

**Integrate a new library:**
1. Add to `package.json` dependencies
2. Ensure it's compatible with React 18 and Vite 8
3. Run `npm audit` and remove the package if it ends up unused
4. Update any relevant config files (tailwind, vite, etc.)

**Fix linting errors:**
```bash
npm run lint
```
Errors must be fixed; warnings must not exceed zero. ESLint config: `.eslintrc.cjs`.
