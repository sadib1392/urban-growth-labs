# Handoff — 100vh Full-Viewport Design + Smooth Scroll + Scroll Animations

**For:** Claude Code, implementing in the Urban Growth Labs repo.
**Status:** Spec only. Nothing here is applied yet.
**Reference:** https://trionn.com/ — full-viewport stacked panels, Lenis smooth scroll, pinned/scrubbed sections, fixed corner crosshairs.
**Date:** 2026-06-27

---

## 0. TL;DR for the implementer

Convert the site to **full-viewport (100vh) section panels** with **smooth inertia scrolling** and **scroll-driven animations** (parallax, pin-and-scrub, progress reveals), trionn-style — **on UGL's existing dark brand and existing effects architecture.**

Three things you must internalize before touching code:

1. **You are not adding a scroll library — you are re-enabling one.** Lenis is already a dependency and already wired in `src/effects/lenis.js`, but gated off (`ENABLE_SMOOTH = false`). Trionn runs the same library (confirmed: `window.Lenis` present on their page).
2. **There is a known repaint bug that smooth scroll re-triggers.** The codebase disabled Lenis and drops the radial night gradient above 1200px because fractional-pixel scrolling forced the gradient + header backdrop-filter to re-rasterize every frame ("flashing"). **Phase 1 fixes the root cause so smooth scroll is safe.** Do this first or the whole feature flashes.
3. **Extend the existing hand-rolled motion layer; do not bolt on GSAP by default.** The repo deliberately hand-rolls motion (`useInteractions.js`, `CustomCursor.jsx`) with careful repaint control and `prefers-reduced-motion` gating. Match that. GSAP/ScrollTrigger is offered only as an optional escalation (§7).

---

## 1. What "trionn-style" actually means (observed)

Measured live on trionn.com:

| Trait | Observed | Implication for UGL |
|---|---|---|
| Smooth scroll | **Lenis** active (`window.Lenis`) | Re-enable our Lenis |
| Section sizing | **8 of 9 sections ≈ 100vh** | Full-viewport panels |
| Scroll model | `html{overflow:hidden}`, body scrolls; doc ≈ 7 viewports tall | Free vertical scroll, not CSS snap |
| Pinning | ~18 sticky/fixed elements | Sticky-pinned sections + scrubbed inner animation |
| Decoration | fixed corner **`+` crosshairs** | Optional fixed overlay (cheap, on-brand) |
| Animation tech | React/custom + Lenis (no global GSAP) | Custom scroll-progress, our architecture |

The "lots of scrolling animations" = elements whose transform/opacity are **scrubbed by scroll progress** (not just a one-shot fade). Our current reveal system is binary (IntersectionObserver → `.is-revealed`). We need to **add a continuous scroll-progress channel** alongside it.

---

## 2. Guardrails (UGL identity + existing architecture)

- Keep the **dark brand**, tokens, and BEM-ish classes. This is layout + motion only, not a re-theme.
- **Every motion path gates behind** the existing `motionOK` / `prefersReduced` / `isFinePointer` from `src/effects/env.js`. Reduced-motion users get: native scroll, full-height panels at rest, animations resolved to final state, no scrub.
- **One scroll listener.** Centralize all scroll-driven work in a single Lenis subscription / rAF loop. Do **not** add per-element scroll listeners (that was the perf trap before).
- **Compositor-only animation.** Animate `transform` and `opacity` only. Never animate layout props or anything that repaints a background during scroll.
- Preserve the existing reveal/count-up/meter/tilt/magnetic behaviors — this is additive.

---

## 3. Phase 1 — Fix the repaint bug (DO FIRST, blocking)

**Root cause:** the night gradient + grid are painted on the scrolling `.page` element, and the header used `backdrop-filter`. Under fractional-pixel (smooth) scroll these re-rasterize every frame → flashing. The current mitigations are workarounds: Lenis off, and gradient dropped `@media (min-width:1200px)` in `styles.css`.

**Fix:** move the background to a **fixed, GPU-promoted layer that never scrolls**, so content scrolls *over* a static paint. Then the gradient can be restored at all sizes AND smooth scroll becomes safe.

- In `styles.css`, give the background its own fixed layer:
  ```css
  .page::before {              /* or a dedicated <div className="page-bg" aria-hidden> */
    content: "";
    position: fixed; inset: 0;
    z-index: -1;
    background-image: var(--grid-lines), var(--grad-night);
    background-size: var(--grid-size), 100% 100%;
    transform: translateZ(0);   /* promote to its own layer */
    will-change: transform;
    pointer-events: none;
  }
  .page { background: var(--ugl-deep-night); }  /* solid fallback only */
  ```
- **Remove** the `@media (min-width:1200px)` gradient-drop hack once the fixed layer is in (the gradient no longer repaints on scroll, so the flash is gone).
- Confirm the header stays a **solid** bar (it already is — keep it; do **not** reintroduce `backdrop-filter`).
- **Acceptance for Phase 1:** on a ≥1440px display, enable Lenis (next phase) and scroll fast top-to-bottom — the background must stay rock-steady with **zero flashing**. This is the gate for everything else.

