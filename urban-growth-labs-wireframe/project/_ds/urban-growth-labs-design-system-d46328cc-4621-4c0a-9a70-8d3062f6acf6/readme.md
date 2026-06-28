# Urban Growth Labs — Design System

> **Growth isn't luck. It's a system.**
> Data. Strategy. Growth. Execution.

The brand toolkit for **Urban Growth Labs (UGL)** — a New York City–based, data-driven marketing agency that helps small and medium businesses (barbershops, restaurants, smoothie bars, coffee shops, salons) grow through research-led strategy and high-quality creative execution. The visual world blends a **city skyline**, a **lab flask**, and **live data** on a deep-night ground, signaling that growth here is *engineered, not left to chance*.

This project is a compiled design system. Consumers link one file (`styles.css`) for tokens + fonts and load `_ds_bundle.js` for the React components. The **Design System tab** renders every specimen and component card.

---

## Sources

These materials were provided and explored to build this system (stored under `_ref/` and `assets/`; reader may not have access):

- **`Urban Growth Labs/` codebase** (mounted, read-only) — brand package:
  - `brand/logo/` — vector + PNG logo lockups, icon mark, `build_logo.py`, palette README
  - `brand/urban-growth-labs-brand-standards-guideline-infographic.png` — the canonical brand standards board (10 sections: overview, pillars, mission, palette, type, voice, visual system, UI principles, logo direction, applications)
  - `brand/urban-growth-labs-mood-board.png` — mood board (illustration style, dashboard UI, applications)
  - `brand/ugl-brand-board-recreated.{svg,png,build.py}` — generated brand board
  - `Urban_Growth_Labs_Business_Plan.docx` — full business plan (extracted to `_ref/business-plan.txt`): mission, values, services, pricing tiers, the UGL method, brand identity section
- Reference images copied to `_ref/` and brand assets to `assets/`.

