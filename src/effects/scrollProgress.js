/* Continuous scroll-progress channel (Phase 4).
   Subscribes to the single Lenis/native scroll broadcast (lenis.js → onScroll)
   and, throttled to one rAF per tick, writes a normalized progress var --p to
   every [data-scroll] element. CSS does all the visual work off --p so motion
   stays on the compositor (transform/opacity only). ONE listener total.

   Progress modes:
   - default: 0 as the element enters from the viewport bottom → 1 as it exits
     the top (good for parallax / fade).
   - [data-pin]: 0 at the start of the pinned range → 1 at the end (for
     pin-and-scrub, where the element is a tall .pin-track). */
import { onScroll } from './lenis.js';
import { motionOK } from './env.js';

const clamp = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

export function initScrollProgress(root = document) {
  const els = Array.from(root.querySelectorAll('[data-scroll]'));
  if (!els.length) return () => {};

  if (!motionOK) {
    // reduced motion: resolve everything to its resting (final) state —
    // fades/pins to their end (1), parallax to its neutral midpoint (0.5)
    els.forEach((el) => {
      const final = el.hasAttribute('data-scroll-fade') || el.hasAttribute('data-pin') ? '1' : '0.5';
      el.style.setProperty('--p', final);
    });
    return () => {};
  }

  let ticking = false;

  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      let p;
      if (el.hasAttribute('data-pin')) {
        const denom = Math.max(1, r.height - vh);
        p = clamp(-r.top / denom);
      } else {
        p = clamp((vh - r.top) / (vh + r.height));
      }
      el.style.setProperty('--p', p.toFixed(4));
    }
  };

  const onTick = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  const off = onScroll(onTick);
  window.addEventListener('resize', onTick, { passive: true });
  update(); // initial paint

  return () => {
    off();
    window.removeEventListener('resize', onTick);
  };
}
