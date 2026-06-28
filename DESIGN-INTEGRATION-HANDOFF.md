# Design Integration Handoff — Urban Growth Labs

**Status:** Spec only. Nothing in this document has been applied to the codebase. It is written for the implementing session.
**Date:** 2026-06-27
**Direction (decided):** Stay dark-first. Keep UGL's deep-night brand as the base and *borrow structure* from two reference systems — do not re-theme to light.

## Sources
1. **Kudos** — `~/kudos-design.md` (reverse-engineered from https://kudos.framer.media/). Dark, single mint accent, huge tight display type, monospace micro-labels, bento cards, faint column grid.
2. **Clay** — `~/Downloads/DESIGN-clay.md` (clay.com). Warm cream canvas, six saturated single-color feature cards, generous radii, rounded display warmth, product-UI-fragments-in-cards, illustration-as-hero, light footer.

This site already absorbed a lot of "kudos" motion in its `effects/` layer (see `README.md`). This handoff is about the **visual system**, not motion.

---

## 1. Guardrails (do not violate)

These are UGL's identity. Borrowing must bend to them, not the other way around.

- **Base stays dark.** `--surface-page` = `--ugl-night-1` (#0A0714). Footer stays dark. No cream canvas. (Clay's cream is explicitly rejected.)
- **Display face stays Saira Extra Condensed.** Clay's rounded "Plain Black" warmth is the opposite of UGL's sharp condensed display — do **not** swap the headline font. (Clay font direction rejected.)
- **Neon glow is the depth language.** Keep `--glow-*`. Don't replace glows with flat Clay-style shadowless blocks across the board — the saturated cards are the one place flat color is allowed.
- **Signal yellow = one moment per view.** Don't dilute it into a general-purpose accent.
- **Token discipline.** Everything routes through `src/styles/tokens/*` and the BEM-ish classes in `styles.css`. Never inline hex in JSX. New values become new tokens.

---

## 2. The core reconciliation

The two sources disagree on accent count, and that disagreement is the key design decision:

| | Kudos | Clay | **UGL resolution** |
|---|---|---|---|
| Accent count | exactly **one** | **six** saturated | **One accent in UI chrome, many only inside the feature-card grid.** |

**Rule:** Chrome (nav, buttons, links, borders, eyebrows, focus) uses only purple + the single signal-yellow moment. Color *variety* is confined to the **feature-card grid**, where rotating saturated surfaces are the whole point. This is how UGL gets Clay's playful card range without becoming a six-color UI.

Other conflicts:

| Topic | Kudos | Clay | UGL resolution |
|---|---|---|---|
| Canvas | dark | cream | **Dark** (UGL) |
| Display font | Inter Display | Plain Black (rounded) | **Saira Extra Condensed** (UGL, unchanged) |
| Micro-labels | **monospace** | Inter caps | **Add a real mono face** (see §3) — reinforces UGL's "data-driven" positioning |
| Footer | dark | light cream | **Dark** (UGL) |
| Card depth | flat | flat | **Flat fill for saturated cards; glow stays on default cards** |
| Section rhythm | tall | 96px | **96px** — already `--section-y` ✓ |
| Column grid | faint | — | **Already present** in `.page` ✓ |

---

## 3. What to borrow, mapped to this codebase

### 3a. Monospace micro-labels  *(from Kudos)* — **highest-impact, do first**
UGL has no mono face today; `--font-mono` aliases Poppins. Kudos's "engineered" feel comes from real monospace on eyebrows, stat figures, and step numbers.

- **Add** a self-hosted mono face to `public/fonts/` + `@font-face` in `tokens/fonts.css`. Suggested: **JetBrains Mono** or **Geist Mono** (open-license). Files alongside the existing `.ttf`s.
- **Repoint** `--font-mono` in `tokens/typography.css` to the new family (currently `'Poppins', ui-monospace,...`).
- **Apply** to: `.eyebrow` / `.ugl-eyebrow`, `.stat__value` (already tabular), `.stat__label`, step indices, `.tagline-caps`, `.badge`.
- Keep it to **labels and numbers only** — never body copy (both sources agree).

### 3b. Saturated feature-card grid  *(from Clay)* — **biggest visual borrow**
Translate Clay's 6-color cards into dark-compatible saturated surfaces. Reuse colors already in the token file so the palette stays in-family:

| Card variant | Surface token (existing) | Text |
|---|---|---|
| `feature-card--violet` | `--ugl-vivid-violet` #A259FF | dark (`--text-inverse`) |
| `feature-card--brand` | `--grad-brand` / #6B00FF | white |
| `feature-card--signal` | `--ugl-signal-yellow` #FFE600 | dark (`--text-on-signal`) — use sparingly |
| `feature-card--mint` | `--ugl-success` #34E0A1 | dark |
| `feature-card--coral` | `--ugl-danger` #FF4D6D | white |
| `feature-card--blue` | `--chart-6` #5B8DEF | dark/white per contrast |

Rules (from Clay): **cycle** colors down the page, never repeat the same hue twice in a row, **one product fragment per card** (reuse `Stat` / `Meter` / a mini mock — UGL already has these primitives and a "live-growth dashboard card"). Radius = `--radius-2xl` (28px). Flat fill, **no glow** on these (glow stays for `.card--glow`). Text color flips by surface luminance — bake the right `--text-*` token into each variant class.

- **Where:** new `feature-card` block in `styles.css`; optionally a `<FeatureCard variant>` wrapper in `primitives.jsx` mirroring the existing `Card` API.
- **Use on:** Home services grid, Services page, pricing featured tier.

### 3c. Two-tone headlines  *(from Kudos)*
One key word in accent, the rest in `--text-strong`. UGL already has a script `.accent` (Swanky and Moo Moo) for hand-drawn words — this is **different**: a same-font color split.
- **Add** `.headline-accent { color: var(--text-accent); }` (violet) and a `.headline-signal` variant for the rare yellow moment.
- Distinct from `.accent` (script). Document both so they aren't confused.

### 3d. Generous radii  *(from Clay)*
UGL radii already reach `--radius-2xl` 28px. Adopt Clay's "bigger radius = warmer" by using `--radius-xl`/`2xl` on feature cards and `--radius-lg` (16px) consistently on content cards. No new tokens needed — just apply the larger end of the existing scale to cards.

### 3e. Background watermark  *(from Kudos)*
Oversized low-contrast wordmark behind hero/footer. UGL already owns the perfect face: **Stalinist One** (`--font-stamp`, the "LABS" stamp).
- **Add** a decorative `.watermark` element behind the hero and/or pre-footer: giant `UGL` / `LABS` in `--font-stamp`, color at ~3–5% white or `--grid-line` opacity. Purely textural, `aria-hidden`, `pointer-events:none`.

### 3f. Product-fragment-in-card + illustration hero  *(from Clay)*
- UGL's Home hero already uses a tilted dashboard card — that **is** the Clay "product fragment as hero artifact" move. Keep it; optionally pair with an illustration asset later (asset-dependent, deferred).
- Embed small `Stat`/`Meter` fragments inside the new feature cards (Clay shows product UI inside every saturated card).

### 3g. Tighter display leading  *(from Kudos)*
Kudos sets display line-height ~0.9; UGL `--lh-tight` is 1.04. Optional: add `--lh-display: 0.95` and apply to `--fs-display-2xl/xl` only. Test for descender clipping with Saira. Low priority.

---

## 4. What to reject (and why)

- **Clay cream canvas / light footer** — rebrand, not integration. (User decision.)
- **Clay rounded display font (Plain Black)** — conflicts with UGL's sharp condensed identity.
- **Six-color UI chrome** — variety stays inside the card grid only (see §2).
- **Kudos all-mint single accent** — UGL keeps purple+yellow; mint becomes just one card hue.
- **Removing neon glow** — glow is UGL's depth signature; saturated flat cards are the only exception.

---

## 5. File-by-file change map

> Reference targets for the implementing session. Snippets are illustrative, not final.

| File | Change | Source |
|---|---|---|
| `public/fonts/` | Add mono `.ttf`/`.woff2` (JetBrains/Geist Mono) | Kudos §3a |
| `src/styles/tokens/fonts.css` | `@font-face` for the mono family | Kudos |
| `src/styles/tokens/typography.css` | Repoint `--font-mono`; optional `--lh-display: 0.95` | Kudos §3a, §3g |
| `src/styles/tokens/colors.css` | (No new base colors needed — feature-card hues reuse existing tokens) Optionally alias `--feature-mint/coral/blue` to existing values for readability | Clay §3b |
| `src/styles/tokens/spacing.css` | None required (radii + 96px rhythm already present) | — |
| `src/styles/styles.css` | New `.feature-card` + `--variant` rules; `.headline-accent`/`.headline-signal`; `.watermark`; apply mono to `.eyebrow`/`.tagline-caps`/`.stat__*` | Kudos + Clay |
| `src/components/primitives.jsx` | Optional `<FeatureCard variant>` wrapper mirroring `Card` | Clay §3b |
| `src/components/shared.jsx` | `Eyebrow` → mono styling; consider a `TwoToneHeading` helper | Kudos |
| `src/pages/Home.jsx` | Services grid → feature-card grid (cycled hues, fragment each); add hero watermark | Clay + Kudos |
| `src/pages/Services.jsx` | Feature-card grid | Clay |
| `src/pages/Pricing.jsx` | Featured tier → saturated surface (`--grad-brand`) like Clay's teal featured tier | Clay |
| `src/components/Footer.jsx` | Stays dark; optional pre-footer watermark band | Kudos (footer dark = UGL) |

### Illustrative token edit — `typography.css`
```css
/* before */
--font-mono: 'Poppins', ui-monospace, 'SF Mono', Menlo, monospace;
/* after (once the face is added in fonts.css) */
--font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
/* optional */
--lh-display: 0.95;
```

### Illustrative — `styles.css` feature card
```css
.feature-card {
  border-radius: var(--radius-2xl);
  padding: var(--space-8);            /* 32px, matches Clay */
  border: none;                       /* flat fill — the one no-glow exception */
  display: flex; flex-direction: column; gap: var(--space-4);
}
.feature-card--violet { background: var(--ugl-vivid-violet); color: var(--text-inverse); }
.feature-card--brand  { background: var(--grad-brand);       color: #fff; }
.feature-card--signal { background: var(--ugl-signal-yellow); color: var(--text-on-signal); }
.feature-card--mint   { background: var(--ugl-success);       color: var(--text-inverse); }
.feature-card--coral  { background: var(--ugl-danger);        color: #fff; }
.feature-card--blue   { background: var(--chart-6);           color: #fff; }
.feature-card__title  { font-family: var(--font-display); }
.feature-card__eyebrow{ font-family: var(--font-mono); text-transform: uppercase; letter-spacing: var(--ls-eyebrow); }
```

### Illustrative — two-tone heading
```css
.headline-accent { color: var(--text-accent); }   /* violet word */
.headline-signal { color: var(--text-signal); }   /* yellow word — rare */
```
```jsx
<h1>We grow brands <span className="headline-accent">people remember</span></h1>
```

---

## 6. Suggested rollout order

1. **Mono face** (§3a) — fonts.css + typography.css + apply to eyebrows/stats. Self-contained, instant uplift, low risk.
2. **Feature-card grid** (§3b) — styles.css + optional primitive; wire into Home services grid first.
3. **Two-tone headlines** (§3c) — across Home/Services hero headings.
4. **Pricing featured tier** as a saturated surface (§3b).
5. **Watermark** (§3e) behind hero + pre-footer.
6. **Optional polish:** tighter display leading (§3g), illustration hero asset (§3f).

Ship and eyeball after each step; 1–3 deliver most of the perceived change.

---

## 7. Acceptance criteria

- [ ] Base canvas, footer, and headline font unchanged (still dark / Saira).
- [ ] Eyebrows, stat numbers, step indices render in a real monospace face.
- [ ] At least one page shows a cycled saturated feature-card grid, no adjacent repeated hue, one product fragment per card, `--radius-2xl`, flat (no glow).
- [ ] Signal yellow appears at most once per viewport; UI chrome stays purple-only.
- [ ] No inline hex in JSX/CSS — all new values are tokens.
- [ ] `prefers-reduced-motion` behavior from the existing effects layer still holds.
- [ ] `npm run build` clean; no font 404s (check `/fonts/*`).

---

## 8. Open decisions for the implementer

- **Mono family:** JetBrains Mono vs Geist Mono vs IBM Plex Mono — pick one, self-host.
- **Feature-card hue set:** confirm the 5–6 hues above, or trim to 4 to stay tighter to UGL's purple core.
- **Watermark text:** `UGL`, `LABS`, or `GROW` — and whether it appears on hero, footer, or both.
- **Illustration hero (§3f):** deferred until/unless brand illustration assets exist; the dashboard card covers the role for now.
