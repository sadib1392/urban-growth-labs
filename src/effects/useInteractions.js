/* Route-scoped interaction layer. Re-runs whenever the path changes so freshly
   mounted page content gets wired. Combines:
   - scroll-reveal (2xa / kudos): staggered rise as elements enter view
   - count-up stats + meter fill (kudos): numbers animate when revealed
   - magnetic buttons (kudos): CTAs pull toward the pointer
   - 3D tilt (trionn / obys): pointer-tracked tilt on [data-tilt] */
import { useLayoutEffect } from 'react';
import { motionOK, isFinePointer } from './env.js';
import { initScrollProgress } from './scrollProgress.js';
import { initVelocitySkew } from './velocitySkew.js';

/* surfaces that get pointer-tracked 3D tilt (cards only — never buttons) */
const TILT = '.feature-card, .card, .trust-band__cell, .tier__card';

/* selectors that become reveal targets */
const REVEAL = [
  '.hero > *',
  '.trust-band__cell',
  '.section-head',
  '.svc-grid > *',
  '.method__line',
  '.method__step',
  '.case-grid > *',
  '.price-teaser-grid > *',
  '.tier-grid > *',
  '.values-grid > *',
  '.svc-row',
  '.compare',
  '.featured-grid',
  '.about-two > *',
  '.contact-grid > *',
  '.community-note',
].join(', ');

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

function parseValue(text) {
  const m = String(text).match(/^(\D*?)([\d,]*\.?\d+)(.*)$/s);
  if (!m) return null;
  const numStr = m[2];
  return {
    prefix: m[1],
    suffix: m[3],
    target: parseFloat(numStr.replace(/,/g, '')),
    decimals: (numStr.split('.')[1] || '').length,
    hasComma: numStr.includes(','),
  };
}

function fmt(n, p) {
  const fixed = n.toFixed(p.decimals);
  const out = p.hasComma ? Number(fixed).toLocaleString('en-US', {
    minimumFractionDigits: p.decimals, maximumFractionDigits: p.decimals,
  }) : fixed;
  return p.prefix + out + p.suffix;
}

function animateNumber(el) {
  if (el.dataset.counted) return;
  const parsed = parseValue(el.textContent);
  if (!parsed || !isFinite(parsed.target)) { el.dataset.counted = '1'; return; }
  el.dataset.counted = '1';
  const dur = 1100, start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / dur);
    el.textContent = fmt(parsed.target * easeOut(t), parsed);
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = fmt(parsed.target, parsed);
  };
  requestAnimationFrame(tick);
}

function animateMeter(el) {
  if (el.dataset.filled) return;
  el.dataset.filled = '1';
  const target = el.style.width || '0%';
  el.style.width = '0%';
  // next frame so the transition from 0 runs
  requestAnimationFrame(() => requestAnimationFrame(() => { el.style.width = target; }));
}

export default function useInteractions(pathname) {
  useLayoutEffect(() => {
    const root = document.querySelector('.site-main');
    if (!root) return undefined;
    const cleanups = [];

    if (!motionOK) {
      // ensure everything is visible/at-rest without motion
      root.querySelectorAll(REVEAL).forEach((el) => el.classList.add('is-revealed'));
      return undefined;
    }

    /* ---- reveal + count-up + meter fill ---- */
    const targets = Array.from(root.querySelectorAll(REVEAL));
    targets.forEach((el) => {
      if (!el.hasAttribute('data-reveal')) {
        el.setAttribute('data-reveal', '');
        // stagger within sibling groups
        const sibs = el.parentElement ? Array.from(el.parentElement.children) : [el];
        const idx = Math.max(0, sibs.indexOf(el));
        el.style.transitionDelay = `${(idx % 6) * 70}ms`;
      }
    });

    const reveal = (el) => {
      el.classList.add('is-revealed');
      el.querySelectorAll('.stat__value').forEach(animateNumber);
      el.querySelectorAll('.meter__fill').forEach(animateMeter);
    };

    const supportsIO = typeof IntersectionObserver !== 'undefined';
    const io = supportsIO ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }) : null;

    const timers = [];
    targets.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const inView = r.top < window.innerHeight * 0.95 && r.bottom > 0;
      if (inView || !io) {
        // Above the fold (or no observer support): reveal directly so content is
        // guaranteed visible. Tiny delay keeps the fade-in.
        timers.push(setTimeout(() => reveal(el), 40 + (i % 6) * 60));
      } else {
        io.observe(el);
      }
    });
    cleanups.push(() => { timers.forEach(clearTimeout); if (io) io.disconnect(); });

    // Hard safety net: nothing stays hidden longer than 2.5s, ever.
    const failSafe = setTimeout(() => {
      root.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) reveal(el);
      });
    }, 2500);
    cleanups.push(() => clearTimeout(failSafe));

    /* ---- 3D parallax tilt (cards) ----
       The card rotates toward the pointer; its inner layers pop forward on Z
       (CSS translateZ), a cursor-tracked sheen sweeps the surface, and the
       elevation shadow deepens. Desktop + fine-pointer only. Buttons excluded. */
    if (isFinePointer) {
      root.querySelectorAll(TILT).forEach((el) => {
        if (el.classList.contains('btn') || el.closest('.btn')) return;
        if (!el.hasAttribute('data-tilt')) el.setAttribute('data-tilt', '');
      });
      root.querySelectorAll('[data-tilt]').forEach((el) => {
        const MAX = 10; // deg
        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width; // 0..1
          const ny = (e.clientY - r.top) / r.height;
          el.style.transform =
            `rotateY(${(nx - 0.5) * MAX}deg) rotateX(${-(ny - 0.5) * MAX}deg) translateZ(14px) scale(1.018)`;
          el.style.setProperty('--mx', `${(nx * 100).toFixed(1)}%`);
          el.style.setProperty('--my', `${(ny * 100).toFixed(1)}%`);
        };
        const onEnter = () => el.classList.add('is-tilting');
        const onLeave = () => { el.classList.remove('is-tilting'); el.style.transform = ''; };
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        cleanups.push(() => {
          el.removeEventListener('mouseenter', onEnter);
          el.removeEventListener('mousemove', onMove);
          el.removeEventListener('mouseleave', onLeave);
          el.classList.remove('is-tilting');
          el.style.transform = '';
        });
      });
    }

    /* ---- continuous scroll-progress channel ([data-scroll]) ---- */
    cleanups.push(initScrollProgress(root));

    /* ---- Obys scroll-velocity skew (content only, never buttons) ---- */
    cleanups.push(initVelocitySkew(root));

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);
}
