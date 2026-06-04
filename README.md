# Bespoke Guest Experience Protocol — Kandersteg

An over-engineered, ultra-minimalist concierge logistics dashboard for a luxury
alpine getaway in **Kandersteg, Switzerland**. Pristine dark mode, champagne
accents, editorial serif typography, and four interactive modules.

> Built as a single-page React application with Vite, Tailwind CSS, and Recharts.

## Modules

1. **The Convergence Timeline** — strict inbound (Friday) / outbound (Sunday) rail
   transit logistics, plus a live countdown to the initial 06:34 CET departure
   (timezone-accurate, self-correcting across DST).
2. **Live Atmospheric Telemetry** — mocked metric weather feed with a glowing
   "Conditions Optimal" status indicator.
3. **Interactive Topographical Itinerary** — a smooth champagne elevation wave for
   the Saturday *Heuberg Signature Excursion*, with a hover tooltip and a labelled
   *Peak Viewing Plateau*.
4. **The Curated Gastronomic Program** — a Michelin-grade provisioning manifest of
   heritage alpine indulgences.

## Tech

- [Vite](https://vitejs.dev) + [React 18](https://react.dev)
- [Tailwind CSS v3](https://tailwindcss.com)
- [Recharts](https://recharts.org)
- Fonts: Playfair Display + Cormorant Garamond (serif) / Jost (geometric sans)

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deployment

The Vite `base` is set to `./` (relative asset paths), so the production build in
`dist/` deploys **without modification** to both:

- **Vercel** — auto-detected as a Vite project (`vercel.json` included). Build
  command `npm run build`, output directory `dist`.
- **GitHub Pages** — push the contents of `dist/` to your `gh-pages` branch (or
  use an action). Relative paths mean it works from a project subpath too.

## Notes

All content is static mock data living in `src/data/protocol.js`. No network calls,
no API keys, no backend — fully self-contained.
