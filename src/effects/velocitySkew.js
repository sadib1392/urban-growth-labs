/* Obys-style scroll-velocity skew (experiment.obys.agency signature).
   Content blocks skew on the Y axis in proportion to scroll speed and spring
   back to flat when scrolling stops — the elastic "liquid scroll" feel.

   Applied to content only (headings, grids, media, marquee) — NEVER buttons.

   Safety: compositor-only `transform`, written inline per frame, with NO
   persistent `will-change` (the promoted-layer pattern is exactly what flashed
   the background on large screens). The rAF loop self-stops and clears the
   inline transform once motion settles, so no layer lingers. Desktop + motion
   only; reduced-motion / touch get a flat, static page. */
import { onScroll } from './lenis.js';
import { motionOK, isFinePointer } from './env.js';

// [selector, intensity] — intensity scales the shared skew so groups read with
// slight differential motion. Buttons (.btn) are deliberately excluded, and any
// matched node that is/contains a button is skipped at wire-up.
const SKEW_TARGETS = [
  ['.watermark', 1.4],
  ['.hero__anim', 1.1],
  ['.hero__h1', 1.0],
  ['.hero__p', 0.85],
  ['.tagline-caps', 0.7],
  ['.section-head .h2', 1.0],
  ['.section-head .h1', 1.0],
  ['.svc-grid', 0.7],
  ['.case-grid', 0.7],
  ['.method', 0.8],
  ['.trust-band', 0.7],
  ['.price-teaser-grid', 0.7],
  ['.tier-grid', 0.7],
  ['.featured-grid', 0.8],
  ['.values-grid', 0.7],
  ['.about-two', 0.7],
  ['.contact-grid', 0.7],
  ['.community-note', 0.9],
  ['.script-note', 1.1],
  ['.marquee', 0.5],
];

const MAX_DEG = 4.5; // hard cap on skew so it never looks broken
const VEL_FACTOR = 0.16; // scroll px/event -> degrees
const EASE = 0.12; // how fast the rendered value approaches the target
const DECAY = 0.86; // target relaxes to 0 once scroll events stop (spring back)

const clamp = (v) => (v < -MAX_DEG ? -MAX_DEG : v > MAX_DEG ? MAX_DEG : v);

export function initVelocitySkew(root) {
  if (!motionOK || !isFinePointer) return () => {};

  const els = [];
  for (const [sel, mult] of SKEW_TARGETS) {
    root.querySelectorAll(sel).forEach((el) => {
      if (el.classList.contains('btn') || el.querySelector('.btn')) return; // never buttons
      el.style.transformOrigin = '50% 50%';
      els.push({ el, mult });
    });
  }
  if (!els.length) return () => {};

  let lastY = window.scrollY || window.pageYOffset || 0;
  let targetDeg = 0; // velocity-derived skew
  let current = 0; // eased value actually rendered
  let raf = 0;
  let running = false;

  const tick = () => {
    current += (targetDeg - current) * EASE;
    targetDeg *= DECAY;
    if (Math.abs(current) < 0.012 && Math.abs(targetDeg) < 0.012) {
      // settled — clear inline transforms so no promoted layer is left behind
      for (let i = 0; i < els.length; i += 1) els[i].el.style.transform = '';
      current = 0;
      running = false;
      return;
    }
    for (let i = 0; i < els.length; i += 1) {
      const { el, mult } = els[i];
      el.style.transform = `skewY(${(current * mult).toFixed(3)}deg)`;
    }
    raf = requestAnimationFrame(tick);
  };

  const off = onScroll((y) => {
    targetDeg = clamp((y - lastY) * VEL_FACTOR);
    lastY = y;
    if (!running) { running = true; raf = requestAnimationFrame(tick); }
  });

  return () => {
    off();
    cancelAnimationFrame(raf);
    for (let i = 0; i < els.length; i += 1) {
      els[i].el.style.transform = '';
      els[i].el.style.transformOrigin = '';
    }
  };
}
