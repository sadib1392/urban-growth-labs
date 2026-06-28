/* Custom cursor — trionn / obys-style.
   A neon dot that tracks the pointer 1:1 and a ring that lerps behind it and
   swells over interactive targets. Only mounts on fine-pointer, motion-OK
   devices; native cursor is hidden via the `has-cursor` root class. */
import { useEffect, useRef } from 'react';
import { isFinePointer, motionOK } from './env.js';

const INTERACTIVE = 'a, button, .btn, .tab, .switch, input, select, textarea, [data-cursor]';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!isFinePointer || !motionOK) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    document.documentElement.classList.add('has-cursor');

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf = null;

    const startLoop = () => { if (raf == null) raf = requestAnimationFrame(loop); };

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      startLoop(); // only run the ring lerp while/after the pointer moves
    };
    const onOver = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE)) ring.classList.add('is-hover');
    };
    const onOut = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE)) ring.classList.remove('is-hover');
    };
    const onDown = () => ring.classList.add('is-down');
    const onUp = () => ring.classList.remove('is-down');

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      // stop once the ring has caught up — no perpetual per-frame compositing
      if (Math.abs(mx - rx) < 0.1 && Math.abs(my - ry) < 0.1) { raf = null; return; }
      raf = requestAnimationFrame(loop);
    }
    // place at the start position without spinning the loop forever
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, true);
    document.addEventListener('mouseout', onOut, true);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver, true);
      document.removeEventListener('mouseout', onOut, true);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  if (!isFinePointer || !motionOK) return null;
  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
