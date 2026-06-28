/* Text scramble on hover — obys experiment-style decode effect.
   attachScramble(el) wires an element so hovering re-decodes its label.
   Returns a cleanup function. */
import { motionOK } from './env.js';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export function attachScramble(el) {
  if (!el || !motionOK) return () => {};
  const finalText = el.textContent;
  let frame = 0;
  let raf = null;

  const run = () => {
    cancelAnimationFrame(raf);
    const queue = finalText.split('').map((ch, i) => ({
      ch,
      start: Math.floor(Math.random() * 8) + i,
      end: Math.floor(Math.random() * 8) + i + 8,
    }));
    frame = 0;
    const update = () => {
      let out = '';
      let done = 0;
      for (const q of queue) {
        if (frame >= q.end) { out += q.ch; done++; }
        else if (frame >= q.start) {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else out += q.ch;
      }
      el.textContent = out;
      if (done === queue.length) { el.textContent = finalText; return; }
      frame++;
      raf = requestAnimationFrame(update);
    };
    update();
  };

  el.addEventListener('mouseenter', run);
  return () => { cancelAnimationFrame(raf); el.removeEventListener('mouseenter', run); el.textContent = finalText; };
}
