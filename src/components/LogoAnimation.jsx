/* Animated UGL flask logo (from the "UGL Logo Animation" design handoff).
   The motion is CSS-driven via the .ugl-stage classes in styles.css; this
   component just renders the namespaced SVG and manages speed / loop / replay.

   Props:
   - size        px (number) or any CSS length — width & height
   - tile        show the black square tile + clip to a rounded badge (logo mark)
   - loop        ambient loop after the build (glow pulse + bubble bob). default true
   - speed       playback multiplier (--speed). default 1
   - autoReplay  re-run the full build on an interval. default false
   - replayInterval  ms between replays (scaled by speed). default 7000 */
import { useEffect, useRef, useId } from 'react';
import { LOGO_SVG_INNER } from '../effects/logoMarkup.js';

export default function LogoAnimation({
  size = 40,
  tile = false,
  loop = true,
  speed = 1,
  autoReplay = false,
  replayInterval = 7000,
  className,
  style,
  ariaLabel = 'Urban Growth Labs',
}) {
  const ref = useRef(null);
  const rawId = useId();
  const uid = ('lg' + rawId).replace(/[^a-zA-Z0-9_-]/g, '');

  // namespace every id / url(#id) so multiple instances don't share defs
  const html = LOGO_SVG_INNER
    .replace(/id="([^"]+)"/g, (_, p) => `id="${uid}-${p}"`)
    .replace(/url\(#([^)]+)\)/g, (_, p) => `url(#${uid}-${p})`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--speed', String(speed));
    el.classList.toggle('no-loop', !loop);
  }, [speed, loop]);

  useEffect(() => {
    if (!autoReplay) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    const period = Math.max(2200, replayInterval / (speed || 1));
    const iv = setInterval(() => {
      el.classList.remove('play');
      // force reflow so the animation restarts
      void el.getBoundingClientRect();
      el.classList.add('play');
    }, period);
    return () => clearInterval(iv);
  }, [autoReplay, replayInterval, speed]);

  return (
    <svg
      ref={ref}
      className={['ugl-stage', 'play', tile && 'ugl-stage--tile', className].filter(Boolean).join(' ')}
      viewBox="0 0 1210.3695068 1210.3695068"
      role="img"
      aria-label={ariaLabel}
      style={{ width: size, height: size, display: 'block', ...style }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
