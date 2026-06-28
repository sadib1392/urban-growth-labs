/* Urban Growth Labs — design-system primitives (React)
   Thin components over the shared class-based styles in styles.css. Each mirrors
   the compiled design-system primitive's variants/sizes. */

import { Link } from 'react-router-dom';

const cx = (...parts) => parts.filter(Boolean).join(' ');

/* ---------------- Button ---------------- */
export function Button({
  children,
  variant = 'primary', // primary | signal | secondary | ghost
  size = 'md',         // sm | md | lg
  fullWidth = false,
  to,                  // when set, renders a router <Link>
  onClick,
  type = 'button',
  ...rest
}) {
  const className = cx('btn', `btn--${variant}`, `btn--${size}`, fullWidth && 'btn--full');
  if (to) {
    return <Link className={className} to={to} onClick={onClick} {...rest}>{children}</Link>;
  }
  return <button className={className} type={type} onClick={onClick} {...rest}>{children}</button>;
}

/* ---------------- Card ---------------- */
export function Card({
  children,
  variant = 'default', // default | glow
  padding = 'md',      // none | sm | md | lg
  interactive = false,
  glowOnHover = false,
  className,
  to,
  ...rest
}) {
  const cls = cx(
    'card',
    `card--pad-${padding}`,
    variant === 'glow' && 'card--glow',
    interactive && 'card--interactive',
    glowOnHover && 'card--glow-hover',
    className
  );
  if (to) return <Link className={cls} to={to} {...rest}>{children}</Link>;
  return <div className={cls} {...rest}>{children}</div>;
}

/* ---------------- FeatureCard (saturated grid) ----------------
   Flat saturated surface with a product fragment (KPI tile). One hue per card;
   callers cycle hues with no adjacent repeats. */
export function FeatureCard({
  variant = 'violet', // violet | brand | signal | mint | coral | blue
  eyebrow,
  title,
  desc,
  stat,
  statLabel,
  icon,
  className,
}) {
  return (
    <div className={cx('feature-card', `feature-card--${variant}`, className)}>
      {icon && <div className="feature-card__icon">{icon}</div>}
      {eyebrow && <div className="feature-card__eyebrow">{eyebrow}</div>}
      {title && <h3 className="feature-card__title">{title}</h3>}
      {desc && <p className="feature-card__desc">{desc}</p>}
      {(stat || statLabel) && (
        <div className="feature-card__fragment">
          {stat && <span className="feature-card__metric">{stat}</span>}
          {statLabel && <span className="feature-card__metric-label">{statLabel}</span>}
        </div>
      )}
    </div>
  );
}

/* ---------------- Stat ---------------- */
export function Stat({ value, label, delta, caption, size = 'md', accent = 'violet' }) {
  const dir = delta && String(delta).trim().charAt(0) === '-' ? 'down' : 'up';
  return (
    <div className={cx('stat', `stat--${size}`, `stat--${accent}`)}>
      {label && <span className="stat__label">{label}</span>}
      <div className="stat__row">
        <span className="stat__value">{value}</span>
        {delta && (
          <span className={cx('stat__delta', `stat__delta--${dir}`)}>
            <span className="arrow">{dir === 'down' ? '▼' : '▲'}</span>{delta}
          </span>
        )}
      </div>
      {caption && <span className="stat__caption">{caption}</span>}
    </div>
  );
}

/* ---------------- Meter ---------------- */
export function Meter({ value = 0, label, accent = 'brand' }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="meter">
      <div className="meter__head">
        <span className="meter__label">{label}</span>
        <span className="meter__value">{Math.round(pct)}%</span>
      </div>
      <div className="meter__track">
        <div className={cx('meter__fill', `meter__fill--${accent}`)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/* ---------------- Badge ---------------- */
export function Badge({ children, variant = 'soft', size = 'md' }) {
  return <span className={cx('badge', `badge--${variant}`, `badge--${size}`)}>{children}</span>;
}

/* ---------------- Tabs (controlled) ---------------- */
export function Tabs({ tabs = [], value, onChange }) {
  return (
    <div className="tabs">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          className={cx('tab', t.id === value && 'is-active')}
          onClick={() => onChange && onChange(t.id)}
        >
          {t.label}
          <span className="tab__bar" />
        </button>
      ))}
    </div>
  );
}

/* ---------------- Switch ---------------- */
export function Switch({ checked = false, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className={cx('switch', checked && 'is-on')}
      onClick={() => onChange && onChange(!checked)}
    >
      <span className="switch__knob" />
    </button>
  );
}

/* ---------------- Form fields ---------------- */
export function Field({ id, label, value, onChange, placeholder, type = 'text', error }) {
  return (
    <div className={cx('field', error && 'field--error')}>
      <label className="field__label" htmlFor={id}>{label}</label>
      <div className="field__control">
        <input id={id} type={type} value={value} placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)} />
      </div>
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}

export function Select({ id, label, value, onChange, children }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>{label}</label>
      <div className="select-wrap">
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>{children}</select>
        <span className="select-wrap__chevron">▼</span>
      </div>
    </div>
  );
}

export function Textarea({ id, label, value, onChange, placeholder }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>{label}</label>
      <textarea className="textarea" id={id} value={value} placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
