/* Smooth scrolling (Lenis) — trionn-style inertia scroll + a single scroll
   broadcast that the scroll-progress channel subscribes to.

   Smooth scroll runs on motion-OK, fine-pointer (desktop) only. Reduced-motion
   and touch devices use native scroll, but still feed the same `onScroll`
   listeners so scroll-driven animation works everywhere. ONE scroll source. */
import Lenis from 'lenis';
import { motionOK, isFinePointer } from './env.js';

// Smooth scroll re-disabled: on this project's hardware Lenis's fractional-pixel
// scrolling flashes the background on large screens even with a fixed/promoted
// bg layer (the handoff's proposed fix). Native scroll is the only confirmed
// flash-free path. Scroll-driven animation still works via the native broadcast.
const ENABLE_SMOOTH = false;
const useSmooth = ENABLE_SMOOTH && motionOK && isFinePointer;

let lenis = null;
let started = false;
const listeners = new Set();

/* subscribe to scroll position (px). returns an unsubscribe fn. */
export const onScroll = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
const broadcast = (y) => { listeners.forEach((fn) => fn(y)); };

export function initLenis() {
  if (started) return lenis;
  started = true;

  if (!useSmooth) {
    // native scroll (reduced motion / touch) — still drive the progress channel
    window.addEventListener('scroll', () => broadcast(window.scrollY || 0), { passive: true });
    return null;
  }

  lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 });
  lenis.on('scroll', ({ scroll }) => broadcast(scroll));
  function raf(time) {
    if (!lenis) return;
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return lenis;
}

export function scrollToTop(immediate = false) {
  if (lenis) lenis.scrollTo(0, { immediate });
  else {
    try { window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' }); }
    catch (e) { window.scrollTo(0, 0); }
  }
}

export function destroyLenis() {
  if (lenis) { lenis.destroy(); lenis = null; }
}