---

## 4. Phase 2 — Re-enable smooth scroll (Lenis)

`src/effects/lenis.js` already has the singleton, rAF loop, `scrollToTop`, and reduced-motion guard. Changes:

- Flip `const ENABLE_SMOOTH = false` → `true`.
- Keep the `motionOK` guard (reduced-motion users stay on native scroll — `scrollToTop` already falls back to `window.scrollTo`).
- **html/body:** mirror trionn — `html { overflow: hidden }` is not required by Lenis v1, but ensure no conflicting `scroll-behavior: smooth` in CSS (it fights Lenis). Let Lenis own scrolling.
- **Expose scroll progress** for Phase 3: have the module subscribe to Lenis and re-broadcast, e.g.
  ```js
  const listeners = new Set();
  export const onScroll = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
  // inside init: lenis.on('scroll', ({ scroll }) => listeners.forEach(fn => fn(scroll)));
  ```
  If smooth is disabled (reduced motion), fall back to a passive `window` scroll listener feeding the same `listeners`.
- **Touch devices:** Lenis on mobile can feel laggy. Recommend native scroll on coarse pointers — gate `smoothTouch`/init by `isFinePointer` (decision in §8).
- **Acceptance:** smooth inertia on desktop; native scroll under reduced-motion and (per decision) on touch; no background flash (Phase 1 holds); anchor/route scroll-to-top still works.

---

## 5. Phase 3 — Full-viewport panels (the "100vh design")

- Add a **panel** primitive/class. Use small-viewport units to avoid the mobile URL-bar jump:
  ```css
  .panel {
    min-height: 100svh;          /* not 100vh — avoids mobile address-bar resize jump */
    display: flex; flex-direction: column; justify-content: center;
    position: relative;
    padding-block: var(--section-y);
  }
  @supports not (height: 100svh) { .panel { min-height: 100vh; } }
  ```
- **Scroll model: free scroll, not mandatory snap.** Trionn does not hard-snap; mandatory `scroll-snap` fights smooth scroll and harms accessibility/long content. Optionally offer a *soft* snap:
  ```css
  /* OPTIONAL, off by default */
  .snap-y { scroll-snap-type: y proximity; }
  .snap-y .panel { scroll-snap-align: start; }
  ```
  Leave this opt-in per page; the hero + a couple of feature panels are good candidates, dense text/forms are not.
- Wrap each page's major sections in `.panel`. Keep content max-width via the existing `.container`.
- **Mobile:** panels may exceed one screen when content is tall — `min-height` (not fixed `height`) lets them grow. Good.
- **Acceptance:** each major section fills the viewport on desktop; no clipped content; no mobile 100vh jump; forms/long lists still scroll naturally inside their panel.

---

## 6. Phase 4 — Scroll-driven animations

Add a **continuous scroll-progress channel** that coexists with the existing IntersectionObserver reveals.

**Mechanism (custom, Lenis-driven, one listener):**
1. New module `src/effects/scrollProgress.js` subscribes via `onScroll` (§4).
2. On each scroll tick (throttled to rAF), for every `[data-scroll]` element it computes a normalized progress `p` (0 as it enters viewport bottom → 1 as it exits top) and writes it to a CSS var: `el.style.setProperty('--p', p)`.
3. **CSS does the visual work** off `--p` — keeps it on the compositor:
   ```css
   [data-scroll-speed]  { transform: translate3d(0, calc(var(--p, .5) * var(--speed, 0) * 100px), 0); }
   [data-scroll-fade]   { opacity: calc(.3 + var(--p, 0) * .7); }
   ```
4. Wire it inside `useInteractions.js` (route-scoped, re-runs on path change, cleans up listeners) so it lives beside the existing reveal/tilt code and shares the lifecycle.

