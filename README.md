# soumyo-website

Personal site built with **Vite + React + TypeScript + Tailwind**.

## Architecture (single source of truth)
- **App entry**: `src/main.tsx` → `src/App.tsx`
- **Routing**: `react-router-dom` (SPA)
- **Styling**: Tailwind (`src/index.css`, `tailwind.config.js`)
- **Content**: Static data in `src/data/*`

This repo intentionally has **no CMS** and no backend API. Deployment is a static SPA.

## Development
```bash
npm install
npm run dev
```

## Production build / preview
```bash
npm run build
npm run preview
```

## Deployment
Configured for Vercel static hosting via `vercel.json` (SPA rewrite to `index.html`).