No font binaries shipped with the package — see **Typography** for the substitution note.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry (imports only). Link this.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css` · `base.css`

**Components** (`components/`, namespace `window.UrbanGrowthLabsDesignSystem_d46328`)
- `core/` — Button, Card, Badge, Stat, Input, Avatar, Logo
- `forms/` — Switch, Select
- `navigation/` — Tabs
- `data/` — Meter

**Specimen cards** (`guidelines/*.card.html`) — Colors, Type, Spacing, Brand groups in the Design System tab.

**UI kits** (`ui_kits/`)
- `marketing-site/` — agency marketing website (hero, services, work, pricing, consult)
- `dashboard/` — client growth dashboard (campaign performance, channels, reports)

**Slides** (`slides/`) — branded 16:9 deck templates (title, framework, big-stat, quote, closing).

**Assets** (`assets/`) — `logo/` lockups + icon mark, `brand/` boards.

**`SKILL.md`** — Agent-Skill manifest for downloadable use.

---

## Content fundamentals

How UGL writes. The brand is **professional but slightly laid-back, with a classic New York feel — cool, urban, experimental, scientific, and energetic.** Three words: **Insight. Experiment. Growth.**

**Voice pillars** (use these as a tone checklist):
- **Curious** — "Ask more. Dig deeper." Lead with questions, not assumptions.
- **Bold** — "Challenge norms. Create impact." Make claims you can act on.
- **Intelligent** — "Data-first, always learning." Ground statements in evidence.
- **Impactful** — "Real results, real change." Talk outcomes, not activity.

**Casing & rhythm**
- Headlines are **short, declarative, and confident**, often two beats: *"Growth isn't luck. It's a system."* / *"Built for the city. Engineered for growth."*
- The signature tagline is set in **letter-spaced uppercase**: `DATA. STRATEGY. GROWTH. EXECUTION.` — periods between each word, used as a rhythmic stamp.
- Sentence case for body and UI; ALL-CAPS only for the tagline, eyebrows, and tiny labels (letter-spaced).
- Operating verbs come in clipped four-beat systems: **Discover · Strategize · Execute · Grow** and **Plan. Test. Optimize. Scale.**

**Person & stance**
- Speaks as **"we"** (the agency) to **"you"** (the business owner). Warm, direct, never corporate-stiff.
- Mission-aware: references NYC neighborhoods, local operators, affordability, "built for the city." Avoid Silicon-Valley growth-hacking clichés; this is a *local, community-rooted* voice that happens to be data-fluent.

**Numbers**
- Data is a first-class citizen. Real, specific figures: `34.2K total conversions`, `+28.6% vs last 30 days`, `$23.41 CPL`, `+18.7% lift in CTR`. Always pair a figure with a delta and a timeframe.

**Emoji**: not used. The "icon language" is **neon line illustrations**, not emoji. Keep copy emoji-free.

**Examples of on-brand lines**
- "We turn data into real growth."
- "A few services done extremely well, not a long menu done averagely."
- "Every engagement is built as a system that moves prospects from discovery to conversion."
- "Insights today. Growth tomorrow."

---

## Visual foundations

**Overall vibe**: dark-first, high-contrast, **neon-on-night**. Electric purples carry the brand, a high-voltage yellow accents *one key moment* per view, and a deep near-black grounds everything. Scientific + urban: flask glassware, city skylines, live dashboards.

**Color**
- **Purples are the brand**: Electric Purple `#6B00FF` (primary, CTAs, glow), Vivid Violet `#A259FF` (accent, "LABS", data), Soft Lilac `#D6B3FF` (tints, muted text).
- **Signal Yellow `#FFE600`** is the *accent of last resort* — used sparingly for the single highest-intent element in a view (a primary CTA, a hero metric, a highlight scribble). Never wallpaper with it.
- **Ground**: Deep Night `#0A0714` (page), Midnight Plum `#1A1433` (cards), with a subtle lighter ramp for elevation. Off White `#F2E9FF` is the primary text on dark.
- Imagery and illustration skew **cool and high-voltage** — purple/violet glow, occasional yellow spark, on near-black. No warm/sepia tones.

**Typography**
- **Montserrat** (ExtraBold/Bold) for all display + headlines — strong, modern, geometric, slightly condensed in the logo. **Inter** (Regular/Medium) for body — clean, readable, data-driven. Data figures use Inter/Montserrat with **tabular numbers**.
- Display runs **tight** (negative tracking, ~1.04 line-height). Tagline/eyebrow caps run **wide** (0.18em).

**Backgrounds**
- Default page is a **radial night gradient** (`--grad-night`): a faint plum lift at top fading to near-black, optionally with a **purple skyline glow** rising from the bottom and a very faint violet **grid/dot texture**. Hero sections layer a neon city skyline + an upward data-arrow.
- Cards are **flat Midnight Plum** with a hairline violet border — not gradient-filled. Gradients are reserved for brand fills (buttons, meter fills, the mark).

**Borders**
- Hairline **violet at low opacity** (`rgba(162,89,255,.14–.38)`) is the house border. Signal-yellow borders mark a highlighted/active state only.

**Corner radii**
- Soft-but-squared: fields `8px`, buttons `12px`, **cards `16px`**, panels `22px`; **pills (`999px`)** for chips, badges, buttons-as-tags, and toggles.

**Cards**
- Midnight-Plum fill + 1px violet border + ambient shadow + a faint inner top light. Interactive cards **lift 3px** and gain a **purple glow** on hover. Featured/pricing cards get a permanent neon edge (`variant="glow"`).

**Shadows & glows** (the signature)
- On dark, depth is mostly **glow**, not drop-shadow. `--glow-purple-sm/md/lg` (electric-purple bloom) for brand surfaces; `--glow-signal` (yellow bloom) for the one signal moment; soft ambient `--shadow-md/lg` for separation.

**Motion**
- Quick and confident; **ease-out is the house curve** (`cubic-bezier(.22,1,.36,1)`), 120–280ms. Buttons lift 1px + brighten on hover, scale to 0.98 on press. **No bounce** on UI. Fades and short slides for entrances; the only "loop" allowed is a subtle glow pulse on hero marks. Respect `prefers-reduced-motion`.

**Hover / press states**
- Hover: lift + brighten (`filter: brightness(1.08)`) + intensify glow. Ghost/secondary: faint white fill (`--fill-hover`).
- Press: `scale(0.98)`, settle to base.
- Focus: violet ring (`--ring-focus`).

**Layout**
- Generous spacing on a 4px grid; clear hierarchy and strong contrast (a stated brand UI principle). Max content width ~1200px, 24px gutters, ~96px section rhythm. Sticky dark headers with a hairline bottom border.

**Transparency & blur**
- Used sparingly: translucent dark headers/popovers may use a slight backdrop blur; soft fills are low-opacity violet/yellow. Avoid heavy glassmorphism — the brand reads as *crisp neon*, not frosted.

---

## Iconography

- **Primary icon language = neon line illustrations.** The brand standards explicitly call for "neon line illustrations over realistic photography": single-weight glowing strokes in violet with occasional yellow, depicting lab glassware (flask, beakers, bubbles), city skylines, dashboards/charts, circuits/nodes, magnifier, brain, rocket, target, growth arrow. These are **illustrations**, not a small-UI icon set.
- **The flask mark** (`assets/logo/ugl-icon-mark.svg` / `…-1024.png`) is the brand's hero glyph — a flask holding a purple bar-chart skyline with a yellow growth arrow breaking out top-right. Use it as the app icon / favicon / social avatar and as a flexible accent. **Copy the asset; never redraw it.**
- **Small UI icons** (toolbar, nav, controls): the brand package does not ship a UI icon font. **Recommendation / substitution:** use **[Lucide](https://lucide.dev)** (CDN) — its even, single-weight strokes match the neon-line aesthetic. Render in `currentColor` so they pick up `--text-muted` / violet. This is a *flagged substitution* — see Caveats.
- **No emoji.** Do not use emoji as icons in product or marketing surfaces.
- **Unicode** glyphs (▲ ▼ ↗ ⌕ ·) are acceptable as lightweight inline marks (deltas, arrows) where a full icon is overkill — as used in `Stat`, `Tabs`, and `Select`.

---

## Using the system

**Tokens** — link the global stylesheet, then reference custom properties:
```html
<link rel="stylesheet" href="styles.css" />
```
```css
.panel { background: var(--surface-card); border: 1px solid var(--border-default);
         border-radius: var(--radius-lg); box-shadow: var(--glow-purple-sm); }
```

**Components** — load the bundle and read from the namespace:
```html
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Stat } = window.UrbanGrowthLabsDesignSystem_d46328;
</script>
```

See each component's `.prompt.md` for usage and variants.

---

## Caveats

- **Fonts substituted from Google Fonts.** No `.woff2`/`.ttf` binaries shipped with the brand package, so Montserrat + Inter load from Google Fonts (`tokens/fonts.css`). These *are* the brand's real faces — only the delivery is substituted. Provide self-hosted files to make the system offline-safe.
- **UI icon set (Lucide) is a recommendation**, not a brand-shipped set — the package ships only the flask mark and full illustrations. Confirm or swap.
- The full neon line-illustration library (magnifier, brain, rocket, etc.) exists only inside the raster brand boards (`assets/brand/`), not as individual vectors. If you need them as standalone art, they should be exported/redrawn by the brand team.
