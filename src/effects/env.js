/* Environment capability checks for interactions. Evaluated once. */
const mq = (q) => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(q).matches : false);

export const prefersReduced = mq('(prefers-reduced-motion: reduce)');
export const isFinePointer = mq('(hover: hover) and (pointer: fine)');

/* Master switch: only run the richer motion layer on capable, motion-OK devices. */
export const motionOK = !prefersReduced;