**Attribute-driven API** (generic, not per-page selector lists like today's `REVEAL` const):
| Attribute | Effect |
|---|---|
| `data-scroll` | element is tracked; gets `--p` updated each tick |
| `data-scroll-speed="-2..2"` | parallax depth (sign = direction) |
| `data-scroll-fade` | opacity ramps with progress |
| `data-pin` | section pins (see below) |
| `data-pin-scrub` | child animation scrubbed across the pinned range |

**Pin-and-scrub** (the trionn signature) without a library — pure sticky:
```css
.pin-track { position: relative; height: 200vh; }   /* scroll distance = pin duration */
.pin-stage { position: sticky; top: 0; height: 100svh; overflow: hidden; }
/* inner element scrubs off --p written by scrollProgress on the track */
.pin-stage [data-pin-scrub] { transform: translate3d(calc(var(--p) * -50%), 0, 0); }
```
This covers vertical pins and **horizontal-scroll sections** (translate a wide track by `--p`).

**Keep the existing reveal system** for simple one-shot entrance fades/staggers (it already has a fail-safe so nothing stays hidden). Use the new `data-scroll*` channel only where you want *continuous* motion.

- **Acceptance:** parallax/scrub is smooth (60fps, no jank) on desktop; under reduced motion all `[data-scroll*]` elements render at their resting state (`--p` treated as final); one scroll listener total (verify in devtools); no background flash.

---

## 7. Optional escalation — GSAP ScrollTrigger

Only if the custom channel (§6) proves insufficient for complex, choreographed timelines (multi-step pins, snapping between labels, exotic easing). GSAP + ScrollTrigger is now free including the plugin. Trade-offs: new paradigm vs. the hand-rolled code, larger bundle, and it must be driven by Lenis (`ScrollTrigger.update` on Lenis scroll, `lenis.raf` in `gsap.ticker`). **Do not introduce it preemptively** — get §3–6 shipping first and only reach for it on a specific section that needs it.

---

## 8. Fixed corner crosshairs (optional, on-brand, cheap)

Trionn's four fixed `+` marks. A single `aria-hidden` fixed overlay in `App.jsx`, drawn with `--text-subtle`/`--grid-line`, `pointer-events:none`, `position:fixed`. Pure decoration, no repaint cost. Pairs well with the existing violet grid.

---

## 9. File-by-file change map

| File | Change | Phase |
|---|---|---|
| `src/styles/styles.css` | Fixed GPU background layer; remove the `@media(min-width:1200px)` gradient-drop; `.panel`, `.pin-track/.pin-stage`, `[data-scroll*]` transforms, optional `.snap-y` | 1,3,4 |
| `src/effects/lenis.js` | `ENABLE_SMOOTH=true`; add `onScroll` subscribe/broadcast; native-scroll fallback feed | 2,4 |
| `src/effects/scrollProgress.js` (new) | Lenis-driven `--p` writer for `[data-scroll]` | 4 |
| `src/effects/useInteractions.js` | Mount/cleanup scrollProgress beside existing reveal; keep IO reveal | 4 |
| `src/effects/env.js` | (reuse as-is) capability gates | all |
| `src/App.jsx` | Background layer element if not using `::before`; optional corner crosshairs overlay; confirm Lenis init/cleanup on mount | 1,2,8 |
| `src/pages/*.jsx` | Wrap sections in `.panel`; add `data-scroll` / `data-scroll-speed` / `data-pin` where motion is wanted | 3,4 |
| `src/styles/tokens/effects.css` | Optional motion tokens: `--scrub-ease`, parallax depth scale, pin durations | 4 |
| `index.html` / `tokens/base.css` | Ensure no `scroll-behavior:smooth` conflicts with Lenis | 2 |

---

## 10. Recommended order & per-phase gate

1. **Phase 1 — repaint fix.** Gate: zero background flash at ≥1440px with Lenis temporarily on.
2. **Phase 2 — enable Lenis.** Gate: smooth desktop / native reduced-motion+touch, scroll-to-top intact.
3. **Phase 3 — panels.** Gate: full-viewport sections, no mobile jump, content not clipped.
4. **Phase 4 — scroll animations.** Gate: smooth parallax/pin/scrub, one listener, reduced-motion at rest.
5. **Optional:** crosshairs (§8), soft snap (§5), GSAP escalation (§7).

Ship and eyeball after each phase. Phases 1–2 are the risky/foundational ones; do not start Phase 4 until Phase 1's gate passes.

---

## 11. Acceptance criteria (whole feature)

- [ ] Background is rock-steady (no flash) at 1440px+ with smooth scroll on.
- [ ] Desktop scroll is smooth (Lenis); reduced-motion and (per decision) touch use native scroll.
- [ ] Major sections are full-viewport panels using `100svh`; no mobile URL-bar jump; nothing clipped.
- [ ] At least one section uses continuous scroll-driven motion (parallax or pin-scrub); at least one pinned section scrubs an inner animation.
- [ ] Exactly one scroll listener drives all scroll animation (verify in devtools).
- [ ] Only `transform`/`opacity` animate; no layout/background repaint during scroll.
- [ ] `prefers-reduced-motion`: native scroll, panels at rest, animations resolved, cursor/scrub off (existing pattern preserved).
- [ ] Existing reveal / count-up / meter / magnetic / tilt / route-wipe still work.
- [ ] `npm run build` clean; deep links + scroll restoration intact.

---

## 12. Open decisions for the implementer

- **Touch + Lenis:** native scroll on coarse pointers (recommended, smoother on mobile) vs. Lenis everywhere (matches trionn). Default to native-on-touch unless it feels inert.
- **Soft snap:** enable `scroll-snap-type: y proximity` on the hero/feature panels, or leave fully free? Recommend free first, add proximity snap only if sections feel like they "drift."
- **Pin durations:** how many viewport-heights each pinned section consumes (`.pin-track` height). Start at `200vh` and tune.
- **GSAP:** stay custom (recommended) unless a specific section needs choreography §6 can't express.
- **Scope:** all routes, or start with Home as the showcase and roll out? Recommend Home first.
