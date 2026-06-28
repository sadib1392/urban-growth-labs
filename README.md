# Urban Growth Labs — Marketing Site

React + Vite implementation of the `Urban Growth Labs Site.dc.html` design handoff.
The brand design-system tokens are used verbatim, and each design-system primitive
(Button, Card, Stat, Meter, Badge, Tabs, Switch, fields) is a real React component, so
the site matches the tokens exactly.

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with the
GitHub Pages project base (`DEPLOY_BASE=/urban-growth-labs/`) and publishes to
GitHub Pages. The Vite `base` and the router `basename` both read this base, so
the same source also runs at a domain root (set `DEPLOY_BASE=/` or leave it unset)
for a custom-domain deploy.

## Structure

```
.
├── index.html                  # Vite entry
├── vite.config.js
├── public/assets/              # flask icon mark + logo lockups (from the handoff)
└── src/
    ├── main.jsx                # mounts <App/>, imports tokens + styles
    ├── App.jsx                 # layout + react-router routes + scroll restoration
    ├── data.js                 # site content (services, cases, tiers, etc.)
    ├── styles/
    │   ├── tokens/             # brand tokens, copied verbatim from the handoff
    │   │   ├── fonts.css colors.css typography.css spacing.css effects.css base.css
    │   └── styles.css          # component + page + responsive styles
    ├── components/
    │   ├── primitives.jsx      # Button, Card, Stat, Meter, Badge, Tabs, Switch, Field, Select, Textarea
    │   ├── Header.jsx Footer.jsx
    │   ├── Marquee.jsx         # infinite tagline band
    │   └── shared.jsx          # Eyebrow, CaseCard
    ├── effects/                # interaction layer (see below)
    │   ├── env.js              # reduced-motion / pointer capability checks
    │   ├── lenis.js            # smooth scroll singleton
    │   ├── CustomCursor.jsx    # neon dot + trailing ring
    │   ├── useInteractions.js  # reveal + count-up + meter-fill + magnetic + tilt (route-scoped)
    │   └── scramble.js         # hover text-decode for nav links
    └── pages/
        └── Home / Services / Work / Pricing / About / Contact .jsx
```

## Interaction layer

Motion cues borrowed from kudos / trionn / iper / obys / 2xa, mapped onto the brand:

| Effect | Where | Source |
|---|---|---|
| Custom neon cursor (dot + lerping ring, swells on hover) | global | trionn / obys |
| Smooth inertia scroll (Lenis) | global | 2xa / all |
| Route wipe transition | on navigation | trionn / obys |
| Scroll-reveal (staggered rise) | sections & cards | 2xa / kudos |
| Count-up stats + meter fill on reveal | Stat / Meter | kudos |
| Magnetic buttons | all `.btn` | kudos |
| 3D pointer tilt | hero dashboard card | trionn / obys |
| Text scramble on hover | nav links | obys experiment |
| Infinite tagline marquee | above footer | iper / kudos |

Everything is gated behind `prefers-reduced-motion` and pointer capability: on a
reduced-motion device the cursor, smooth scroll, tilt, magnetic, scramble, marquee
animation and wipe all switch off, counters jump to their final value, and reveal
content shows at rest. The custom cursor only mounts on fine-pointer devices.

## Routes

`/` · `/services` · `/work` · `/pricing` · `/about` · `/contact`
(unknown paths redirect to `/`).

- **Home** — split hero with live-growth dashboard card, stat trust band, services,
  A-to-Z pipeline, featured work, pricing teaser, closing CTA.
- **Work** — featured case + tab filter (All / Food & bev / Storefront / Salons).
- **Pricing** — Standard ↔ Community-rate toggle (swaps all tier prices) + comparison table.
- **Contact** — validated consult form with a success state.

## Notes

- Uses `BrowserRouter` for clean URLs. For static hosting, add a catch-all rewrite to
  `index.html` (e.g. a Netlify `_redirects` with `/* /index.html 200`, or the Vercel SPA
  fallback) so deep links resolve.
- Fonts (Montserrat + Inter) load from Google Fonts via `src/styles/tokens/fonts.css` —
  the brand's real faces. Swap for self-hosted `.woff2` to make it offline-safe.
- Honors `prefers-reduced-motion`; mobile nav + responsive grids added for real-device use.
- The contact form is front-end only — wire `submit()` in `src/pages/Contact.jsx` to your
  backend / form service to actually deliver leads.
